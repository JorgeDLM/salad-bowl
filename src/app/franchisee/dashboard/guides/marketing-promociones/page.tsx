import { redirect } from 'next/navigation';
import { getCurrentUser } from '@/lib/session';
import DashboardLayout from '@/components/admin/DashboardLayout';
import Link from 'next/link';
import Image from 'next/image';

export default async function MarketingPromocionesPage() {
  const user = await getCurrentUser();
  
  if (!user || user.role !== 'FRANCHISEE') {
    redirect('/admin/login');
  }

  return (
    <DashboardLayout userEmail={user.email} userRole={user.role}>
      <div className="max-w-6xl mx-auto">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link href="/franchisee/dashboard/guides" className="text-sb-green-700 hover:text-sb-green-600 font-medium">
            ← Volver a Guías
          </Link>
        </div>

        {/* Header */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-sb-green-500 to-sb-green-400 rounded-3xl mb-6 shadow-lg">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Marketing y Promociones</h1>
          <p className="text-xl text-gray-600">Estrategias activas para atraer y fidelizar clientes</p>
        </div>

        {/* Content */}
        <div className="space-y-8">
          {/* Intro */}
          <div className="bg-gradient-to-br from-sb-green-50 to-white rounded-3xl shadow-lg p-8 border-l-4 border-sb-green-500">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Promociones Activas</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Nuestras estrategias de promoción están diseñadas para maximizar la retención de clientes y construir una base de datos sólida que nos permita mantener una comunicación constante con nuestros consumidores.
            </p>
          </div>

          {/* Foodbot Rewards */}
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100">
            <div className="bg-gradient-to-r from-sb-green-600 to-sb-green-500 p-8 text-white">
              <h2 className="text-3xl font-bold mb-2">Foodbot Rewards</h2>
              <p className="text-sb-green-50">Sistema de recompensas y lealtad</p>
            </div>
            
            <div className="p-8">
              {/* Resumen del Sistema */}
              <div className="bg-gradient-to-br from-sb-green-50 to-white rounded-2xl p-6 mb-8 border-2 border-sb-green-200">
                <p className="text-gray-700 leading-relaxed text-center">
                  Resumen del funcionamiento del sistema de recompensas integrado al punto de venta (POS).
                </p>
              </div>

              <div className="space-y-6">
                {/* Que es Foodbot */}
                <div className="bg-sb-green-50 rounded-2xl p-6 border-l-4 border-sb-green-600">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">¿Qué es Foodbot?</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Salad Bowl trabaja con el POS <strong className="text-sb-green-700">"Foodbot"</strong>, una plataforma integral que combina punto de venta, pedidos en línea, bots de comunicación, kioscos e integración de pedidos de plataformas delivery en un solo punto.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Su módulo de recompensas es una función muy atractiva que permite reunir bases de datos importantes, otorgando <strong className="text-sb-green-700">5% de cashback</strong> en el monedero digital del cliente en cada compra.
                  </p>
                </div>

                {/* Componentes del Sistema */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Componentes del Sistema</h3>
                  <div className="space-y-4">
                    {/* Registro */}
                    <div className="bg-white rounded-xl border-2 border-gray-200 overflow-hidden">
                      <div className="bg-sb-green-600 px-5 py-3 flex items-center gap-3">
                        <svg className="w-5 h-5 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                        </svg>
                        <h4 className="font-bold text-white">Registro / Afiliación</h4>
                      </div>
                      <div className="p-5">
                        <p className="text-gray-700 leading-relaxed">
                          El cliente se registra en el sistema directamente desde el POS, proporcionando su número telefónico, correo o a través de una app asociada. Inicia su identificativo y comienza a acumular recompensas.
                        </p>
                      </div>
                    </div>

                    {/* Acumulacion */}
                    <div className="bg-white rounded-xl border-2 border-gray-200 overflow-hidden">
                      <div className="bg-sb-green-600 px-5 py-3 flex items-center gap-3">
                        <svg className="w-5 h-5 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                        <h4 className="font-bold text-white">Acumulación de Puntos / Recompensas</h4>
                      </div>
                      <div className="p-5">
                        <p className="text-gray-700 leading-relaxed">
                          Cada compra genera puntos o un porcentaje de crédito, calculado automáticamente por el sistema POS según el monto consumido.
                        </p>
                      </div>
                    </div>

                    {/* Redencion */}
                    <div className="bg-white rounded-xl border-2 border-gray-200 overflow-hidden">
                      <div className="bg-sb-green-600 px-5 py-3 flex items-center gap-3">
                        <svg className="w-5 h-5 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                        </svg>
                        <h4 className="font-bold text-white">Redención / Uso</h4>
                      </div>
                      <div className="p-5">
                        <p className="text-gray-700 leading-relaxed">
                          Los clientes pueden canjear sus puntos por descuentos, productos o beneficios especiales en futuras compras.
                        </p>
                      </div>
                    </div>

                    {/* Promociones */}
                    <div className="bg-white rounded-xl border-2 border-gray-200 overflow-hidden">
                      <div className="bg-sb-green-600 px-5 py-3 flex items-center gap-3">
                        <svg className="w-5 h-5 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                        </svg>
                        <h4 className="font-bold text-white">Promociones Especiales</h4>
                      </div>
                      <div className="p-5">
                        <p className="text-gray-700 leading-relaxed">
                          El sistema permite configurar recompensas adicionales, como bonos por cumpleaños, referidos, o por la compra de ciertos productos promocionales.
                        </p>
                      </div>
                    </div>

                    {/* Integracion */}
                    <div className="bg-white rounded-xl border-2 border-gray-200 overflow-hidden">
                      <div className="bg-sb-green-600 px-5 py-3 flex items-center gap-3">
                        <svg className="w-5 h-5 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <h4 className="font-bold text-white">Integración Omnicanal</h4>
                      </div>
                      <div className="p-5">
                        <p className="text-gray-700 leading-relaxed">
                          Las recompensas están sincronizadas entre canales físicos y digitales, de modo que el cliente puede acumular y usar sus puntos tanto en tienda como en pedidos en línea.
                        </p>
                      </div>
                    </div>

                    {/* Datos */}
                    <div className="bg-white rounded-xl border-2 border-gray-200 overflow-hidden">
                      <div className="bg-sb-green-600 px-5 py-3 flex items-center gap-3">
                        <svg className="w-5 h-5 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                        <h4 className="font-bold text-white">Datos del Cliente</h4>
                      </div>
                      <div className="p-5">
                        <p className="text-gray-700 leading-relaxed">
                          El sistema recopila información sobre frecuencia de compra, preferencias y hábitos de consumo, lo cual facilita estrategias personalizadas de marketing y fidelización.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Funciones del modulo */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Módulo de Rewards / Lealtad</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="p-5 bg-white rounded-xl shadow-md border border-gray-200">
                      <div className="w-12 h-12 bg-sb-green-700 rounded-full flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                        </svg>
                      </div>
                      <h4 className="font-bold text-gray-900 mb-2">Cashback</h4>
                      <p className="text-sm text-gray-600">5% de regreso en cada compra</p>
                    </div>

                    <div className="p-5 bg-white rounded-xl shadow-md border border-gray-200">
                      <div className="w-12 h-12 bg-sb-green-700 rounded-full flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
                        </svg>
                      </div>
                      <h4 className="font-bold text-gray-900 mb-2">Cumpleaños</h4>
                      <p className="text-sm text-gray-600">Premios especiales en su día</p>
                    </div>

                    <div className="p-5 bg-white rounded-xl shadow-md border border-gray-200">
                      <div className="w-12 h-12 bg-sb-green-700 rounded-full flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <h4 className="font-bold text-gray-900 mb-2">Referidos</h4>
                      <p className="text-sm text-gray-600">Recompensas por invitar amigos</p>
                    </div>
                  </div>
                </div>

                {/* Instrucciones importantes */}
                <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded-xl p-6">
                  <div className="flex gap-4">
                    <svg className="w-8 h-8 text-yellow-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Suma Importancia</h3>
                      <p className="text-gray-800 leading-relaxed mb-3">
                        Es <strong>fundamental</strong> tener el código QR de Foodbot Salad Bowl en pantallas o impreso en alguna parte visible frente a la caja de cobro.
                      </p>
                      <p className="text-gray-800 leading-relaxed">
                        Hacer lo posible por que cada cliente que consuma dentro de la unidad se registre, haciéndole saber los beneficios que podrá obtener. Es nuestra <strong>principal arma de promoción</strong> y base de datos para enviar nuevas promociones y beneficios.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Beneficios */}
                <div className="bg-gradient-to-br from-sb-green-700 to-sb-teal-700 rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">Beneficios Clave</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex gap-3 items-start">
                      <svg className="w-6 h-6 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Base de datos robusta de clientes</span>
                    </div>
                    <div className="flex gap-3 items-start">
                      <svg className="w-6 h-6 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Comunicación directa con consumidores</span>
                    </div>
                    <div className="flex gap-3 items-start">
                      <svg className="w-6 h-6 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Fidelización efectiva del cliente</span>
                    </div>
                    <div className="flex gap-3 items-start">
                      <svg className="w-6 h-6 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Mayor retención y compra recurrente</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Promoción After Work */}
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100">
            <div className="bg-gradient-to-r from-sb-teal-600 to-sb-green-600 p-8 text-white">
              <h2 className="text-3xl font-bold mb-2">Promoción After Work</h2>
              <p className="text-sb-green-50">Atrae clientes en las tardes</p>
            </div>
            
            <div className="p-8">
              {/* Imagen After Work */}
              <div className="bg-gradient-to-br from-sb-green-50 to-white rounded-2xl p-6 mb-8 flex items-center justify-center border-2 border-sb-green-200">
                <Image 
                  src="/franquicias/marketing-promociones/after-work.jpg"
                  alt="Promoción After Work"
                  width={233}
                  height={350}
                  className="rounded-xl shadow-lg"
                />
              </div>

              <div className="space-y-6">
                {/* Descripcion */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Público Objetivo</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    La mayoría de las personas que salen del trabajo, del gimnasio o de cualquier actividad en las tardes son atraídas con esta promoción especial.
                  </p>
                  <div className="bg-sb-teal-50 rounded-xl p-6 border-l-4 border-sb-teal-600">
                    <p className="text-gray-800">
                      Esta estrategia aprovecha el <strong className="text-sb-teal-700">horario vespertino</strong> cuando los clientes buscan una opción saludable, rápida y conveniente antes de llegar a casa.
                    </p>
                  </div>
                </div>

                {/* Momentos clave */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Momentos Clave de Consumo</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="p-5 bg-gradient-to-br from-sb-teal-50 to-white rounded-xl border-2 border-sb-teal-200">
                      <div className="w-12 h-12 bg-sb-teal-700 rounded-full flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <h4 className="font-bold text-gray-900 mb-2">Salida del Trabajo</h4>
                      <p className="text-sm text-gray-600">Cliente busca conveniencia y rapidez</p>
                    </div>

                    <div className="p-5 bg-gradient-to-br from-sb-teal-50 to-white rounded-xl border-2 border-sb-teal-200">
                      <div className="w-12 h-12 bg-sb-teal-700 rounded-full flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <h4 className="font-bold text-gray-900 mb-2">Post-Gimnasio</h4>
                      <p className="text-sm text-gray-600">Cliente busca alimentación saludable</p>
                    </div>

                    <div className="p-5 bg-gradient-to-br from-sb-teal-50 to-white rounded-xl border-2 border-sb-teal-200">
                      <div className="w-12 h-12 bg-sb-teal-700 rounded-full flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h4 className="font-bold text-gray-900 mb-2">Actividades Vespertinas</h4>
                      <p className="text-sm text-gray-600">Cliente busca una cena ligera</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to action final */}
          <div className="bg-gradient-to-br from-sb-green-500 to-sb-teal-500 rounded-3xl shadow-xl p-10 text-center text-white">
            <div className="max-w-3xl mx-auto">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Estrategia de Crecimiento</h3>
              <p className="text-lg leading-relaxed">
                La combinación de estas promociones activas permite construir una <strong>comunidad leal de clientes</strong> mientras maximizamos el flujo de ventas en horarios estratégicos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
