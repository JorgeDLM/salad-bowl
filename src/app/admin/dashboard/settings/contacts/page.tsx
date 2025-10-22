import { redirect } from 'next/navigation';
import { getCurrentUser } from '@/lib/session';
import DashboardLayout from '@/components/admin/DashboardLayout';
import ContactsManager from '@/components/admin/ContactsManager';

export default async function ContactsSettingsPage() {
  const user = await getCurrentUser();
  
  if (!user || user.role !== 'ADMIN') {
    redirect('/admin/login');
  }

  return (
    <DashboardLayout userEmail={user.email} userRole={user.role}>
      <div>
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Contactos Globales</h2>
          <p className="text-gray-600">Configura los contactos que se muestran en toda la página web</p>
        </div>

        {/* Contact Manager Component */}
        <ContactsManager />
      </div>
    </DashboardLayout>
  );
}
