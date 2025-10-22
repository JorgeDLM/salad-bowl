import { NextRequest, NextResponse } from 'next/server';
import { getCurrentUser } from '@/lib/session';
import { prisma } from '@/lib/prisma';

// PUT /api/admin/users/[id]/update - Actualizar usuario
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const user = await getCurrentUser();

    // Verificar que el usuario es admin
    if (!user || user.role !== 'ADMIN') {
      return NextResponse.json(
        { error: 'No autorizado' },
        { status: 401 }
      );
    }

    const userId = parseInt(params.id);

    if (isNaN(userId)) {
      return NextResponse.json(
        { error: 'ID de usuario inválido' },
        { status: 400 }
      );
    }

    const body = await request.json();
    const { email, username, role, isActive, franchiseeId, branchId } = body;

    // Obtener el usuario a actualizar
    const targetUser = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!targetUser || targetUser.deletedAt) {
      return NextResponse.json(
        { error: 'Usuario no encontrado' },
        { status: 404 }
      );
    }

    // Proteger al administrador de cambios críticos
    if (targetUser.role === 'ADMIN') {
      // No permitir cambiar el email, rol o desactivar el admin
      if (email !== targetUser.email || role !== 'ADMIN' || !isActive) {
        return NextResponse.json(
          { error: 'No se pueden modificar los datos críticos del administrador' },
          { status: 403 }
        );
      }
    }

    // Verificar que el email no esté en uso por otro usuario
    if (email !== targetUser.email) {
      const existingUser = await prisma.user.findUnique({
        where: { email },
      });

      if (existingUser && existingUser.id !== userId) {
        return NextResponse.json(
          { error: 'El email ya está en uso' },
          { status: 400 }
        );
      }
    }

    // Actualizar usuario
    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: {
        email,
        username: username || null,
        role,
        isActive,
        franchiseeId: franchiseeId || null,
        branchId: branchId || null,
      },
    });

    return NextResponse.json(
      { message: 'Usuario actualizado correctamente', user: updatedUser },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Error al actualizar usuario:', error);
    return NextResponse.json(
      { error: 'Error al actualizar usuario' },
      { status: 500 }
    );
  }
}
