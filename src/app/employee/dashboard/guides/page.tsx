import { redirect } from 'next/navigation';
import { getCurrentUser } from '@/lib/session';
import DashboardLayout from '@/components/admin/DashboardLayout';
import GuideSection from '@/components/shared/GuideSection';

export default async function EmployeeGuidesPage() {
  const user = await getCurrentUser();
  
  if (!user || user.role !== 'EMPLOYEE') {
    redirect('/admin/login');
  }

  // Guías permitidas para empleados
  const employeeGuides = [
    {
      id: 1,
      title: 'Checklist de Operación',
      description: 'Listas de verificación diarias y procedimientos operativos estándar',
      href: '/employee/dashboard/guides/checklist-operacion',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      gradient: 'from-sb-green-700 to-sb-green-600',
      bgLight: 'bg-sb-green-50',
    },
    {
      id: 2,
      title: 'Procedimientos Operativos',
      description: 'Guías paso a paso para tareas diarias y procedimientos estándar',
      href: '/employee/dashboard/guides/procedimientos-operativos',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      gradient: 'from-sb-teal-600 to-sb-teal-500',
      bgLight: 'bg-sb-teal-50',
    },
    {
      id: 3,
      title: 'Seguridad Alimentaria',
      description: 'Protocolos de higiene y manejo seguro de alimentos',
      href: '/employee/dashboard/guides/seguridad-alimentaria',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      gradient: 'from-blue-600 to-blue-500',
      bgLight: 'bg-blue-50',
    },
  ];

  return (
    <DashboardLayout userEmail={user.email} userRole={user.role}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Guías Operativas</h2>
          <p className="text-gray-600">
            Consulta los manuales y procedimientos para tu trabajo diario
          </p>
        </div>

        {/* Guías Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {employeeGuides.map((guide) => (
            <GuideSection key={guide.id} {...guide} />
          ))}
        </div>

        {/* Info adicional */}
        <div className="mt-12 bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border-2 border-gray-200">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-sb-green-700 rounded-lg text-white flex-shrink-0">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                ¿Necesitas ayuda?
              </h3>
              <p className="text-gray-600 text-sm">
                Si tienes dudas sobre algún procedimiento, consulta con tu gerente de sucursal o revisa las guías detalladas disponibles en esta sección.
              </p>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
