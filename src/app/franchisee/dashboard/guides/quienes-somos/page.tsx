import { redirect } from 'next/navigation';
import { getCurrentUser } from '@/lib/session';
import DashboardLayout from '@/components/admin/DashboardLayout';
import GuideBreadcrumb from '@/components/GuideBreadcrumb';

export default async function QuienesSomosPage() {
  const user = await getCurrentUser();
  
  if (!user || user.role !== 'FRANCHISEE') {
    redirect('/admin/login');
  }

  return (
    <DashboardLayout userEmail={user.email} userRole={user.role}>
      <div className="max-w-5xl mx-auto">
        <GuideBreadcrumb items={[
          { label: 'Guías', href: '/franchisee/dashboard/guides' },
          { label: 'Quiénes Somos', href: '/franchisee/dashboard/guides/quienes-somos' }
        ]} />

        {/* Header */}
        <div className="mb-10 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-sb-green-700 to-sb-green-600 rounded-3xl mb-6 shadow-lg">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Quiénes Somos</h1>
          <p className="text-xl text-gray-600">Misión, visión y valores de Salad Bowl</p>
        </div>

        {/* Content */}
        <div className="space-y-8">
          {/* Misión */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-sb-green-700">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Nuestra Misión</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Mejorar la calidad de vida de las personas a través de la comida saludable, deliciosa y fresca, 
              partiendo de un concepto de comida rápida, balanceada y abundante.
            </p>
          </div>

          {/* Visión */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-sb-green-600">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Nuestra Visión</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Ser la cadena de comida saludable líder en México, reconocida por la frescura, calidad y 
              experiencia excepcional en cada bowl servido.
            </p>
          </div>

          {/* Valores */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Nuestros Valores</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-sb-green-50 rounded-xl">
                <div className="w-12 h-12 bg-sb-green-700 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Frescura</h3>
                <p className="text-gray-700">Ingredientes frescos y de calidad en cada preparación</p>
              </div>

              <div className="p-6 bg-sb-green-50 rounded-xl">
                <div className="w-12 h-12 bg-sb-green-700 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Higiene</h3>
                <p className="text-gray-700">Protocolos estrictos de limpieza y sanidad</p>
              </div>

              <div className="p-6 bg-sb-green-50 rounded-xl">
                <div className="w-12 h-12 bg-sb-green-700 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Excelencia</h3>
                <p className="text-gray-700">Compromiso con la calidad en cada detalle</p>
              </div>

              <div className="p-6 bg-sb-green-50 rounded-xl">
                <div className="w-12 h-12 bg-sb-green-700 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Consistencia</h3>
                <p className="text-gray-700">La misma experiencia excepcional en todas las unidades</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
