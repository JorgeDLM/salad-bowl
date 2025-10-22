import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const branches = await (prisma.branch.findMany as any)({
      where: {
        deletedAt: null,
        franchiseeId: null, // Solo sucursales corporativas
      },
      orderBy: [
        { status: 'asc' }, // OPEN primero, luego COMING_SOON
        { name: 'asc' },
      ],
      select: {
        id: true,
        name: true,
        plaza: true,
        address: true,
        mapsUrl: true,
        contactPhone: true,
        openingHours: true,
        status: true,
      },
    });

    return NextResponse.json({ branches });
  } catch (error) {
    console.error('Error fetching branches:', error);
    return NextResponse.json({ error: 'Error al obtener sucursales' }, { status: 500 });
  }
}
