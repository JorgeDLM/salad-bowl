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
      title: "300+ Modelos Diferentes",
      description: "Catálogo extenso de diseños únicos creados desde 2022",
      icon: <DiamondIcon className="w-8 h-8" />
    },
    {
      title: "3 Puntos de Venta Físicos",
      description: "Suargo Angelópolis, Outlet Isla y Hefestum Valquirico",
      icon: <HeartIcon className="w-8 h-8" />
    },
    {
      title: "Materiales Premium",
      description: "Plata con baño en oro, oro y platino con piedras de laboratorio",
      icon: <DiamondIcon className="w-8 h-8" />
    },
    {
      title: "Fotografía Profesional",
      description: "Servicio de fotografía de productos para joyerías con equipo especializado",
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
      {/* Hero Section */}
      <section className="bg-black text-white py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <div className="mb-8">
                <h1 className="text-5xl lg:text-6xl font-light text-white mb-4 tracking-wide animate-fade-in-up">
                  ZEPHIR
                </h1>
                <p className="text-2xl text-gray-300 font-light tracking-widest animate-fade-in-up animation-delay-200">
                  JEWELRY
                </p>
                <div className="w-20 h-0.5 bg-white mt-6 animate-expand-width animation-delay-400"></div>
              </div>
              
              <p className="text-lg text-gray-300 mb-8 leading-relaxed animate-fade-in-up animation-delay-600">
                Joyería con piedras de laboratorio sustentables. Moissanita, zafiro sintético, 
                diamante lab, rubí sintético y esmeralda de laboratorio desde 2022.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-800">
                <a
                  href="https://www.zephir.mx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-white text-black px-8 py-3 font-medium tracking-wide hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  EXPLORAR COLECCIÓN
                  <ExternalLinkIcon className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>

            <div className="flex justify-center animate-fade-in-right">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-white/20 to-gray-300/20 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                <Image
                  src="/zephir-1.webp"
                  alt="Zephir Jewelry Collection"
                  width={400}
                  height={400}
                  className="relative rounded-lg shadow-2xl transition-transform duration-700 hover:scale-105 animate-float"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-light mb-8 tracking-wide">
              LO QUE NOS DISTINGUE
            </h2>
            <div className="w-20 h-0.5 bg-white mx-auto animate-expand-width animation-delay-200"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {features.map((feature, index) => (
              <div key={index} className={`group animate-fade-in-up animation-delay-${(index + 1) * 200}`}>
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center group-hover:bg-gray-100 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 animate-pulse-gentle">
                      <div className="text-black transition-transform group-hover:scale-110">
                        {feature.icon}
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-light text-white mb-4 tracking-wide group-hover:text-gray-100 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <h2 className="text-4xl font-light text-black mb-6 tracking-wide">
                  INFORMACIÓN
                </h2>
                <div className="w-16 h-0.5 bg-black mb-6"></div>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Marca de joyería sustentable operando desde 2022. Especializada en piedras 
                  de laboratorio con presencia física en Puebla y servicios de fotografía profesional.
                </p>
                <div className="space-y-6">
                  {features.map((feature, index) => (
                    <div key={index} className="border-l-2 border-gray-200 pl-6">
                      <h3 className="text-lg font-medium text-black mb-2 tracking-wide">
                        {feature.title}
                      </h3>
                      <p className="text-gray-500 text-sm">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-6">
                  <Image
                    src="/zephir-2.webp"
                    alt="Zephir Jewelry Detail"
                    width={400}
                    height={500}
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                  <Image
                    src="/zephir-4.webp"
                    alt="Zephir Jewelry Collection"
                    width={400}
                    height={300}
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
                <div className="space-y-6 md:mt-12">
                  <Image
                    src="/zephir-3.webp"
                    alt="Zephir Jewelry Craftsmanship"
                    width={400}
                    height={500}
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              La Experiencia Zephir
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Más que joyería, creamos momentos especiales. Cada cliente recibe atención personalizada 
              para encontrar la pieza perfecta que refleje su personalidad única.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-gray-400">Satisfacción garantizada</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">∞</div>
              <div className="text-gray-400">Garantía de por vida</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">24h</div>
              <div className="text-gray-400">Atención personalizada</div>
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
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Consulta</h3>
              <p className="text-gray-600">Entendemos tus gustos y necesidades</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Diseño</h3>
              <p className="text-gray-600">Creamos el diseño perfecto para ti</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Creación</h3>
              <p className="text-gray-600">Elaboramos tu pieza con maestría</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
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
              className="inline-flex items-center bg-black text-white px-8 py-4 font-medium tracking-wide hover:bg-gray-800 transition-colors"
            >
              VISITAR TIENDA
              <ExternalLinkIcon className="ml-3 w-4 h-4" />
            </a>
            <a
              href="https://www.instagram.com/zephir.jewelry/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center border-2 border-white text-white px-8 py-4 font-medium tracking-wide hover:bg-white hover:text-black transition-colors"
            >
              INSTAGRAM
              <ExternalLinkIcon className="ml-3 w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
