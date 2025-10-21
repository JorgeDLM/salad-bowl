import { redirect } from 'next/navigation';
import { getCurrentUser } from '@/lib/session';
import { prisma } from '@/lib/prisma';
import DashboardLayout from '@/components/admin/DashboardLayout';
import BranchForm from '@/components/admin/BranchForm';

export default async function NewBranchPage() {
  const user = await getCurrentUser();
  
  if (!user || user.role !== 'ADMIN') {
    redirect('/admin/login');
  }

  // Obtener todos los franquiciatarios activos para el selector
  const franchisees = await prisma.franchisee.findMany({
    where: { 
      deletedAt: null,
      isActive: true,
    },
    orderBy: { name: 'asc' },
  });

  return (
    <DashboardLayout userEmail={user.email} userRole={user.role}>
      <div className="p-8">
        <BranchForm franchisees={franchisees} mode="create" />
      </div>
    </DashboardLayout>
  );
}
