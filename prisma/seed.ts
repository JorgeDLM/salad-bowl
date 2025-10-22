import { PrismaClient } from './generated/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Iniciando seed de la base de datos...');

  // Hashear passwords
  const adminPassword = await bcrypt.hash('admin123', 12);
  const franchiseePassword = await bcrypt.hash('franchisee123', 12);
  const employeePassword = await bcrypt.hash('employee123', 12);

  // Crear Admin
  const admin = await prisma.user.upsert({
    where: { email: 'admin@saladbowl.mx' },
    update: {},
    create: {
      email: 'admin@saladbowl.mx',
      username: 'admin',
      passwordHash: adminPassword,
      role: 'ADMIN',
      isActive: true,
    },
  });
  console.log('✅ Admin creado:', admin.email);

  // Crear Sucursales Corporativas (pertenecen al admin)
  const plazaVia = await prisma.branch.upsert({
    where: { id: 1 },
    update: {},
    create: {
      franchiseeId: null, // Corporativa
      name: 'Vía San Ángel',
      plaza: 'Plaza Vía San Ángel',
      contactPhone: '2222252125',
      address: 'Blvd. Atlixcáyotl 1405, Local B 5, Reserva Territorial Atlixcáyotl, 72192 San Bernardino Tlaxcalancingo, Pue.',
      mapsUrl: 'https://www.google.com/maps?q=Plaza+Via+San+Angel+Puebla',
      latitude: 19.0414398,
      longitude: -98.2062727,
      status: 'OPEN',
      isActive: true,
      openingHours: {
        mon: { open: '09:00', close: '20:30' },
        tue: { open: '09:00', close: '20:30' },
        wed: { open: '09:00', close: '20:30' },
        thu: { open: '09:00', close: '20:30' },
        fri: { open: '09:00', close: '20:30' },
        sat: { open: '09:00', close: '20:30' },
        sun: { open: '09:00', close: '20:30' },
      },
    },
  });
  console.log('✅ Sucursal creada:', plazaVia.name);

  const zavaleta = await prisma.branch.upsert({
    where: { id: 2 },
    update: {},
    create: {
      franchiseeId: null, // Corporativa
      name: 'Zavaleta',
      plaza: 'Plaza Office Depot',
      contactPhone: '2221695444',
      address: 'Calz Zavaleta 3916, Sta Cruz Buenavista, 72150 Heroica Puebla de Zaragoza, Pue.',
      mapsUrl: 'https://www.google.com/maps?q=Zavaleta+Salad+Bowl+Puebla',
      latitude: 19.0252,
      longitude: -98.2435,
      status: 'OPEN',
      isActive: true,
      openingHours: {
        mon: { open: '11:00', close: '20:00' },
        tue: { open: '11:00', close: '20:00' },
        wed: { open: '11:00', close: '20:00' },
        thu: { open: '11:00', close: '20:00' },
        fri: { open: '11:00', close: '20:00' },
        sat: { open: '11:00', close: '20:00' },
        sun: { open: '11:00', close: '20:00' },
      },
    },
  });
  console.log('✅ Sucursal creada:', zavaleta.name);

  const lomas = await prisma.branch.upsert({
    where: { id: 3 },
    update: {},
    create: {
      franchiseeId: null, // Corporativa
      name: 'Lomas de Angelópolis',
      plaza: null,
      contactPhone: null,
      address: 'Blvd. los Reyes 6201, Lomas de Angelópolis, 72830 San Bernardino Tlaxcalancingo, Pue.',
      mapsUrl: 'https://www.google.com/maps?q=Lomas+de+Angelopolis+Salad+Bowl',
      latitude: 19.0589,
      longitude: -98.2837,
      status: 'OPEN',
      isActive: true,
      openingHours: {
        mon: { open: '09:00', close: '20:30' },
        tue: { open: '09:00', close: '20:30' },
        wed: { open: '09:00', close: '20:30' },
        thu: { open: '09:00', close: '20:30' },
        fri: { open: '09:00', close: '20:30' },
        sat: { open: '12:00', close: '20:30' },
        sun: { open: '12:00', close: '20:30' },
      },
    },
  });
  console.log('✅ Sucursal creada:', lomas.name);

  const laPaz = await prisma.branch.upsert({
    where: { id: 4 },
    update: {},
    create: {
      franchiseeId: null, // Corporativa
      name: 'La Paz',
      plaza: null,
      contactPhone: null,
      address: 'San Martin Texmelucan esquina con 3 poniente, La Paz, 72160 Heroica Puebla de Zaragoza, Pue.',
      mapsUrl: 'https://www.google.com/maps?q=La+Paz+Puebla',
      latitude: null,
      longitude: null,
      status: 'COMING_SOON',
      isActive: false,
      openingHours: null,
    },
  });
  console.log('✅ Sucursal creada:', laPaz.name);

  const sanAntonio = await prisma.branch.upsert({
    where: { id: 5 },
    update: {},
    create: {
      franchiseeId: null, // Corporativa
      name: 'San Antonio',
      plaza: null,
      contactPhone: null,
      address: '115 N Loop 1604 E #2100, San Antonio, TX 78232, Estados Unidos',
      mapsUrl: 'https://www.google.com/maps?q=115+N+Loop+1604+E+2100+San+Antonio+TX',
      latitude: null,
      longitude: null,
      status: 'COMING_SOON',
      isActive: false,
      openingHours: null,
    },
  });
  console.log('✅ Sucursal creada:', sanAntonio.name);

  // Crear Franquiciatario de Ejemplo
  const franchisee = await prisma.franchisee.upsert({
    where: { id: 1 },
    update: {},
    create: {
      name: 'Franquicia Ejemplo',
      contactName: 'Juan Pérez',
      contactPhone: '2221234567',
      contactEmail: 'contacto@franquicia.mx',
      isActive: true,
    },
  });
  console.log('✅ Franquiciatario creado:', franchisee.name);

  // Crear Usuario Franquiciatario
  const franchiseeUser = await prisma.user.upsert({
    where: { email: 'franchisee@saladbowl.mx' },
    update: {},
    create: {
      email: 'franchisee@saladbowl.mx',
      username: 'franchisee',
      passwordHash: franchiseePassword,
      role: 'FRANCHISEE',
      franchiseeId: franchisee.id,
      isActive: true,
    },
  });
  console.log('✅ Usuario Franquiciatario creado:', franchiseeUser.email);

  // Crear Empleados para cada sucursal
  const employeePlazaVia = await prisma.user.upsert({
    where: { email: 'employee.plazavia@saladbowl.mx' },
    update: {},
    create: {
      email: 'employee.plazavia@saladbowl.mx',
      username: 'employee_plazavia',
      passwordHash: employeePassword,
      role: 'EMPLOYEE',
      branchId: plazaVia.id,
      isActive: true,
    },
  });
  console.log('✅ Empleado Plaza Vía creado:', employeePlazaVia.email);

  const employeeZavaleta = await prisma.user.upsert({
    where: { email: 'employee.zavaleta@saladbowl.mx' },
    update: {},
    create: {
      email: 'employee.zavaleta@saladbowl.mx',
      username: 'employee_zavaleta',
      passwordHash: employeePassword,
      role: 'EMPLOYEE',
      branchId: zavaleta.id,
      isActive: true,
    },
  });
  console.log('✅ Empleado Zavaleta creado:', employeeZavaleta.email);

  const employeeLomas = await prisma.user.upsert({
    where: { email: 'employee.lomas@saladbowl.mx' },
    update: {},
    create: {
      email: 'employee.lomas@saladbowl.mx',
      username: 'employee_lomas',
      passwordHash: employeePassword,
      role: 'EMPLOYEE',
      branchId: lomas.id,
      isActive: true,
    },
  });
  console.log('✅ Empleado Lomas creado:', employeeLomas.email);

  // Crear Contactos Globales
  const contactTypes = [
    { type: 'GENERAL', email: 'hola@saladbowl.mx', phone: '2222996191', phoneFormatted: '(222) 299-6191', phoneWhatsApp: '522222996191' },
    { type: 'LEGAL', email: 'legal@saladbowl.mx', phone: '2222996191', phoneFormatted: '(222) 299-6191', phoneWhatsApp: '522222996191' },
    { type: 'FRANCHISE', email: 'franquicias@saladbowl.mx', phone: '2222996191', phoneFormatted: '(222) 299-6191', phoneWhatsApp: '522222996191' },
    { type: 'SALES', email: 'ventas@saladbowl.mx', phone: '2222996191', phoneFormatted: '(222) 299-6191', phoneWhatsApp: '522222996191' },
  ];

  for (const contact of contactTypes) {
    await prisma.contactInfo.upsert({
      where: { type: contact.type as any },
      update: {},
      create: contact as any,
    });
  }
  console.log('✅ Contactos globales creados');

  // Crear Categorías de Guías
  const categories = [
    { name: 'Operaciones', slug: 'operaciones', parentId: null, position: 1 },
    { name: 'Recetas', slug: 'recetas', parentId: null, position: 2 },
    { name: 'Servicio al Cliente', slug: 'servicio-cliente', parentId: null, position: 3 },
    { name: 'Limpieza e Higiene', slug: 'limpieza-higiene', parentId: null, position: 4 },
  ];

  for (const category of categories) {
    await prisma.guidelineCategory.upsert({
      where: { slug: category.slug },
      update: {},
      create: category,
    });
  }
  console.log('✅ Categorías de guías creadas');

  console.log('\n🎉 Seed completado exitosamente!');
  console.log('\n📋 Credenciales de prueba:');
  console.log('----------------------------------------');
  console.log('ADMIN:');
  console.log('  Email: admin@saladbowl.mx');
  console.log('  Password: admin123');
  console.log('\nFRANQUICIATARIO:');
  console.log('  Email: franchisee@saladbowl.mx');
  console.log('  Password: franchisee123');
  console.log('\nEMPLEADOS (password: employee123):');
  console.log('  Plaza Vía: employee.plazavia@saladbowl.mx');
  console.log('  Zavaleta: employee.zavaleta@saladbowl.mx');
  console.log('  Lomas: employee.lomas@saladbowl.mx');
  console.log('----------------------------------------\n');
}

main()
  .catch((e) => {
    console.error('❌ Error en seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
