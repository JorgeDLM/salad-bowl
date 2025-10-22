import { redirect } from 'next/navigation';
import { getCurrentUser } from '@/lib/session';
import { prisma } from '@/lib/prisma';
import DashboardLayout from '@/components/admin/DashboardLayout';
import EditUserForm from '@/components/admin/EditUserForm';

export default async function EditUserPage({ params }: { params: { id: string } }) {
  const user = await getCurrentUser();
  
  if (!user || user.role !== 'ADMIN') {
    redirect('/admin/login');
  }

  const userId = parseInt(params.id);

  if (isNaN(userId)) {
    redirect('/admin/dashboard/users');
  }

  const targetUser = await prisma.user.findUnique({
    where: { id: userId },
    include: {
      franchisee: true,
      branch: true,
    },
  });

  if (!targetUser || targetUser.deletedAt) {
    redirect('/admin/dashboard/users');
  }

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
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Editar Usuario</h2>
          <p className="text-gray-600">Modifica la información del usuario</p>
        </div>

        <EditUserForm
          user={targetUser}
          franchisees={franchisees}
          branches={branches}
        />
      </div>
    </DashboardLayout>
  );
}
