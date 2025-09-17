import Image from 'next/image';
import Link from 'next/link';
import CounterAnimation from '@/components/CounterAnimation';

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

export default function HomePage() {
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
                <a 
                  href="mailto:palombaco@live.com"
                  className="bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 text-center shadow-lg hover:shadow-xl"
                >
                  Contactar
                </a>
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
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
          <a 
            href="mailto:palombaco@live.com"
            className="inline-flex items-center bg-white text-gray-900 px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors"
          >
            Enviar mensaje
            <MailIcon className="ml-2 w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
}
