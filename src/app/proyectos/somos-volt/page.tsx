'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import ContactModal from '@/components/ContactModal';

export default function SomosVoltPage() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const projects = [
    {
      title: 'Premium Brand Photography & Identity',
      description: 'Lideré proyectos para marcas de prestigio como Vessel Brand, coordinando sesiones fotográficas profesionales y desarrollo de identidad visual que reflejan valores premium.',
      impact: '15+ marcas de prestigio'
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
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
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
          
          {/* Instagram Link */}
          <div className="flex justify-center">
            <a 
              href="https://www.instagram.com/somos_volt/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-stone-300 hover:text-stone-100 transition-colors group"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span className="text-lg font-semibold tracking-wide">@somos_volt</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
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
                    Responsable de coordinar y ejecutar proyectos creativos para marcas emergentes y de prestigio, 
                    incluyendo sesiones fotográficas profesionales y desarrollo de identidad visual, 
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

      {/* Premium Brands Section */}
      <section className="py-20 bg-gradient-to-br from-stone-800 to-stone-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black mb-6 text-stone-200">
              MARCAS DE PRESTIGIO
            </h2>
            <p className="text-xl text-stone-300 max-w-3xl mx-auto">
              Colaboraciones con marcas reconocidas que confían en nuestra experiencia 
              para sesiones fotográficas profesionales y diseño de identidad visual.
            </p>
          </div>

          {/* Vessel Brand Showcase */}
          <div className="mb-20">
            <div className="bg-stone-900 border border-stone-600 rounded-lg overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Brand Info */}
                <div className="p-12 flex flex-col justify-center">
                  <div className="mb-8">
                    <Image
                      src="/profiles/vessel-logo.jpg"
                      alt="Vessel Brand Logo"
                      width={120}
                      height={120}
                      className="rounded-full border-4 border-stone-400"
                    />
                  </div>
                  
                  <h3 className="text-3xl font-black mb-4 text-stone-200">
                    VESSEL BRAND
                  </h3>
                  
                  <p className="text-stone-300 text-lg mb-6 leading-relaxed">
                    Marca de lifestyle premium que confió en nuestro equipo para desarrollar 
                    su identidad visual y ejecutar sesiones fotográficas de alta calidad 
                    que capturan la esencia de su propuesta de valor.
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-stone-400 rounded-full"></div>
                      <span className="text-stone-300">Sesiones fotográficas profesionales</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-stone-400 rounded-full"></div>
                      <span className="text-stone-300">Diseño de identidad visual</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-stone-400 rounded-full"></div>
                      <span className="text-stone-300">Estrategia de marca premium</span>
                    </div>
                  </div>
                  
                  <a 
                    href="https://www.instagram.com/vessel_brand/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-8 text-stone-200 hover:text-stone-100 transition-colors group"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    <span className="font-semibold">@vessel_brand</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
                
                {/* Photo Gallery */}
                <div className="bg-stone-800">
                  <div className="grid grid-cols-1 h-full">
                    <div className="relative h-64 lg:h-full">
                      <Image
                        src="/vessel-photo-1.jpg"
                        alt="Vessel Brand Photography 1"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Additional Photos Row */}
              <div className="grid grid-cols-2 gap-0">
                <div className="relative h-48">
                  <Image
                    src="/vessel-photo-2.jpg"
                    alt="Vessel Brand Photography 2"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-48">
                  <Image
                    src="/vessel-photo-3.jpg"
                    alt="Vessel Brand Photography 3"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Brand Services Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-stone-900 border border-stone-600 hover:border-stone-400 transition-colors">
              <div className="w-16 h-16 bg-stone-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-stone-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-3 text-stone-200">Fotografía Premium</h4>
              <p className="text-stone-300">Sesiones profesionales que capturan la esencia y valores de marcas de prestigio.</p>
            </div>
            
            <div className="text-center p-8 bg-stone-900 border border-stone-600 hover:border-stone-400 transition-colors">
              <div className="w-16 h-16 bg-stone-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-stone-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-3 text-stone-200">Identidad Visual</h4>
              <p className="text-stone-300">Desarrollo de identidades visuales coherentes que reflejan la personalidad de cada marca.</p>
            </div>
            
            <div className="text-center p-8 bg-stone-900 border border-stone-600 hover:border-stone-400 transition-colors">
              <div className="w-16 h-16 bg-stone-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-stone-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-3 text-stone-200">Estrategia de Marca</h4>
              <p className="text-stone-300">Consultoría estratégica para posicionar marcas en segmentos premium del mercado.</p>
            </div>
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
