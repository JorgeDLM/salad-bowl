import { redirect } from 'next/navigation';
import { getCurrentUser } from '@/lib/session';
import DashboardLayout from '@/components/admin/DashboardLayout';
import FranchiseeForm from '@/components/admin/FranchiseeForm';

export default async function NewFranchiseePage() {
  const user = await getCurrentUser();
  
  if (!user || user.role !== 'ADMIN') {
    redirect('/admin/login');
  }

  return (
    <DashboardLayout userEmail={user.email} userRole={user.role}>
      <div className="p-8">
        <FranchiseeForm mode="create" />
      </div>
    </DashboardLayout>
  );
}
