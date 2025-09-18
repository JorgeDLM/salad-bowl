'use client';

import Image from 'next/image';
import Link from 'next/link';
import CounterAnimation from '@/components/CounterAnimation';
import ContactModal from '@/components/ContactModal';
import { useState } from 'react';

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

  const kpis = [
    {
      value: 30000000,
      prefix: '+$',
      suffix: '',
      label: 'Vendidos online',
      description: 'Todos mis emprendimientos',
      duration: 50000
    },
    {
      value: 3,
      prefix: '',
      suffix: '',
      label: 'Emprendimientos exitosos',
      description: 'Activos y rentables',
      duration: 1500
    },
    {
      value: 5,
      prefix: '',
      suffix: '',
      label: 'Empleados',
      description: 'Equipo actual',
      duration: 1000
    },
    {
      value: 9,
      prefix: '',
      suffix: ' años',
      label: 'Experiencia',
      description: 'Como emprendedor',
      duration: 2000
    }
  ];

  const projects = [
    {
      title: 'Mercado a la Mano',
      description: 'Marketplace que conecta productores con compradores finales, eliminando intermediarios y pagando justo al campesino.',
      href: '/proyectos/mercado-a-la-mano',
      status: 'Activo',
      revenue: '+$1,000,000 MXN/mes',
      category: 'Marketplace'
    },
    {
      title: 'Zephir Jewelry',
      description: 'Marca de joyería premium sustentable con enfoque en diseño exclusivo y experiencia de cliente.',
      href: '/proyectos/zephir-jewelry',
      status: 'Activo',
      revenue: null,
      category: 'E-commerce'
    },
    {
      title: 'WeLoveCode',
      description: 'Agencia de desarrollo de software especializada en crear productos digitales que generan ingresos.',
      href: '/proyectos/welovecode',
      status: 'Activo',
      revenue: null,
      category: 'Desarrollo'
    },
  ];

  const education = [
    {
      title: 'TuMejorYo',
      description: 'Diplomado especializado en impulsar emprendimientos con base a las emociones positivas y bienestar subjetivo.',
      href: 'https://www.tumejoryo.mx/',
      type: 'Diplomado',
      focus: 'Emprendimiento & Emociones Positivas'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 via-blue-50 to-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Profile Image - First on mobile, second on desktop */}
            <div className="flex justify-center lg:justify-end order-1 lg:order-2">
              <div className="relative">
                <div className="w-72 h-72 lg:w-96 lg:h-96 relative">
                  <Image
                    src="/yoFoto.webp"
                    alt="Jorge de la Mora Menéndez"
                    fill
                    className="rounded-2xl object-cover shadow-2xl"
                    priority
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-100 rounded-full opacity-60 -z-10"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-slate-100 rounded-full opacity-60 -z-10"></div>
              </div>
            </div>

            {/* Profile Content - Second on mobile, first on desktop */}
            <div className="space-y-8 order-2 lg:order-1">
              <div>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
                  Jorge de la Mora Menéndez
                </h1>
                <p className="text-xl lg:text-2xl text-gray-600 font-medium">
                  Emprendedor • Producto & Operaciones • Tech-driven
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-6">
                <div className="space-y-3">
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Ubicación</span>
                    <span className="text-gray-900 font-medium">Puebla, México</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Educación</span>
                    <span className="text-gray-900 font-medium">Lic. en Economía y Finanzas</span>
                    <span className="text-sm text-gray-600">Universidad Iberoamericana Puebla</span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Idiomas</span>
                  <div className="space-y-1">
                    <span className="block text-gray-900 font-medium">- Español (nativo)</span>
                    <span className="block text-gray-900 font-medium">- Inglés (fluido)</span>
                    <span className="block text-gray-900 font-medium">- Francés (fluido)</span>
                    <span className="block text-gray-900 font-medium">- Italiano (básico)</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => setIsContactModalOpen(true)}
                  className="bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 text-center shadow-lg hover:shadow-xl"
                >
                  Contactar
                </button>
                <Link 
                  href="#proyectos"
                  className="border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-900 hover:text-white transition-all duration-300 text-center"
                >
                  Ver Proyectos
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Quién Soy
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-slate-600 via-gray-600 to-zinc-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Más allá de los números y proyectos, estas son las motivaciones que impulsan todo lo que hago
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="group hover:scale-105 transition-all duration-300">
              <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 h-full hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <PurposeIcon className="w-7 h-7 text-slate-100" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Mi Propósito
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Soy un hombre al que le llena <strong>impulsar a otros a dar su mejor versión</strong>, 
                  ya sea en negocios, emocional o espiritual. En ello encuentro yo igual impulso y 
                  construyo mi mejor versión.
                </p>
              </div>
            </div>

            <div className="group hover:scale-105 transition-all duration-300">
              <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 h-full hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <MotivationIcon className="w-7 h-7 text-gray-100" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Lo Que Me Mueve
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Me gusta <strong>desarrollar ideas, crear productos y generar impacto positivo</strong> en la sociedad. 
                  La programación me permite desarrollar tecnología para hacer más eficientes mis problemas del día a día.
                </p>
              </div>
            </div>

            <div className="group hover:scale-105 transition-all duration-300">
              <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 h-full hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-gradient-to-br from-zinc-700 to-zinc-800 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <PassionIcon className="w-7 h-7 text-zinc-100" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Mis Pasiones
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Encontré pasión en la <strong>joyería</strong> - las piedras y piezas que transmiten belleza.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Me encanta la <strong>naturaleza, la disciplina, el ejercicio</strong>, compartir y debatir ideas, 
                  y explorar las emociones y la psique.
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 p-10 rounded-3xl shadow-2xl text-center">
              <blockquote className="text-2xl lg:text-xl font-medium text-white italic leading-relaxed">
                "En cada proyecto busco crear valor real que transforme vidas y genere impacto positivo duradero."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* KPIs Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Métricas de Impacto
            </h2>
            <p className="text-lg text-gray-600">
              Resultados medibles en mis proyectos emprendedores
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {kpis.map((kpi, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                  <CounterAnimation
                    end={kpi.value}
                    prefix={kpi.prefix}
                    suffix={kpi.suffix}
                    duration={kpi.duration}
                  />
                </div>
                <div className="text-sm font-medium text-gray-900 mb-1">
                  {kpi.label}
                </div>
                <div className="text-sm text-gray-600">
                  {kpi.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="proyectos" className="py-20 bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Emprendimientos Destacados
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Empresas que he fundado y desarrollado, cada una con un enfoque único en su industria
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors">
                        {project.title}
                      </h3>
                      <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium">
                        {project.status}
                      </span>
                    </div>
                    <span className="inline-block text-sm bg-gray-100 text-gray-600 px-3 py-1 rounded-full font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                {project.revenue && (
                  <div className="mb-4 p-3 bg-green-50 rounded-lg border-l-4 border-green-400">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                      </svg>
                      <span className="text-green-800 font-semibold">{project.revenue}</span>
                    </div>
                  </div>
                )}
                
                <p className="text-gray-600 mb-8 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex items-center justify-between">
                  {project.href.startsWith('http') ? (
                    <a 
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-gray-900 font-semibold hover:text-gray-700 transition-colors group"
                    >
                      Visitar sitio web
                      <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  ) : (
                    <Link 
                      href={project.href}
                      className="inline-flex items-center text-gray-900 font-semibold hover:text-gray-700 transition-colors group"
                    >
                      Ver detalles
                      <ArrowRightIcon className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Formación Especializada
            </h2>
            <p className="text-lg text-gray-600">
              Diplomados y cursos especializados que complementan mi experiencia emprendedora
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            {education.map((course, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg border border-purple-100 p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-bold text-gray-900">
                        {course.title}
                      </h3>
                      <span className="text-xs bg-purple-100 text-purple-700 px-3 py-1 rounded-full font-medium">
                        {course.type}
                      </span>
                    </div>
                    <span className="inline-block text-sm bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full font-medium">
                      {course.focus}
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {course.description}
                </p>
                
                <div className="flex items-center">
                  <a 
                    href={course.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-700 transition-colors group"
                  >
                    Conocer más sobre el diplomado
                    <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Links Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Enlaces de Interés
            </h2>
            <p className="text-lg text-gray-600">
              Visita mis proyectos activos
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <a 
              href="https://www.mercadoalamano.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              mercadoalamano.com
              <ExternalLinkIcon className="ml-2 w-4 h-4" />
            </a>
            <a 
              href="https://www.welovecode.mx" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              welovecode.mx
              <ExternalLinkIcon className="ml-2 w-4 h-4" />
            </a>
            <a 
              href="https://www.zephir.mx" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              zephir.mx
              <ExternalLinkIcon className="ml-2 w-4 h-4" />
            </a>
            <a 
              href="https://www.client.mx" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              client.mx
              <ExternalLinkIcon className="ml-2 w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            ¿Interesado en colaborar?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Estoy siempre abierto a nuevas oportunidades y proyectos innovadores
          </p>
          <button 
            onClick={() => setIsContactModalOpen(true)}
            className="inline-flex items-center bg-white text-gray-900 px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors"
          >
            Enviar mensaje
            <MailIcon className="ml-2 w-5 h-5" />
          </button>
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
