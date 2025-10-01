'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import ContactModal from '@/components/ContactModal';
import CounterAnimation from '@/components/CounterAnimation';
import ScrollAnimation from '@/components/ScrollAnimation';
import ScrollProgress from '@/components/ScrollProgress';
import { useParallax } from '@/hooks/useScrollAnimation';

// Custom SVG Icons
const ArrowRightIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

const ExternalLinkIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

const MailIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const PurposeIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);

const MotivationIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

const PassionIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
  </svg>
);

export default function HomePage() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const scrollY = useParallax();

  const kpis = [
    {
      value: 100,
      prefix: '',
      suffix: 'M+',
      label: 'Seguidores gestionados',
      description: 'Cuentas de redes sociales',
      duration: 3000
    },
    {
      value: 50,
      prefix: '',
      suffix: '+',
      label: 'Personas lideradas',
      description: 'Equipos multidisciplinarios',
      duration: 2000
    },
    {
      value: 30,
      prefix: '',
      suffix: '%',
      label: 'Reducción costos',
      description: 'Adquisición de leads',
      duration: 2500
    },
    {
      value: 8,
      prefix: '',
      suffix: ' años',
      label: 'Experiencia',
      description: 'Marketing digital',
      duration: 2000
    }
  ];

  const projects = [
    {
      title: 'BluCactus MX',
      role: 'Paid Media Team Manager',
      impact: '30% reducción CPL',
      description: 'Lideré 15 especialistas gestionando $500K+ mensuales',
      href: '#',
      period: '2023-2025',
      logo: '/bluecactus-logo.png'
    },
    {
      title: 'Kraken Videos',
      role: 'Marketing Manager', 
      impact: '100M+ seguidores',
      description: 'Gestión de equipos de 50+ personas y audiencias masivas',
      href: '/proyectos/kraken-videos',
      period: '2024',
      logo: '/kraken-logo.jpg'
    },
    {
      title: 'Somos Volt',
      role: 'Creative Project Manager',
      impact: '9+ proyectos simultáneos',
      description: 'Metodologías ágiles y gestión de clientes premium',
      href: '/proyectos/somos-volt',
      period: '2025',
      logo: '/somosvolt-logo.webp'
    },
    {
      title: 'Kadabra Productions',
      role: 'Social Media Manager',
      impact: '50% crecimiento',
      description: 'Marketing intercultural en Marruecos',
      href: '#',
      period: '2018-2020',
      logo: '/kadabra-logo2.jpg'
    }
  ];

  const education = [
    {
      title: 'Bachelor of Design & Advertising Production',
      description: 'Formación integral en diseño creativo y producción publicitaria, combinando fundamentos artísticos con estrategias de comunicación efectiva.',
      href: '#',
      type: '2010 - 2016',
      focus: 'UPAEP, Puebla, México'
    },
    {
      title: 'Community Manager & Content Marketing',
      description: 'Especialización en gestión de comunidades digitales y estrategias de marketing de contenidos para maximizar engagement y conversión.',
      href: '#',
      type: '2015',
      focus: 'Aula CM, Madrid, España'
    }
  ];

  return (
    <div className="min-h-screen">
      <ScrollProgress />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 via-neutral-50 to-stone-50 py-20 lg:py-32 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-amber-200/10 to-orange-200/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-neutral-200/10 to-gray-200/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Profile Image - First on mobile, second on desktop */}
            <ScrollAnimation animation="scaleIn" delay={200} className="flex justify-center lg:justify-end order-1 lg:order-2">
              <div className="relative">
                <div className="w-72 h-72 lg:w-96 lg:h-96 relative">
                  <Image
                    src="/adriana-foto.webp"
                    alt="Marcela Adriana Mejía Rivera"
                    fill
                    className="rounded-2xl object-cover shadow-2xl"
                    priority
                  />
                </div>
                {/* Decorative elements with parallax */}
                <div 
                  className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-amber-400 to-orange-400 rounded-full opacity-30 -z-10 animate-bounce"
                  style={{ transform: `translateY(${scrollY * 0.1}px)` }}
                ></div>
                <div 
                  className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-neutral-400 to-gray-400 rounded-full opacity-30 -z-10 animate-pulse"
                  style={{ transform: `translateY(${scrollY * -0.1}px)` }}
                ></div>
                <div 
                  className="absolute top-1/2 -right-8 w-16 h-16 bg-gradient-to-br from-orange-400 to-amber-400 rounded-full opacity-25 -z-10 animate-ping"
                  style={{ transform: `translateY(${scrollY * 0.05}px)` }}
                ></div>
              </div>
            </ScrollAnimation>

            {/* Profile Content - Second on mobile, first on desktop */}
            <div className="space-y-8 order-2 lg:order-1">
              <ScrollAnimation animation="fadeInLeft" delay={0}>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
                  Adriana Mejía
                </h1>
                <ScrollAnimation animation="fadeInUp" delay={100}>
                  <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-4">
                    <span className="px-4 py-2 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-full text-sm font-semibold shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"/>
                        <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"/>
                      </svg>
                      Marketing Strategist
                    </span>
                    <span className="px-4 py-2 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-full text-sm font-semibold shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                      </svg>
                      Team Leadership
                    </span>
                    <span className="px-4 py-2 bg-gradient-to-r from-neutral-700 to-gray-800 text-white rounded-full text-sm font-semibold shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"/>
                      </svg>
                      Digital Performance
                    </span>
                  </div>
                </ScrollAnimation>
              </ScrollAnimation>
              
              <ScrollAnimation animation="fadeInUp" delay={200}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-6">
                <div className="space-y-3">
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Ubicación</span>
                    <span className="text-gray-900 font-medium">Puebla, México</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Educación</span>
                    <span className="text-gray-900 font-medium">Bachelor of Design & Advertising Production</span>
                    <span className="text-sm text-gray-600">UPAEP, Puebla, México</span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Idiomas</span>
                  <div className="space-y-1">
                    <span className="block text-gray-900 font-medium">- Español (nativo)</span>
                    <span className="block text-gray-900 font-medium">- Inglés (profesional)</span>
                    <span className="block text-gray-900 font-medium">- Francés (básico)</span>
                  </div>
                </div>
                </div>
              </ScrollAnimation>

              <ScrollAnimation animation="fadeInUp" delay={300}>
                <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => setIsContactModalOpen(true)}
                  className="bg-gradient-to-r from-gray-900 to-black text-white px-8 py-4 rounded-full font-semibold hover:from-gray-800 hover:to-gray-900 transition-all duration-300 text-center shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-1 flex items-center gap-2 justify-center"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd"/>
                  </svg>
                  ¡Contáctame!
                </button>
                <Link 
                  href="#proyectos"
                  className="border-2 border-amber-600 text-amber-600 px-8 py-4 rounded-full font-semibold hover:bg-amber-600 hover:text-white transition-all duration-300 text-center transform hover:scale-105 hover:-translate-y-1 flex items-center gap-2 justify-center"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"/>
                  </svg>
                  Ver Experiencia
                </Link>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation animation="fadeInUp" className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-900 bg-clip-text text-transparent mb-6">
              Más allá del trabajo
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Lo que realmente me mueve es <strong>conectar con personas</strong> y crear en espacios donde la creatividad cobra vida
            </p>
          </ScrollAnimation>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Personal Values */}
            <ScrollAnimation animation="fadeInLeft" delay={200}>
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                    Lo que me llena
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Conocer y conectar con gente nueva</strong> es lo que más disfruto. Me energiza desenvolverme en <strong>espacios creativos</strong> donde puedo desarrollar campañas de marketing y publicidad que realmente impacten.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-gray-50 to-neutral-50 rounded-2xl p-6 border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
                    Mis valores
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white px-3 py-2 rounded-lg text-sm font-medium text-gray-700 text-center border border-gray-200">
                      Responsabilidad
                    </div>
                    <div className="bg-white px-3 py-2 rounded-lg text-sm font-medium text-gray-700 text-center border border-gray-200">
                      Liderazgo
                    </div>
                    <div className="bg-white px-3 py-2 rounded-lg text-sm font-medium text-gray-700 text-center border border-gray-200">
                      Perseverancia
                    </div>
                    <div className="bg-white px-3 py-2 rounded-lg text-sm font-medium text-gray-700 text-center border border-gray-200">
                      Disciplina
                    </div>
                    <div className="bg-white px-3 py-2 rounded-lg text-sm font-medium text-gray-700 text-center border border-gray-200">
                      Empatía
                    </div>
                    <div className="bg-white px-3 py-2 rounded-lg text-sm font-medium text-gray-700 text-center border border-gray-200">
                      Orden
                    </div>
                    <div className="bg-white px-3 py-2 rounded-lg text-sm font-medium text-gray-700 text-center border border-gray-200">
                      Armonía
                    </div>
                    <div className="bg-white px-3 py-2 rounded-lg text-sm font-medium text-gray-700 text-center border border-gray-200">
                      Respeto
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            {/* Personal Interests */}
            <ScrollAnimation animation="fadeInRight" delay={400}>
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-neutral-50 to-stone-50 rounded-2xl p-6 border border-neutral-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <div className="w-3 h-3 bg-neutral-600 rounded-full"></div>
                    Mis pasiones
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-200">
                      <span className="text-2xl">🧗‍♀️</span>
                      <div>
                        <p className="font-semibold text-gray-900">Escalada</p>
                        <p className="text-sm text-gray-600">Desafíos que requieren estrategia y perseverancia</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-200">
                      <span className="text-2xl">✈️</span>
                      <div>
                        <p className="font-semibold text-gray-900">Viajar</p>
                        <p className="text-sm text-gray-600">Conocer culturas y conectar con personas</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-200">
                      <span className="text-2xl">🧘‍♀️</span>
                      <div>
                        <p className="font-semibold text-gray-900">Bienestar holístico</p>
                        <p className="text-sm text-gray-600">Equilibrio entre mente, cuerpo y espíritu</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-stone-50 to-gray-50 rounded-2xl p-6 border border-stone-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <div className="w-3 h-3 bg-stone-600 rounded-full"></div>
                    Mi esencia
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Soy una persona <strong>tranquila y hogareña</strong>, que valora profundamente la familia. Vivo sin vicios, buscando siempre la <strong>paz interior</strong> y el equilibrio en todo lo que hago.
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* KPIs Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-neutral-900 to-black relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-br from-neutral-500/10 to-gray-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollAnimation animation="fadeInUp" className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 flex items-center justify-center gap-4">
              <svg className="w-12 h-12 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"/>
                <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"/>
              </svg>
              ¡Mis Números Hablan!
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Resultados que cualquier empresa querría tener
            </p>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {kpis.map((kpi, index) => {
              const gradients = [
                'from-amber-500 to-orange-500',
                'from-gray-400 to-gray-600', 
                'from-orange-500 to-amber-600',
                'from-neutral-400 to-gray-500'
              ];
              const bgGradients = [
                'from-amber-500/10 to-orange-500/10',
                'from-gray-500/10 to-neutral-500/10',
                'from-orange-500/10 to-amber-600/10', 
                'from-neutral-500/10 to-gray-500/10'
              ];
              return (
                <ScrollAnimation key={index} animation="slideInUp" delay={index * 100}>
                  <div className={`group text-center p-8 bg-gradient-to-br ${bgGradients[index]} backdrop-blur-sm rounded-3xl border border-white/20 hover:border-white/40 transition-all duration-500 hover:scale-105 hover:-translate-y-2 shadow-2xl hover:shadow-purple-500/25`}>
                  <div className={`text-5xl lg:text-6xl font-black bg-gradient-to-r ${gradients[index]} bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-500`}>
                    <CounterAnimation
                      end={kpi.value}
                      prefix={kpi.prefix}
                      suffix={kpi.suffix}
                      duration={kpi.duration}
                    />
                  </div>
                  <div className="text-lg font-bold text-white mb-2 group-hover:text-gray-100 transition-colors">
                    {kpi.label}
                  </div>
                  <div className="text-sm text-gray-300 group-hover:text-gray-200 transition-colors">
                    {kpi.description}
                  </div>
                  {/* Decorative element */}
                    <div className={`w-12 h-1 bg-gradient-to-r ${gradients[index]} mx-auto mt-4 rounded-full group-hover:w-16 transition-all duration-500`}></div>
                  </div>
                </ScrollAnimation>
              );
            })}
          </div>
          
          {/* Call to action in KPIs section */}
          <ScrollAnimation animation="scaleIn" delay={500} className="text-center mt-16">
            <p className="text-2xl text-white font-semibold mb-6 flex items-center justify-center gap-3">
              <svg className="w-8 h-8 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"/>
              </svg>
              ¿Impresionante, verdad?
            </p>
            <button 
              onClick={() => setIsContactModalOpen(true)}
              className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:from-amber-500 hover:to-orange-500 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-2xl hover:shadow-amber-500/50 flex items-center gap-3 mx-auto"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd"/>
              </svg>
              ¡Hablemos de tu proyecto!
            </button>
          </ScrollAnimation>
        </div>
      </section>

      {/* Projects Section */}
      <section id="proyectos" className="py-20 bg-gradient-to-br from-stone-50 via-neutral-50 to-gray-50 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-br from-amber-200/10 to-orange-200/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-gradient-to-br from-neutral-200/10 to-gray-200/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-900 bg-clip-text text-transparent mb-4">
              Experiencia Destacada
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Proyectos que demuestran mi capacidad de generar resultados
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <ScrollAnimation key={index} animation="fadeInUp" delay={index * 100}>
                <div className="group bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl hover:border-amber-300 transition-all duration-300 hover:-translate-y-1">
                  {/* Header with Logo */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`relative flex-shrink-0 ${project.title === 'Somos Volt' ? 'w-16 h-12' : 'w-12 h-12'}`}>
                        <Image
                          src={project.logo}
                          alt={`${project.title} logo`}
                          fill
                          className="object-contain rounded-lg"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                        <p className="text-sm text-amber-600 font-medium">{project.role}</p>
                      </div>
                    </div>
                    <span className="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded-full font-semibold">
                      {project.period}
                    </span>
                  </div>
                  
                  {/* Impact Metric */}
                  <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-3 mb-4">
                    <div className="text-2xl font-black text-amber-600 mb-1">{project.impact}</div>
                    <p className="text-sm text-gray-600">{project.description}</p>
                  </div>
                  
                  {/* CTA */}
                  {project.href !== '#' ? (
                    <Link 
                      href={project.href}
                      className="inline-flex items-center text-amber-600 font-semibold hover:text-amber-700 transition-colors group"
                    >
                      Ver caso completo
                      <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  ) : (
                    <span className="text-gray-400 text-sm">Caso de estudio próximamente</span>
                  )}
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 bg-gradient-to-br from-neutral-100 via-gray-100 to-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation animation="fadeInUp" className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-900 bg-clip-text text-transparent mb-4">
              Formación Académica
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Educación que respalda mi expertise
            </p>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {education.map((course, index) => (
              <ScrollAnimation key={index} animation="fadeInUp" delay={index * 100}>
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl hover:border-amber-300 transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {course.title}
                      </h3>
                      <p className="text-sm text-amber-600 font-medium">{course.focus}</p>
                    </div>
                    <span className="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded-full font-semibold">
                      {course.type}
                    </span>
                  </div>
                  
                  <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-3">
                    <p className="text-sm text-gray-600">{course.description}</p>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 via-neutral-50 to-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation animation="fadeInUp" className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-900 bg-clip-text text-transparent mb-4">
              Herramientas & Competencias
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Stack tecnológico que domino
            </p>
          </ScrollAnimation>

          <div className="max-w-5xl mx-auto">
            {/* Categorías de herramientas */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Marketing & Analytics */}
              <ScrollAnimation animation="fadeInUp" delay={0}>
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                    Marketing & Analytics
                  </h3>
                  <div className="space-y-2">
                    <div className="bg-gray-900 text-white px-3 py-2 rounded-lg text-sm font-medium text-center">
                      Meta Ads
                    </div>
                    <div className="bg-white border border-gray-200 text-gray-700 px-3 py-2 rounded-lg text-sm font-medium text-center">
                      Google Analytics
                    </div>
                    <div className="bg-white border border-gray-200 text-gray-700 px-3 py-2 rounded-lg text-sm font-medium text-center">
                      Looker Studio
                    </div>
                  </div>
                </div>
              </ScrollAnimation>

              {/* Design & Creative */}
              <ScrollAnimation animation="fadeInUp" delay={100}>
                <div className="bg-gradient-to-br from-gray-50 to-neutral-50 rounded-2xl p-6 border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 bg-gray-600 rounded-full"></span>
                    Design & Creative
                  </h3>
                  <div className="space-y-2">
                    <div className="bg-white border border-gray-200 text-gray-700 px-3 py-2 rounded-lg text-sm font-medium text-center">
                      Figma
                    </div>
                    <div className="bg-white border border-gray-200 text-gray-700 px-3 py-2 rounded-lg text-sm font-medium text-center">
                      Adobe Creative
                    </div>
                  </div>
                </div>
              </ScrollAnimation>

              {/* Project Management */}
              <ScrollAnimation animation="fadeInUp" delay={200}>
                <div className="bg-gradient-to-br from-neutral-50 to-stone-50 rounded-2xl p-6 border border-neutral-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 bg-neutral-600 rounded-full"></span>
                    Project Management
                  </h3>
                  <div className="space-y-2">
                    <div className="bg-white border border-gray-200 text-gray-700 px-3 py-2 rounded-lg text-sm font-medium text-center">
                      Scrum & Kanban
                    </div>
                    <div className="bg-white border border-gray-200 text-gray-700 px-3 py-2 rounded-lg text-sm font-medium text-center">
                      Asana
                    </div>
                    <div className="bg-white border border-gray-200 text-gray-700 px-3 py-2 rounded-lg text-sm font-medium text-center">
                      Monday.com
                    </div>
                    <div className="bg-white border border-gray-200 text-gray-700 px-3 py-2 rounded-lg text-sm font-medium text-center">
                      Slack
                    </div>
                    <div className="bg-white border border-gray-200 text-gray-700 px-3 py-2 rounded-lg text-sm font-medium text-center">
                      Notion
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Modal */}
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </div>
  );
}
