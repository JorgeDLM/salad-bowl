'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function createBranch(formData: FormData) {
  try {
    const name = formData.get('name') as string;
    const plaza = formData.get('plaza') as string;
    const franchiseeId = formData.get('franchiseeId') as string;
    const managerName = formData.get('managerName') as string;
    const contactPhone = formData.get('contactPhone') as string;
    const address = formData.get('address') as string;
    const mapsUrl = formData.get('mapsUrl') as string;
    const status = formData.get('status') as string;
    const openingHoursStr = formData.get('openingHours') as string;
    
    let openingHours = null;
    if (openingHoursStr) {
      try {
        const parsed = JSON.parse(openingHoursStr);
        openingHours = Object.keys(parsed).length > 0 ? parsed : null;
      } catch (e) {
        console.error('Error parsing openingHours:', e);
      }
    }

    await prisma.branch.create({
      data: {
        name,
        plaza: plaza || null,
        franchiseeId: franchiseeId ? parseInt(franchiseeId) : null,
        managerName: managerName || null,
        contactPhone: contactPhone || null,
        address,
        mapsUrl: mapsUrl || null,
        status: (status as any) || 'OPEN',
        openingHours,
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
    const plaza = formData.get('plaza') as string;
    const franchiseeId = formData.get('franchiseeId') as string;
    const managerName = formData.get('managerName') as string;
    const contactPhone = formData.get('contactPhone') as string;
    const address = formData.get('address') as string;
    const mapsUrl = formData.get('mapsUrl') as string;
    const status = formData.get('status') as string;
    const openingHoursStr = formData.get('openingHours') as string;
    
    let openingHours = null;
    if (openingHoursStr) {
      try {
        const parsed = JSON.parse(openingHoursStr);
        openingHours = Object.keys(parsed).length > 0 ? parsed : null;
      } catch (e) {
        console.error('Error parsing openingHours:', e);
      }
    }

    console.log('📝 Actualizando sucursal:', {
      id,
      name,
      plaza,
      status,
      mapsUrl,
      openingHours,
      address: address?.substring(0, 50),
    });

    const updated = await prisma.branch.update({
      where: { id },
      data: {
        name,
        plaza: plaza || null,
        franchiseeId: franchiseeId ? parseInt(franchiseeId) : null,
        managerName: managerName || null,
        contactPhone: contactPhone || null,
        address,
        mapsUrl: mapsUrl || null,
        status: (status as any) || 'OPEN',
        openingHours,
      },
    });

    console.log('✅ Sucursal actualizada:', updated.name);

    revalidatePath('/admin/dashboard/branches');
    revalidatePath(`/admin/dashboard/branches/${id}`);
  } catch (error) {
    console.error('❌ Error updating branch:', error);
    return { error: 'Error al actualizar sucursal: ' + (error as Error).message };
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
