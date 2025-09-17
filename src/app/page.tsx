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
      value: 1000000,
      prefix: '>$',
      suffix: ' MXN/mes',
      label: 'Ingresos plataforma',
      description: 'Mercado a la Mano'
    },
    {
      value: 60,
      prefix: '~',
      suffix: '%',
      label: 'Debajo del súper',
      description: 'Precios competitivos'
    },
    {
      value: 50,
      prefix: '~',
      suffix: '%',
      label: 'vs Justo.mx',
      description: 'Varios productos'
    },
    {
      value: 7,
      prefix: '~',
      suffix: ' intermediarios',
      label: 'Desintermediados',
      description: 'Cadena de distribución'
    }
  ];

  const projects = [
    {
      title: 'Mercado a la Mano',
      description: 'Marketplace que conecta productores con compradores finales, eliminando intermediarios y pagando justo al campesino.',
      href: '/proyectos/mercado-a-la-mano',
      status: 'Activo - >$1M MXN/mes'
    },
    {
      title: 'WeLoveCode',
      description: 'Agencia de desarrollo de software especializada en crear productos digitales que generan ingresos.',
      href: '/proyectos/welovecode',
      status: 'Activo'
    },
    {
      title: 'Zephir Jewelry',
      description: 'Marca de joyería premium con enfoque en diseño exclusivo y experiencia de cliente.',
      href: '/proyectos/zephir-jewelry',
      status: 'Activo'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Profile Content */}
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Jorge de la Mora Menéndez
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                Emprendedor • Producto & Operaciones • Tech-driven
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center text-gray-700">
                  <span className="font-medium">Ubicación:</span>
                  <span className="ml-2">Puebla, México</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <span className="font-medium">Educación:</span>
                  <span className="ml-2">Lic. en Economía y Finanzas — Universidad Iberoamericana Puebla</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <span className="font-medium">Idiomas:</span>
                  <span className="ml-2">Español (nativo), Inglés (fluido), Francés (fluido), Italiano (básico)</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="mailto:hola@welovecode.mx"
                  className="bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors text-center"
                >
                  Contactar
                </a>
                <Link 
                  href="/proyectos/mercado-a-la-mano"
                  className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors text-center"
                >
                  Ver Proyectos
                </Link>
              </div>
            </div>

            {/* Profile Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-64 h-64 lg:w-80 lg:h-80">
                <Image
                  src="/yoFoto.webp"
                  alt="Jorge de la Mora Menéndez"
                  fill
                  className="rounded-full object-cover shadow-xl"
                  priority
                />
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
                    duration={2000}
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
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Proyectos Destacados
            </h2>
            <p className="text-lg text-gray-600">
              Empresas que he fundado y desarrollado
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {project.title}
                  </h3>
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                    {project.status}
                  </span>
                </div>
                <p className="text-gray-600 mb-6">
                  {project.description}
                </p>
                <Link 
                  href={project.href}
                  className="inline-flex items-center text-gray-900 font-medium hover:text-gray-700 transition-colors"
                >
                  Ver detalles
                  <ArrowRightIcon className="ml-2 w-4 h-4" />
                </Link>
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

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <a 
              href="https://www.mercadoalamano.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              mercadoalamano.com
              <ExternalLinkIcon className="ml-2 w-4 h-4" />
            </a>
            <a 
              href="https://www.welovecode.mx" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              welovecode.mx
              <ExternalLinkIcon className="ml-2 w-4 h-4" />
            </a>
            <a 
              href="https://www.zephir.mx" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              zephir.mx
              <ExternalLinkIcon className="ml-2 w-4 h-4" />
            </a>
            <a 
              href="https://www.client.mx" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              client.mx
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
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
            href="mailto:hola@welovecode.mx"
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
