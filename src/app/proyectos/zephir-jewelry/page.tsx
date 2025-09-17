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

const DiamondIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2l3.09 6.26L22 9l-5.91 3.74L18 19l-6-4-6 4 1.91-6.26L2 9l6.91-.74L12 2z" />
  </svg>
);

const HeartIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
);

export default function ZephirJewelryPage() {
  const features = [
    {
      title: "Diseño Exclusivo",
      description: "Cada pieza es única, diseñada con atención al detalle y materiales premium",
      icon: <DiamondIcon className="w-8 h-8" />
    },
    {
      title: "Experiencia Premium",
      description: "Servicio personalizado que supera las expectativas del cliente",
      icon: <HeartIcon className="w-8 h-8" />
    },
    {
      title: "Calidad Garantizada",
      description: "Materiales de la más alta calidad con garantía de por vida",
      icon: <DiamondIcon className="w-8 h-8" />
    },
    {
      title: "Atención Personalizada",
      description: "Asesoría especializada para encontrar la pieza perfecta",
      icon: <HeartIcon className="w-8 h-8" />
    }
  ];

  const collections = [
    {
      name: "Elegance",
      description: "Piezas clásicas con un toque contemporáneo",
      pieces: "15+ diseños"
    },
    {
      name: "Modern",
      description: "Diseños vanguardistas para el estilo actual",
      pieces: "20+ diseños"
    },
    {
      name: "Vintage",
      description: "Inspiración retro con técnicas modernas",
      pieces: "12+ diseños"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-rose-600 text-white py-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            href="/" 
            className="inline-flex items-center text-white hover:text-rose-200 transition-colors"
          >
            <ArrowLeftIcon className="w-5 h-5 mr-2" />
            Volver al inicio
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-rose-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Image
                  src="/zephir-logo.png"
                  alt="Zephir Jewelry"
                  width={80}
                  height={80}
                  className="mr-4"
                />
                <div>
                  <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                    Zephir Jewelry
                  </h1>
                  <p className="text-xl text-rose-600 font-medium">
                    Joyería Premium & Diseño Exclusivo
                  </p>
                </div>
              </div>
              
              <p className="text-lg text-gray-600 mb-8">
                Marca de joyería premium que combina diseño exclusivo con experiencia de cliente excepcional. 
                Cada pieza cuenta una historia única, creada con los más altos estándares de calidad y elegancia.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://www.zephir.mx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-rose-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-rose-700 transition-colors"
                >
                  Visitar tienda
                  <ExternalLinkIcon className="ml-2 w-4 h-4" />
                </a>
                <a
                  href="mailto:hola@welovecode.mx"
                  className="inline-flex items-center border border-rose-600 text-rose-600 px-6 py-3 rounded-lg font-medium hover:bg-rose-50 transition-colors"
                >
                  Contactar
                </a>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative w-80 h-80 bg-gradient-to-br from-rose-400 to-rose-600 rounded-full shadow-2xl flex items-center justify-center">
                <DiamondIcon className="w-32 h-32 text-white" />
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
              Lo que nos Distingue
            </h2>
            <p className="text-lg text-gray-600">
              Excelencia en cada detalle
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-rose-600 mb-4">
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

      {/* Collections */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nuestras Colecciones
            </h2>
            <p className="text-lg text-gray-600">
              Diseños únicos para cada personalidad
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {collections.map((collection, index) => (
              <div key={index} className="bg-rose-50 p-8 rounded-xl border border-rose-200 text-center">
                <div className="mb-6">
                  <DiamondIcon className="w-16 h-16 text-rose-600 mx-auto" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  {collection.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {collection.description}
                </p>
                <div className="bg-rose-600 text-white px-4 py-2 rounded-lg text-sm font-medium inline-block">
                  {collection.pieces}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-16 bg-rose-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              La Experiencia Zephir
            </h2>
            <p className="text-xl text-rose-100 max-w-3xl mx-auto">
              Más que joyería, creamos momentos especiales. Cada cliente recibe atención personalizada 
              para encontrar la pieza perfecta que refleje su personalidad única.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-rose-200">Satisfacción garantizada</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">∞</div>
              <div className="text-rose-200">Garantía de por vida</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">24h</div>
              <div className="text-rose-200">Atención personalizada</div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nuestro Proceso
            </h2>
            <p className="text-lg text-gray-600">
              De la idea a la pieza perfecta
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-rose-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Consulta</h3>
              <p className="text-gray-600">Entendemos tus gustos y necesidades</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-rose-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Diseño</h3>
              <p className="text-gray-600">Creamos el diseño perfecto para ti</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-rose-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Creación</h3>
              <p className="text-gray-600">Elaboramos tu pieza con maestría</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-rose-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Entrega</h3>
              <p className="text-gray-600">Recibe tu joya única y especial</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Descubre tu Pieza Perfecta
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Explora nuestras colecciones exclusivas y encuentra la joya que refleje tu personalidad única.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://www.zephir.mx"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-rose-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-rose-700 transition-colors"
            >
              Explorar colecciones
              <ExternalLinkIcon className="ml-2 w-5 h-5" />
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
