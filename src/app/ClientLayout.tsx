"use client";

import { useState } from "react";
import Image from "next/image";
import WhatsAppModal from "../components/WhatsAppModal";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<{
    name: string;
    price: string;
    description: string;
  } | undefined>(undefined);

  const openModal = (packageInfo?: { name: string; price: string; description: string }) => {
    setSelectedPackage(packageInfo);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPackage(undefined);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-slate-900/95 backdrop-blur-sm border-b border-purple-500/20">
        <div className="flex items-center justify-between max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <a href="/" className="focus:outline-none flex items-center gap-3 group">
              <div className="relative">
                <Image 
                  src="/icono-welovecode.png" 
                  alt="WeLoveCode Logo" 
                  width={50} 
                  height={50} 
                  className="rounded-lg transition-all duration-300 group-hover:scale-110"
                  priority
                />
                {/* Glow effect for logo */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/30 to-blue-500/30 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </div>
              <div className="relative">
                <div className="text-2xl font-black bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]">
                  WeLoveCode
                </div>
                {/* Additional glow effect */}
                <div className="absolute inset-0 text-2xl font-black bg-gradient-to-r from-purple-400/20 via-blue-400/20 to-purple-400/20 bg-clip-text text-transparent blur-sm">
                  WeLoveCode
                </div>
              </div>
            </a>
          </div>
          <nav className="hidden md:flex gap-6 items-center">
            <a href="#servicios" className="text-gray-300 hover:text-purple-400 transition font-medium">Servicios</a>
            <a href="#casos" className="text-gray-300 hover:text-purple-400 transition font-medium">Casos de Éxito</a>
            <a href="#precios" className="text-gray-300 hover:text-purple-400 transition font-medium">Precios</a>
            <a href="#contacto" className="text-gray-300 hover:text-purple-400 transition font-medium">Contacto</a>
          </nav>
          
          {/* Mobile menu button */}
          <button 
            onClick={toggleMobileMenu}
            className="md:hidden text-white hover:text-purple-400 transition-colors"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-slate-900/98 backdrop-blur-sm border-t border-purple-500/20">
            <nav className="px-4 py-6 space-y-4">
              <a 
                href="#servicios" 
                onClick={closeMobileMenu}
                className="block text-gray-300 hover:text-purple-400 transition font-medium py-2"
              >
                Servicios
              </a>
              <a 
                href="#casos" 
                onClick={closeMobileMenu}
                className="block text-gray-300 hover:text-purple-400 transition font-medium py-2"
              >
                Casos de Éxito
              </a>
              <a 
                href="#precios" 
                onClick={closeMobileMenu}
                className="block text-gray-300 hover:text-purple-400 transition font-medium py-2"
              >
                Precios
              </a>
              <a 
                href="#contacto" 
                onClick={closeMobileMenu}
                className="block text-gray-300 hover:text-purple-400 transition font-medium py-2"
              >
                Contacto
              </a>
              <button
                onClick={() => {
                  openModal();
                  closeMobileMenu();
                }}
                className="w-full mt-4 bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-lg font-bold hover:from-green-600 hover:to-green-700 transition-all"
              >
                Cotizar Proyecto
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* Floating CTA Button */}
      <button
        onClick={() => openModal()}
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-4 rounded-full font-bold shadow-2xl hover:from-green-600 hover:to-green-700 transition-all transform hover:scale-110 animate-bounce-subtle flex items-center gap-2"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.787"/>
        </svg>
        <span className="hidden sm:inline">Cotizar</span>
      </button>
      
      <main className="pt-20">{children}</main>
      
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-black bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
                WeLoveCode
              </div>
              <p className="text-gray-400">
                Arquitectos de ingresos digitales. Convertimos ideas en negocios millonarios.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Servicios</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#servicios" className="hover:text-white transition">MVP Development</a></li>
                <li><a href="#servicios" className="hover:text-white transition">Escalamiento</a></li>
                <li><a href="#servicios" className="hover:text-white transition">Enterprise</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Empresa</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#casos" className="hover:text-white transition">Casos de Éxito</a></li>
                <li><a href="#" className="hover:text-white transition">Sobre Nosotros</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contacto</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="mailto:hola@welovecode.mx" className="hover:text-white transition">hola@welovecode.mx</a></li>
                <li><button onClick={() => openModal()} className="hover:text-white transition text-left">WhatsApp</button></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 WeLoveCode. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
      
      {/* WhatsApp Modal */}
      <WhatsAppModal 
        isOpen={isModalOpen}
        onClose={closeModal}
        selectedPackage={selectedPackage}
      />
    </>
  );
}
