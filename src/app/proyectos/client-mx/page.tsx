'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import ClientInfoModal from '@/components/ClientInfoModal';

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
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);

  const features = [
    {
      title: "Red de Inmobiliarios",
      description: "App que conecta inmobiliarios entre sí para formar equipos colaborativos",
      icon: <UsersIcon className="w-8 h-8" />
    },
    {
      title: "Comisiones Compartidas",
      description: "Sistema para establecer y compartir comisiones entre colaboradores",
      icon: <ChartIcon className="w-8 h-8" />
    },
    {
      title: "Cartera Masiva",
      description: "Plataforma que alcanzó 2,500 propiedades comisionables activas",
      icon: <BuildingIcon className="w-8 h-8" />
    },
    {
      title: "Distribución Multi-canal",
      description: "Propiedades distribuidas en Platinum.mx e Inmuebles.store",
      icon: <BuildingIcon className="w-8 h-8" />
    }
  ];

  const benefits = [
    {
      metric: "2,500",
      label: "Propiedades Comisionables",
      description: "Cartera activa en la plataforma"
    },
    {
      metric: "2,300",
      label: "Corredores Contactados",
      description: "Solo en la ciudad de Puebla"
    },
    {
      metric: "6",
      label: "Plataformas Integradas",
      description: "Client.mx, Platinum.mx, Inmuebles.store + Apps móviles"
    },
    {
      metric: "100%",
      label: "Comisiones Transparentes",
      description: "Sistema claro de participación"
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
                    Red de Colaboración Inmobiliaria
                  </p>
                </div>
              
              <p className="text-lg text-gray-600 mb-8">
                Red de sistemas que funcionan en unísono para conectar inmobiliarios entre sí. 
                App donde todos pueden subir propiedades en venta y establecer comisiones compartidas, 
                formando equipos para no perder ventas ante la gran oferta de propiedades disponibles.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#resultados"
                  className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors"
                >
                  Logros del proyecto
                </a>
                <button
                  onClick={() => setIsInfoModalOpen(true)}
                  className="inline-flex items-center border border-green-600 text-green-600 px-6 py-3 rounded-lg font-medium hover:bg-green-50 transition-colors"
                >
                  Más información
                </button>
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
      <section id="resultados" className="py-16 bg-white">
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



      {/* Project Status Section */}
      <section className="py-16 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Estado del Proyecto
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un proyecto ambicioso que demostró el potencial de conectar el ecosistema inmobiliario
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Lo que se logró:</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <p className="text-gray-700"><strong>2,500 propiedades</strong> comisionables en la plataforma</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <p className="text-gray-700"><strong>2,300 corredores</strong> contactados en Puebla</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <p className="text-gray-700"><strong>6 plataformas</strong> integradas funcionando</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <p className="text-gray-700"><strong>Apps móviles</strong> en App Store y Play Store</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Análisis y lecciones:</h3>
              <div className="bg-white p-6 rounded-xl shadow-lg space-y-4">
                <div>
                  <p className="text-gray-700 mb-2">
                    <strong>Aceptación excelente:</strong> La respuesta de los corredores inmobiliarios fue muy positiva, 
                    validando completamente el concepto y la necesidad del mercado.
                  </p>
                </div>
                
                <div>
                  <p className="text-gray-700 mb-2">
                    <strong>Punto crítico identificado:</strong> El buscador de propiedades no estaba optimizado, 
                    dificultando encontrar inmuebles específicos. Esta herramienta era clave para el éxito del proyecto.
                  </p>
                </div>
                
                <div>
                  <p className="text-gray-700 mb-2">
                    <strong>Momento decisivo:</strong> Fue precisamente en el desarrollo de los algoritmos de búsqueda 
                    donde el programador líder abandonó el proyecto, dejándolo incompleto.
                  </p>
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                  <p className="text-gray-700">
                    <strong>Capacidad actual:</strong> Hoy cuento con el equipo y conocimientos necesarios 
                    para crear los algoritmos de búsqueda optimizados que el proyecto requiere para triunfar.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            ¿Interesado en el Concepto?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Client MX demostró el potencial de revolucionar la colaboración inmobiliaria. 
            Hablemos sobre cómo aplicar estos aprendizajes a nuevos proyectos.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="mailto:palombaco@live.com"
              className="inline-flex items-center bg-green-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-green-700 transition-colors"
            >
              Discutir el proyecto
            </a>
            <a
              href="https://www.client.mx"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-gray-900 transition-colors"
            >
              Ver www.client.mx
              <ExternalLinkIcon className="ml-2 w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Client Info Modal */}
      <ClientInfoModal 
        isOpen={isInfoModalOpen} 
        onClose={() => setIsInfoModalOpen(false)} 
      />
    </div>
  );
}
