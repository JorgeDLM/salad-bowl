import { redirect } from 'next/navigation';
import { getCurrentUser } from '@/lib/session';
import { prisma } from '@/lib/prisma';
import DashboardLayout from '@/components/admin/DashboardLayout';
import Link from 'next/link';

export default async function UsersPage() {
  const user = await getCurrentUser();
  
  if (!user || user.role !== 'ADMIN') {
    redirect('/admin/login');
  }

  // Obtener todos los usuarios
  const users = await prisma.user.findMany({
    where: { deletedAt: null },
    include: {
      franchisee: true,
      branch: true,
    },
    orderBy: { createdAt: 'desc' },
  });

  return (
    <DashboardLayout userEmail={user.email} userRole={user.role}>
      <div>
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Gestión de Usuarios</h2>
            <p className="text-gray-600">Administra todos los usuarios del sistema</p>
          </div>
          <Link
            href="/admin/dashboard/users/new"
            className="px-6 py-3 bg-sb-green-700 text-white rounded-lg font-semibold hover:bg-sb-green-600 transition-colors flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Nuevo Usuario
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Total Usuarios"
            value={users.length}
            color="blue"
          />
          <StatCard
            title="Administradores"
            value={users.filter(u => u.role === 'ADMIN').length}
            color="purple"
          />
          <StatCard
            title="Franquiciatarios"
            value={users.filter(u => u.role === 'FRANCHISEE').length}
            color="green"
          />
          <StatCard
            title="Empleados"
            value={users.filter(u => u.role === 'EMPLOYEE').length}
            color="orange"
          />
        </div>

        {/* Users Table */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Usuario
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Rol
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Franquicia
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Estado
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Acciones
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {users.map((u) => (
                  <tr key={u.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-sb-green-100 rounded-full flex items-center justify-center">
                          <span className="text-sb-green-700 font-bold text-sm">
                            {u.email.charAt(0).toUpperCase()}
                          </span>
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {u.username || 'Sin nombre'}
                          </div>
                          <div className="text-sm text-gray-500">ID: {u.id}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{u.email}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <RoleBadge role={u.role} />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {u.franchisee?.name || '-'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {u.isActive ? (
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          Activo
                        </span>
                      ) : (
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                          Inactivo
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button className="text-sb-green-700 hover:text-sb-green-600 mr-4">
                        Editar
                      </button>
                      <button className="text-red-600 hover:text-red-500">
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

function StatCard({ title, value, color }: {
  title: string;
  value: number;
  color: 'blue' | 'green' | 'purple' | 'orange';
}) {
  const colors = {
    blue: 'bg-blue-50 border-blue-200',
    green: 'bg-green-50 border-green-200',
    purple: 'bg-purple-50 border-purple-200',
    orange: 'bg-orange-50 border-orange-200',
  };

  return (
    <div className={`rounded-xl p-6 border-2 ${colors[color]}`}>
      <p className="text-3xl font-bold text-gray-900 mb-1">{value}</p>
      <p className="text-sm font-medium text-gray-600">{title}</p>
    </div>
  );
}

function RoleBadge({ role }: { role: string }) {
  const styles = {
    ADMIN: 'bg-purple-100 text-purple-800',
    FRANCHISEE: 'bg-green-100 text-green-800',
    EMPLOYEE: 'bg-blue-100 text-blue-800',
  };

  const labels = {
    ADMIN: 'Administrador',
    FRANCHISEE: 'Franquiciatario',
    EMPLOYEE: 'Empleado',
  };

  return (
    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${styles[role as keyof typeof styles]}`}>
      {labels[role as keyof typeof labels] || role}
    </span>
  );
}
