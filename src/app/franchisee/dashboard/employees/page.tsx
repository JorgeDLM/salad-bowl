import { redirect } from 'next/navigation';
import { getCurrentUser } from '@/lib/session';
import { prisma } from '@/lib/prisma';
import DashboardLayout from '@/components/admin/DashboardLayout';
import Link from 'next/link';

export default async function FranchiseeEmployeesPage() {
  const user = await getCurrentUser();
  
  if (!user || user.role !== 'FRANCHISEE' || !user.franchiseeId) {
    redirect('/admin/login');
  }

  // Obtener empleados del franquiciatario
  const employees = await prisma.user.findMany({
    where: {
      franchiseeId: user.franchiseeId,
      role: 'EMPLOYEE',
      deletedAt: null,
    },
    include: {
      branch: true,
    },
    orderBy: { createdAt: 'desc' },
  });

  // Obtener sucursales para el filtro
  const branches = await prisma.branch.findMany({
    where: {
      franchiseeId: user.franchiseeId,
      deletedAt: null,
    },
    orderBy: { name: 'asc' },
  });

  return (
    <DashboardLayout userEmail={user.email} userRole={user.role}>
      <div>
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Empleados</h2>
            <p className="text-gray-600">Gestiona el personal de tus sucursales</p>
          </div>
          <Link
            href="/franchisee/dashboard/employees/new"
            className="px-6 py-3 bg-sb-green-700 text-white rounded-lg font-semibold hover:bg-sb-green-600 transition-colors flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Nuevo Empleado
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 border-2 border-blue-200">
            <p className="text-3xl font-bold text-gray-900 mb-1">{employees.length}</p>
            <p className="text-sm font-medium text-gray-600">Total Empleados</p>
          </div>
          <div className="bg-white rounded-xl p-6 border-2 border-green-200">
            <p className="text-3xl font-bold text-gray-900 mb-1">
              {employees.filter(e => e.isActive).length}
            </p>
            <p className="text-sm font-medium text-gray-600">Activos</p>
          </div>
          <div className="bg-white rounded-xl p-6 border-2 border-red-200">
            <p className="text-3xl font-bold text-gray-900 mb-1">
              {employees.filter(e => !e.isActive).length}
            </p>
            <p className="text-sm font-medium text-gray-600">Inactivos</p>
          </div>
          <div className="bg-white rounded-xl p-6 border-2 border-purple-200">
            <p className="text-3xl font-bold text-gray-900 mb-1">{branches.length}</p>
            <p className="text-sm font-medium text-gray-600">Sucursales</p>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl p-4 mb-6 flex items-center gap-4 overflow-x-auto">
          <span className="text-sm font-semibold text-gray-700 whitespace-nowrap">Sucursal:</span>
          <button className="px-4 py-2 bg-sb-green-700 text-white rounded-lg text-sm font-medium">
            Todas
          </button>
          {branches.map((branch) => (
            <button
              key={branch.id}
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors whitespace-nowrap"
            >
              {branch.name}
            </button>
          ))}
        </div>

        {/* Employees Table */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Empleado
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Sucursal
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Estado
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Fecha Ingreso
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Acciones
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {employees.map((employee) => (
                  <tr key={employee.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                          <span className="text-blue-700 font-bold text-sm">
                            {(employee.username || employee.email).charAt(0).toUpperCase()}
                          </span>
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {employee.username || 'Sin nombre'}
                          </div>
                          <div className="text-sm text-gray-500">ID: {employee.id}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{employee.email}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {employee.branch?.name || 'Sin asignar'}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {employee.isActive ? (
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          Activo
                        </span>
                      ) : (
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                          Inactivo
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(employee.createdAt).toLocaleDateString('es-MX')}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button className="text-sb-green-700 hover:text-sb-green-600 mr-4">
                        Ver
                      </button>
                      <button className="text-blue-600 hover:text-blue-500 mr-4">
                        Editar
                      </button>
                      <button className="text-red-600 hover:text-red-500">
                        {employee.isActive ? 'Desactivar' : 'Activar'}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {employees.length === 0 && (
          <div className="bg-white rounded-2xl shadow-sm p-12 text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">No tienes empleados</h3>
            <p className="text-gray-600 mb-6">Comienza agregando tu primer empleado</p>
            <Link
              href="/franchisee/dashboard/employees/new"
              className="inline-flex items-center gap-2 px-6 py-3 bg-sb-green-700 text-white rounded-lg font-semibold hover:bg-sb-green-600 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Agregar Empleado
            </Link>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
