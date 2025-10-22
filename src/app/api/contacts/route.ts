import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const type = searchParams.get('type');

    if (type) {
      const contact = await prisma.contactInfo.findUnique({
        where: { type: type as any },
      });

      if (!contact) {
        return NextResponse.json({ error: 'Contacto no encontrado' }, { status: 404 });
      }

      return NextResponse.json({ contact });
    }

    // Devolver todos los contactos
    const contacts = await prisma.contactInfo.findMany({
      where: { isActive: true },
      orderBy: { type: 'asc' },
    });

    return NextResponse.json({ contacts });
  } catch (error) {
    console.error('Error al obtener contactos:', error);
    return NextResponse.json({ error: 'Error al obtener contactos' }, { status: 500 });
  }
}
