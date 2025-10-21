import { redirect } from 'next/navigation';
import { getCurrentUser } from '@/lib/session';
import { prisma } from '@/lib/prisma';
import DashboardLayout from '@/components/admin/DashboardLayout';
import Link from 'next/link';

export default async function FranchiseeBranchesPage() {
  const user = await getCurrentUser();
  
  if (!user || user.role !== 'FRANCHISEE' || !user.franchiseeId) {
    redirect('/admin/login');
  }

  // Obtener sucursales del franquiciatario
  const branches = await prisma.branch.findMany({
    where: {
      franchiseeId: user.franchiseeId,
      deletedAt: null,
    },
    include: {
      employees: {
        where: { deletedAt: null },
      },
    },
    orderBy: { createdAt: 'desc' },
  });

  return (
    <DashboardLayout userEmail={user.email} userRole={user.role}>
      <div>
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Mis Sucursales</h2>
            <p className="text-gray-600">Gestiona tus ubicaciones y personal</p>
          </div>
          <Link
            href="/franchisee/dashboard/branches/new"
            className="px-6 py-3 bg-sb-green-700 text-white rounded-lg font-semibold hover:bg-sb-green-600 transition-colors flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Nueva Sucursal
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 border-2 border-green-200">
            <p className="text-3xl font-bold text-gray-900 mb-1">{branches.length}</p>
            <p className="text-sm font-medium text-gray-600">Total Sucursales</p>
          </div>
          <div className="bg-white rounded-xl p-6 border-2 border-blue-200">
            <p className="text-3xl font-bold text-gray-900 mb-1">
              {branches.filter(b => b.isActive).length}
            </p>
            <p className="text-sm font-medium text-gray-600">Activas</p>
          </div>
          <div className="bg-white rounded-xl p-6 border-2 border-purple-200">
            <p className="text-3xl font-bold text-gray-900 mb-1">
              {branches.reduce((acc, b) => acc + b.employees.length, 0)}
            </p>
            <p className="text-sm font-medium text-gray-600">Total Empleados</p>
          </div>
        </div>

        {/* Branches List */}
        <div className="space-y-6">
          {branches.map((branch) => (
            <div
              key={branch.id}
              className="bg-white rounded-2xl shadow-sm p-6 border border-gray-200 hover:border-sb-green-300 transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{branch.name}</h3>
                    {branch.isActive ? (
                      <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">
                        Activa
                      </span>
                    ) : (
                      <span className="px-3 py-1 bg-red-100 text-red-800 text-xs font-semibold rounded-full">
                        Inactiva
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                    {branch.address}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                {/* Manager */}
                <div className="p-4 bg-blue-50 rounded-xl">
                  <div className="flex items-center gap-2 mb-2">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span className="text-xs font-semibold text-blue-900">GERENTE</span>
                  </div>
                  <p className="font-bold text-gray-900">{branch.managerName || 'No asignado'}</p>
                  {branch.contactPhone && (
                    <p className="text-sm text-gray-600 mt-1">{branch.contactPhone}</p>
                  )}
                </div>

                {/* Employees */}
                <div className="p-4 bg-purple-50 rounded-xl">
                  <div className="flex items-center gap-2 mb-2">
                    <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    <span className="text-xs font-semibold text-purple-900">EMPLEADOS</span>
                  </div>
                  <p className="font-bold text-gray-900">{branch.employees.length} empleados</p>
                  <p className="text-sm text-gray-600 mt-1">
                    {branch.employees.filter(e => e.isActive).length} activos
                  </p>
                </div>

                {/* Coordinates */}
                {(branch.latitude && branch.longitude) && (
                  <div className="p-4 bg-green-50 rounded-xl">
                    <div className="flex items-center gap-2 mb-2">
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                      </svg>
                      <span className="text-xs font-semibold text-green-900">UBICACIÓN</span>
                    </div>
                    <p className="font-bold text-gray-900 text-sm">
                      {Number(branch.latitude).toFixed(4)}, {Number(branch.longitude).toFixed(4)}
                    </p>
                    <a
                      href={`https://maps.google.com/?q=${branch.latitude},${branch.longitude}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-green-600 hover:text-green-700 font-medium mt-1 inline-block"
                    >
                      Ver en mapa →
                    </a>
                  </div>
                )}
              </div>

              {/* Actions */}
              <div className="flex gap-3 pt-4 border-t border-gray-200">
                <Link
                  href={`/franchisee/dashboard/branches/${branch.id}`}
                  className="px-6 py-2 bg-sb-green-700 text-white rounded-lg font-medium hover:bg-sb-green-600 transition-colors"
                >
                  Ver Detalles
                </Link>
                <Link
                  href={`/franchisee/dashboard/branches/${branch.id}/edit`}
                  className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors"
                >
                  Editar
                </Link>
                <Link
                  href={`/franchisee/dashboard/branches/${branch.id}/employees`}
                  className="px-6 py-2 bg-blue-100 text-blue-700 rounded-lg font-medium hover:bg-blue-200 transition-colors"
                >
                  Gestionar Empleados
                </Link>
              </div>
            </div>
          ))}
        </div>

        {branches.length === 0 && (
          <div className="bg-white rounded-2xl shadow-sm p-12 text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">No tienes sucursales</h3>
            <p className="text-gray-600 mb-6">Comienza agregando tu primera sucursal</p>
            <Link
              href="/franchisee/dashboard/branches/new"
              className="inline-flex items-center gap-2 px-6 py-3 bg-sb-green-700 text-white rounded-lg font-semibold hover:bg-sb-green-600 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Agregar Sucursal
            </Link>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
