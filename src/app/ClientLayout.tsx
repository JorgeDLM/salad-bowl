"use client";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-slate-900/95 backdrop-blur-sm border-b border-purple-500/20">
        <div className="flex items-center justify-between max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center gap-2">
            <a href="/" className="focus:outline-none">
              <div className="text-2xl font-black bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                WeLoveCode
              </div>
            </a>
          </div>
          <nav className="hidden md:flex gap-6 items-center">
            <a href="#servicios" className="text-gray-300 hover:text-purple-400 transition font-medium">Servicios</a>
            <a href="#casos" className="text-gray-300 hover:text-purple-400 transition font-medium">Casos de Éxito</a>
            <a href="#precios" className="text-gray-300 hover:text-purple-400 transition font-medium">Precios</a>
            <a href="#contacto" className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-lg font-bold hover:from-purple-700 hover:to-blue-700 transition">
              Consulta Gratuita
            </a>
          </nav>
          
          {/* Mobile menu button */}
          <button className="md:hidden text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>
      
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
                <li><a href="mailto:hola@welovecode.dev" className="hover:text-white transition">hola@welovecode.dev</a></li>
                <li><a href="https://wa.me/1234567890" className="hover:text-white transition">WhatsApp</a></li>
                <li><a href="#" className="hover:text-white transition">LinkedIn</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 WeLoveCode. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
