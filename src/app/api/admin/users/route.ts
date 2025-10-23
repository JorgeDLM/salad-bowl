import { NextRequest, NextResponse } from 'next/server';
import { getCurrentUser } from '@/lib/session';
import { prisma } from '@/lib/prisma';
import { hashPassword } from '@/lib/auth';

// POST /api/admin/users - Crear nuevo usuario
export async function POST(request: NextRequest) {
  try {
    const user = await getCurrentUser();

    // Verificar que el usuario es admin
    if (!user || user.role !== 'ADMIN') {
      return NextResponse.json(
        { error: 'No autorizado' },
        { status: 401 }
      );
    }

    const body = await request.json();
    const { email, password, username, role, franchiseeId, branchId } = body;

    // Validar datos requeridos
    if (!email || !password || !role) {
      return NextResponse.json(
        { error: 'Email, contraseña y rol son requeridos' },
        { status: 400 }
      );
    }

    // Verificar que el email no existe
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: 'El email ya está registrado' },
        { status: 400 }
      );
    }

    // Hashear password
    const passwordHash = await hashPassword(password);

    // Crear usuario
    const newUser = await prisma.user.create({
      data: {
        email,
        passwordHash,
        username: username || null,
        role,
        franchiseeId: franchiseeId || null,
        branchId: branchId || null,
        isActive: true,
      },
    });

    return NextResponse.json(
      { 
        message: 'Usuario creado correctamente',
        userId: newUser.id 
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Error al crear usuario:', error);
    return NextResponse.json(
      { error: 'Error al crear usuario' },
      { status: 500 }
    );
  }
}
