import { redirect } from 'next/navigation';
import { getCurrentUser } from '@/lib/session';
import DashboardLayout from '@/components/admin/DashboardLayout';
import Link from 'next/link';

export default async function ChecklistOperacionPage() {
  const user = await getCurrentUser();
  
  if (!user || user.role !== 'EMPLOYEE') {
    redirect('/admin/login');
  }

  const checklists = [
    {
      title: 'Apertura de Sucursal',
      items: [
        'Verificar limpieza general del área',
        'Revisar temperatura de refrigeradores (0-4°C)',
        'Revisar temperatura de congeladores (-18°C)',
        'Verificar stock de ingredientes frescos',
        'Preparar estaciones de trabajo',
        'Revisar y encender equipos',
        'Verificar sistema POS funcionando',
      ],
    },
    {
      title: 'Durante el Servicio',
      items: [
        'Mantener área de preparación limpia',
        'Verificar fechas de caducidad',
        'Rotación de productos (PEPS)',
        'Lavado de manos frecuente',
        'Uso correcto de guantes',
        'Control de temperatura de alimentos',
        'Atención al cliente',
      ],
    },
    {
      title: 'Cierre de Sucursal',
      items: [
        'Limpieza profunda de estaciones',
        'Almacenar ingredientes correctamente',
        'Registrar temperaturas finales',
        'Limpiar y sanitizar superficies',
        'Cerrar con llave refrigeradores',
        'Apagar equipos',
        'Verificar cierre de caja',
        'Activar alarma',
      ],
    },
  ];

  return (
    <DashboardLayout userEmail={user.email} userRole={user.role}>
      <div className="max-w-5xl mx-auto">
        {/* Breadcrumb */}
        <nav className="mb-6 flex items-center gap-2 text-sm">
          <Link href="/employee/dashboard" className="text-gray-500 hover:text-sb-green-700">
            Dashboard
          </Link>
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <Link href="/employee/dashboard/guides" className="text-gray-500 hover:text-sb-green-700">
            Guías
          </Link>
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <span className="text-gray-900 font-semibold">Checklist de Operación</span>
        </nav>

        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Checklist de Operación Diaria</h2>
          <p className="text-gray-600">
            Verifica estas tareas para mantener los estándares de operación
          </p>
        </div>

        {/* Checklists */}
        <div className="space-y-6">
          {checklists.map((checklist, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-sm p-6 border-2 border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-sb-green-700 rounded-lg flex items-center justify-center text-white font-bold">
                  {index + 1}
                </div>
                {checklist.title}
              </h3>
              <div className="space-y-3">
                {checklist.items.map((item, itemIndex) => (
                  <label key={itemIndex} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer group">
                    <input
                      type="checkbox"
                      className="mt-1 w-5 h-5 text-sb-green-700 border-gray-300 rounded focus:ring-sb-green-500"
                    />
                    <span className="text-gray-700 group-hover:text-gray-900">{item}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Descargables */}
        <div className="mt-8 bg-gradient-to-br from-sb-green-50 to-white rounded-2xl p-6 border-2 border-sb-green-200">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Descargables</h3>
          <div className="space-y-3">
            <a
              href="#"
              className="flex items-center justify-between p-4 bg-white rounded-lg border-2 border-gray-200 hover:border-sb-green-300 transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-sb-green-100 rounded-lg text-sb-green-700">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 group-hover:text-sb-green-700">
                    Checklist Completo (PDF)
                  </p>
                  <p className="text-sm text-gray-500">Para imprimir y usar en tu turno</p>
                </div>
              </div>
              <svg className="w-5 h-5 text-gray-400 group-hover:text-sb-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
