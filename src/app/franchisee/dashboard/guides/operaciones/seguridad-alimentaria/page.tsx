import { redirect } from 'next/navigation';
import { getCurrentUser } from '@/lib/session';
import DashboardLayout from '@/components/admin/DashboardLayout';
import Link from 'next/link';

export default async function SeguridadAlimentariaPage() {
  const user = await getCurrentUser();
  
  if (!user || user.role !== 'FRANCHISEE') {
    redirect('/admin/login');
  }

  return (
    <DashboardLayout userEmail={user.email} userRole={user.role}>
      <div className="max-w-6xl mx-auto pb-12">
        <div className="mb-6">
          <Link href="/franchisee/dashboard/guides/operaciones" className="text-sb-green-700 hover:text-sb-green-600 font-medium">
            ← Volver a Manual de Operaciones
          </Link>
        </div>

        <div className="mb-12 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-sb-green-700 to-sb-green-600 rounded-3xl mb-6 shadow-lg">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Seguridad Alimentaria</h1>
          <p className="text-xl text-gray-600">Nuestra prioridad número uno</p>
        </div>

        {/* Grid de subsecciones */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Link href="/franchisee/dashboard/guides/operaciones/seguridad-alimentaria/enfermedades" className="group bg-white rounded-2xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-sb-green-700">Enfermedades por Consumo de Alimentos</h3>
                <p className="text-sm text-gray-600">Síntomas, causas, agentes contaminantes y prevención</p>
              </div>
            </div>
          </Link>

          <Link href="/franchisee/dashboard/guides/operaciones/seguridad-alimentaria/protocolos" className="group bg-white rounded-2xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-sb-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-sb-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-sb-green-700">Protocolos de Reclamo por Intoxicación</h3>
                <p className="text-sm text-gray-600">5 pasos para atender quejas de intoxicación</p>
              </div>
            </div>
          </Link>

          <Link href="/franchisee/dashboard/guides/operaciones/seguridad-alimentaria/factores-criticos" className="group bg-white rounded-2xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-sb-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-sb-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-sb-green-700">10 Factores Críticos</h3>
                <p className="text-sm text-gray-600">Lavado de manos, temperatura, alérgenos y más</p>
              </div>
            </div>
          </Link>
        </div>

        <div className="space-y-8">
          {/* 1. Información General */}
          <div id="info-general" className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100">
            <div className="bg-gradient-to-r from-sb-green-700 to-sb-green-600 p-8 text-white">
              <h2 className="text-3xl font-bold mb-2">1. Información General</h2>
              <p className="text-sb-green-50">Nuestro compromiso con la calidad</p>
            </div>
            
            <div className="p-8 space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Somos un negocio dedicado a la venta de alimentos y preparamos platillos y bebidas para servirlos a nuestros invitados, quienes nos visitan con la confianza de que pueden confiar en nosotros y en la calidad de nuestros ingredientes.
              </p>

              <p className="text-gray-700 leading-relaxed">
                Presentamos los ingredientes en una barra expuesta a la vista del consumidor y por ende y ética ofrecemos alimentos de alta calidad y seguros, y debemos hacer todo lo necesario para estar a la altura de esa confianza y expectativa.
              </p>

              <div className="bg-sb-green-50 rounded-xl p-6 border-l-4 border-sb-green-700">
                <p className="text-gray-800 font-semibold text-lg">
                  La seguridad alimentaria es nuestra prioridad, es una necesidad esencial y este factor puede elevar o derrumbar un negocio.
                </p>
              </div>

              <div className="bg-gradient-to-br from-sb-teal-50 to-white rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Garantizar la seguridad alimentaria significa:</h3>
                <p className="text-gray-700 mb-4">Asegurarnos de que nadie se enferme tras consumir nuestros productos mediante:</p>
                
                <div className="space-y-3">
                  {[
                    'Limpieza y desinfección adecuada de superficies, equipos y utensilios',
                    'Alto nivel de higiene personal, incluyendo lavado correcto de manos, control de salud y cumplimiento del uniforme',
                    'Almacenamiento, enfriamiento y calentamiento correctos de los alimentos, considerando tiempo, temperatura, ambiente y equipo',
                    'Control efectivo de plagas, mediante limpieza continua, monitoreo y servicios regulares de empresas especializadas',
                    'Conocimiento y comprensión sobre alergias alimentarias, intoxicaciones e intolerancias'
                  ].map((item, i) => (
                    <div key={i} className="flex gap-3 items-start">
                      <svg className="w-6 h-6 text-sb-green-700 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-yellow-50 rounded-xl p-6 border-l-4 border-yellow-500">
                <h3 className="text-lg font-bold text-gray-900 mb-3">¿Quién es responsable de la seguridad alimentaria?</h3>
                <p className="text-gray-800 text-2xl font-semibold mb-3">TODOS</p>
                <p className="text-gray-700">
                  Desde los productores, distribuidores y proveedores, hasta el equipo operativo, la gerencia y los empleados del restaurante... Todos, y en todo momento.
                </p>
              </div>

              <div className="bg-red-50 rounded-xl p-6 border-2 border-red-200">
                <div className="flex gap-3">
                  <svg className="w-8 h-8 text-red-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <div>
                    <h4 className="font-bold text-red-900 mb-2">Advertencia</h4>
                    <p className="text-gray-800">
                      No ser conscientes de esto, descuidar la seguridad alimentaria o restarle importancia puede tener graves consecuencias para nuestros clientes, nuestro equipo y nuestro negocio.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Prioridades Principales */}
          <div className="bg-gradient-to-br from-sb-green-600 to-sb-teal-600 rounded-3xl shadow-xl p-10 text-center text-white">
            <h3 className="text-2xl font-bold mb-4">Prioridad #1</h3>
            <p className="text-xl leading-relaxed mb-6">
              La seguridad de los clientes, del equipo y de la comida siempre estará por encima de cualquier otra área de operación.
            </p>
            <div className="grid md:grid-cols-4 gap-4 text-left">
              <div className="bg-white/10 rounded-xl p-4">
                <div className="font-bold mb-2">1. Seguridad</div>
                <p className="text-sm">Clientes, equipo y alimentos</p>
              </div>
              <div className="bg-white/10 rounded-xl p-4">
                <div className="font-bold mb-2">2. Calidad</div>
                <p className="text-sm">Servicio y limpieza</p>
              </div>
              <div className="bg-white/10 rounded-xl p-4">
                <div className="font-bold mb-2">3. Comodidad</div>
                <p className="text-sm">Conveniencia del huésped</p>
              </div>
              <div className="bg-white/10 rounded-xl p-4">
                <div className="font-bold mb-2">4. Apariencia</div>
                <p className="text-sm">Operación de la sucursal</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
