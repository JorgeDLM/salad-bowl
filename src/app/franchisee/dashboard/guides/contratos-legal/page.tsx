import { redirect } from 'next/navigation';
import { getCurrentUser } from '@/lib/session';
import DashboardLayout from '@/components/admin/DashboardLayout';
import GuideBreadcrumb from '@/components/GuideBreadcrumb';
import ContactDisplay from '@/components/ContactDisplay';

export default async function ContratosLegalPage() {
  const user = await getCurrentUser();
  
  if (!user || user.role !== 'FRANCHISEE') {
    redirect('/admin/login');
  }

  return (
    <DashboardLayout userEmail={user.email} userRole={user.role}>
      <div className="max-w-6xl mx-auto pb-12">
        <GuideBreadcrumb items={[
          { label: 'Guías', href: '/franchisee/dashboard/guides' },
          { label: 'Contratos y Legal', href: '/franchisee/dashboard/guides/contratos-legal' }
        ]} />

        <div className="mb-12 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-sb-green-700 rounded-3xl mb-6 shadow-lg">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Contratos y Legal</h1>
          <p className="text-xl text-gray-600">Documentación contractual del Sistema de Franquicia</p>
        </div>

        <div className="space-y-8">
          {/* Intro */}
          <div className="bg-sb-green-50 rounded-3xl p-8 border-2 border-sb-green-200">
            <p className="text-lg text-gray-800 leading-relaxed">
              En esta sección encontrarás todos los documentos legales y contractuales del Sistema de Franquicia Salad Bowl®. 
              Es fundamental que revises estos documentos para comprender los términos, condiciones y obligaciones de ambas partes.
            </p>
          </div>

          {/* Documentos disponibles */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Circular Oferta de Franquicia */}
            <a
              href="/franchisee/dashboard/guides/contratos-legal/circular"
              className="group bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-all border-2 border-transparent hover:border-sb-green-200"
            >
              <div className="bg-sb-green-700 p-6 text-white">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold">Circular Oferta de Franquicia</h2>
                    <p className="text-sb-green-50 text-sm">COF - Sistema Salad Bowl®</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">
                  Documento informativo que presenta el Sistema de Franquicia, incluyendo información sobre el franquiciante, 
                  inversión requerida, propiedad intelectual y proyecciones financieras.
                </p>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-sb-green-50 rounded-lg p-3 border border-sb-green-200">
                    <p className="text-xs text-gray-600">Capítulos</p>
                    <p className="text-lg font-bold text-sb-green-700">12</p>
                  </div>
                  <div className="bg-sb-green-50 rounded-lg p-3 border border-sb-green-200">
                    <p className="text-xs text-gray-600">Formato</p>
                    <p className="text-lg font-bold text-sb-green-700">DOC</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sb-green-700 font-semibold group-hover:gap-3 transition-all">
                  Ver documento
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </a>

            {/* Contrato de Franquicia */}
            <a
              href="/franchisee/dashboard/guides/contratos-legal/contrato"
              className="group bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-all border-2 border-transparent hover:border-sb-teal-200"
            >
              <div className="bg-sb-teal-700 p-6 text-white">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold">Contrato de Franquicia</h2>
                    <p className="text-sb-teal-50 text-sm">Documento legal 2024</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">
                  Contrato completo que establece las cláusulas, términos y condiciones que rigen la relación legal 
                  entre franquiciante y franquiciatario.
                </p>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-sb-teal-50 rounded-lg p-3 border border-sb-teal-200">
                    <p className="text-xs text-gray-600">Cláusulas</p>
                    <p className="text-lg font-bold text-sb-teal-700">31</p>
                  </div>
                  <div className="bg-sb-teal-50 rounded-lg p-3 border border-sb-teal-200">
                    <p className="text-xs text-gray-600">Formato</p>
                    <p className="text-lg font-bold text-sb-teal-700">DOCX</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sb-teal-700 font-semibold group-hover:gap-3 transition-all">
                  Ver documento
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </a>
          </div>

          {/* Información adicional */}
          <div className="bg-white rounded-3xl shadow-lg p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Información Importante</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-sb-green-700 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-700 text-sm">Todos los documentos son oficiales y están actualizados</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-sb-green-700 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-700 text-sm">Se recomienda leer completamente ambos documentos antes de firmar</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-sb-green-700 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-700 text-sm">Para dudas legales, contacta al área legal de Salad Bowl</p>
              </div>
            </div>
          </div>

          {/* Contacto */}
          <div className="bg-sb-green-700 rounded-3xl p-8 text-white text-center">
            <h3 className="text-2xl font-black mb-4">¿Necesitas Asesoría Legal?</h3>
            <p className="text-sb-green-50 mb-6">
              Nuestro equipo legal está disponible para resolver cualquier duda sobre los contratos y términos del sistema de franquicia.
            </p>
            <ContactDisplay type="LEGAL" variant="white" />
          </div>

        </div>
      </div>
    </DashboardLayout>
  );
}
