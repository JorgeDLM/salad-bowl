import { redirect } from 'next/navigation';
import { getCurrentUser } from '@/lib/session';
import { prisma } from '@/lib/prisma';
import DashboardLayout from '@/components/admin/DashboardLayout';
import BranchForm from '@/components/admin/BranchForm';
import Link from 'next/link';

export default async function BranchDetailPage({ params }: { params: { id: string } }) {
  const user = await getCurrentUser();
  
  if (!user || user.role !== 'ADMIN') {
    redirect('/admin/login');
  }

  const branch = await prisma.branch.findUnique({
    where: { 
      id: parseInt(params.id),
      deletedAt: null,
    },
    include: {
      franchisee: true,
      employees: {
        where: { deletedAt: null },
      },
    },
  });

  if (!branch) {
    redirect('/admin/dashboard/branches');
  }

  // Obtener todos los franquiciatarios para el selector
  const franchisees = await prisma.franchisee.findMany({
    where: { 
      deletedAt: null,
      isActive: true,
    },
    orderBy: { name: 'asc' },
  });

  return (
    <DashboardLayout userEmail={user.email} userRole={user.role}>
      <div className="p-8">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link 
            href="/admin/dashboard/branches"
            className="text-sb-green-700 hover:text-sb-green-600 font-medium"
          >
            ← Volver a Sucursales
          </Link>
        </div>

        {/* Información adicional */}
        <div className="grid grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Tipo</h3>
            <p className="text-xl font-bold text-sb-green-700">
              {branch.franchiseeId ? 'Franquicia' : 'Corporativa'}
            </p>
            {branch.franchisee && (
              <p className="text-sm text-gray-600 mt-1">{branch.franchisee.name}</p>
            )}
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Empleados</h3>
            <p className="text-3xl font-bold text-sb-green-700">{branch.employees.length}</p>
            <p className="text-sm text-gray-600 mt-1">Empleados asignados</p>
          </div>
        </div>

        {/* Formulario de edición */}
        <BranchForm branch={branch} franchisees={franchisees} mode="edit" />

        {/* Lista de Empleados */}
        {branch.employees.length > 0 && (
          <div className="mt-8 bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Empleados de esta Sucursal</h3>
            <div className="space-y-2">
              {branch.employees.map((employee) => (
                <div key={employee.id} className="flex items-center justify-between py-2 border-b last:border-0">
                  <div>
                    <p className="font-medium text-gray-900">{employee.email}</p>
                    <p className="text-sm text-gray-600">{employee.role}</p>
                  </div>
                  <Link
                    href={`/admin/dashboard/users/${employee.id}`}
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
