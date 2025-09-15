'use client';

import Image from "next/image";
import CounterAnimation from "../components/CounterAnimation";
import WhatsAppModal from "../components/WhatsAppModal";
import { useState } from "react";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<{
    name: string;
    price: string;
    description: string;
  } | undefined>(undefined);

  const openModal = (packageInfo?: { name: string; price: string; description: string }) => {
    setSelectedPackage(packageInfo);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPackage(undefined);
  };

  return (
    <main className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 min-h-screen w-full text-white">
      {/* Hero Section - Frame Control & Strong Opening */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Enhanced Background with Multiple Layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/60 via-blue-900/40 to-black/80"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-500/20 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,_transparent_0deg,_rgba(168,85,247,0.1)_60deg,_transparent_120deg)] animate-spin-slow"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-green-400 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-purple-400 rounded-full animate-ping opacity-40"></div>
        <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce opacity-50"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          {/* Enhanced Typography with Better Spacing */}
          <div className="space-y-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[0.95] bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent animate-fade-in-up">
              <span className="block">Convertimos tus ideas en</span>
              <span className="text-green-400 animate-pulse drop-shadow-[0_0_20px_rgba(34,197,94,0.4)]">negocios de $1M+</span>
            </h1>
            
            <div className="relative">
              <p className="text-xl md:text-2xl lg:text-3xl text-purple-200 font-semibold animate-fade-in-up animation-delay-200 tracking-tight">
                Creamos webs, apps y sistemas que escalan contigo.
              </p>
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/15 to-blue-600/15 blur-lg rounded-full opacity-40"></div>
            </div>
            
            <div className="relative inline-block">
              <p className="text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed animate-fade-in-up animation-delay-300 font-medium">
                Ya generamos más de <strong className="text-green-400 drop-shadow-[0_0_15px_rgba(34,197,94,0.4)]">$50 millones</strong> para <strong className="text-white">nuestros clientes</strong>.
              </p>
              <div className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-400/40 to-transparent"></div>
            </div>
          </div>
          <div className="flex justify-center animate-fade-in-up animation-delay-600 mt-12">
            <div className="relative group">
              {/* Glow Effect Background */}
              <div className="absolute -inset-1 bg-gradient-to-r from-green-400 via-green-500 to-green-600 rounded-2xl blur-lg opacity-60 group-hover:opacity-100 transition-all duration-500 animate-pulse"></div>
              
              {/* Main Button */}
              <button 
                onClick={() => openModal()}
                className="relative bg-gradient-to-r from-green-500 via-green-600 to-green-700 text-white px-12 py-4 rounded-xl font-bold text-lg hover:from-green-600 hover:via-green-700 hover:to-green-800 transition-all duration-300 transform hover:scale-105 hover:shadow-[0_15px_30px_rgba(34,197,94,0.4)] shadow-[0_8px_25px_rgba(34,197,94,0.3)] flex items-center gap-3 border border-green-400/30"
              >
                {/* Animated Icon */}
                <div className="relative">
                  <svg className="w-6 h-6 transform group-hover:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" />
                  </svg>
                  <div className="absolute inset-0 bg-white/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <span className="tracking-wide">COTIZA TU PROYECTO GRATIS</span>
                
                {/* Arrow Animation */}
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
              
              {/* Floating Particles */}
              <div className="absolute -top-2 -right-2 w-3 h-3 bg-green-300 rounded-full animate-ping opacity-60"></div>
              <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-green-400 rounded-full animate-bounce opacity-40"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof - Numbers That Matter */}
      <section className="bg-black/30 backdrop-blur-sm py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="transform hover:scale-110 transition-all duration-300 hover:bg-white/5 rounded-lg p-4">
              <CounterAnimation 
                end={51} 
                suffix="M+" 
                prefix="$" 
                duration={30000}
                className="text-4xl md:text-5xl font-black text-green-400 mb-2"
              />
              <div className="text-gray-300 font-semibold">Recaudado por nuestros clientes</div>
            </div>
            <div className="transform hover:scale-110 transition-all duration-300 hover:bg-white/5 rounded-lg p-4">
              <CounterAnimation 
                end={23} 
                duration={2500}
                className="text-4xl md:text-5xl font-black text-blue-400 mb-2"
              />
              <div className="text-gray-300 font-semibold">Proyectos exitosos</div>
            </div>
            <div className="transform hover:scale-110 transition-all duration-300 hover:bg-white/5 rounded-lg p-4">
              <CounterAnimation 
                end={100} 
                suffix="%" 
                duration={2800}
                className="text-4xl md:text-5xl font-black text-purple-400 mb-2"
              />
              <div className="text-gray-300 font-semibold">Clientes satisfechos</div>
            </div>
            <div className="transform hover:scale-110 transition-all duration-300 hover:bg-white/5 rounded-lg p-4">
              <CounterAnimation 
                end={24} 
                suffix="h" 
                duration={2200}
                className="text-4xl md:text-5xl font-black text-yellow-400 mb-2 inline-block"
              />
              <span className="text-4xl md:text-5xl font-black text-yellow-400 mb-2 inline-block ml-3">/</span>
              <CounterAnimation 
                end={7} 
                suffix="d" 
                duration={2200}
                className="text-4xl md:text-5xl font-black text-yellow-400 mb-2 inline-block ml-3"
              />
              <div className="text-gray-300 font-semibold">Disponibilidad</div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Agitation - Simplified */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black mb-8">¿Te suena familiar?</h2>
          <div className="grid md:grid-cols-2 gap-8 text-center">
            <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-8 transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-15 h-15 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-red-300">Presupuestos que explotan</h3>
              <p className="text-gray-300 text-lg">Te prometen $20K y terminas pagando $80K por algo que no funciona.</p>
            </div>
            <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-8 transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-10 h-10 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-red-300">Programadores que desaparecen</h3>
              <p className="text-gray-300 text-lg">Pagas por adelantado y después de 2 semanas... silencio total.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Solution - Main Services */}
      <section id="servicios" className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-8">Nuestros Servicios Principales</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Especialistas en crear <strong className="text-white">ecosistemas digitales completos</strong> que generan ingresos desde el día uno.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Web Development */}
            <div className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 backdrop-blur-sm border border-blue-500/40 rounded-2xl p-8 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl text-center">
              <div className="w-20 h-20 bg-blue-500/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                
                <svg className="w-12 h-12 text-purple-300" fill="none" stroke="#93c5fd" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-blue-300">Páginas Web Profesionales</h3>
              <p className="text-gray-300 mb-4">Sitios web que convierten visitantes en clientes y aumentan tus ventas online.</p>
              <ul className="text-gray-300 space-y-2 text-left">
                <li>✅ <strong>Más clientes:</strong> Diseño que convierte</li>
                <li>✅ <strong>Mayor credibilidad:</strong> Presencia profesional</li>
                <li>✅ <strong>SEO optimizado:</strong> Aparece en Google</li>
              </ul>
              <button 
                onClick={() => openModal({ name: 'Página Web Profesional', price: '$15,000', description: 'Sitio web completo con diseño profesional y SEO' })}
                className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all"
              >
                Quiero mi sitio web
              </button>
            </div>

            {/* Mobile Apps */}
            <div className="bg-gradient-to-br from-green-900/50 to-blue-900/50 backdrop-blur-sm border border-green-500/40 rounded-2xl p-8 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl text-center">
              <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-12 h-12 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a1 1 0 001-1V4a1 1 0 00-1-1H8a1 1 0 00-1 1v16a1 1 0 001 1z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-green-300">Apps Móviles</h3>
              <p className="text-gray-300 mb-4">Aplicaciones nativas que conectan directamente con tus clientes en sus teléfonos.</p>
              <ul className="text-gray-300 space-y-2 text-left">
                <li>✅ <strong>Conexión directa:</strong> Con tus clientes 24/7</li>
                <li>✅ <strong>Aumentar ventas:</strong> Notificaciones y ofertas</li>
                <li>✅ <strong>Fidelización:</strong> Experiencia única</li>
              </ul>
              <button 
                onClick={() => openModal({ name: 'App Móvil Profesional', price: '$35,000', description: 'Aplicación móvil nativa para iOS y Android' })}
                className="mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-all"
              >
                Quiero mi app
              </button>
            </div>

            {/* Complete Systems */}
            <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-sm border border-purple-500/40 rounded-2xl p-8 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl text-center">
              <div className="w-20 h-20 bg-purple-500/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-12 h-12 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-purple-300">Sistemas Completos</h3>
              <p className="text-gray-300 mb-4">Automatización total de tu negocio: CRM, inventarios, facturación y más.</p>
              <ul className="text-gray-300 space-y-2 text-left">
                <li>✅ <strong>Ahorro de tiempo:</strong> Automatización total</li>
                <li>✅ <strong>Control total:</strong> Reportes en tiempo real</li>
                <li>✅ <strong>Escalabilidad:</strong> Crece sin límites</li>
              </ul>
              <button 
                onClick={() => openModal({ name: 'Sistema Completo', price: '$85,000', description: 'Ecosistema digital completo con automatización' })}
                className="mt-6 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all"
              >
                Quiero automatizar
              </button>
            </div>
          </div>

          {/* Additional Services */}
          <div className="text-center">
            <p className="text-gray-400 mb-4">También ofrecemos:</p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-gray-800/50 px-4 py-2 rounded-full text-gray-300">Landing Pages</span>
              <span className="bg-gray-800/50 px-4 py-2 rounded-full text-gray-300">E-commerce</span>
              <span className="bg-gray-800/50 px-4 py-2 rounded-full text-gray-300">Automatización WhatsApp</span>
              <span className="bg-gray-800/50 px-4 py-2 rounded-full text-gray-300">Integración de Pagos</span>
              <span className="bg-gray-800/50 px-4 py-2 rounded-full text-gray-300">Consultoría Digital</span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Enhanced with Results */}
      <section id="casos" className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-8">Casos de éxito reales</h2>
          <p className="text-xl text-gray-300">Resultados comprobados de nuestros clientes</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-green-900/30 to-blue-900/30 backdrop-blur-sm rounded-2xl p-8 border border-green-500/40">
            <div className="flex items-center gap-4 mb-6">
              <Image 
                src="/mercado-logo.svg" 
                alt="Mercado a la Mano Logo" 
                width={100} 
                height={60} 
                className="rounded-lg p-2"
              />
              <div>
                <h3 className="text-2xl font-bold text-white">Mercado a la Mano</h3>
                <p className="text-gray-400">Plataforma de comercio local</p>
                <a href="https://www.mercadoalamano.com" target="_blank" className="text-gray-200 text-sm">www.mercadoalamano.com</a>
              </div>
            </div>
            <blockquote className="text-gray-300 mb-6 italic text-lg">
              "Pasamos de una simple idea a superar el millón de pesos en facturación mensual, y seguimos escalando. Todo nuestro ecosistema digital —desde la web hasta el CRM, incluyendo la app móvil que aún están desarrollando— fue construido por WeLoveCode, quienes se han convertido en un socio clave en nuestro crecimiento."
            </blockquote>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-green-900/40 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-green-400">+400%</div>
                <div className="text-sm text-gray-400">Aumento en ventas</div>
              </div>
              <div className="bg-green-900/40 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-green-400">$1M+</div>
                <div className="text-sm text-gray-400">Ventas mensuales</div>
              </div>
            </div>
            <div className="mt-4 text-right">
              <p className="text-gray-400 text-sm">- Jorge de la Mora Menéndez, CEO</p>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/40">
            <div className="flex items-center gap-4 mb-6">
              <Image 
                src="/rilsa-logo.webp" 
                alt="RILSA Logo" 
                width={60} 
                height={60} 
                className="rounded-lg"
              />
              <div>
                <h3 className="text-2xl font-bold text-white">RILSA</h3>
                <p className="text-gray-400">Empresa de logística</p>
                <a href="https://www.rilsa.mx" target="_blank" className="text-gray-200 text-sm">www.rilsa.mx</a>
                </div>
            </div>
            <blockquote className="text-gray-300 mb-6 italic text-lg">
              "WeLoveCode revolucionó nuestra operación. Crearon un algoritmo inteligente para búsqueda de productos con equivalencias por marcas, automatizaron nuestras cotizaciones de +10 horas a 5 minutos, y desarrollaron un CRM completo para administrar bodegas e inventario de más de 100,000 productos."
            </blockquote>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-purple-900/40 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-purple-400">90%</div>
                <div className="text-sm text-gray-400">Procesos automatizados</div>
              </div>
              <div className="bg-purple-900/40 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-purple-400">+3,000 hrs</div>
                <div className="text-sm text-gray-400">Ahorradas mensuales</div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button 
            onClick={() => openModal()}
            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-purple-700 hover:to-blue-700 transition-all transform hover:scale-105"
          >
            Quiero resultados como estos
          </button>
        </div>
      </section>

      {/* Pricing - Clear Packages */}
      <section id="precios" className="bg-black/50 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">Elige tu paquete</h2>
            <p className="text-xl text-gray-300">Precios transparentes. Resultados garantizados.</p>
            <div className="bg-red-600/20 border border-red-500 rounded-lg p-4 mt-6 max-w-2xl mx-auto">
              <p className="text-red-300 font-bold flex items-center justify-center gap-2">
                🔥 OFERTA LIMITADA: 60% DESCUENTO EN TODOS LOS PAQUETES
              </p>
              <p className="text-red-200 text-sm">
                Solo válido hasta 
               <span> {(() => {
  const date = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0);
  const formatted = date.toLocaleDateString('es-ES', { month: 'long', year: 'numeric' });
  
  // Poner primera letra en mayúscula y quitar "de"
  const finalText = formatted
    .replace(" de ", " ") // quita el "de"
    .replace(/^./, c => c.toUpperCase()); // mayúscula a la primera letra
  
  return finalText; // ej: "Septiembre 2025"
})()}</span>
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter Package */}
            <div className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 border-2 border-blue-400 rounded-2xl p-8 text-center relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                60% DESCUENTO
              </div>
              <h3 className="text-3xl font-bold mb-4 text-blue-300">Starter Web</h3>
              <div className="mb-2">
                <span className="text-2xl text-gray-500 line-through">$50,000</span>
                <div className="text-4xl font-black text-blue-400">$20,000 <span className="text-sm text-gray-400 font-normal">MXN</span></div>
              </div>
              <p className="text-gray-300 mb-6">Perfecto para emprender o renovar tu presencia digital</p>
              <ul className="text-left text-gray-300 space-y-3 mb-8">
                <li>✅ <strong>Diseño UI/UX profesional GRATIS</strong> - Ahorra $15K en diseñador</li>
                <li>✅ <strong>Sitio web profesional</strong> - Diseño que convierte</li>
                <li>✅ <strong>SEO básico</strong> - Aparece en Google</li>
                <li>✅ <strong>Responsive design</strong> - Se ve bien en móvil</li>
                <li>✅ <strong>3 meses soporte</strong> - Te acompañamos</li>
                <li>✅ <strong>Capacitación incluida</strong> - Aprende a usarlo</li>
              </ul>
              <div className="bg-blue-900/30 p-4 rounded-lg mb-6">
                <p className="text-blue-200 font-semibold">Resultado esperado:</p>
                <p className="text-gray-300">+300% más leads calificados</p>
              </div>
              <button 
                onClick={() => openModal({
                  name: "Starter Web",
                  price: "$25,000",
                  description: "Sitio web profesional completo"
                })}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all"
              >
                Quiero mi web
              </button>
            </div>

            {/* Professional Package - Most Popular */}
            <div className="bg-gradient-to-br from-green-900/40 to-blue-900/40 border-2 border-green-400 rounded-2xl p-8 text-center relative transform scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded-full font-bold">
                MÁS POPULAR
              </div>
              <div className="absolute -top-4 right-4 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                60% OFF
              </div>
              <h3 className="text-3xl font-bold mb-4 text-green-300">App Profesional</h3>
              <div className="mb-2">
                <span className="text-2xl text-gray-500 line-through">$200,000</span>
                <div className="text-4xl font-black text-green-400">$80,000 <span className="text-sm text-gray-400 font-normal">MXN</span></div>
              </div>
              <p className="text-gray-300 mb-6">Para negocios que quieren dominar su mercado</p>
              <ul className="text-left text-gray-300 space-y-3 mb-8">
                <li>✅ <strong>Diseño UI/UX profesional GRATIS</strong> - Ahorra $25K en diseñador</li>
                <li>✅ <strong>App móvil nativa</strong> - iOS y Android</li>
                <li>✅ <strong>Panel administrativo</strong> - Control total</li>
                <li>✅ <strong>Sistema de pagos</strong> - Cobra automático</li>
                <li>✅ <strong>Notificaciones push</strong> - Conecta con clientes</li>
                <li>✅ <strong>6 meses soporte</strong> - Acompañamiento extendido</li>
              </ul>
              <div className="bg-green-900/30 p-4 rounded-lg mb-6">
                <p className="text-green-200 font-semibold">Resultado esperado:</p>
                <p className="text-gray-300">+500% engagement con clientes</p>
              </div>
              <button 
                onClick={() => openModal({
                  name: "App Profesional",
                  price: "$65,000",
                  description: "Aplicación móvil completa con panel admin"
                })}
                className="w-full bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all"
              >
                Quiero mi app
              </button>
            </div>

            {/* Enterprise Package */}
            <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 border-2 border-purple-400 rounded-2xl p-8 text-center relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                60% DESCUENTO
              </div>
              <h3 className="text-3xl font-bold mb-4 text-purple-300">Sistema Completo</h3>
              <div className="mb-2">
                <span className="text-2xl text-gray-500 line-through">$400,000</span>
                <div className="text-4xl font-black text-purple-400">$160,000 <span className="text-sm text-gray-400 font-normal">MXN</span></div>
              </div>
              <p className="text-gray-300 mb-6">Ecosistema digital completo para empresas serias</p>
              <ul className="text-left text-gray-300 space-y-3 mb-8">
                <li>✅ <strong>Diseño UI/UX profesional GRATIS</strong> - Ahorra $50K en diseñador</li>
                <li>✅ <strong>Ecosistema completo</strong> - Web + App + CRM</li>
                <li>✅ <strong>Automatización total</strong> - Procesos sin intervención</li>
                <li>✅ <strong>Equipo dedicado</strong> - Tu propio team</li>
                <li>✅ <strong>Soporte 24/7</strong> - Siempre disponibles</li>
                <li>✅ <strong>Escalabilidad ilimitada</strong> - Crece sin límites</li>
              </ul>
              <div className="bg-purple-900/30 p-4 rounded-lg mb-6">
                <p className="text-purple-200 font-semibold">Resultado esperado:</p>
                <p className="text-gray-300">Ahorro de 80% en operaciones</p>
              </div>
              <button 
                onClick={() => openModal({
                  name: "Sistema Completo",
                  price: "$150,000",
                  description: "Ecosistema digital completo con automatización"
                })}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all"
              >
                Quiero transformar mi negocio
              </button>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <button 
              onClick={() => openModal()}
              className="bg-gradient-to-r from-green-500 to-green-600 text-white px-12 py-5 rounded-lg font-bold text-xl hover:from-green-600 hover:to-green-700 transition-all transform hover:scale-105 shadow-2xl flex items-center gap-3 mx-auto"
            >
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Agenda tu consulta GRATIS
            </button>
            <p className="text-gray-400 mt-4 text-sm">Respuesta garantizada en menos de 2 horas</p>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="bg-gradient-to-r from-slate-900 to-purple-900 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-8">Confianza que se gana</h2>
            <p className="text-xl text-gray-300">Nuestros resultados lo demuestran</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">5 Años</h3>
              <p className="text-gray-300">Generando millones para clientes selectos.</p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-green-500 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Elite Team</h3>
              <p className="text-gray-300">Full-stack + UX/UI + Growth. Todo en casa.</p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Sin Abandono</h3>
              <p className="text-gray-300">Mantenimiento vitalicio incluido.</p>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30">
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-6 text-white">¿Qué nos hace diferentes?</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-green-900/30 p-6 rounded-lg flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center">
                    <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-green-400 font-bold text-xl mb-2">Diseño</div>
                    <p className="text-gray-300 text-sm">Diseño integral grátis</p>
                  </div>
                </div>
                <div className="bg-blue-900/30 p-6 rounded-lg flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center">
                    <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-blue-400 font-bold text-xl mb-2">30 Días</div>
                    <p className="text-gray-300 text-sm">No funciona = dinero de vuelta.</p>
                  </div>
                </div>
                <div className="bg-purple-900/30 p-6 rounded-lg flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center">
                    <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-purple-400 font-bold text-xl mb-2">De Por Vida</div>
                    <p className="text-gray-300 text-sm">Mantenimiento incluido. Siempre.</p>
                  </div>
                </div>
              </div>
            </div>
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
            <a href="mailto:hola@welovecode.mx" className="bg-white text-purple-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl flex items-center gap-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              hola@welovecode.mx
            </a>
            <button 
              onClick={() => openModal()}
              className="bg-green-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-600 transition-all transform hover:scale-105 shadow-2xl flex items-center gap-3"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.787"/>
              </svg>
              WhatsApp Directo
            </button>
          </div>
          <p className="text-sm mt-6 opacity-75">
            Respuesta garantizada en menos de 2 horas
          </p>
        </div>
      </section>

      {/* WhatsApp Modal */}
      <WhatsAppModal 
        isOpen={isModalOpen}
        onClose={closeModal}
        selectedPackage={selectedPackage}
      />
    </main>
  );
}
