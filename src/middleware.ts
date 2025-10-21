import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getIronSession } from 'iron-session';
import { SessionData } from './lib/session';

const sessionOptions = {
  password: process.env.SESSION_SECRET || 'complex_password_at_least_32_characters_long',
  cookieName: 'saladbowl_session',
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production',
    httpOnly: true,
    sameSite: 'lax' as const,
  },
};

export async function middleware(request: NextRequest) {
  const response = NextResponse.next();
  
  // Obtener sesión
  const session = await getIronSession<SessionData>(request, response, sessionOptions);

  const { pathname } = request.nextUrl;

  // Rutas que requieren autenticación
  const protectedRoutes = ['/admin/dashboard', '/franchisee/dashboard', '/employee/dashboard'];
  const isProtectedRoute = protectedRoutes.some(route => pathname.startsWith(route));

  // Si es ruta protegida y no está autenticado, redirigir a login
  if (isProtectedRoute && (!session.isLoggedIn || !session.userId)) {
    const url = request.nextUrl.clone();
    url.pathname = '/admin/login';
    return NextResponse.redirect(url);
  }

  // Si está en login y ya está autenticado, redirigir al dashboard correspondiente
  if (pathname === '/admin/login' && session.isLoggedIn && session.userId) {
    const redirectPath = 
      session.role === 'ADMIN' ? '/admin/dashboard' :
      session.role === 'FRANCHISEE' ? '/franchisee/dashboard' :
      '/employee/dashboard';
    
    const url = request.nextUrl.clone();
    url.pathname = redirectPath;
    return NextResponse.redirect(url);
  }

  // Verificar permisos por rol
  if (pathname.startsWith('/admin/dashboard') && session.role !== 'ADMIN') {
    const url = request.nextUrl.clone();
    url.pathname = '/admin/login';
    return NextResponse.redirect(url);
  }

  if (pathname.startsWith('/franchisee/dashboard') && session.role !== 'FRANCHISEE') {
    const url = request.nextUrl.clone();
    url.pathname = '/admin/login';
    return NextResponse.redirect(url);
  }

  if (pathname.startsWith('/employee/dashboard') && session.role !== 'EMPLOYEE') {
    const url = request.nextUrl.clone();
    url.pathname = '/admin/login';
    return NextResponse.redirect(url);
  }

  return response;
}

export const config = {
  matcher: [
    '/admin/dashboard/:path*',
    '/franchisee/dashboard/:path*',
    '/employee/dashboard/:path*',
    '/admin/login',
  ],
};
