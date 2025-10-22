import { redirect } from 'next/navigation';
import { getCurrentUser } from '@/lib/session';
import { prisma } from '@/lib/prisma';
import DashboardLayout from '@/components/admin/DashboardLayout';
import Link from 'next/link';

export default async function BranchesPage() {
  const user = await getCurrentUser();
  
  if (!user || user.role !== 'ADMIN') {
    redirect('/admin/login');
  }

  // Obtener todas las sucursales
  const branches = await prisma.branch.findMany({
    where: { deletedAt: null },
    include: {
      franchisee: true,
    },
    orderBy: { createdAt: 'desc' },
  });

  // Agrupar sucursales por propietario
  const adminBranches = branches.filter((b: any) => !b.franchiseeId);
  const franchiseeBranches = branches.filter((b: any) => b.franchiseeId);
  
  // Agrupar por franquiciatario
  type FranchiseeGroup = {
    franchisee: any;
    branches: any[];
  };
  
  const branchesByFranchisee = franchiseeBranches.reduce((acc: Record<number, FranchiseeGroup>, branch: any) => {
    const franchiseeId = branch.franchiseeId!;
    if (!acc[franchiseeId]) {
      acc[franchiseeId] = {
        franchisee: branch.franchisee!,
        branches: []
      };
    }
    acc[franchiseeId].branches.push(branch);
    return acc;
  }, {} as Record<number, FranchiseeGroup>);

  return (
    <DashboardLayout userEmail={user.email} userRole={user.role}>
      <div>
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Sucursales</h2>
            <p className="text-gray-600">Administra todas las sucursales del sistema</p>
          </div>
          <Link
            href="/admin/dashboard/branches/new"
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
          <div className="bg-white rounded-xl p-6 border-2 border-blue-200">
            <p className="text-3xl font-bold text-gray-900 mb-1">{branches.length}</p>
            <p className="text-sm font-medium text-gray-600">Total Sucursales</p>
          </div>
          <div className="bg-white rounded-xl p-6 border-2 border-green-200">
            <p className="text-3xl font-bold text-gray-900 mb-1">
              {branches.filter(b => b.isActive).length}
            </p>
            <p className="text-sm font-medium text-gray-600">Activas</p>
          </div>
          <div className="bg-white rounded-xl p-6 border-2 border-red-200">
            <p className="text-3xl font-bold text-gray-900 mb-1">
              {branches.filter(b => !b.isActive).length}
            </p>
            <p className="text-sm font-medium text-gray-600">Inactivas</p>
          </div>
        </div>

        {/* Sucursales del Admin */}
        {adminBranches.length > 0 && (
          <div className="mb-12">
            <div className="mb-6 pb-3 border-b-2 border-sb-green-200">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                <div className="w-10 h-10 bg-sb-green-700 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                Corporativas (Admin)
                <span className="text-sm font-medium text-gray-500">({adminBranches.length})</span>
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {adminBranches.map((branch) => (
                <div
                  key={branch.id}
                  className="bg-white rounded-2xl shadow-sm p-6 border border-gray-200 hover:border-sb-green-300 transition-all hover:shadow-lg"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-1">
                        {branch.name}
                      </h3>
                      <p className="text-sm text-sb-green-700 font-medium">
                        Corporativa (Admin)
                      </p>
                    </div>
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

                  {/* Address */}
                  <div className="mb-4">
                    <div className="flex items-start gap-2 text-sm text-gray-600">
                      <svg className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      </svg>
                      <span>{branch.address}</span>
                    </div>
                  </div>

                  {/* Manager Info */}
                  {branch.managerName && (
                    <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                      <p className="text-xs text-gray-500 mb-1">Gerente</p>
                      <p className="text-sm font-semibold text-gray-900">{branch.managerName}</p>
                      {branch.contactPhone && (
                        <p className="text-xs text-gray-600 mt-1">{branch.contactPhone}</p>
                      )}
                    </div>
                  )}

                  {/* Actions */}
                  <div className="flex gap-2 pt-4 border-t border-gray-200">
                    <Link
                      href={`/admin/dashboard/branches/${branch.id}`}
                      className="flex-1 px-4 py-2 bg-sb-green-700 text-white text-center rounded-lg font-medium hover:bg-sb-green-600 transition-colors text-sm"
                    >
                      Ver Detalles / Editar
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Sucursales por Franquiciatario */}
        {(Object.entries(branchesByFranchisee) as [string, FranchiseeGroup][]).map(([franchiseeId, data]) => (
          <div key={franchiseeId} className="mb-12">
            <div className="mb-6 pb-3 border-b-2 border-sb-teal-200">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                <div className="w-10 h-10 bg-sb-teal-600 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                {data.franchisee.name}
                <span className="text-sm font-medium text-gray-500">({data.branches.length})</span>
              </h3>
              <p className="text-sm text-gray-600 ml-13 mt-1">{data.franchisee.email}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.branches.map((branch) => (
                <div
                  key={branch.id}
                  className="bg-white rounded-2xl shadow-sm p-6 border border-gray-200 hover:border-sb-teal-300 transition-all hover:shadow-lg"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-1">
                        {branch.name}
                      </h3>
                      <p className="text-sm text-sb-teal-700 font-medium">
                        {data.franchisee.name}
                      </p>
                    </div>
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

                  {/* Address */}
                  <div className="mb-4">
                    <div className="flex items-start gap-2 text-sm text-gray-600">
                      <svg className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      </svg>
                      <span>{branch.address}</span>
                    </div>
                  </div>

                  {/* Manager Info */}
                  {branch.managerName && (
                    <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                      <p className="text-xs text-gray-500 mb-1">Gerente</p>
                      <p className="text-sm font-semibold text-gray-900">{branch.managerName}</p>
                      {branch.contactPhone && (
                        <p className="text-xs text-gray-600 mt-1">{branch.contactPhone}</p>
                      )}
                    </div>
                  )}

                  {/* Actions */}
                  <div className="flex gap-2 pt-4 border-t border-gray-200">
                    <Link
                      href={`/admin/dashboard/branches/${branch.id}`}
                      className="flex-1 px-4 py-2 bg-sb-teal-600 text-white text-center rounded-lg font-medium hover:bg-sb-teal-500 transition-colors text-sm"
                    >
                      Ver Detalles / Editar
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {branches.length === 0 && (
          <div className="bg-white rounded-2xl shadow-sm p-12 text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">No hay sucursales</h3>
            <p className="text-gray-600 mb-6">Comienza agregando la primera sucursal</p>
            <Link
              href="/admin/dashboard/branches/new"
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
