'use client';

import Link from 'next/link';
import { useState } from 'react';
import ContactModal from './ContactModal';

interface HeaderProps {
  backgroundColor?: string;
  showBackButton?: boolean;
  backButtonText?: string;
}

// Custom SVG Icons
const ChevronDownIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

const Bars3Icon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const XMarkIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const ArrowLeftIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
);

export default function Header({ 
  backgroundColor = 'bg-gradient-to-r from-slate-50 to-blue-50', 
  showBackButton = false, 
  backButtonText = 'Volver al inicio' 
}: HeaderProps = {}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const projects = [
    { name: 'Mercado a la Mano', href: '/proyectos/mercado-a-la-mano' },
    { name: 'Client MX', href: '/proyectos/client-mx' },
    { name: 'WeLoveCode', href: '/proyectos/welovecode' },
    { name: 'Zephir Jewelry', href: '/proyectos/zephir-jewelry' },
    { name: 'Mercado Libre', href: '/proyectos/mercado-libre' },
  ];

  const textColor = backgroundColor.includes('white') || backgroundColor.includes('slate') || backgroundColor.includes('blue') ? 'text-gray-900' : 'text-white';
  const hoverTextColor = backgroundColor.includes('white') || backgroundColor.includes('slate') || backgroundColor.includes('blue') ? 'hover:text-gray-700' : 'hover:text-gray-200';
  const borderColor = backgroundColor.includes('white') || backgroundColor.includes('slate') || backgroundColor.includes('blue') ? 'border-gray-200' : 'border-white/20';

  return (
    <header className={`${backgroundColor} shadow-sm border-b ${borderColor} sticky top-0 z-50`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Navegación principal">
        <div className="flex justify-between items-center h-16">
          {/* Back Button or Logo */}
          <div className="flex-shrink-0 flex items-center">
            {showBackButton ? (
              <Link 
                href="/" 
                className={`inline-flex items-center ${textColor} ${hoverTextColor} transition-colors mr-4`}
              >
                <ArrowLeftIcon className="w-5 h-5 mr-2" />
                {backButtonText}
              </Link>
            ) : (
              <Link 
                href="/" 
                className={`text-xl font-bold ${textColor} ${hoverTextColor} transition-colors`}
                aria-label="Ir al inicio"
              >
                Jorge de la Mora
              </Link>
            )}
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {!showBackButton && (
              <Link 
                href="/" 
                className={`${textColor} ${hoverTextColor} px-3 py-2 rounded-md text-sm font-medium transition-colors`}
              >
                Inicio
              </Link>
            )}
            
            {/* Projects Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsProjectsOpen(!isProjectsOpen)}
                className={`${textColor} ${hoverTextColor} px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center`}
                aria-expanded={isProjectsOpen}
                aria-haspopup="true"
              >
                Proyectos
                <ChevronDownIcon className={`ml-1 h-4 w-4 transition-transform ${isProjectsOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isProjectsOpen && (
                <div className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-[60]">
                  <div className="py-1" role="menu">
                    {projects.map((project) => (
                      <Link
                        key={project.href}
                        href={project.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors"
                        role="menuitem"
                        onClick={() => setIsProjectsOpen(false)}
                      >
                        {project.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <button 
              onClick={() => setIsContactModalOpen(true)}
              className={`${backgroundColor.includes('white') || backgroundColor.includes('slate') || backgroundColor.includes('blue') ? 'bg-gray-900 text-white hover:bg-gray-800' : 'bg-white text-gray-900 hover:bg-gray-100'} px-4 py-2 rounded-md text-sm font-medium transition-colors`}
            >
              Contacto
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`${textColor} ${hoverTextColor} p-2 rounded-md`}
              aria-expanded={isMenuOpen}
              aria-label="Abrir menú de navegación"
            >
              {isMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className={`md:hidden border-t ${borderColor} py-4`}>
            <div className="space-y-1">
              {!showBackButton && (
                <Link 
                  href="/" 
                  className={`block px-3 py-2 text-base font-medium ${textColor} ${hoverTextColor} hover:bg-gray-50 rounded-md transition-colors`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Inicio
                </Link>
              )}
              
              <div className="px-3 py-2">
                <div className={`text-base font-medium ${textColor} mb-2`}>Proyectos</div>
                <div className="space-y-1 ml-4">
                  {projects.map((project) => (
                    <Link
                      key={project.href}
                      href={project.href}
                      className={`block py-1 text-sm ${backgroundColor.includes('white') ? 'text-gray-600 hover:text-gray-900' : 'text-gray-300 hover:text-white'} transition-colors`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {project.name}
                    </Link>
                  ))}
                </div>
              </div>
              
              <button 
                onClick={() => {
                  setIsContactModalOpen(true);
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left px-3 py-2 text-base font-medium ${textColor} ${hoverTextColor} hover:bg-gray-50 rounded-md transition-colors`}
              >
                Contacto
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Contact Modal */}
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </header>
  );
}
