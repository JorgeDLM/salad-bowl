import { redirect } from 'next/navigation';
import { getCurrentUser } from '@/lib/session';
import { prisma } from '@/lib/prisma';
import DashboardLayout from '@/components/admin/DashboardLayout';

export default async function EmployeeDashboardPage() {
  const user = await getCurrentUser();
  
  if (!user || user.role !== 'EMPLOYEE') {
    redirect('/admin/login');
  }

  // Obtener datos del empleado y su sucursal
  const employee = await prisma.user.findUnique({
    where: { id: user.userId },
    include: {
      branch: {
        include: {
          franchisee: true,
        },
      },
      franchisee: true,
    },
  });

  if (!employee) {
    redirect('/admin/login');
  }

  // Si el empleado no tiene sucursal asignada, mostrar mensaje
  if (!employee.branch) {
    return (
      <DashboardLayout userEmail={user.email} userRole={user.role}>
        <div className="max-w-2xl mx-auto text-center py-12">
          <div className="bg-yellow-50 border-2 border-yellow-200 rounded-2xl p-8">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Sucursal no asignada</h2>
            <p className="text-gray-600 mb-6">
              Tu cuenta de empleado aún no tiene una sucursal asignada. Por favor, contacta con tu administrador para que asigne tu sucursal.
            </p>
            <div className="bg-white rounded-lg p-4 border border-yellow-200">
              <p className="text-sm text-gray-700">
                <strong>Tu email:</strong> {employee.email}
              </p>
            </div>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout userEmail={user.email} userRole={user.role}>
      <div>
        {/* Welcome */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Bienvenido, {employee.username || employee.email}
          </h2>
          <p className="text-gray-600">
            Sucursal: {employee.branch.name}
          </p>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Sucursal Info */}
          <div className="bg-gradient-to-br from-sb-green-50 to-white rounded-2xl shadow-sm p-6 border border-sb-green-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-sb-green-700 rounded-lg text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Mi Sucursal</h3>
                <p className="text-sm text-gray-600">Información de tu ubicación</p>
              </div>
            </div>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-gray-600">Sucursal</p>
                <p className="font-semibold text-gray-900">{employee.branch.name}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Dirección</p>
                <p className="font-semibold text-gray-900">{employee.branch.address}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Gerente</p>
                <p className="font-semibold text-gray-900">{employee.branch.managerName || 'No especificado'}</p>
              </div>
              {employee.branch.contactPhone && (
                <div>
                  <p className="text-sm text-gray-600">Teléfono</p>
                  <p className="font-semibold text-gray-900">{employee.branch.contactPhone}</p>
                </div>
              )}
            </div>
          </div>

          {/* Franquicia Info */}
          {employee.branch.franchisee && (
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-sm p-6 border border-blue-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-blue-600 rounded-lg text-white">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Franquicia</h3>
                  <p className="text-sm text-gray-600">Parte de la familia</p>
                </div>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-gray-600">Franquicia</p>
                  <p className="font-semibold text-gray-900">{employee.branch.franchisee.name}</p>
                </div>
                {employee.branch.franchisee.contactEmail && (
                  <div>
                    <p className="text-sm text-gray-600">Contacto</p>
                    <p className="font-semibold text-gray-900">{employee.branch.franchisee.contactEmail}</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Horario */}
        {employee.branch.openingHours && (
          <div className="bg-white rounded-2xl shadow-sm p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Horario de Apertura</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {Object.entries(employee.branch.openingHours as any).map(([day, hours]: [string, any]) => (
                <div key={day} className="p-3 bg-gray-50 rounded-lg">
                  <p className="text-sm font-semibold text-gray-900 capitalize mb-1">
                    {getDayName(day)}
                  </p>
                  <p className="text-xs text-gray-600">
                    {hours.open} - {hours.close}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Quick Actions */}
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Acciones Rápidas</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <QuickActionCard
              title="Guías Operativas"
              description="Checklists y procedimientos"
              href="/employee/dashboard/guides"
              icon="document"
            />
            <QuickActionCard
              title="Capacitación"
              description="Completa tus módulos"
              href="/employee/dashboard/training"
              icon="book"
            />
            <QuickActionCard
              title="Mi Sucursal"
              description="Ver detalles completos"
              href="/employee/dashboard/branch"
              icon="location"
            />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

function getDayName(day: string): string {
  const days: Record<string, string> = {
    mon: 'Lunes',
    tue: 'Martes',
    wed: 'Miércoles',
    thu: 'Jueves',
    fri: 'Viernes',
    sat: 'Sábado',
    sun: 'Domingo',
  };
  return days[day] || day;
}

function QuickActionCard({ title, description, href, icon }: {
  title: string;
  description: string;
  href: string;
  icon: string;
}) {
  return (
    <a
      href={href}
      className="block p-6 bg-gradient-to-br from-gray-50 to-white hover:from-sb-green-50 hover:to-white rounded-xl border-2 border-gray-100 hover:border-sb-green-300 transition-all group"
    >
      <div className="flex items-start gap-4">
        <div className="p-3 bg-sb-green-700 rounded-lg text-white group-hover:scale-110 transition-transform">
          {icon === 'document' && (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          )}
          {icon === 'book' && (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          )}
          {icon === 'location' && (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            </svg>
          )}
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-gray-900 mb-1 group-hover:text-sb-green-700 transition-colors">
            {title}
          </h3>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>
    </a>
  );
}
