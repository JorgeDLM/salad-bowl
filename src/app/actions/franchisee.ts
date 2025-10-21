'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function createFranchisee(formData: FormData) {
  try {
    const name = formData.get('name') as string;
    const contactName = formData.get('contactName') as string;
    const contactPhone = formData.get('contactPhone') as string;
    const contactEmail = formData.get('contactEmail') as string;
    const notes = formData.get('notes') as string;

    // Crear franquiciatario (Prisma ya maneja atomicidad)
    await prisma.franchisee.create({
      data: {
        name,
        contactName: contactName || null,
        contactPhone: contactPhone || null,
        contactEmail: contactEmail || null,
        notes: notes || null,
        isActive: true,
      },
    });

    revalidatePath('/admin/dashboard/franchisees');
  } catch (error) {
    console.error('Error creating franchisee:', error);
    return { error: 'Error al crear franquiciatario' };
  }
  
  redirect('/admin/dashboard/franchisees');
}

export async function updateFranchisee(id: number, formData: FormData) {
  try {
    const name = formData.get('name') as string;
    const contactName = formData.get('contactName') as string;
    const contactPhone = formData.get('contactPhone') as string;
    const contactEmail = formData.get('contactEmail') as string;
    const notes = formData.get('notes') as string;

    // Actualizar (atómico)
    await prisma.franchisee.update({
      where: { id },
      data: {
        name,
        contactName: contactName || null,
        contactPhone: contactPhone || null,
        contactEmail: contactEmail || null,
        notes: notes || null,
      },
    });

    revalidatePath('/admin/dashboard/franchisees');
    revalidatePath(`/admin/dashboard/franchisees/${id}`);
  } catch (error) {
    console.error('Error updating franchisee:', error);
    return { error: 'Error al actualizar franquiciatario' };
  }
  
  redirect('/admin/dashboard/franchisees');
}

export async function deleteFranchisee(id: number) {
  try {
    // Soft delete (atómico)
    await prisma.franchisee.update({
      where: { id },
      data: {
        deletedAt: new Date(),
      },
    });

    revalidatePath('/admin/dashboard/franchisees');
  } catch (error) {
    console.error('Error deleting franchisee:', error);
    return { error: 'Error al eliminar franquiciatario' };
  }
  
  redirect('/admin/dashboard/franchisees');
}
