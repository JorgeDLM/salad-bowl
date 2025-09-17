import Image from 'next/image';
import Link from 'next/link';
import CounterAnimation from '@/components/CounterAnimation';
import Header from '@/components/Header';

// Custom SVG Icons
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

const FarmerIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

const StoreIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

const HeartBrokenIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 7.636L10.682 6.318" />
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
      title: "El Motivo",
      description: "Ver que campesinos ganaban $0.5/kg por su trabajo siendo los que más trabajaban, mientras que los supermercados te vendían la misma en $20/kg."
    },
    {
      year: "2015-2019",
      title: "La Bodega",
      description: "Abro bodega propia con toda la operación: camionetas, distribución, el negocio completo. Me asocio con un programador muy bueno para la tecnología."
    },
    {
      year: "2019",
      title: "El Fracaso que Enseña",
      description: "El programador nunca me entrega. Cierro la bodega. Pierdo todo. Aprendo: mejor alianzas que operación propia."
    },
    {
      year: "2019-2022",
      title: "La Preparación",
      description: "Estudio programación, e innovo en inmobiliario para capitalizarme. Tomo clases de programación 16h/día. Armo equipo de desarrollo."
    },
    {
      year: "2022-2025",
      title: "El Despegue",
      description: "Comienzo el desarrollo de la versión final. Lanzo con equipo de primera. Resultado: +$1,000,000 MXN/mes en facturación."
    },
    {
      year: "2025",
      title: "La Expansión",
      description: "App móvil lista. Conexión directa con campesinos. El modelo escala."
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
      <Header 
        backgroundColor="bg-[#08b0e9]" 
        showBackButton={true} 
        backButtonText="Volver al inicio" 
      />

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
      <section className="py-20 bg-gradient-to-br from-[#34a853]/10 to-[#08b0e9]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              El Origen del Proyecto
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              <span className="font-bold">Xochiapulco, 2016:</span> al productor $0.50/kg; en el súper $20/kg. <div className="font-bold text-[#34a853] mt-2"><span className="text-black">Nuestra misión:</span> pago justo a campesinos.</div>
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            {/* Campesino */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-20 h-20 rounded-full overflow-hidden mr-6 flex-shrink-0">
                  <Image
                    src="/campesina.webp"
                    alt="Campesina"
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Productor</h3>
                  <p className="text-gray-600">Xochiapulco, Puebla</p>
                </div>
              </div>
              
              <div className="border-l-4 border-[#34a853] pl-6">
                <div className="flex items-baseline mb-2">
                  <span className="text-4xl font-bold text-[#34a853]">$0.5</span>
                  <span className="text-lg text-gray-600 ml-2">por kg</span>
                </div>
                <p className="text-gray-700 font-medium">Precio recibido por manzanas</p>
                <div className="mt-4 inline-flex items-center px-3 py-1 bg-[#34a853]/10 rounded-full">
                  <span className="text-sm text-[#34a853] font-medium">Trabajo directo del campo</span>
                </div>
              </div>
            </div>

            {/* Consumidor */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="bg-[#0055bb] w-20 h-20 rounded-full bg-white flex items-center justify-center mr-6 flex-shrink-0 border-2 border-gray-100">
                  <Image
                    src="/walmart-logo.png"
                    alt="Walmart"
                    width={65}
                    height={65}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Consumidor Final</h3>
                  <p className="text-gray-600">Supermercados</p>
                </div>
              </div>
              
              <div className="border-l-4 border-[#ea4435] pl-6">
                <div className="flex items-baseline mb-2">
                  <span className="text-4xl font-bold text-[#ea4435]">$20</span>
                  <span className="text-lg text-gray-600 ml-2">por kg</span>
                </div>
                <p className="text-gray-700 font-medium">Precio final al consumidor</p>
                <div className="mt-4 inline-flex items-center px-3 py-1 bg-[#ea4435]/10 rounded-full">
                  <span className="text-sm text-[#ea4435] font-medium">Después de 7 intermediarios</span>
                </div>
              </div>
            </div>
          </div>
                    <div className="text-center mt-16">
            <div className="bg-white p-6 rounded-xl shadow-lg max-w-3xl mx-auto">
              <p className="text-lg text-gray-700">
                <strong>Diferencia de precio:</strong> 40x entre productor y consumidor final
              </p>
            </div>
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
              La historia de cómo transformamos una idea en una plataforma que factura más de $1,000,000 MXN/mes
            </p>
          </div>

          <div className="relative">
            {/* Timeline line - responsive */}
            <div className="absolute left-6 md:left-1/2 md:transform md:-translate-x-px h-full w-0.5 bg-[#08b0e9]"></div>

            {timeline.map((item, index) => (
              <div key={index} className="relative mb-12">
                {/* Mobile Layout */}
                <div className="md:hidden">
                  <div className="flex items-start">
                    {/* Timeline dot */}
                    <div className="w-4 h-4 bg-[#34a853] rounded-full border-4 border-white shadow-lg mt-2 mr-6 flex-shrink-0 relative z-10"></div>
                    
                    {/* Content */}
                    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 flex-1">
                      <div className="text-[#08b0e9] font-bold text-lg mb-2">{item.year}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </div>

                {/* Desktop Layout */}
                <div className="hidden md:flex items-center">
                  <div className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'} w-full`}>
                    <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                      <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                        <div className="text-[#08b0e9] font-bold text-lg mb-2">{item.year}</div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Timeline dot - desktop */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#34a853] rounded-full border-4 border-white shadow-lg z-10"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Historical Photo Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">El comienzo (2015)</h3>
              <p className="text-lg text-gray-600 mb-6">
                Así comenzó todo: una bodega completa con operación propia, camionetas de distribución 
                y el sueño de conectar directamente campesinos con consumidores.
              </p>
              <div className="bg-[#e6f1fe] p-4 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>4 años de operación</strong> que me enseñaron todo sobre la cadena de distribución agrícola.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/foto2015.jpg"
                  alt="Bodega Mercado a la Mano 2015"
                  width={500}
                  height={400}
                  className="object-cover"
                />
              </div>
            </div>
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
