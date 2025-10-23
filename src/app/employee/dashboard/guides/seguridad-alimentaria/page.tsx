import { redirect } from 'next/navigation';
import { getCurrentUser } from '@/lib/session';
import DashboardLayout from '@/components/admin/DashboardLayout';
import Link from 'next/link';

export default async function SeguridadAlimentariaPage() {
  const user = await getCurrentUser();
  
  if (!user || user.role !== 'EMPLOYEE') {
    redirect('/admin/login');
  }

  const safetyRules = [
    {
      title: 'Higiene Personal',
      icon: '🧼',
      rules: [
        'Lavar manos frecuentemente (cada 20-30 min)',
        'Usar guantes al manipular alimentos listos para consumir',
        'Mantener uñas cortas y limpias',
        'Usar uniforme limpio y completo',
        'Cabello recogido y cubierto',
        'No usar joyas ni relojes',
      ],
    },
    {
      title: 'Temperaturas Seguras',
      icon: '🌡️',
      rules: [
        'Refrigeración: 0-4°C',
        'Congelación: -18°C o menos',
        'Zona de peligro: 5-60°C (evitar)',
        'Alimentos calientes: Mantener sobre 60°C',
        'Verificar temperaturas cada 2 horas',
        'Registrar en bitácora diaria',
      ],
    },
    {
      title: 'Prevención de Contaminación',
      icon: '🛡️',
      rules: [
        'Separar alimentos crudos de cocidos',
        'Usar tablas de corte por colores',
        'Limpiar y sanitizar entre usos',
        'Cubrir alimentos almacenados',
        'Desecho correcto de basura',
        'No toser o estornudar cerca de alimentos',
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
          <span className="text-gray-900 font-semibold">Seguridad Alimentaria</span>
        </nav>

        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Seguridad Alimentaria</h2>
          <p className="text-gray-600">
            Protocolos esenciales para el manejo seguro de alimentos
          </p>
        </div>

        {/* Reglas de Seguridad */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {safetyRules.map((category, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-sm p-6 border-2 border-gray-200">
              <div className="text-4xl mb-3">{category.icon}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.rules.map((rule, ruleIndex) => (
                  <li key={ruleIndex} className="flex items-start gap-2 text-sm">
                    <svg className="w-5 h-5 text-sb-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{rule}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Importante */}
        <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6 mb-8">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-red-600 rounded-lg text-white flex-shrink-0">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">¡Importante!</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Si observas cualquier signo de contaminación, alimentos en mal estado, o falla en equipos de refrigeración, <strong>notifica inmediatamente a tu gerente</strong>. La seguridad de nuestros clientes es la prioridad número uno.
              </p>
            </div>
          </div>
        </div>

        {/* Descargables */}
        <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 border-2 border-blue-200">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Material de Consulta</h3>
          <div className="space-y-3">
            <a
              href="#"
              className="flex items-center justify-between p-4 bg-white rounded-lg border-2 border-gray-200 hover:border-blue-300 transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 rounded-lg text-blue-700">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 group-hover:text-blue-700">
                    Manual de Seguridad Alimentaria
                  </p>
                  <p className="text-sm text-gray-500">Guía completa con protocolos detallados</p>
                </div>
              </div>
              <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
