'use client';

import { usePathname } from 'next/navigation';
import Header from './Header';

export default function DynamicHeader() {
  const pathname = usePathname();

  // Definir colores por proyecto
  const getHeaderColor = (path: string) => {
    if (path.includes('/proyectos/mercado-a-la-mano')) {
      return 'bg-gradient-to-r from-sky-400 to-sky-500';
    }
    if (path.includes('/proyectos/client-mx')) {
      return 'bg-gradient-to-r from-green-500 to-green-600';
    }
    if (path.includes('/proyectos/welovecode')) {
      return 'bg-gradient-to-r from-purple-500 to-purple-600';
    }
    if (path.includes('/proyectos/zephir-jewelry')) {
      return 'bg-black';
    }
    if (path.includes('/proyectos/mercado-libre')) {
      return 'bg-gradient-to-r from-yellow-500 to-yellow-500';
    }
    
    // Color por defecto para la página principal y otras rutas
    return 'bg-gradient-to-r from-slate-50 to-blue-50';
  };

  return (
    <Header 
      backgroundColor={getHeaderColor(pathname)}
      showBackButton={false}
    />
  );
}
