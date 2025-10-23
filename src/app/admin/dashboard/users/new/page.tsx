import { redirect } from 'next/navigation';
import { getCurrentUser } from '@/lib/session';
import { prisma } from '@/lib/prisma';
import DashboardLayout from '@/components/admin/DashboardLayout';
import CreateUserForm from '@/components/admin/CreateUserForm';
import Link from 'next/link';

export default async function NewUserPage() {
  const user = await getCurrentUser();
  
  if (!user || user.role !== 'ADMIN') {
    redirect('/admin/login');
  }

  // Obtener franquicias y sucursales
  const franchisees = await prisma.franchisee.findMany({
    where: { deletedAt: null },
    orderBy: { name: 'asc' },
  });

  const branches = await prisma.branch.findMany({
    where: { deletedAt: null },
    orderBy: { name: 'asc' },
  });

  return (
    <DashboardLayout userEmail={user.email} userRole={user.role}>
      <div className="max-w-3xl">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/admin/dashboard/users"
            className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-4"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Volver a usuarios
          </Link>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Crear Nuevo Usuario</h2>
          <p className="text-gray-600">Completa los datos del nuevo usuario</p>
        </div>

        {/* Form */}
        <CreateUserForm franchisees={franchisees} branches={branches} />
      </div>
    </DashboardLayout>
  );
}
