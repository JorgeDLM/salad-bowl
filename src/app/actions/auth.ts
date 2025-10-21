'use server';

import { redirect } from 'next/navigation';
import { prisma } from '@/lib/prisma';
import { verifyPassword, hashPassword } from '@/lib/auth';
import { getSession } from '@/lib/session';

/**
 * Login de usuario
 */
export async function loginAction(prevState: any, formData: FormData) {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  // Validaciones básicas
  if (!email || !password) {
    return {
      error: 'Email y contraseña son requeridos',
    };
  }

  try {
    // Buscar usuario por email
    const user = await prisma.user.findUnique({
      where: { email },
      include: {
        franchisee: true,
        branch: true,
      },
    });

    // Verificar que existe y está activo
    if (!user || !user.isActive || user.deletedAt) {
      return {
        error: 'Credenciales inválidas',
      };
    }

    // Verificar password
    const isValid = await verifyPassword(password, user.passwordHash);
    if (!isValid) {
      return {
        error: 'Credenciales inválidas',
      };
    }

    // Crear sesión
    const session = await getSession();
    session.userId = user.id;
    session.email = user.email;
    session.role = user.role;
    session.franchiseeId = user.franchiseeId || undefined;
    session.branchId = user.branchId || undefined;
    session.isLoggedIn = true;
    await session.save();

    // Redirigir según rol
    const redirectPath = 
      user.role === 'ADMIN' ? '/admin/dashboard' :
      user.role === 'FRANCHISEE' ? '/franchisee/dashboard' :
      '/employee/dashboard';

    return { success: true, redirectPath };
  } catch (error) {
    console.error('Login error:', error);
    return {
      error: 'Error al iniciar sesión. Por favor, intenta de nuevo.',
    };
  }
}

/**
 * Logout de usuario
 */
export async function logoutAction() {
  const session = await getSession();
  session.destroy();
  redirect('/admin/login');
}

/**
 * Registrar nuevo usuario (solo admin)
 */
export async function registerUserAction(data: {
  email: string;
  password: string;
  role: 'ADMIN' | 'EMPLOYEE' | 'FRANCHISEE';
  username?: string;
  franchiseeId?: number;
  branchId?: number;
}) {
  // Verificar que el usuario actual es admin
  const session = await getSession();
  if (!session.isLoggedIn || session.role !== 'ADMIN') {
    return {
      error: 'No autorizado',
    };
  }

  try {
    // Verificar que el email no existe
    const existing = await prisma.user.findUnique({
      where: { email: data.email },
    });

    if (existing) {
      return {
        error: 'El email ya está registrado',
      };
    }

    // Hashear password
    const passwordHash = await hashPassword(data.password);

    // Crear usuario
    const user = await prisma.user.create({
      data: {
        email: data.email,
        passwordHash,
        role: data.role,
        username: data.username,
        franchiseeId: data.franchiseeId,
        branchId: data.branchId,
        isActive: true,
      },
    });

    return {
      success: true,
      userId: user.id,
    };
  } catch (error) {
    console.error('Register error:', error);
    return {
      error: 'Error al registrar usuario',
    };
  }
}

/**
 * Cambiar contraseña
 */
export async function changePasswordAction(data: {
  currentPassword: string;
  newPassword: string;
}) {
  const session = await getSession();
  if (!session.isLoggedIn || !session.userId) {
    return {
      error: 'No autenticado',
    };
  }

  try {
    // Obtener usuario actual
    const user = await prisma.user.findUnique({
      where: { id: session.userId },
    });

    if (!user) {
      return {
        error: 'Usuario no encontrado',
      };
    }

    // Verificar contraseña actual
    const isValid = await verifyPassword(data.currentPassword, user.passwordHash);
    if (!isValid) {
      return {
        error: 'Contraseña actual incorrecta',
      };
    }

    // Hashear nueva contraseña
    const newPasswordHash = await hashPassword(data.newPassword);

    // Actualizar
    await prisma.user.update({
      where: { id: user.id },
      data: { passwordHash: newPasswordHash },
    });

    return {
      success: true,
    };
  } catch (error) {
    console.error('Change password error:', error);
    return {
      error: 'Error al cambiar contraseña',
    };
  }
}
