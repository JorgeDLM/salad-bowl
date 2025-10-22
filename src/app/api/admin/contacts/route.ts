import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getCurrentUser } from '@/lib/session';

export async function GET(req: NextRequest) {
  try {
    const user = await getCurrentUser();
    
    if (!user || user.role !== 'ADMIN') {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
    }

    const contacts = await prisma.contactInfo.findMany({
      orderBy: { type: 'asc' },
    });

    return NextResponse.json({ contacts });
  } catch (error) {
    console.error('Error al obtener contactos:', error);
    return NextResponse.json({ error: 'Error al obtener contactos' }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const user = await getCurrentUser();
    
    if (!user || user.role !== 'ADMIN') {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
    }

    const { id, email, phone, phoneFormatted, phoneWhatsApp } = await req.json();

    if (!id || !email || !phone) {
      return NextResponse.json({ error: 'Datos incompletos' }, { status: 400 });
    }

    const contact = await prisma.contactInfo.update({
      where: { id: parseInt(id) },
      data: {
        email,
        phone,
        phoneFormatted,
        phoneWhatsApp,
      },
    });

    return NextResponse.json({ contact });
  } catch (error) {
    console.error('Error al actualizar contacto:', error);
    return NextResponse.json({ error: 'Error al actualizar contacto' }, { status: 500 });
  }
}
