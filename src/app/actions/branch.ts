'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function createBranch(formData: FormData) {
  try {
    const name = formData.get('name') as string;
    const franchiseeId = formData.get('franchiseeId') as string;
    const managerName = formData.get('managerName') as string;
    const contactPhone = formData.get('contactPhone') as string;
    const address = formData.get('address') as string;
    const latitude = formData.get('latitude') as string;
    const longitude = formData.get('longitude') as string;

    await prisma.branch.create({
      data: {
        name,
        franchiseeId: franchiseeId ? parseInt(franchiseeId) : null,
        managerName: managerName || null,
        contactPhone: contactPhone || null,
        address,
        latitude: latitude ? parseFloat(latitude) : null,
        longitude: longitude ? parseFloat(longitude) : null,
        isActive: true,
      },
    });

    revalidatePath('/admin/dashboard/branches');
  } catch (error) {
    console.error('Error creating branch:', error);
    return { error: 'Error al crear sucursal' };
  }
  
  redirect('/admin/dashboard/branches');
}

export async function updateBranch(id: number, formData: FormData) {
  try {
    const name = formData.get('name') as string;
    const franchiseeId = formData.get('franchiseeId') as string;
    const managerName = formData.get('managerName') as string;
    const contactPhone = formData.get('contactPhone') as string;
    const address = formData.get('address') as string;
    const latitude = formData.get('latitude') as string;
    const longitude = formData.get('longitude') as string;

    await prisma.branch.update({
      where: { id },
      data: {
        name,
        franchiseeId: franchiseeId ? parseInt(franchiseeId) : null,
        managerName: managerName || null,
        contactPhone: contactPhone || null,
        address,
        latitude: latitude ? parseFloat(latitude) : null,
        longitude: longitude ? parseFloat(longitude) : null,
      },
    });

    revalidatePath('/admin/dashboard/branches');
    revalidatePath(`/admin/dashboard/branches/${id}`);
  } catch (error) {
    console.error('Error updating branch:', error);
    return { error: 'Error al actualizar sucursal' };
  }
  
  redirect('/admin/dashboard/branches');
}

export async function deleteBranch(id: number) {
  try {
    await prisma.branch.update({
      where: { id },
      data: {
        deletedAt: new Date(),
      },
    });

    revalidatePath('/admin/dashboard/branches');
  } catch (error) {
    console.error('Error deleting branch:', error);
    return { error: 'Error al eliminar sucursal' };
  }
  
  redirect('/admin/dashboard/branches');
}
