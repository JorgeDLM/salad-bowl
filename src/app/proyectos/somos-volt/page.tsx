'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import ContactModal from '@/components/ContactModal';

export default function SomosVoltPage() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const projects = [
    {
      title: 'Brand Strategy & Visual Identity',
      description: 'Desarrollé estrategias de marca completas para startups y empresas establecidas, creando identidades visuales que conectan con audiencias objetivo.',
      impact: '15+ marcas transformadas'
    },
    {
      title: 'Creative Campaign Management',
      description: 'Coordiné campañas creativas multi-canal aplicando metodologías ágiles para garantizar entregas puntuales y calidad excepcional.',
      impact: '9+ proyectos simultáneos'
    },
    {
      title: 'Client Relationship Excellence',
      description: 'Construí relaciones sólidas con clientes a través de comunicación transparente y entrega consistente de resultados.',
      impact: '95% retención de clientes'
    }
  ];

  const skills = [
    'Creative Direction',
    'Brand Strategy', 
    'Project Management',
    'Scrum & Kanban',
    'Client Relations',
    'Visual Identity',
    'Campaign Coordination',
    'Team Leadership'
  ];

  return (
    <div className="min-h-screen bg-stone-900 text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/bg-image-somosvolt.jpg"
            alt="Somos Volt Background"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        {/* Dark Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-stone-900/80 to-black/70 z-10"></div>
        
        {/* Additional subtle texture overlay */}
        <div className="absolute inset-0 z-15" style={{
          backgroundImage: `radial-gradient(circle at 30% 70%, rgba(255,255,255,0.05) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }}></div>
        
        <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* <div className="mb-8">
            <Image
              src="/somosvolt-logo.webp"
              alt="Somos Volt Logo"
              width={200}
              height={80}
              className="mx-auto mb-8"
            />
          </div> */}
          
          <h1 className="text-5xl lg:text-7xl font-black mb-6 tracking-widest text-stone-300 drop-shadow-2xl opacity-50">
            SOMOS VOLT
          </h1>
          
          <p className="text-2xl lg:text-3xl font-light mb-4 text-stone-200 drop-shadow-lg">
            WE FRAME YOUR BRAND'S BEST ANGLE
          </p>
          
          <div className="w-24 h-1 bg-stone-300 mx-auto mb-8 shadow-lg"></div>
          
          <p className="text-xl text-stone-200 max-w-3xl mx-auto mb-12 leading-relaxed drop-shadow-md">
            Mi experiencia como <strong className="text-white">Creative Project Manager</strong> en esta agencia de branding y diseño creativo con sede en San Diego, CA.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              onClick={() => setIsContactModalOpen(true)}
              className="bg-stone-200 text-stone-900 px-8 py-4 rounded-none font-bold text-lg hover:bg-stone-100 transition-colors uppercase tracking-wide shadow-lg"
            >
              CONTACTAR
            </button>
            <a 
              href="/#proyectos"
              className="border-2 border-stone-200 text-stone-200 px-8 py-4 rounded-none font-bold text-lg hover:bg-stone-200 hover:text-stone-900 transition-colors uppercase tracking-wide"
            >
              VER MÁS PROYECTOS
            </a>
          </div>
        </div>
      </section>

      {/* Role & Impact Section */}
      <section className="py-20 bg-stone-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-black mb-8 text-stone-200">
                MI ROL EN VOLT
              </h2>
              <div className="space-y-6">
                <div className="border-l-4 border-stone-400 pl-6">
                  <h3 className="text-2xl font-bold mb-3 text-stone-200">Creative Project Manager</h3>
                  <p className="text-stone-300 text-lg leading-relaxed">
                    Responsable de coordinar y ejecutar proyectos creativos para marcas emergentes y establecidas, 
                    aplicando metodologías ágiles para garantizar entregas de alta calidad.
                  </p>
                </div>
                
                <div className="border-l-4 border-stone-300 pl-6">
                  <h3 className="text-2xl font-bold mb-3 text-stone-200">Período</h3>
                  <p className="text-stone-300 text-lg">Febrero 2025 - Septiembre 2025</p>
                </div>
                
                <div className="border-l-4 border-stone-400 pl-6">
                  <h3 className="text-2xl font-bold mb-3 text-stone-200">Metodología</h3>
                  <p className="text-stone-300 text-lg leading-relaxed">
                    Implementé frameworks de <strong>Scrum y Kanban</strong> para optimizar flujos de trabajo 
                    y mantener comunicación transparente con clientes.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="bg-stone-900 p-8 border border-stone-400">
                <h3 className="text-3xl font-black text-stone-200 mb-4">IMPACTO CLAVE</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-stone-600 pb-2">
                    <span className="text-stone-300">Proyectos Simultáneos</span>
                    <span className="text-2xl font-bold text-stone-200">9+</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-stone-600 pb-2">
                    <span className="text-stone-300">Retención de Clientes</span>
                    <span className="text-2xl font-bold text-stone-200">95%</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-stone-600 pb-2">
                    <span className="text-stone-300">Marcas Trabajadas</span>
                    <span className="text-2xl font-bold text-stone-200">15+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-stone-300">Entregas a Tiempo</span>
                    <span className="text-2xl font-bold text-stone-200">100%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-stone-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl lg:text-5xl font-black text-center mb-16 text-stone-200">
            PROYECTOS DESTACADOS
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-stone-800 border border-stone-600 hover:border-stone-400 transition-colors group">
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-4 text-stone-200 group-hover:text-stone-100 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-stone-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="border-t border-stone-600 pt-4">
                    <span className="text-stone-200 font-bold text-lg">{project.impact}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Highlight Section */}
      <section className="py-20 bg-stone-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Photo */}
            <div className="relative">
              <div className="relative overflow-hidden border-4 border-stone-400 shadow-2xl">
                <Image
                  src="/mark-wahlberg.webp"
                  alt="Mark Wahlberg - Sesión de fotos Somos Volt"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
                />
                {/* Overlay text */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <p className="text-stone-200 text-sm font-medium tracking-wide">
                    SOMOS VOLT PHOTOGRAPHY SESSION
                  </p>
                </div>
              </div>
            </div>
            
            {/* Content */}
            <div className="space-y-6">
              <div>
                <h3 className="text-4xl font-black text-stone-200 mb-4 tracking-wide">
                  CELEBRITY PORTFOLIO
                </h3>
                <div className="w-16 h-1 bg-stone-400 mb-6"></div>
              </div>
              
              <p className="text-xl text-stone-300 leading-relaxed">
                <strong className="text-stone-200">Somos Volt</strong> es una agencia de prestigio que ha trabajado con celebridades como <strong className="text-white">Mark Wahlberg</strong>, demostrando el nivel de calidad y profesionalismo del entorno donde desarrollé mi experiencia.
              </p>
              
              <div className="bg-stone-800 p-6 border-l-4 border-stone-400">
                <h4 className="text-lg font-bold text-stone-200 mb-3">Nivel de la Agencia</h4>
                <ul className="space-y-2 text-stone-300">
                  <li>• Portfolio con celebridades internacionales</li>
                  <li>• Estándares de producción premium</li>
                  <li>• Clientes de alto perfil y exigencia</li>
                  <li>• Metodologías de trabajo profesionales</li>
                </ul>
              </div>
              
              <div className="flex items-center gap-4 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-black text-stone-200">48h</div>
                  <div className="text-sm text-stone-400">Timeline</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-black text-stone-200">6</div>
                  <div className="text-sm text-stone-400">Team Members</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-black text-stone-200">100%</div>
                  <div className="text-sm text-stone-400">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-stone-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl lg:text-5xl font-black text-center mb-16 text-stone-200">
            HABILIDADES DESARROLLADAS
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <div key={index} className="bg-stone-900 border border-stone-600 hover:border-stone-400 p-6 text-center transition-colors group">
                <span className="text-stone-200 font-bold group-hover:text-stone-100 transition-colors">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Section */}
      <section className="py-20 bg-stone-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-black mb-12 text-stone-200">
            LO QUE APRENDÍ
          </h2>
          
          <div className="bg-stone-800 border-l-8 border-stone-400 p-12">
            <blockquote className="text-2xl lg:text-3xl font-light text-stone-300 italic leading-relaxed">
              "Perfeccioné la gestión de múltiples proyectos creativos y el manejo de expectativas de clientes exigentes. 
              Aprendí que la clave del éxito en proyectos creativos es la <span className="text-stone-200 font-bold">comunicación transparente</span> 
              y la <span className="text-stone-200 font-bold">entrega consistente</span> de resultados que superen las expectativas."
            </blockquote>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-stone-200 text-stone-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-black mb-8">
            ¿LISTO PARA TRABAJAR JUNTOS?
          </h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto">
            Si buscas una project manager que entienda el mundo creativo y sepa entregar resultados, hablemos.
          </p>
          <button 
            onClick={() => setIsContactModalOpen(true)}
            className="bg-stone-900 text-stone-200 px-12 py-6 rounded-none font-bold text-xl hover:bg-stone-800 transition-colors uppercase tracking-wide"
          >
            CONTACTAR AHORA
          </button>
        </div>
      </section>

      {/* Contact Modal */}
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </div>
  );
}
