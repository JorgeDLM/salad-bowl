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

const CheckIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

export default function MercadoALaManoPage() {
  const timeline = [
    {
      year: "2015",
      title: "Inicio del Proyecto",
      description: "Identificación del problema: campesinos recibían $0.5/kg por manzanas que se vendían a $20/kg en supermercados."
    },
    {
      year: "2015-2019",
      title: "Primera Iteración",
      description: "Operación con bodega, camionetas, choferes y distribución a hoteles y restaurantes. Sociedad con programador para desarrollar la tecnología."
    },
    {
      year: "2019",
      title: "Crisis y Rediseño",
      description: "El socio programador no entregó el producto. Cierre del negocio y rediseño del modelo: alianzas con distribuidores locales en lugar de operación propia."
    },
    {
      year: "2019-2022",
      title: "Pausa Estratégica",
      description: "Innovación en el mercado inmobiliario para capitalización. Estudio intensivo de programación (16 horas/día) y contratación de equipo de desarrollo."
    },
    {
      year: "2022-2024",
      title: "Versión Final",
      description: "Desarrollo con equipo de primera. Lanzamiento de la plataforma actual con más de $1M MXN/mes en facturación."
    },
    {
      year: "2024",
      title: "Expansión",
      description: "App móvil en beta, conexión directa con campesinos, y escalamiento del modelo de negocio."
    }
  ];

  const achievements = [
    {
      metric: ">$1M MXN",
      label: "Facturación mensual",
      description: "Ingresos actuales de la plataforma"
    },
    {
      metric: "60%",
      label: "Ahorro vs supermercados",
      description: "Precios más competitivos"
    },
    {
      metric: "50%",
      label: "Ahorro vs Justo.mx",
      description: "En varios productos"
    },
    {
      metric: "6-7",
      label: "Intermediarios eliminados",
      description: "De la cadena de distribución"
    }
  ];

  const features = [
    "Conexión directa productor-consumidor",
    "Precios justos para campesinos",
    "Ahorro significativo para clientes",
    "Tecnología propia desarrollada",
    "Modelo escalable con distribuidores locales",
    "App móvil en desarrollo",
    "Compras por volumen directo con campesinos"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-[#08b0e9] text-white py-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            href="/" 
            className="inline-flex items-center text-white hover:text-gray-200 transition-colors"
          >
            <ArrowLeftIcon className="w-5 h-5 mr-2" />
            Volver al inicio
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#e6f1fe] to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Image
                  src="/logo.png"
                  alt="Mercado a la Mano"
                  width={200}
                  height={80}
                  className="mr-4"
                />
              </div>
                <div>
                  <p className="text-xl text-[#08b0e9] font-medium">
                    Conectando campesinos con consumidores
                  </p>
                </div>
              
              <p className="text-lg text-gray-600 mb-8">
                9 años transformando la cadena de distribución agrícola en México. 
                Pagamos justo al campesino y ofrecemos precios competitivos al cliente final, 
                eliminando hasta 7 intermediarios innecesarios.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://www.mercadoalamano.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-[#08b0e9] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#d73527] transition-colors"
                >
                  Visitar sitio web
                  <ExternalLinkIcon className="ml-2 w-4 h-4" />
                </a>
                <a
                  href="https://www.instagram.com/mercadoalamano/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center border border-[#ea4435] text-[#ea4435] px-6 py-3 rounded-lg font-medium hover:bg-[#e6f1fe] transition-colors"
                >
                  Ver Instagram
                  <ExternalLinkIcon className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="flex justify-center">
              <Image
                src="/icono-mercadoalamano-app.png"
                alt="Mercado a la Mano App"
                width={300}
                height={300}
                className="rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16 bg-[#34a853]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              El Problema que Identificamos
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Hace 10 años descubrí una realidad que me impactó profundamente
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="text-4xl font-bold text-[#34a853] mb-2">$0.5/kg</div>
                <div className="text-lg font-medium text-gray-900 mb-2">Precio al campesino</div>
                <div className="text-gray-600">Por una caja de manzanas de 20kg</div>
                <div className="mt-4 text-sm text-gray-500">Los "coyotes" pagaban $10 por caja</div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="text-4xl font-bold text-[#34a853] mb-2">$20/kg</div>
                <div className="text-lg font-medium text-gray-900 mb-2">Precio al consumidor</div>
                <div className="text-gray-600">La misma manzana en supermercados</div>
                <div className="mt-4 text-sm text-gray-500">4000% de margen para intermediarios</div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-xl text-gray-700 font-medium">
              "Se me hizo un abuso y quise transformar esta realidad"
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              9 Años de Evolución
            </h2>
            <p className="text-lg text-gray-600">
              La historia de cómo transformamos una idea en una plataforma que factura más de $1M MXN/mes
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-[#08b0e9]"></div>

            {timeline.map((item, index) => (
              <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'} mb-12`}>
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                    <div className="text-[#08b0e9] font-bold text-lg mb-2">{item.year}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
                
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#34a853] rounded-full border-4 border-white shadow-lg"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Achievements */}
      <section className="py-16 bg-[#e6f1fe]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Resultados Actuales
            </h2>
            <p className="text-lg text-gray-600">
              Métricas que demuestran el impacto de nuestro modelo
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-3xl font-bold text-[#34a853] mb-2">
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

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Características Clave
            </h2>
            <p className="text-lg text-gray-600">
              Lo que hace único a nuestro modelo de negocio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center p-4 bg-[#e2f1da] rounded-lg">
                <CheckIcon className="w-6 h-6 text-[#34a853] mr-3 flex-shrink-0" />
                <span className="text-gray-800 font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Vision */}
      <section className="py-16 bg-[#fef0cd]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Visión a Futuro
            </h2>
            <p className="text-lg text-gray-600">
              Hacia dónde nos dirigimos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Próximos Pasos</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckIcon className="w-6 h-6 text-[#fdba12] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-gray-900">App Móvil</div>
                    <div className="text-gray-600">Beta estable en semanas</div>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="w-6 h-6 text-[#fdba12] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-gray-900">Distribución a Casas</div>
                    <div className="text-gray-600">Expansión del servicio residencial</div>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="w-6 h-6 text-[#fdba12] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-gray-900">Compras por Volumen</div>
                    <div className="text-gray-600">Directo con campesinos en pueblos</div>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="w-6 h-6 text-[#fdba12] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-gray-900">Producción a Demanda</div>
                    <div className="text-gray-600">Campesinos generando productos específicos</div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Impacto Esperado</h3>
              <p className="text-gray-600 mb-6">
                Nuestro objetivo es desintegrar completamente la cadena de suministro tradicional, 
                creando un ecosistema donde campesinos y consumidores se beneficien mutuamente.
              </p>
              <div className="bg-[#e6f1fe] p-4 rounded-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#08b0e9] mb-1">100%</div>
                  <div className="text-sm text-gray-600">Eliminación de intermediarios</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#08b0e9] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Conoce Mercado a la Mano
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Descubre cómo estamos transformando la agricultura mexicana, 
            un campesino y un cliente a la vez.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://www.mercadoalamano.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-[#08b0e9] px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Visitar Plataforma
              <ExternalLinkIcon className="ml-2 w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/mercadoalamano/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-[#34a853] transition-colors"
            >
              Síguenos en Instagram
              <ExternalLinkIcon className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
