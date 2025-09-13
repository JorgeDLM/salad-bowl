import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 min-h-screen w-full text-white">
      {/* Hero Section - Frame Control & Strong Opening */}
      <section className="max-w-7xl mx-auto px-4 py-20 md:py-32">
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
            🚀 SOLO 3 SPOTS DISPONIBLES ESTE MES
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
            WE LOVE CODE
          </h1>
          <h2 className="text-2xl md:text-4xl font-bold mb-8 text-gray-300">
            El equipo que convierte tu idea en <span className="text-purple-400">$1M+ en ingresos</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed">
            Mientras otros desarrolladores te dan código, nosotros te damos <strong className="text-white">sistemas que generan dinero</strong>. 
            Nuestros clientes han recaudado más de <strong className="text-green-400">$50M</strong> usando nuestras soluciones.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="#contacto" className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-purple-700 hover:to-blue-700 transition-all transform hover:scale-105 shadow-2xl">
              QUIERO MI CONSULTA GRATUITA →
            </a>
            <a href="#casos" className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-bold text-lg hover:bg-purple-400 hover:text-white transition-all">
              Ver Casos de Éxito
            </a>
          </div>
        </div>
      </section>

      {/* Social Proof - Numbers That Matter */}
      <section className="bg-black/30 backdrop-blur-sm py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-black text-green-400 mb-2">$50M+</div>
              <div className="text-gray-300 font-semibold">Recaudado por nuestros clientes</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black text-blue-400 mb-2">23</div>
              <div className="text-gray-300 font-semibold">Proyectos exitosos</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black text-purple-400 mb-2">100%</div>
              <div className="text-gray-300 font-semibold">Clientes satisfechos</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black text-yellow-400 mb-2">24h</div>
              <div className="text-gray-300 font-semibold">Tiempo de respuesta</div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Agitation */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-8">¿Te suena familiar?</h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-6">
              <div className="text-red-400 text-2xl mb-4">❌</div>
              <h3 className="text-xl font-bold mb-3 text-red-300">Desarrolladores que desaparecen</h3>
              <p className="text-gray-400">Contratas un equipo, pagan por adelantado, y después de 2 semanas... silencio total.</p>
            </div>
            <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-6">
              <div className="text-red-400 text-2xl mb-4">💸</div>
              <h3 className="text-xl font-bold mb-3 text-red-300">Presupuestos que se triplican</h3>
              <p className="text-gray-400">"Solo serán $10K más..." y terminas pagando $50K por algo que no funciona.</p>
            </div>
            <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-6">
              <div className="text-red-400 text-2xl mb-4">🐛</div>
              <h3 className="text-xl font-bold mb-3 text-red-300">Código que no escala</h3>
              <p className="text-gray-400">Funciona para 10 usuarios, pero se rompe con 100. Volver a empezar desde cero.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Solution - Services */}
      <section id="servicios" className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-8">Dominamos cada aspecto digital de tu negocio</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              No somos otro equipo de desarrollo. Somos <strong className="text-white">arquitectos de ecosistemas digitales completos</strong> que generan millones.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-purple-500/20 p-6 rounded-lg">
              <div className="w-12 h-12 bg-purple-500/30 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-purple-300">Páginas Web</h3>
              <p className="text-gray-300">Landing pages, e-commerce y sitios web que convierten visitantes en clientes.</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all">
              <div className="w-12 h-12 mb-4 bg-blue-500/20 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-blue-300">Sistemas Administrativos</h3>
              <p className="text-gray-300 mb-4 text-sm">Plataformas que automatizan tu operación y escalan tu negocio sin contratar más personal.</p>
              <ul className="text-xs text-gray-400 space-y-1">
                <li>✓ Gestión completa de inventarios</li>
                <li>✓ Automatización de procesos</li>
                <li>✓ Reportes en tiempo real</li>
              </ul>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all">
              <div className="w-12 h-12 mb-4 bg-green-500/20 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-green-300">Apps Móviles</h3>
              <p className="text-gray-300 mb-4 text-sm">Apps nativas que tus usuarios aman usar. iOS y Android con experiencia premium.</p>
              <ul className="text-xs text-gray-400 space-y-1">
                <li>✓ Apps nativas iOS y Android</li>
                <li>✓ Push notifications inteligentes</li>
                <li>✓ Monetización integrada</li>
              </ul>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all">
              <div className="w-12 h-12 mb-4 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-yellow-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-yellow-300">CRMs Personalizados</h3>
              <p className="text-gray-300 mb-4 text-sm">Sistemas que convierten leads en clientes recurrentes y maximizan el lifetime value.</p>
              <ul className="text-xs text-gray-400 space-y-1">
                <li>✓ Automatización de ventas</li>
                <li>✓ Seguimiento de leads</li>
                <li>✓ Analytics predictivos</li>
              </ul>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 rounded-lg p-6 max-w-4xl mx-auto">
              <h4 className="text-2xl font-bold mb-4 text-white">¿Por qué elegir solo uno?</h4>
              <p className="text-gray-300 mb-4">
                Nuestros clientes más exitosos combinan múltiples soluciones para crear <strong className="text-purple-300">ecosistemas digitales completos</strong> que dominan sus mercados.
              </p>
              <a href="#contacto" className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:from-purple-700 hover:to-blue-700 transition">
                Diseñar Mi Ecosistema Digital
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Social Proof */}
      <section id="casos" className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-8">Nuestros clientes hablan por nosotros</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-green-900/20 to-green-800/20 border border-green-500/30 rounded-xl p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center font-bold text-black">
                M
              </div>
              <div className="ml-4">
                <div className="font-bold">Miguel Rodríguez</div>
                <div className="text-green-400">CEO, FinTech Startup</div>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              "En 6 meses pasamos de idea a $2M en funding. La plataforma que WeLoveCode construyó impresionó tanto a los inversores que cerramos la ronda en tiempo récord."
            </p>
            <div className="text-green-400 font-bold">💰 $2M recaudados</div>
          </div>
          
          <div className="bg-gradient-to-br from-purple-900/20 to-purple-800/20 border border-purple-500/30 rounded-xl p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center font-bold text-black">
                M
              </div>
              <div className="ml-4">
                <div className="font-bold">Mercado a la Mano</div>
                <div className="text-purple-400">E-commerce Platform</div>
                <div className="text-xs text-gray-400">www.mercadoalamano.com</div>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              "Pasamos de una simple idea a facturar más de $1M al mes. WeLoveCode construyó todo nuestro ecosistema digital: web, app móvil y CRM. Ahora."
            </p>
            <div className="text-purple-400 font-bold">🚀 $1M+ mensuales en ventas</div>
          </div>
        </div>
      </section>

      {/* Pricing - Scarcity Driven */}
      <section id="precios" className="bg-black/50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">Inversión en tu futuro</h2>
            <p className="text-xl text-gray-300">Solo trabajamos con 3 clientes por mes. Calidad sobre cantidad.</p>
            <div className="bg-red-600/20 border border-red-500 rounded-lg p-4 mt-6 max-w-2xl mx-auto">
              <p className="text-red-300 font-bold">🔥 OFERTA LIMITADA: 60% DESCUENTO EN TODOS LOS PAQUETES</p>
              <p className="text-red-200 text-sm">Solo válido hasta Diciembre 2026</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 border-2 border-green-400 rounded-xl p-6 text-center relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                60% DESCUENTO
              </div>
              <h3 className="text-xl font-bold mb-3 text-green-300">Web Starter Pro</h3>
              <div className="mb-2">
                <span className="text-2xl text-gray-500 line-through">$50K MXN</span>
                <div className="text-3xl font-black text-green-400">$20K MXN</div>
              </div>
              <div className="text-gray-400 mb-4 text-sm">Página web profesional que vende</div>
              <ul className="text-left text-gray-300 space-y-2 mb-6 text-sm">
                <li>✓ Diseño UI/UX profesional</li>
                <li>✓ 3 meses de soporte</li>
                <li>✓ Optimizada para conversión</li>
              </ul>
              <a href="#contacto" className="block bg-green-600 text-white px-4 py-2 rounded-lg font-bold hover:bg-green-700 transition text-sm">
                Aprovechar Oferta
              </a>
            </div>

            <div className="bg-white/5 border-2 border-purple-400 rounded-xl p-6 text-center relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                60% DESCUENTO
              </div>
              <h3 className="text-xl font-bold mb-3 text-purple-300">Sistema Admin Pro</h3>
              <div className="mb-2">
                <span className="text-2xl text-gray-500 line-through">$125K MXN</span>
                <div className="text-3xl font-black text-purple-400">desde $50K MXN</div>
              </div>
              <div className="text-gray-400 mb-4 text-sm">Sistema administrativo a medida</div>
              <ul className="text-left text-gray-300 space-y-2 mb-6 text-sm">
                <li>✓ Panel administrativo completo</li>
                <li>✓ Reportes y analytics</li>
                <li>✓ 3 meses de soporte</li>
              </ul>
              <a href="#contacto" className="block bg-purple-600 text-white px-4 py-2 rounded-lg font-bold hover:bg-purple-700 transition text-sm">
                Reservar Spot
              </a>
            </div>
            
            <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 border-2 border-blue-400 rounded-xl p-6 text-center relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                MÁS POPULAR
              </div>
              <div className="absolute -top-4 right-4 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                60% OFF
              </div>
              <h3 className="text-xl font-bold mb-3 text-blue-300">App Mobile Master</h3>
              <div className="mb-2">
                <span className="text-2xl text-gray-500 line-through">$200K MXN</span>
                <div className="text-3xl font-black text-blue-400">desde $80K MXN</div>
              </div>
              <div className="text-gray-400 mb-4 text-sm">App móvil + CRM personalizado</div>
              <ul className="text-left text-gray-300 space-y-2 mb-6 text-sm">
                <li>✓ App iOS y Android</li>
                <li>✓ CRM personalizado</li>
                <li>✓ 6 meses de soporte</li>
              </ul>
              <a href="#contacto" className="block bg-blue-600 text-white px-4 py-2 rounded-lg font-bold hover:bg-blue-700 transition text-sm">
                Reservar Spot
              </a>
            </div>
            
            <div className="bg-white/5 border-2 border-yellow-400 rounded-xl p-6 text-center relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                60% DESCUENTO
              </div>
              <h3 className="text-xl font-bold mb-3 text-yellow-300">Enterprise Beast</h3>
              <div className="mb-2">
                <span className="text-2xl text-gray-500 line-through">$400K MXN</span>
                <div className="text-3xl font-black text-yellow-400">desde $160K MXN</div>
              </div>
              <div className="text-gray-400 mb-4 text-sm">Ecosistema digital completo</div>
              <ul className="text-left text-gray-300 space-y-2 mb-6 text-sm">
                <li>✓ Ecosistema completo</li>
                <li>✓ Equipo dedicado</li>
                <li>✓ Soporte 24/7 por 1 año</li>
              </ul>
              <a href="#contacto" className="block bg-yellow-600 text-black px-4 py-2 rounded-lg font-bold hover:bg-yellow-700 transition text-sm">
                Consultar
              </a>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-400 mb-4">⚠️ Solo quedan 2 spots disponibles para Diciembre 2025</p>
            <p className="text-sm text-gray-500">Precios vuelven a precio normal en Enero 2027</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="contacto" className="bg-gradient-to-r from-purple-600 to-blue-600 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-8">¿Listo para dominar tu mercado?</h2>
          <p className="text-xl mb-8 opacity-90">
            Agenda una consulta gratuita de 30 minutos. Te mostraremos exactamente cómo convertir tu idea en un negocio de $1M+.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="mailto:hola@welovecode.dev" className="bg-white text-purple-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl flex items-center gap-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              hola@welovecode.dev
            </a>
            <a href="https://wa.me/1234567890" className="bg-green-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-600 transition-all transform hover:scale-105 shadow-2xl flex items-center gap-3">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.787"/>
              </svg>
              WhatsApp Directo
            </a>
          </div>
          <p className="text-sm mt-6 opacity-75">
            Respuesta garantizada en menos de 2 horas
          </p>
        </div>
      </section>
    </main>
  );
}
