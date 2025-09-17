import Image from 'next/image';
import Link from 'next/link';

// Custom SVG Icons
const ArrowLeftIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
);

const TrendingUpIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>
);

const ShoppingCartIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
  </svg>
);

const TargetIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
  </svg>
);

export default function MercadoLibrePage() {
  const achievements = [
    {
      metric: "Top 1%",
      label: "Vendedor en categoría",
      description: "Posicionamiento en el marketplace"
    },
    {
      metric: "500+",
      label: "Ventas mensuales",
      description: "Volumen constante de transacciones"
    },
    {
      metric: "4.9★",
      label: "Calificación promedio",
      description: "Excelencia en servicio al cliente"
    },
    {
      metric: "98%",
      label: "Satisfacción del cliente",
      description: "Comentarios positivos"
    }
  ];

  const strategies = [
    {
      title: "Optimización de Listings",
      description: "Títulos, descripciones y palabras clave estratégicas para máxima visibilidad",
      icon: <TargetIcon className="w-8 h-8" />
    },
    {
      title: "Gestión de Inventario",
      description: "Control preciso de stock y automatización de procesos de venta",
      icon: <ShoppingCartIcon className="w-8 h-8" />
    },
    {
      title: "Análisis de Mercado",
      description: "Investigación continua de tendencias y oportunidades de crecimiento",
      icon: <TrendingUpIcon className="w-8 h-8" />
    },
    {
      title: "Servicio Premium",
      description: "Atención al cliente excepcional que genera lealtad y recompras",
      icon: <TargetIcon className="w-8 h-8" />
    }
  ];

  const learnings = [
    "Importancia de la optimización SEO dentro del marketplace",
    "Gestión eficiente de logística y tiempos de entrega",
    "Construcción de reputación a través de servicio excepcional",
    "Análisis de datos para toma de decisiones estratégicas",
    "Automatización de procesos para escalabilidad",
    "Gestión de inventario y cash flow en e-commerce"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-yellow-500 text-white py-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            href="/" 
            className="inline-flex items-center text-white hover:text-yellow-200 transition-colors"
          >
            <ArrowLeftIcon className="w-5 h-5 mr-2" />
            Volver al inicio
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-yellow-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Image
                  src="/mercadolibre-logo.png"
                  alt="Mercado Libre"
                  width={80}
                  height={80}
                  className="mr-4"
                />
                <div>
                  <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                    Mercado Libre
                  </h1>
                  <p className="text-xl text-yellow-600 font-medium">
                    E-commerce & Marketplace Strategy
                  </p>
                </div>
              </div>
              
              <p className="text-lg text-gray-600 mb-8">
                Experiencia desarrollando y escalando operaciones de e-commerce en Mercado Libre. 
                Logré posicionarme como Top 1% de vendedores en mi categoría, 
                generando aprendizajes valiosos sobre marketplace optimization y customer experience.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="mailto:hola@welovecode.mx"
                  className="inline-flex items-center bg-yellow-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-yellow-600 transition-colors"
                >
                  Consultoría E-commerce
                </a>
                <a
                  href="mailto:hola@welovecode.mx"
                  className="inline-flex items-center border border-yellow-500 text-yellow-600 px-6 py-3 rounded-lg font-medium hover:bg-yellow-50 transition-colors"
                >
                  Más información
                </a>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative w-80 h-80 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl shadow-2xl flex items-center justify-center">
                <ShoppingCartIcon className="w-32 h-32 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Resultados Alcanzados
            </h2>
            <p className="text-lg text-gray-600">
              Métricas que demuestran el éxito en el marketplace
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-3xl font-bold text-yellow-600 mb-2">
                  {achievement.metric}
                </div>
                <div className="text-lg font-medium text-gray-900 mb-2">
                  {achievement.label}
                </div>
                <div className="text-sm text-gray-600">
                  {achievement.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategies */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Estrategias Implementadas
            </h2>
            <p className="text-lg text-gray-600">
              Metodologías que llevaron al éxito en el marketplace
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {strategies.map((strategy, index) => (
              <div key={index} className="bg-yellow-50 p-6 rounded-xl border border-yellow-200 hover:shadow-lg transition-shadow">
                <div className="text-yellow-600 mb-4">
                  {strategy.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {strategy.title}
                </h3>
                <p className="text-gray-600">
                  {strategy.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              El Camino al Éxito
            </h2>
            <p className="text-lg text-gray-600">
              Proceso de crecimiento en el marketplace
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-yellow-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto">
                  1
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                Investigación de Mercado
              </h3>
              <p className="text-gray-600 text-center">
                Análisis profundo de la competencia, identificación de oportunidades 
                y selección estratégica de productos con alta demanda.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-yellow-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto">
                  2
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                Optimización Continua
              </h3>
              <p className="text-gray-600 text-center">
                Mejora constante de listings, precios competitivos, 
                y optimización de palabras clave para máxima visibilidad.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-yellow-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto">
                  3
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                Escalamiento
              </h3>
              <p className="text-gray-600 text-center">
                Automatización de procesos, expansión de catálogo 
                y construcción de reputación sólida en el marketplace.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Learnings */}
      <section className="py-16 bg-yellow-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Aprendizajes Clave
            </h2>
            <p className="text-xl text-yellow-100 max-w-3xl mx-auto">
              Conocimientos adquiridos que aplico en todos mis proyectos de e-commerce
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {learnings.map((learning, index) => (
              <div key={index} className="flex items-start p-4 bg-yellow-400 bg-opacity-20 rounded-lg">
                <div className="w-2 h-2 bg-white rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <span className="text-yellow-50 font-medium">{learning}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Impacto en Otros Proyectos
            </h2>
            <p className="text-lg text-gray-600">
              Cómo esta experiencia potencia mis otros emprendimientos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Transferencia de Conocimiento</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <TrendingUpIcon className="w-6 h-6 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-gray-900">Mercado a la Mano</div>
                    <div className="text-gray-600">Estrategias de marketplace aplicadas a la plataforma</div>
                  </div>
                </li>
                <li className="flex items-start">
                  <TrendingUpIcon className="w-6 h-6 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-gray-900">Zephir Jewelry</div>
                    <div className="text-gray-600">Optimización de e-commerce y customer experience</div>
                  </div>
                </li>
                <li className="flex items-start">
                  <TrendingUpIcon className="w-6 h-6 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-gray-900">WeLoveCode</div>
                    <div className="text-gray-600">Consultoría especializada en marketplaces</div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Expertise Desarrollado</h3>
              <p className="text-gray-600 mb-6">
                La experiencia en Mercado Libre me proporcionó un entendimiento profundo 
                del comportamiento del consumidor digital y las dinámicas de los marketplaces, 
                conocimiento que ahora aplico estratégicamente en todos mis proyectos.
              </p>
              <div className="bg-yellow-500 text-white p-4 rounded-lg text-center">
                <div className="text-2xl font-bold mb-1">360°</div>
                <div className="text-sm">Visión completa del e-commerce</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            ¿Necesitas Consultoría en E-commerce?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Aplica mi experiencia en marketplaces para hacer crecer tu negocio digital.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="mailto:hola@welovecode.mx"
              className="inline-flex items-center bg-yellow-500 text-white px-8 py-4 rounded-lg font-medium hover:bg-yellow-600 transition-colors"
            >
              Consultoría personalizada
            </a>
            <a
              href="mailto:hola@welovecode.mx"
              className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-gray-900 transition-colors"
            >
              Más información
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
