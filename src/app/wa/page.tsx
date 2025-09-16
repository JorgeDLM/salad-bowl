"use client";

import { useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

function WhatsAppTrackerContent() {
  const searchParams = useSearchParams();

  useEffect(() => {
    // Obtener parámetros
    const pkg = searchParams.get('pkg') || '';
    const src = searchParams.get('src') || 'web';
    
    // Registrar conversión
    if (typeof window !== 'undefined') {
      // Google Analytics
      if ((window as any).gtag) {
        (window as any).gtag('event', 'whatsapp_conversion', {
          event_category: 'contact',
          event_label: pkg || 'general',
          value: 1
        });
      }
      
      // Guardar en localStorage
      const conversion = {
        timestamp: new Date().toISOString(),
        package: pkg,
        source: src,
        url: window.location.href
      };
      
      const conversions = JSON.parse(localStorage.getItem('wa_conversions') || '[]');
      conversions.push(conversion);
      localStorage.setItem('wa_conversions', JSON.stringify(conversions));
    }

    // Crear mensaje para WhatsApp
    let message = '¡Hola! Me interesa trabajar con WeLoveCode 🚀';
    if (pkg) {
      message += `\n\n📦 Paquete de interés: ${pkg}`;
    }
    message += '\n\nEspero su respuesta para agendar una consulta. ¡Gracias!';

    // Redirigir a WhatsApp
    const whatsappURL = `https://wa.me/522228377162?text=${encodeURIComponent(message)}`;
    
    setTimeout(() => {
      window.location.href = whatsappURL;
    }, 500);

  }, [searchParams]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center text-white">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-400 mx-auto mb-4"></div>
        <h1 className="text-xl font-bold mb-2">Conectando con WhatsApp...</h1>
        <p className="text-gray-300">Redirigiendo...</p>
      </div>
    </div>
  );
}

export default function WhatsAppTracker() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center text-white">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-400 mx-auto mb-4"></div>
          <h1 className="text-xl font-bold mb-2">Cargando...</h1>
        </div>
      </div>
    }>
      <WhatsAppTrackerContent />
    </Suspense>
  );
}
