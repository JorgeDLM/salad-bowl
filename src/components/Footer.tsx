'use client';

import Link from 'next/link';
import ContactModal from './ContactModal';
import { useState } from 'react';

export default function Footer() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <div className="space-y-2">
              <p className="text-gray-300">
                <button 
                  onClick={() => setIsContactModalOpen(true)}
                  className="hover:text-white transition-colors text-left"
                  aria-label="Contactar a Jorge de la Mora"
                >
                  palombaco@live.com
                </button>
              </p>
              <p className="text-gray-300">Puebla, México</p>
            </div>
          </div>

          {/* Projects */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Proyectos</h3>
            <div className="space-y-2">
              <p>
                <a 
                  href="https://www.mercadoalamano.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Mercado a la Mano
                </a>
              </p>
              <p>
                <a 
                  href="https://www.welovecode.mx" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  WeLoveCode
                </a>
              </p>
              <p>
                <a 
                  href="https://www.zephir.mx" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Zephir Jewelry
                </a>
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navegación</h3>
            <div className="space-y-2">
              <p>
                <Link 
                  href="/" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Inicio
                </Link>
              </p>
              <p>
                <Link 
                  href="/proyectos/mercado-a-la-mano" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Proyectos
                </Link>
              </p>
              <p>
                <button 
                  onClick={() => setIsContactModalOpen(true)}
                  className="text-gray-300 hover:text-white transition-colors text-left"
                >
                  Contacto
                </button>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} Jorge de la Mora Menéndez. Todos los derechos reservados.
          </p>
        </div>
      </div>

      {/* Contact Modal */}
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </footer>
  );
}
