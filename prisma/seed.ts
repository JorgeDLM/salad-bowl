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

  // Crear Franquiciatario
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

  // Crear Sucursal
  const branch = await prisma.branch.upsert({
    where: { id: 1 },
    update: {},
    create: {
      franchiseeId: franchisee.id,
      name: 'Sucursal Centro',
      managerName: 'María García',
      contactPhone: '2227654321',
      address: 'Av. Juárez 123, Centro, Puebla',
      latitude: 19.0414,
      longitude: -98.2063,
      isActive: true,
      openingHours: {
        mon: { open: '09:00', close: '21:00' },
        tue: { open: '09:00', close: '21:00' },
        wed: { open: '09:00', close: '21:00' },
        thu: { open: '09:00', close: '21:00' },
        fri: { open: '09:00', close: '22:00' },
        sat: { open: '10:00', close: '22:00' },
        sun: { open: '10:00', close: '20:00' },
      },
    },
  });
  console.log('✅ Sucursal creada:', branch.name);

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

  // Crear Usuario Empleado
  const employeeUser = await prisma.user.upsert({
    where: { email: 'employee@saladbowl.mx' },
    update: {},
    create: {
      email: 'employee@saladbowl.mx',
      username: 'employee',
      passwordHash: employeePassword,
      role: 'EMPLOYEE',
      franchiseeId: franchisee.id,
      branchId: branch.id,
      isActive: true,
    },
  });
  console.log('✅ Usuario Empleado creado:', employeeUser.email);

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
  console.log('\nEMPLEADO:');
  console.log('  Email: employee@saladbowl.mx');
  console.log('  Password: employee123');
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
