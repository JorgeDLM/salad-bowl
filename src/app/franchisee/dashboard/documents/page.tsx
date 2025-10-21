import { redirect } from 'next/navigation';
import { getCurrentUser } from '@/lib/session';
import { prisma } from '@/lib/prisma';
import DashboardLayout from '@/components/admin/DashboardLayout';
import Link from 'next/link';

export default async function FranchiseeDocumentsPage() {
  const user = await getCurrentUser();
  
  if (!user || user.role !== 'FRANCHISEE' || !user.franchiseeId) {
    redirect('/admin/login');
  }

  // Obtener documentos globales y específicos de la franquicia
  const documents = await prisma.guidelineDocument.findMany({
    where: {
      deletedAt: null,
      OR: [
        { franchiseeId: null, visibility: 'ALL' },
        { franchiseeId: null, visibility: 'FRANCHISEE' },
        { franchiseeId: user.franchiseeId },
      ],
    },
    include: {
      category: true,
    },
    orderBy: { createdAt: 'desc' },
  });

  const categories = await prisma.guidelineCategory.findMany({
    where: { deletedAt: null },
    orderBy: { position: 'asc' },
  });

  return (
    <DashboardLayout userEmail={user.email} userRole={user.role}>
      <div>
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Documentos y Guías</h2>
          <p className="text-gray-600">Accede a manuales, procedimientos y documentación</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 border-2 border-blue-200">
            <p className="text-3xl font-bold text-gray-900 mb-1">{documents.length}</p>
            <p className="text-sm font-medium text-gray-600">Total Documentos</p>
          </div>
          <div className="bg-white rounded-xl p-6 border-2 border-green-200">
            <p className="text-3xl font-bold text-gray-900 mb-1">
              {documents.filter(d => d.status === 'PUBLISHED').length}
            </p>
            <p className="text-sm font-medium text-gray-600">Publicados</p>
          </div>
          <div className="bg-white rounded-xl p-6 border-2 border-red-200">
            <p className="text-3xl font-bold text-gray-900 mb-1">
              {documents.filter(d => d.isMandatory).length}
            </p>
            <p className="text-sm font-medium text-gray-600">Obligatorios</p>
          </div>
        </div>

        {/* Categories Filter */}
        <div className="bg-white rounded-xl p-4 mb-6 flex items-center gap-4 overflow-x-auto">
          <span className="text-sm font-semibold text-gray-700 whitespace-nowrap">Categorías:</span>
          <button className="px-4 py-2 bg-sb-green-700 text-white rounded-lg text-sm font-medium">
            Todas
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors whitespace-nowrap"
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Documents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {documents.map((doc) => (
            <div
              key={doc.id}
              className="bg-white rounded-2xl shadow-sm border border-gray-200 hover:border-sb-green-300 transition-all hover:shadow-lg overflow-hidden"
            >
              {/* Cover */}
              <div className="h-40 bg-gradient-to-br from-sb-green-100 to-sb-green-50 flex items-center justify-center">
                <svg className="w-16 h-16 text-sb-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>

              <div className="p-6">
                {/* Category */}
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded">
                    {doc.category.name}
                  </span>
                  {doc.isMandatory && (
                    <span className="px-2 py-1 bg-red-100 text-red-800 text-xs font-semibold rounded flex items-center gap-1">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      Obligatorio
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                  {doc.title}
                </h3>

                {/* Summary */}
                {doc.summary && (
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    {doc.summary}
                  </p>
                )}

                {/* Version */}
                {doc.version && (
                  <div className="flex items-center gap-2 text-xs text-gray-500 mb-4">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                    </svg>
                    <span>Versión {doc.version}</span>
                  </div>
                )}

                {/* Action */}
                <Link
                  href={`/franchisee/dashboard/documents/${doc.id}`}
                  className="block w-full px-4 py-3 bg-sb-green-700 text-white text-center rounded-lg font-medium hover:bg-sb-green-600 transition-colors"
                >
                  Ver Documento
                </Link>
              </div>
            </div>
          ))}
        </div>

        {documents.length === 0 && (
          <div className="bg-white rounded-2xl shadow-sm p-12 text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">No hay documentos disponibles</h3>
            <p className="text-gray-600">Aún no se han publicado documentos para tu franquicia</p>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
