import { redirect } from 'next/navigation';
import { getCurrentUser } from '@/lib/session';
import DashboardLayout from '@/components/admin/DashboardLayout';
import Link from 'next/link';

export default async function ProcedimientosOperativosPage() {
  const user = await getCurrentUser();
  
  if (!user || user.role !== 'EMPLOYEE') {
    redirect('/admin/login');
  }

  const procedures = [
    {
      title: 'Preparación de Bowls',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      ),
      color: 'sb-green',
      steps: [
        'Verificar que el cliente haya elegido su base',
        'Servir la porción correcta según el tamaño del bowl',
        'Agregar proteína seleccionada con la porción estándar',
        'Añadir verduras y toppings según orden',
        'Aplicar el aderezo elegido',
        'Presentar el bowl al cliente para confirmación',
        'Cerrar y etiquetar el bowl correctamente',
      ],
    },
    {
      title: 'Manejo de Caja',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      color: 'sb-teal',
      steps: [
        'Saludar al cliente amablemente',
        'Tomar la orden completa antes de cobrar',
        'Repetir la orden para confirmar',
        'Ingresar correctamente en el sistema POS',
        'Informar el total al cliente',
        'Procesar el pago (efectivo o tarjeta)',
        'Entregar ticket y cambio si aplica',
        'Agradecer y despedir al cliente',
      ],
    },
    {
      title: 'Limpieza de Estación',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      color: 'blue',
      steps: [
        'Retirar todos los contenedores de ingredientes',
        'Limpiar la superficie con agua y jabón',
        'Aplicar desinfectante aprobado',
        'Dejar actuar según indicaciones',
        'Enjuagar con agua limpia',
        'Secar completamente con toalla limpia',
        'Regresar contenedores a su lugar',
        'Registrar limpieza en bitácora',
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
          <span className="text-gray-900 font-semibold">Procedimientos Operativos</span>
        </nav>

        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Procedimientos Operativos Estándar</h2>
          <p className="text-gray-600">
            Guías paso a paso para realizar tareas de manera correcta y consistente
          </p>
        </div>

        {/* Procedimientos */}
        <div className="space-y-6">
          {procedures.map((procedure, index) => (
            <div key={index} className={`bg-white rounded-2xl shadow-sm p-6 border-2 border-gray-200 hover:border-${procedure.color}-300 transition-all`}>
              <div className="flex items-start gap-4 mb-4">
                <div className={`p-3 bg-${procedure.color}-600 rounded-lg text-white flex-shrink-0`}>
                  {procedure.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{procedure.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">Sigue estos pasos en orden</p>
                </div>
              </div>
              <ol className="space-y-3">
                {procedure.steps.map((step, stepIndex) => (
                  <li key={stepIndex} className="flex gap-3 items-start">
                    <span className={`flex-shrink-0 w-7 h-7 rounded-full bg-${procedure.color}-100 text-${procedure.color}-700 font-bold flex items-center justify-center text-sm`}>
                      {stepIndex + 1}
                    </span>
                    <span className="text-gray-700 pt-0.5">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>

        {/* Descargables */}
        <div className="mt-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border-2 border-gray-200">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Recursos Descargables</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a
              href="#"
              className="flex items-center gap-3 p-4 bg-white rounded-lg border-2 border-gray-200 hover:border-sb-green-300 transition-all group"
            >
              <div className="p-2 bg-sb-green-100 rounded-lg text-sb-green-700">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="font-semibold text-sm text-gray-900 group-hover:text-sb-green-700">
                  Manual Completo (PDF)
                </p>
              </div>
              <svg className="w-5 h-5 text-gray-400 group-hover:text-sb-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 p-4 bg-white rounded-lg border-2 border-gray-200 hover:border-sb-green-300 transition-all group"
            >
              <div className="p-2 bg-sb-teal-100 rounded-lg text-sb-teal-700">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="font-semibold text-sm text-gray-900 group-hover:text-sb-green-700">
                  Videos Tutoriales
                </p>
              </div>
              <svg className="w-5 h-5 text-gray-400 group-hover:text-sb-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
