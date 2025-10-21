'use client';

import { usePathname } from 'next/navigation';
import Navbar from './Navbar';

export default function ConditionalNavbar() {
  const pathname = usePathname();
  
  // Lista de rutas donde NO debe aparecer el navbar
  const hiddenRoutes = [
    '/admin/dashboard',
    '/franchisee/dashboard',
    '/employee/dashboard',
  ];
  
  // Verificar si la ruta actual comienza con alguna de las rutas ocultas
  const shouldHideNavbar = hiddenRoutes.some(route => pathname.startsWith(route));
  
  // Si debe ocultarse, no renderizar nada
  if (shouldHideNavbar) {
    return null;
  }
  
  // En caso contrario, mostrar el navbar (incluyendo /admin/login)
  return <Navbar />;
}
