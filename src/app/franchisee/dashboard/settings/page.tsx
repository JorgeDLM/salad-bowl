import { redirect } from 'next/navigation';
import { getCurrentUser } from '@/lib/session';
import { prisma } from '@/lib/prisma';
import DashboardLayout from '@/components/admin/DashboardLayout';
import Link from 'next/link';

export default async function FranchiseeSettingsPage() {
  const user = await getCurrentUser();
  
  if (!user || user.role !== 'FRANCHISEE' || !user.franchiseeId) {
    redirect('/admin/login');
  }

  // Obtener datos del franquiciatario
  const franchisee = await prisma.franchisee.findUnique({
    where: { id: user.franchiseeId },
    include: {
      branches: {
        where: { deletedAt: null },
        orderBy: { name: 'asc' },
      },
      users: {
        where: { 
          deletedAt: null, 
          role: 'EMPLOYEE',
        },
        include: {
          branch: true,
        },
        orderBy: { email: 'asc' },
      },
    },
  });

  if (!franchisee) {
    redirect('/admin/login');
  }

  return (
    <DashboardLayout userEmail={user.email} userRole={user.role}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Configuración</h1>
          <p className="text-gray-600">Gestiona tus sucursales y empleados</p>
        </div>

        {/* Sucursales Section */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-1">Mis Sucursales</h2>
              <p className="text-gray-600 text-sm">
                {franchisee.branches.length} {franchisee.branches.length === 1 ? 'sucursal' : 'sucursales'} asignadas
              </p>
            </div>
          </div>
          
          <div className="mb-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
            <p className="text-sm text-blue-800">
              <span className="font-semibold">Nota:</span> La gestión de horarios, teléfonos y otros detalles de las sucursales es realizada por el administrador. Si necesitas actualizar información, contacta al equipo administrativo.
            </p>
          </div>

          {franchisee.branches.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {franchisee.branches.map((branch) => (
                <div
                  key={branch.id}
                  className="border-2 border-gray-200 rounded-xl p-6 hover:border-sb-green-300 transition-colors"
                >
                  <div className="flex items-start gap-3 mb-4">
                    <div className="p-2 bg-sb-green-100 rounded-lg">
                      <svg className="w-5 h-5 text-sb-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 mb-1">{branch.name}</h3>
                      {branch.isActive ? (
                        <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">
                          Activa
                        </span>
                      ) : (
                        <span className="px-2 py-1 bg-red-100 text-red-800 text-xs font-semibold rounded-full">
                          Inactiva
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 mb-3">{branch.address}</p>

                  {branch.managerName && (
                    <div className="flex items-center gap-2 text-sm text-gray-700 mb-2">
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <span>{branch.managerName}</span>
                    </div>
                  )}

                  {branch.contactPhone && (
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span>{branch.contactPhone}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-gray-50 rounded-xl">
              <svg className="w-12 h-12 text-gray-400 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              </svg>
              <p className="text-gray-600">No tienes sucursales asignadas</p>
            </div>
          )}
        </div>

        {/* Empleados Section */}
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-1">Empleados</h2>
              <p className="text-gray-600 text-sm">
                {franchisee.users.length} {franchisee.users.length === 1 ? 'empleado' : 'empleados'} en total
              </p>
            </div>
          </div>
          
          <div className="mb-6 p-4 bg-sb-green-50 border-l-4 border-sb-green-700 rounded">
            <p className="text-sm text-sb-green-800">
              <span className="font-semibold">Próximamente:</span> Podrás agregar, editar y gestionar empleados directamente desde aquí. Por ahora, la gestión de empleados se realiza a través del administrador.
            </p>
          </div>

          {franchisee.users.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Empleado
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Sucursal
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Estado
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {franchisee.users.map((employee) => (
                    <tr key={employee.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <div>
                          <p className="font-medium text-gray-900">{employee.email}</p>
                          {employee.username && (
                            <p className="text-sm text-gray-500">@{employee.username}</p>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        {employee.branch ? (
                          <div className="flex items-center gap-2">
                            <svg className="w-4 h-4 text-sb-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            </svg>
                            <span className="text-gray-700">{employee.branch.name}</span>
                          </div>
                        ) : (
                          <span className="text-gray-400 text-sm">Sin asignar</span>
                        )}
                      </td>
                      <td className="px-6 py-4">
                        {employee.isActive ? (
                          <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">
                            Activo
                          </span>
                        ) : (
                          <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs font-semibold rounded-full">
                            Inactivo
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-center py-12 bg-gray-50 rounded-xl">
              <svg className="w-12 h-12 text-gray-400 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              <p className="text-gray-600">No hay empleados registrados</p>
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}
