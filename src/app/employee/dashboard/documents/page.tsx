import { redirect } from 'next/navigation';
import { getCurrentUser } from '@/lib/session';
import { prisma } from '@/lib/prisma';
import DashboardLayout from '@/components/admin/DashboardLayout';
import Link from 'next/link';

export default async function EmployeeDocumentsPage() {
  const user = await getCurrentUser();
  
  if (!user || user.role !== 'EMPLOYEE') {
    redirect('/admin/login');
  }

  // Obtener documentos accesibles para empleados
  const documents = await prisma.guidelineDocument.findMany({
    where: {
      deletedAt: null,
      status: 'PUBLISHED',
      OR: [
        { visibility: 'ALL' },
        { visibility: 'EMPLOYEE' },
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

  const mandatory = documents.filter(d => d.isMandatory);

  return (
    <DashboardLayout userEmail={user.email} userRole={user.role}>
      <div>
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Documentos de Capacitación</h2>
          <p className="text-gray-600">Accede a manuales, procedimientos y guías operativas</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 border-2 border-blue-200">
            <p className="text-3xl font-bold text-gray-900 mb-1">{documents.length}</p>
            <p className="text-sm font-medium text-gray-600">Documentos Disponibles</p>
          </div>
          <div className="bg-white rounded-xl p-6 border-2 border-red-200">
            <p className="text-3xl font-bold text-gray-900 mb-1">{mandatory.length}</p>
            <p className="text-sm font-medium text-gray-600">Lectura Obligatoria</p>
          </div>
          <div className="bg-white rounded-xl p-6 border-2 border-green-200">
            <p className="text-3xl font-bold text-gray-900 mb-1">0</p>
            <p className="text-sm font-medium text-gray-600">Completados</p>
          </div>
        </div>

        {/* Mandatory Documents Alert */}
        {mandatory.length > 0 && (
          <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6 mb-8">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-red-100 rounded-lg">
                <svg className="w-6 h-6 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-red-900 mb-2">
                  Documentos de Lectura Obligatoria
                </h3>
                <p className="text-red-700 mb-4">
                  Tienes {mandatory.length} documento(s) que debes leer y confirmar antes de continuar.
                </p>
                <div className="flex flex-wrap gap-2">
                  {mandatory.map((doc) => (
                    <Link
                      key={doc.id}
                      href={`/employee/dashboard/documents/${doc.id}`}
                      className="px-4 py-2 bg-red-700 text-white rounded-lg text-sm font-medium hover:bg-red-600 transition-colors"
                    >
                      {doc.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

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
              className={`bg-white rounded-2xl shadow-sm border-2 transition-all hover:shadow-lg overflow-hidden ${
                doc.isMandatory ? 'border-red-200 hover:border-red-300' : 'border-gray-200 hover:border-sb-green-300'
              }`}
            >
              {/* Cover */}
              <div className={`h-40 flex items-center justify-center ${
                doc.isMandatory 
                  ? 'bg-gradient-to-br from-red-100 to-red-50' 
                  : 'bg-gradient-to-br from-blue-100 to-blue-50'
              }`}>
                <svg className={`w-16 h-16 ${doc.isMandatory ? 'text-red-700' : 'text-blue-700'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>

              <div className="p-6">
                {/* Badges */}
                <div className="flex items-center gap-2 mb-3 flex-wrap">
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
                  {doc.version && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs font-semibold rounded">
                      v{doc.version}
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

                {/* Action */}
                <Link
                  href={`/employee/dashboard/documents/${doc.id}`}
                  className={`block w-full px-4 py-3 text-white text-center rounded-lg font-medium transition-colors ${
                    doc.isMandatory
                      ? 'bg-red-700 hover:bg-red-600'
                      : 'bg-sb-green-700 hover:bg-sb-green-600'
                  }`}
                >
                  {doc.isMandatory ? 'Leer Ahora' : 'Ver Documento'}
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
            <p className="text-gray-600">Aún no se han publicado documentos para tu rol</p>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
