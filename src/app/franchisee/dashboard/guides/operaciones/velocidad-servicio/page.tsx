import { redirect } from 'next/navigation';
import { getCurrentUser } from '@/lib/session';
import DashboardLayout from '@/components/admin/DashboardLayout';
import GuideBreadcrumb from '@/components/GuideBreadcrumb';

export default async function VelocidadServicioPage() {
  const user = await getCurrentUser();
  
  if (!user || user.role !== 'FRANCHISEE') {
    redirect('/admin/login');
  }

  return (
    <DashboardLayout userEmail={user.email} userRole={user.role}>
      <div className="max-w-6xl mx-auto pb-12">
        <GuideBreadcrumb items={[
          { label: 'Guías', href: '/franchisee/dashboard/guides' },
          { label: 'Operaciones', href: '/franchisee/dashboard/guides/operaciones' },
          { label: 'Velocidad en el Servicio', href: '/franchisee/dashboard/guides/operaciones/velocidad-servicio' }
        ]} />

        <div className="mb-12 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-sb-green-700 rounded-3xl mb-6 shadow-lg">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Velocidad en el Servicio</h1>
          <p className="text-xl text-gray-600">Eficiencia, rapidez y calidad constante</p>
        </div>

        <div className="space-y-8">
          {/* Intro */}
          <div className="bg-sb-green-50 rounded-3xl p-8 border-2 border-sb-green-200">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-sb-green-700 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <p className="text-lg text-gray-800 leading-relaxed mb-4">
                  En SALAD BOWL, ser un anfitrión memorable significa superar las expectativas de nuestros clientes. Esto no solo implica ofrecer comida fresca, deliciosa y saludable, sino también brindar una <strong className="text-sb-green-700">atención amable, eficiente y con energía positiva</strong>, asegurándonos de que nadie tenga que esperar más de lo necesario para disfrutar su BOWL o BURRITO.
                </p>
                <p className="text-gray-800 leading-relaxed">
                  Un servicio lento puede generar frustración o decepción. La velocidad de servicio es, por lo tanto, una parte clave de la experiencia que ofrecemos: <strong className="text-sb-teal-700">rápida, amable y constante</strong>.
                </p>
              </div>
            </div>
          </div>

          {/* Medición */}
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100">
            <div className="bg-sb-green-700 p-8 text-white">
              <h2 className="text-3xl font-bold mb-2">Cómo Medimos la Velocidad de Servicio</h2>
              <p className="text-sb-green-50">Estándares de tiempo por etapa</p>
            </div>
            
            <div className="p-8">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="relative bg-sb-green-50 rounded-2xl p-6 border-2 border-sb-green-200 hover:shadow-xl transition-all">
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-sb-green-700 rounded-full flex items-center justify-center text-white font-black text-xl shadow-lg">
                    1
                  </div>
                  <div className="flex justify-center mb-4">
                    <svg className="w-12 h-12 text-sb-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">Entrada al restaurante</h3>
                  <div className="bg-white rounded-lg p-4 text-center mb-3">
                    <p className="text-3xl font-black text-sb-green-700">1 min</p>
                  </div>
                  <p className="text-sm text-gray-700 text-center">
                    Desde que el cliente llega hasta que un miembro del equipo lo atiende (solo varía si hay fila)
                  </p>
                </div>

                <div className="relative bg-sb-teal-50 rounded-2xl p-6 border-2 border-sb-teal-200 hover:shadow-xl transition-all">
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-sb-teal-700 rounded-full flex items-center justify-center text-white font-black text-xl shadow-lg">
                    2
                  </div>
                  <div className="flex justify-center mb-4">
                    <svg className="w-12 h-12 text-sb-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">Preparación directa</h3>
                  <div className="bg-white rounded-lg p-4 text-center mb-3">
                    <p className="text-3xl font-black text-sb-teal-700">3-5 min</p>
                  </div>
                  <p className="text-sm text-gray-700 text-center">
                    Desde que elige ingredientes en barra hasta que recibe su platillo embolsado o en charola
                  </p>
                </div>

                <div className="relative bg-sb-green-50 rounded-2xl p-6 border-2 border-sb-green-200 hover:shadow-xl transition-all">
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-sb-green-700 rounded-full flex items-center justify-center text-white font-black text-xl shadow-lg">
                    3
                  </div>
                  <div className="flex justify-center mb-4">
                    <svg className="w-12 h-12 text-sb-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">Cobro y entrega</h3>
                  <div className="bg-white rounded-lg p-4 text-center mb-3">
                    <p className="text-3xl font-black text-sb-green-700">1 min</p>
                  </div>
                  <p className="text-sm text-gray-700 text-center">
                    Desde que ejecuta el pago hasta que recibe su platillo (charola o bolsa)
                  </p>
                </div>
              </div>

              <div className="mt-8 bg-sb-green-700 rounded-2xl p-6 text-white text-center">
                <p className="text-2xl font-bold">Tiempo total estimado: <span className="text-3xl">5-7 minutos</span></p>
              </div>
            </div>
          </div>

          {/* Consejos */}
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100">
            <div className="bg-gradient-to-r from-sb-teal-600 to-sb-green-600 p-8 text-white">
              <h2 className="text-3xl font-bold mb-2">Consejos para Mantener la Eficiencia</h2>
              <p className="text-sb-teal-50">Organización y anticipación</p>
            </div>
            
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { 
                    icon: '⭐', 
                    title: 'Calidad constante', 
                    desc: 'Asegúrate de que cada cliente reciba la misma calidad de comida y servicio todos los días, sin excepción.',
                    color: 'yellow'
                  },
                  { 
                    icon: '🥬', 
                    title: 'Barra siempre llena', 
                    desc: 'Mantén la barra llena de ingredientes y ten stock de cada uno en la parte de debajo de la barra fría, para no hacer producción en el momento.',
                    color: 'green'
                  },
                  { 
                    icon: '💬', 
                    title: 'Comunicación fluida', 
                    desc: 'Mantén comunicación entre cocina y mostrador para evitar retrasos si están quedándose sin stock en el área de barra.',
                    color: 'blue'
                  },
                  { 
                    icon: '📊', 
                    title: 'Anticipa picos', 
                    desc: 'Organiza y anticipa los picos de trabajo (hora de comida o cenas) preparando ingredientes y utensilios con antelación.',
                    color: 'orange'
                  },
                  { 
                    icon: '🤝', 
                    title: 'Trabajo en equipo', 
                    desc: 'La actitud positiva y el trabajo en equipo hacen que el servicio sea más rápido y agradable para el cliente y el equipo.',
                    color: 'purple'
                  },
                  { 
                    icon: '🔄', 
                    title: 'Plan B para faltantes', 
                    desc: 'Si falta un ingrediente: A) Buscar sustituto (semillas, toppings, fruta de temporada) B) Tapar inserto con tapa y ofrecer disculpas.',
                    color: 'red'
                  }
                ].map((tip, i) => (
                  <div key={i} className={`bg-${tip.color}-50 rounded-xl p-6 border-l-4 border-${tip.color}-600 hover:shadow-lg transition-shadow`}>
                    <div className="flex items-start gap-4">
                      <div className="text-4xl">{tip.icon}</div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">{tip.title}</h3>
                        <p className="text-sm text-gray-700">{tip.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* TIP Adicional */}
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-8 text-white">
              <h2 className="text-3xl font-bold mb-2 flex items-center gap-3">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                TIP Adicional
              </h2>
              <p className="text-purple-50">El poder de la conexión humana</p>
            </div>
            
            <div className="p-8">
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 border-2 border-purple-200">
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">😊</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Siempre recibe al cliente con una sonrisa</h3>
                </div>
                
                <p className="text-gray-800 text-lg mb-6 leading-relaxed">
                  En ocasiones los clientes no saben cómo preparar su BOWL o BURRITO y solo necesitan un poco de ayuda para elegir y orientarse.
                </p>

                <div className="bg-white rounded-xl p-6 mb-6">
                  <h4 className="font-bold text-purple-900 mb-4 text-lg">Frases efectivas:</h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 bg-purple-50 rounded-lg p-4">
                      <div className="text-2xl">💬</div>
                      <p className="text-gray-800 italic">"Quedaría muy bien si le ponemos jitomate o alguna verdura verde para hacerlo más balanceado"</p>
                    </div>
                    <div className="flex items-start gap-3 bg-pink-50 rounded-lg p-4">
                      <div className="text-2xl">💬</div>
                      <p className="text-gray-800 italic">"Por el momento se nos terminó el elote, una disculpa, pero le puedo ofrecer calabaza o algún otro vegetal con todo gusto"</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-6 text-white">
                  <h4 className="font-bold mb-3 text-lg flex items-center gap-2">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                    Resultado
                  </h4>
                  <p className="text-purple-50">
                    Este tipo de conexiones relajan al cliente y crean un ambiente menos tenso, comprometiendo al consumidor a dejar mejores propinas y a sentirse más en confianza.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
