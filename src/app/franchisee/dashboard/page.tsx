import { redirect } from 'next/navigation';
import { getCurrentUser } from '@/lib/session';
import { prisma } from '@/lib/prisma';
import DashboardLayout from '@/components/admin/DashboardLayout';
import Link from 'next/link';

export default async function FranchiseeDashboardPage() {
  const user = await getCurrentUser();
  
  if (!user || user.role !== 'FRANCHISEE') {
    redirect('/admin/login');
  }

  // Obtener datos del franquiciatario
  const franchisee = await prisma.franchisee.findUnique({
    where: { id: user.franchiseeId! },
    include: {
      branches: {
        where: { deletedAt: null, isActive: true },
      },
      users: {
        where: { deletedAt: null, isActive: true, role: 'EMPLOYEE' },
      },
    },
  });

  if (!franchisee) {
    redirect('/admin/login');
  }

  const branchesCount = franchisee.branches.length;
  const employeesCount = franchisee.users.length;

  return (
    <DashboardLayout userEmail={user.email} userRole={user.role}>
      <div>
        {/* Welcome */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Bienvenido, {franchisee.name}
          </h2>
          <p className="text-gray-600">
            Aquí puedes gestionar tus sucursales y empleados
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <StatCard
            title="Mis Sucursales"
            value={branchesCount}
            icon={
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              </svg>
            }
            color="green"
          />
          <StatCard
            title="Empleados"
            value={employeesCount}
            icon={
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            }
            color="blue"
          />
          <StatCard
            title="Documentos"
            value={0}
            icon={
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            }
            color="purple"
          />
        </div>

        {/* Sucursales */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Mis Sucursales</h2>
            <Link
              href="/franchisee/dashboard/branches"
              className="text-sb-green-700 hover:text-sb-green-600 font-semibold text-sm"
            >
              Ver todas →
            </Link>
          </div>

          {franchisee.branches.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {franchisee.branches.slice(0, 3).map((branch) => (
                <div
                  key={branch.id}
                  className="p-4 border border-gray-200 rounded-xl hover:border-sb-green-300 transition-colors"
                >
                  <h3 className="font-bold text-gray-900 mb-2">{branch.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{branch.address}</p>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span>{branch.managerName || 'Sin gerente'}</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600 text-center py-8">
              No tienes sucursales registradas aún
            </p>
          )}
        </div>

        {/* Información de Contacto */}
        <div className="bg-gradient-to-br from-sb-green-50 to-white rounded-2xl shadow-sm p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Información de Contacto</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-600 mb-1">Contacto Principal</p>
              <p className="font-semibold text-gray-900">{franchisee.contactName || 'No especificado'}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Teléfono</p>
              <p className="font-semibold text-gray-900">{franchisee.contactPhone || 'No especificado'}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Email</p>
              <p className="font-semibold text-gray-900">{franchisee.contactEmail || 'No especificado'}</p>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

function StatCard({ title, value, icon, color }: {
  title: string;
  value: number;
  icon: React.ReactNode;
  color: 'blue' | 'green' | 'purple' | 'orange';
}) {
  const colors = {
    blue: 'bg-blue-50 text-blue-600',
    green: 'bg-green-50 text-green-600',
    purple: 'bg-purple-50 text-purple-600',
    orange: 'bg-orange-50 text-orange-600',
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 rounded-lg ${colors[color]}`}>
          {icon}
        </div>
      </div>
      <p className="text-3xl font-bold text-gray-900 mb-1">{value}</p>
      <p className="text-sm font-medium text-gray-600">{title}</p>
    </div>
  );
}
