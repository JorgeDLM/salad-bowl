import { redirect } from 'next/navigation';
import { getCurrentUser } from '@/lib/session';
import { prisma } from '@/lib/prisma';
import DashboardLayout from '@/components/admin/DashboardLayout';
import FranchiseeForm from '@/components/admin/FranchiseeForm';
import Link from 'next/link';

export default async function FranchiseeDetailPage({ params }: { params: { id: string } }) {
  const user = await getCurrentUser();
  
  if (!user || user.role !== 'ADMIN') {
    redirect('/admin/login');
  }

  const franchisee = await prisma.franchisee.findUnique({
    where: { 
      id: parseInt(params.id),
      deletedAt: null,
    },
    include: {
      branches: {
        where: { deletedAt: null },
      },
      users: {
        where: { deletedAt: null },
      },
    },
  });

  if (!franchisee) {
    redirect('/admin/dashboard/franchisees');
  }

  return (
    <DashboardLayout userEmail={user.email} userRole={user.role}>
      <div className="p-8">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link 
            href="/admin/dashboard/franchisees"
            className="text-sb-green-700 hover:text-sb-green-600 font-medium"
          >
            ← Volver a Franquiciatarios
          </Link>
        </div>

        {/* Información adicional */}
        <div className="grid grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Sucursales</h3>
            <p className="text-3xl font-bold text-sb-green-700">{franchisee.branches.length}</p>
            <p className="text-sm text-gray-600 mt-1">Sucursales asignadas</p>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Usuarios</h3>
            <p className="text-3xl font-bold text-sb-green-700">{franchisee.users.length}</p>
            <p className="text-sm text-gray-600 mt-1">Usuarios del franquiciatario</p>
          </div>
        </div>

        {/* Formulario de edición */}
        <FranchiseeForm franchisee={franchisee} mode="edit" />

        {/* Lista de Sucursales */}
        {franchisee.branches.length > 0 && (
          <div className="mt-8 bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Sucursales de este Franquiciatario</h3>
            <div className="space-y-2">
              {franchisee.branches.map((branch) => (
                <div key={branch.id} className="flex items-center justify-between py-2 border-b last:border-0">
                  <div>
                    <p className="font-medium text-gray-900">{branch.name}</p>
                    <p className="text-sm text-gray-600">{branch.address}</p>
                  </div>
                  <Link
                    href={`/admin/dashboard/branches/${branch.id}`}
                    className="text-sb-green-700 hover:text-sb-green-600 text-sm font-medium"
                  >
                    Ver detalles →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
