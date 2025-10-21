import { redirect } from 'next/navigation';
import { getCurrentUser } from '@/lib/session';
import DashboardLayout from '@/components/admin/DashboardLayout';

export default async function FranchiseeGuidesPage() {
  const user = await getCurrentUser();
  
  if (!user || user.role !== 'FRANCHISEE') {
    redirect('/admin/login');
  }

  return (
    <DashboardLayout userEmail={user.email} userRole={user.role}>
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Guías y Recursos</h1>
          <p className="text-gray-600">Manuales operativos, formatos y documentación esencial</p>
        </div>

        {/* Categorías de Guías - Paleta Salad Bowl */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Operaciones */}
          <div className="bg-white rounded-2xl shadow-sm p-6 border-2 border-gray-200 hover:border-sb-green-500 transition-all">
            <div className="p-3 bg-sb-green-100 rounded-xl w-fit mb-4">
              <svg className="w-8 h-8 text-sb-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Operaciones Diarias</h3>
            <p className="text-gray-600 text-sm mb-4">Apertura, cierre y rutinas operativas</p>
            <span className="text-xs text-gray-500">Próximamente</span>
          </div>

          {/* Recetas */}
          <div className="bg-white rounded-2xl shadow-sm p-6 border-2 border-gray-200 hover:border-[#6B8E23] transition-all">
            <div className="p-3 bg-[#E8F0D7] rounded-xl w-fit mb-4">
              <svg className="w-8 h-8 text-[#6B8E23]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Recetas y Preparaciones</h3>
            <p className="text-gray-600 text-sm mb-4">Ingredientes, porciones y técnicas</p>
            <span className="text-xs text-gray-500">Próximamente</span>
          </div>

          {/* Servicio al Cliente */}
          <div className="bg-white rounded-2xl shadow-sm p-6 border-2 border-gray-200 hover:border-[#4A7C59] transition-all">
            <div className="p-3 bg-[#D4E7DC] rounded-xl w-fit mb-4">
              <svg className="w-8 h-8 text-[#4A7C59]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Servicio al Cliente</h3>
            <p className="text-gray-600 text-sm mb-4">Atención, quejas y experiencia</p>
            <span className="text-xs text-gray-500">Próximamente</span>
          </div>

          {/* Limpieza */}
          <div className="bg-white rounded-2xl shadow-sm p-6 border-2 border-gray-200 hover:border-[#8FBC8F] transition-all">
            <div className="p-3 bg-[#E8F5E8] rounded-xl w-fit mb-4">
              <svg className="w-8 h-8 text-[#8FBC8F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Limpieza e Higiene</h3>
            <p className="text-gray-600 text-sm mb-4">Protocolos sanitarios y limpieza</p>
            <span className="text-xs text-gray-500">Próximamente</span>
          </div>

          {/* Marketing */}
          <div className="bg-white rounded-2xl shadow-sm p-6 border-2 border-gray-200 hover:border-[#3D6B4A] transition-all">
            <div className="p-3 bg-[#D0E2D7] rounded-xl w-fit mb-4">
              <svg className="w-8 h-8 text-[#3D6B4A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Marketing e Identidad</h3>
            <p className="text-gray-600 text-sm mb-4">Materiales de marca y promoción</p>
            <span className="text-xs text-gray-500">Próximamente</span>
          </div>

          {/* Formatos */}
          <div className="bg-white rounded-2xl shadow-sm p-6 border-2 border-gray-200 hover:border-[#9ACD32] transition-all">
            <div className="p-3 bg-[#F0F8DC] rounded-xl w-fit mb-4">
              <svg className="w-8 h-8 text-[#7BA428]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Formatos y Bitácoras</h3>
            <p className="text-gray-600 text-sm mb-4">Plantillas descargables</p>
            <span className="text-xs text-gray-500">Próximamente</span>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
