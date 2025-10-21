import { redirect } from 'next/navigation';
import { getCurrentUser } from '@/lib/session';
import { prisma } from '@/lib/prisma';
import DashboardLayout from '@/components/admin/DashboardLayout';
import Link from 'next/link';

export default async function AnnouncementsPage() {
  const user = await getCurrentUser();
  
  if (!user || user.role !== 'ADMIN') {
    redirect('/admin/login');
  }

  // Obtener todos los anuncios
  const announcements = await prisma.announcement.findMany({
    include: {
      franchisee: true,
    },
    orderBy: { publishAt: 'desc' },
  });

  const now = new Date();
  const active = announcements.filter(a => 
    a.publishAt <= now && (!a.expiresAt || a.expiresAt >= now)
  );
  const scheduled = announcements.filter(a => a.publishAt > now);
  const expired = announcements.filter(a => 
    a.expiresAt && a.expiresAt < now
  );

  return (
    <DashboardLayout userEmail={user.email} userRole={user.role}>
      <div>
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Anuncios</h2>
            <p className="text-gray-600">Gestiona las novedades y comunicaciones del sistema</p>
          </div>
          <Link
            href="/admin/dashboard/announcements/new"
            className="px-6 py-3 bg-sb-green-700 text-white rounded-lg font-semibold hover:bg-sb-green-600 transition-colors flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Nuevo Anuncio
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 border-2 border-blue-200">
            <p className="text-3xl font-bold text-gray-900 mb-1">{announcements.length}</p>
            <p className="text-sm font-medium text-gray-600">Total Anuncios</p>
          </div>
          <div className="bg-white rounded-xl p-6 border-2 border-green-200">
            <p className="text-3xl font-bold text-gray-900 mb-1">{active.length}</p>
            <p className="text-sm font-medium text-gray-600">Activos</p>
          </div>
          <div className="bg-white rounded-xl p-6 border-2 border-yellow-200">
            <p className="text-3xl font-bold text-gray-900 mb-1">{scheduled.length}</p>
            <p className="text-sm font-medium text-gray-600">Programados</p>
          </div>
          <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
            <p className="text-3xl font-bold text-gray-900 mb-1">{expired.length}</p>
            <p className="text-sm font-medium text-gray-600">Expirados</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl p-4 mb-6 flex items-center gap-4">
          <button className="px-6 py-2 bg-sb-green-700 text-white rounded-lg text-sm font-medium">
            Todos ({announcements.length})
          </button>
          <button className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors">
            Activos ({active.length})
          </button>
          <button className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors">
            Programados ({scheduled.length})
          </button>
          <button className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors">
            Expirados ({expired.length})
          </button>
        </div>

        {/* Announcements List */}
        <div className="space-y-4">
          {announcements.map((announcement) => {
            const isActive = announcement.publishAt <= now && (!announcement.expiresAt || announcement.expiresAt >= now);
            const isScheduled = announcement.publishAt > now;
            const isExpired = announcement.expiresAt && announcement.expiresAt < now;

            return (
              <div
                key={announcement.id}
                className="bg-white rounded-2xl shadow-sm p-6 border border-gray-200 hover:border-sb-green-300 transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-gray-900">{announcement.title}</h3>
                      {isActive && (
                        <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">
                          Activo
                        </span>
                      )}
                      {isScheduled && (
                        <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-xs font-semibold rounded-full">
                          Programado
                        </span>
                      )}
                      {isExpired && (
                        <span className="px-3 py-1 bg-gray-100 text-gray-800 text-xs font-semibold rounded-full">
                          Expirado
                        </span>
                      )}
                      <VisibilityBadge visibility={announcement.visibleTo} />
                    </div>
                    {announcement.franchisee && (
                      <p className="text-sm text-sb-green-700 font-medium mb-2">
                        Para: {announcement.franchisee.name}
                      </p>
                    )}
                  </div>
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                    </svg>
                  </div>
                </div>

                {/* Body Preview */}
                <div className="mb-4 p-4 bg-gray-50 rounded-lg">
                  <p className="text-gray-700 line-clamp-3">{announcement.bodyMd}</p>
                </div>

                {/* Metadata */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Publicación</p>
                    <p className="text-sm font-semibold text-gray-900">
                      {new Date(announcement.publishAt).toLocaleDateString('es-MX', {
                        day: '2-digit',
                        month: 'short',
                        year: 'numeric'
                      })}
                    </p>
                  </div>
                  {announcement.expiresAt && (
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Expiración</p>
                      <p className="text-sm font-semibold text-gray-900">
                        {new Date(announcement.expiresAt).toLocaleDateString('es-MX', {
                          day: '2-digit',
                          month: 'short',
                          year: 'numeric'
                        })}
                      </p>
                    </div>
                  )}
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Creado</p>
                    <p className="text-sm font-semibold text-gray-900">
                      {new Date(announcement.createdAt).toLocaleDateString('es-MX')}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Última modificación</p>
                    <p className="text-sm font-semibold text-gray-900">
                      {new Date(announcement.updatedAt).toLocaleDateString('es-MX')}
                    </p>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3 pt-4 border-t border-gray-200">
                  <Link
                    href={`/admin/dashboard/announcements/${announcement.id}`}
                    className="px-6 py-2 bg-sb-green-700 text-white rounded-lg font-medium hover:bg-sb-green-600 transition-colors"
                  >
                    Ver Completo
                  </Link>
                  <Link
                    href={`/admin/dashboard/announcements/${announcement.id}/edit`}
                    className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors"
                  >
                    Editar
                  </Link>
                  <button className="px-6 py-2 bg-red-100 text-red-700 rounded-lg font-medium hover:bg-red-200 transition-colors">
                    Eliminar
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {announcements.length === 0 && (
          <div className="bg-white rounded-2xl shadow-sm p-12 text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">No hay anuncios</h3>
            <p className="text-gray-600 mb-6">Comienza creando tu primer anuncio</p>
            <Link
              href="/admin/dashboard/announcements/new"
              className="inline-flex items-center gap-2 px-6 py-3 bg-sb-green-700 text-white rounded-lg font-semibold hover:bg-sb-green-600 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Crear Anuncio
            </Link>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}

function VisibilityBadge({ visibility }: { visibility: string }) {
  const styles = {
    ALL: 'bg-blue-100 text-blue-800',
    ADMIN: 'bg-purple-100 text-purple-800',
    FRANCHISEE: 'bg-green-100 text-green-800',
    EMPLOYEE: 'bg-orange-100 text-orange-800',
  };

  const labels = {
    ALL: 'Todos',
    ADMIN: 'Admins',
    FRANCHISEE: 'Franquiciatarios',
    EMPLOYEE: 'Empleados',
  };

  return (
    <span className={`px-2 py-1 text-xs font-semibold rounded ${styles[visibility as keyof typeof styles]}`}>
      {labels[visibility as keyof typeof labels] || visibility}
    </span>
  );
}
