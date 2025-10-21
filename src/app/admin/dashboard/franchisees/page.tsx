import { redirect } from 'next/navigation';
import { getCurrentUser } from '@/lib/session';
import { prisma } from '@/lib/prisma';
import DashboardLayout from '@/components/admin/DashboardLayout';
import Link from 'next/link';

export default async function FranchiseesPage() {
  const user = await getCurrentUser();
  
  if (!user || user.role !== 'ADMIN') {
    redirect('/admin/login');
  }

  // Obtener todos los franquiciatarios
  const franchisees = await prisma.franchisee.findMany({
    where: { deletedAt: null },
    include: {
      branches: {
        where: { deletedAt: null },
      },
      users: {
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
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Franquiciatarios</h2>
            <p className="text-gray-600">Administra todas las franquicias del sistema</p>
          </div>
          <Link
            href="/admin/dashboard/franchisees/new"
            className="px-6 py-3 bg-sb-green-700 text-white rounded-lg font-semibold hover:bg-sb-green-600 transition-colors flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Nueva Franquicia
          </Link>
        </div>

        {/* Franchisees Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {franchisees.map((franchisee) => (
            <div
              key={franchisee.id}
              className="bg-white rounded-2xl shadow-sm p-6 border border-gray-200 hover:border-sb-green-300 transition-all hover:shadow-lg"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {franchisee.name}
                  </h3>
                  {franchisee.isActive ? (
                    <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">
                      Activo
                    </span>
                  ) : (
                    <span className="px-2 py-1 bg-red-100 text-red-800 text-xs font-semibold rounded-full">
                      Inactivo
                    </span>
                  )}
                </div>
                <div className="p-2 bg-sb-green-100 rounded-lg">
                  <svg className="w-6 h-6 text-sb-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <p className="text-2xl font-bold text-blue-900">{franchisee.branches.length}</p>
                  <p className="text-xs text-blue-600 font-medium">Sucursales</p>
                </div>
                <div className="p-3 bg-purple-50 rounded-lg">
                  <p className="text-2xl font-bold text-purple-900">{franchisee.users.length}</p>
                  <p className="text-xs text-purple-600 font-medium">Usuarios</p>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-2 mb-4">
                {franchisee.contactName && (
                  <div className="flex items-center gap-2 text-sm">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span className="text-gray-600">{franchisee.contactName}</span>
                  </div>
                )}
                {franchisee.contactPhone && (
                  <div className="flex items-center gap-2 text-sm">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-gray-600">{franchisee.contactPhone}</span>
                  </div>
                )}
                {franchisee.contactEmail && (
                  <div className="flex items-center gap-2 text-sm">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-gray-600 truncate">{franchisee.contactEmail}</span>
                  </div>
                )}
              </div>

              {/* Actions */}
              <div className="flex gap-2 pt-4 border-t border-gray-200">
                <Link
                  href={`/admin/dashboard/franchisees/${franchisee.id}`}
                  className="flex-1 px-4 py-2 bg-sb-green-700 text-white text-center rounded-lg font-medium hover:bg-sb-green-600 transition-colors text-sm"
                >
                  Ver Detalles
                </Link>
                <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors text-sm">
                  Editar
                </button>
              </div>
            </div>
          ))}
        </div>

        {franchisees.length === 0 && (
          <div className="bg-white rounded-2xl shadow-sm p-12 text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">No hay franquiciatarios</h3>
            <p className="text-gray-600 mb-6">Comienza agregando tu primer franquiciatario</p>
            <Link
              href="/admin/dashboard/franchisees/new"
              className="inline-flex items-center gap-2 px-6 py-3 bg-sb-green-700 text-white rounded-lg font-semibold hover:bg-sb-green-600 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Agregar Franquiciatario
            </Link>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
