import { redirect } from 'next/navigation';
import { getCurrentUser } from '@/lib/session';
import DashboardLayout from '@/components/admin/DashboardLayout';
import Link from 'next/link';

export default async function SettingsPage() {
  const user = await getCurrentUser();
  
  if (!user || user.role !== 'ADMIN') {
    redirect('/admin/login');
  }

  const settingsCards = [
    {
      title: 'Contactos Globales',
      description: 'Gestiona emails y teléfonos de contacto que se muestran en el sitio web',
      href: '/admin/dashboard/settings/contacts',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      color: 'green',
    },
    {
      title: 'Información General',
      description: 'Configura el nombre, logo y datos básicos de la empresa',
      href: '/admin/dashboard/settings/general',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      color: 'teal',
    },
  ];

  return (
    <DashboardLayout userEmail={user.email} userRole={user.role}>
      <div className="p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-black text-gray-900 mb-2">Configuración</h1>
          <p className="text-gray-600">
            Administra la configuración general del sistema
          </p>
        </div>

        {/* Settings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {settingsCards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="group bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all p-6 border-2 border-transparent hover:border-sb-green-200"
            >
              <div className={`inline-flex p-4 rounded-xl mb-4 ${
                card.color === 'green' 
                  ? 'bg-sb-green-50 text-sb-green-700 group-hover:bg-sb-green-100' 
                  : 'bg-sb-teal-50 text-sb-teal-700 group-hover:bg-sb-teal-100'
              } transition-colors`}>
                {card.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-sb-green-700 transition-colors">
                {card.title}
              </h3>
              
              <p className="text-gray-600 text-sm mb-4">
                {card.description}
              </p>
              
              <div className="flex items-center text-sb-green-700 font-semibold text-sm">
                Configurar
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
