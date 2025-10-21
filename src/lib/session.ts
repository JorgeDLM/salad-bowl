import { getIronSession, IronSession } from 'iron-session';
import { cookies } from 'next/headers';

export interface SessionData {
  userId: number;
  email: string;
  role: 'ADMIN' | 'EMPLOYEE' | 'FRANCHISEE';
  franchiseeId?: number;
  branchId?: number;
  isLoggedIn: boolean;
}

const sessionOptions = {
  password: process.env.SESSION_SECRET || 'complex_password_at_least_32_characters_long',
  cookieName: 'saladbowl_session',
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production',
    httpOnly: true,
    sameSite: 'lax' as const,
    maxAge: 60 * 60 * 24 * 7, // 7 días
    path: '/',
  },
};

/**
 * Obtener sesión actual
 */
export async function getSession(): Promise<IronSession<SessionData>> {
  const cookieStore = await cookies();
  return getIronSession<SessionData>(cookieStore, sessionOptions);
}

/**
 * Verificar si el usuario está autenticado
 */
export async function isAuthenticated(): Promise<boolean> {
  const session = await getSession();
  return session.isLoggedIn === true && !!session.userId;
}

/**
 * Verificar si el usuario es admin
 */
export async function isAdmin(): Promise<boolean> {
  const session = await getSession();
  return session.isLoggedIn === true && session.role === 'ADMIN';
}

/**
 * Obtener datos del usuario de la sesión
 */
export async function getCurrentUser(): Promise<SessionData | null> {
  const session = await getSession();
  if (!session.isLoggedIn || !session.userId) {
    return null;
  }
  return {
    userId: session.userId,
    email: session.email,
    role: session.role,
    franchiseeId: session.franchiseeId,
    branchId: session.branchId,
    isLoggedIn: session.isLoggedIn,
  };
}
