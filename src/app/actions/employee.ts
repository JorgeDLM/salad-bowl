'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import bcrypt from 'bcryptjs';

export async function createEmployee(formData: FormData) {
  try {
    const email = formData.get('email') as string;
    const username = formData.get('username') as string;
    const password = formData.get('password') as string;
    const branchId = formData.get('branchId') as string;
    const franchiseeId = formData.get('franchiseeId') as string;

    // Verificar si el email ya existe
    const existing = await prisma.user.findUnique({
      where: { email },
    });

    if (existing) {
      return { error: 'El email ya está registrado' };
    }

    // Hashear contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    // Crear empleado
    await prisma.user.create({
      data: {
        email,
        username: username || null,
        password: hashedPassword,
        role: 'EMPLOYEE',
        branchId: branchId ? parseInt(branchId) : null,
        franchiseeId: franchiseeId ? parseInt(franchiseeId) : null,
        isActive: true,
      },
    });

    revalidatePath('/franchisee/dashboard/settings');
  } catch (error) {
    console.error('Error creating employee:', error);
    return { error: 'Error al crear empleado' };
  }
  
  redirect('/franchisee/dashboard/settings');
}

export async function updateEmployee(id: number, formData: FormData) {
  try {
    const email = formData.get('email') as string;
    const username = formData.get('username') as string;
    const branchId = formData.get('branchId') as string;
    const isActive = formData.get('isActive') === 'true';

    await prisma.user.update({
      where: { id },
      data: {
        email,
        username: username || null,
        branchId: branchId ? parseInt(branchId) : null,
        isActive,
      },
    });

    revalidatePath('/franchisee/dashboard/settings');
  } catch (error) {
    console.error('Error updating employee:', error);
    return { error: 'Error al actualizar empleado' };
  }
  
  redirect('/franchisee/dashboard/settings');
}

export async function deleteEmployee(id: number) {
  try {
    await prisma.user.update({
      where: { id },
      data: {
        deletedAt: new Date(),
      },
    });

    revalidatePath('/franchisee/dashboard/settings');
  } catch (error) {
    console.error('Error deleting employee:', error);
    return { error: 'Error al eliminar empleado' };
  }
  
  redirect('/franchisee/dashboard/settings');
}
