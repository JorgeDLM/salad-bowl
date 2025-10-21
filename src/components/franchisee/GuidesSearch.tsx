'use client';

import { useState } from 'react';
import Link from 'next/link';

const searchableContent = [
  // Manual de Imagen
  { title: 'Manual de Imagen', section: 'Uso de Logotipo', href: '/franchisee/dashboard/guides/manual-imagen', keywords: 'logotipo logo imagen marca branding identidad visual' },
  { title: 'Manual de Imagen', section: 'Paleta Cromática', href: '/franchisee/dashboard/guides/manual-imagen', keywords: 'colores paleta pantone corporativos visual' },
  
  // Marketing y Promociones
  { title: 'Marketing', section: 'Sistema de Lealtad', href: '/franchisee/dashboard/guides/marketing-promociones', keywords: 'lealtad puntos recompensas cashback' },
  { title: 'Marketing', section: 'Promoción After Work', href: '/franchisee/dashboard/guides/marketing-promociones', keywords: 'promoción after work tardes descuento' },
  
  // Seguridad Alimentaria
  { title: 'Seguridad Alimentaria', section: 'Información General', href: '/franchisee/dashboard/guides/operaciones/seguridad-alimentaria', keywords: 'seguridad alimentaria intoxicación higiene' },
  { title: 'Seguridad Alimentaria', section: 'Enfermedades', href: '/franchisee/dashboard/guides/operaciones/seguridad-alimentaria/enfermedades', keywords: 'enfermedades intoxicación síntomas bacterias virus' },
  { title: 'Seguridad Alimentaria', section: 'Protocolos de Reclamo', href: '/franchisee/dashboard/guides/operaciones/seguridad-alimentaria/protocolos', keywords: 'protocolos reclamo queja intoxicación cliente' },
  { title: 'Seguridad Alimentaria', section: '10 Factores Críticos', href: '/franchisee/dashboard/guides/operaciones/seguridad-alimentaria/factores-criticos', keywords: 'factores críticos lavado manos temperatura alérgenos plagas' },
  
  // Liderazgo y Gestión
  { title: 'Liderazgo y Gestión', section: 'Liderazgo en Turno', href: '/franchisee/dashboard/guides/operaciones/liderazgo-gestion', keywords: 'liderazgo turno gestión delegación equipo coordinación comunicación' },
  
  // Operaciones
  { title: 'Manual de Operaciones', section: 'Índice General', href: '/franchisee/dashboard/guides/operaciones', keywords: 'operaciones procesos estándares diarios' },
];

export default function GuidesSearch() {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState<typeof searchableContent>([]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    
    if (query.trim().length < 2) {
      setResults([]);
      return;
    }

    const lowerQuery = query.toLowerCase();
    const filtered = searchableContent.filter(item => 
      item.title.toLowerCase().includes(lowerQuery) ||
      item.section.toLowerCase().includes(lowerQuery) ||
      item.keywords.toLowerCase().includes(lowerQuery)
    );
    
    setResults(filtered);
  };

  return (
    <div className="mb-12">
      <div className="relative max-w-2xl mx-auto">
        {/* Search Input */}
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Buscar en tópico... (ej: intoxicación, promociones, d)"
            className="w-full px-6 py-4 pr-12 text-gray-900 bg-white border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-sb-green-600 focus:ring-4 focus:ring-sb-green-100 transition-all"
          />
          <svg 
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400"
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>

        {/* Search Results */}
        {searchQuery.length >= 2 && (
          <div className="absolute z-10 w-full mt-2 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
            {results.length > 0 ? (
              <div className="max-h-96 overflow-y-auto">
                {results.map((result, index) => (
                  <Link
                    key={index}
                    href={result.href}
                    onClick={() => {
                      setSearchQuery('');
                      setResults([]);
                    }}
                    className="block px-6 py-4 hover:bg-sb-green-50 transition-colors border-b border-gray-100 last:border-b-0"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-sb-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-5 h-5 text-sb-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900">{result.section}</p>
                        <p className="text-sm text-gray-600">{result.title}</p>
                      </div>
                      <svg className="w-5 h-5 text-gray-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="px-6 py-8 text-center">
                <svg className="w-12 h-12 text-gray-300 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-gray-500 font-medium">No se encontraron resultados</p>
                <p className="text-sm text-gray-400 mt-1">Intenta con otras palabras clave</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
