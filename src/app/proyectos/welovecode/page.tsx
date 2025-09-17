import Image from 'next/image';
import Link from 'next/link';

// Custom SVG Icons
const ArrowLeftIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
);

const ExternalLinkIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

const CodeIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

const RocketIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

export default function WeLoveCodePage() {
  const services = [
    {
      title: "Desarrollo Web",
      description: "Aplicaciones web modernas con React, Next.js y tecnologías de vanguardia",
      icon: <CodeIcon className="w-8 h-8" />
    },
    {
      title: "Aplicaciones Móviles",
      description: "Apps nativas e híbridas para iOS y Android",
      icon: <RocketIcon className="w-8 h-8" />
    },
    {
      title: "E-commerce",
      description: "Plataformas de comercio electrónico que generan ventas",
      icon: <CodeIcon className="w-8 h-8" />
    },
    {
      title: "Consultoría Tech",
      description: "Estrategia tecnológica para hacer crecer tu negocio",
      icon: <RocketIcon className="w-8 h-8" />
    }
  ];

  const projects = [
    {
      name: "Mercado a la Mano",
      description: "Marketplace que conecta productores con consumidores",
      result: "+$1M MXN/mes en facturación"
    },
    {
      name: "Zephir Jewelry",
      description: "E-commerce de joyería premium",
      result: "Incremento 300% en ventas online"
    },
    {
      name: "Client MX",
      description: "Plataforma de gestión inmobiliaria",
      result: "Automatización completa de procesos"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-purple-600 text-white py-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            href="/" 
            className="inline-flex items-center text-white hover:text-purple-200 transition-colors"
          >
            <ArrowLeftIcon className="w-5 h-5 mr-2" />
            Volver al inicio
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Image
                  src="/welovecode-logo.png"
                  alt="WeLoveCode"
                  width={80}
                  height={80}
                  className="mr-4"
                />
                <div>
                  <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                    WeLoveCode
                  </h1>
                  <p className="text-xl text-purple-600 font-medium">
                    Agencia de Desarrollo de Software
                  </p>
                </div>
              </div>
              
              <p className="text-lg text-gray-600 mb-8">
                Especializados en crear productos digitales que generan ingresos reales. 
                Transformamos ideas en aplicaciones web y móviles que impulsan el crecimiento de tu negocio.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://www.welovecode.mx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors"
                >
                  Visitar sitio web
                  <ExternalLinkIcon className="ml-2 w-4 h-4" />
                </a>
                <a
                  href="mailto:hola@welovecode.mx"
                  className="inline-flex items-center border border-purple-600 text-purple-600 px-6 py-3 rounded-lg font-medium hover:bg-purple-50 transition-colors"
                >
                  Contactar
                </a>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative w-80 h-80 bg-gradient-to-br from-purple-400 to-purple-600 rounded-3xl shadow-2xl flex items-center justify-center">
                <CodeIcon className="w-32 h-32 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nuestros Servicios
            </h2>
            <p className="text-lg text-gray-600">
              Soluciones tecnológicas que impulsan el crecimiento
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-purple-600 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Proyectos Destacados
            </h2>
            <p className="text-lg text-gray-600">
              Casos de éxito que demuestran nuestro impacto
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-purple-50 p-6 rounded-xl border border-purple-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {project.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                <div className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium">
                  {project.result}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16 bg-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Nuestra Filosofía
            </h2>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              No solo desarrollamos software, creamos soluciones que generan resultados medibles. 
              Cada línea de código tiene un propósito: hacer crecer tu negocio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-purple-200">Enfoque en resultados</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-purple-200">Soporte continuo</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">∞</div>
              <div className="text-purple-200">Pasión por el código</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            ¿Tienes un proyecto en mente?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Conversemos sobre cómo podemos transformar tu idea en una solución digital exitosa.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="mailto:hola@welovecode.mx"
              className="inline-flex items-center bg-purple-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-purple-700 transition-colors"
            >
              Iniciar proyecto
            </a>
            <a
              href="https://www.welovecode.mx"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-gray-900 transition-colors"
            >
              Ver portafolio completo
              <ExternalLinkIcon className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
