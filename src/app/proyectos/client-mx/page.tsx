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

const BuildingIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

const ChartIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

const UsersIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
  </svg>
);

export default function ClientMXPage() {
  const features = [
    {
      title: "Gestión de Propiedades",
      description: "Sistema completo para administrar inventario inmobiliario",
      icon: <BuildingIcon className="w-8 h-8" />
    },
    {
      title: "Analytics Avanzados",
      description: "Reportes y métricas en tiempo real para toma de decisiones",
      icon: <ChartIcon className="w-8 h-8" />
    },
    {
      title: "CRM Integrado",
      description: "Gestión completa de clientes y seguimiento de leads",
      icon: <UsersIcon className="w-8 h-8" />
    },
    {
      title: "Automatización",
      description: "Procesos automatizados que ahorran tiempo y recursos",
      icon: <ChartIcon className="w-8 h-8" />
    }
  ];

  const benefits = [
    {
      metric: "80%",
      label: "Reducción en tiempo administrativo",
      description: "Automatización de procesos manuales"
    },
    {
      metric: "100%",
      label: "Digitalización de procesos",
      description: "Eliminación completa del papel"
    },
    {
      metric: "300%",
      label: "Mejora en seguimiento",
      description: "Tracking completo de leads y clientes"
    },
    {
      metric: "24/7",
      label: "Disponibilidad del sistema",
      description: "Acceso desde cualquier dispositivo"
    }
  ];

  const modules = [
    {
      name: "Inventario",
      description: "Gestión completa de propiedades disponibles",
      features: ["Catálogo digital", "Fotos y videos", "Filtros avanzados", "Disponibilidad en tiempo real"]
    },
    {
      name: "Clientes",
      description: "CRM especializado para el sector inmobiliario",
      features: ["Perfiles detallados", "Historial de interacciones", "Seguimiento automático", "Comunicación integrada"]
    },
    {
      name: "Reportes",
      description: "Analytics y métricas de negocio",
      features: ["Dashboard ejecutivo", "Reportes personalizados", "Métricas de ventas", "Análisis de tendencias"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Image
                  src="/client-logo.png"
                  alt="Client MX"
                  width={300}
                  height={80}
                  className="mr-4"
                />
              </div>
                <div>
                  <p className="text-xl text-green-600 font-medium">
                    Plataforma de Gestión Inmobiliaria
                  </p>
                </div>
              
              <p className="text-lg text-gray-600 mb-8">
                Sistema integral de gestión inmobiliaria que automatiza procesos, 
                optimiza la administración de propiedades y mejora la experiencia del cliente. 
                Desarrollado específicamente para el mercado mexicano.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="mailto:hola@welovecode.mx"
                  className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors"
                >
                  Solicitar demo
                </a>
                <a
                  href="mailto:hola@welovecode.mx"
                  className="inline-flex items-center border border-green-600 text-green-600 px-6 py-3 rounded-lg font-medium hover:bg-green-50 transition-colors"
                >
                  Más información
                </a>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative w-80 h-80 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl shadow-2xl flex items-center justify-center">
                <BuildingIcon className="w-32 h-32 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Características Principales
            </h2>
            <p className="text-lg text-gray-600">
              Todo lo que necesitas para gestionar tu negocio inmobiliario
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-green-600 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Resultados Comprobados
            </h2>
            <p className="text-lg text-gray-600">
              Impacto medible en la eficiencia de tu negocio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 bg-green-50 rounded-xl">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  {benefit.metric}
                </div>
                <div className="text-lg font-medium text-gray-900 mb-2">
                  {benefit.label}
                </div>
                <div className="text-sm text-gray-600">
                  {benefit.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Módulos del Sistema
            </h2>
            <p className="text-lg text-gray-600">
              Funcionalidades integradas para una gestión completa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {modules.map((module, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {module.name}
                </h3>
                <p className="text-gray-600 mb-6">
                  {module.description}
                </p>
                <ul className="space-y-2">
                  {module.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Tecnología de Vanguardia
            </h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Desarrollado con las últimas tecnologías para garantizar rendimiento, 
              seguridad y escalabilidad en tu negocio inmobiliario.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">Cloud</div>
              <div className="text-green-200">Infraestructura en la nube</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">API</div>
              <div className="text-green-200">Integraciones flexibles</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">Mobile</div>
              <div className="text-green-200">Acceso desde cualquier dispositivo</div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Proceso de Implementación
            </h2>
            <p className="text-lg text-gray-600">
              De la consulta inicial a la operación completa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Análisis</h3>
              <p className="text-gray-600">Evaluamos tus necesidades específicas</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Configuración</h3>
              <p className="text-gray-600">Personalizamos la plataforma</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Capacitación</h3>
              <p className="text-gray-600">Entrenamos a tu equipo</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Lanzamiento</h3>
              <p className="text-gray-600">Puesta en marcha y soporte</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Transforma tu Negocio Inmobiliario
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Descubre cómo Client MX puede automatizar tus procesos y 
            mejorar la eficiencia de tu empresa inmobiliaria.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="mailto:hola@welovecode.mx"
              className="inline-flex items-center bg-green-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-green-700 transition-colors"
            >
              Solicitar demo gratuita
            </a>
            <a
              href="mailto:hola@welovecode.mx"
              className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-gray-900 transition-colors"
            >
              Consulta personalizada
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
