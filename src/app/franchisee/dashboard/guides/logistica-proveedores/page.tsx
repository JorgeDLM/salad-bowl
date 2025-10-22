import { redirect } from 'next/navigation';
import { getCurrentUser } from '@/lib/session';
import DashboardLayout from '@/components/admin/DashboardLayout';
import GuideBreadcrumb from '@/components/GuideBreadcrumb';

export default async function LogisticaProveedoresPage() {
  const user = await getCurrentUser();
  
  if (!user || user.role !== 'FRANCHISEE') {
    redirect('/admin/login');
  }

  return (
    <DashboardLayout userEmail={user.email} userRole={user.role}>
      <div className="max-w-6xl mx-auto pb-12">
        <GuideBreadcrumb items={[
          { label: 'Guías', href: '/franchisee/dashboard/guides' },
          { label: 'Logística y Proveedores', href: '/franchisee/dashboard/guides/logistica-proveedores' }
        ]} />

        <div className="mb-12 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-sb-green-600 to-sb-green-500 rounded-3xl mb-6 shadow-lg">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Logística y Proveedores</h1>
          <p className="text-xl text-gray-600">Cadena de suministro y gestión de proveedores</p>
        </div>

<div className="space-y-8">
          {/* Intro */}
          <div className="bg-sb-green-50 rounded-3xl p-8 border-2 border-sb-green-200">
            <p className="text-lg text-gray-800 leading-relaxed">
              Descarga los manuales de operaciones, procedimientos y formatos necesarios para la gestión diaria de tu sucursal SALAD BOWL.
            </p>
          </div>

          {/* Checklists de Operación */}
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
            <div className="bg-sb-green-700 p-6 text-white">
              <h2 className="text-2xl font-bold">Checklists de Operación</h2>
              <p className="text-sb-green-50 text-sm">Listas de verificación diarias, semanales y mensuales</p>
            </div>
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { name: 'Checklist Apertura', file: 'CHECKLIST APERTURA MO.pdf' },
                  { name: 'Checklist Cierre', file: 'CHECKLIST CIERRE MO.pdf' },
                  { name: 'Checklist Apertura y Cierre', file: 'CHECK LIST APERTURA Y CIERRE MO.pdf' },
                  { name: 'Checklist Pre-Hora Pico', file: 'CHECKLIST PRE-HRA PICO MO.pdf' },
                  { name: 'Checklist Recorrido Profundo', file: 'CHECKLIST RECORRIDO PROFUNDO. MO.pdf' },
                  { name: 'Checklist Equipos Semanal', file: 'CHECKLIST EQUIPOS SEMANAL MO.pdf' },
                  { name: 'Checklist Limpieza Diaria', file: 'CHECKLIST LIMPIEZA DIARIA MO.pdf' },
                  { name: 'Checklist Limpieza Semanal', file: 'CHECKLIST LIMPIEZA SEMANAL MO.pdf' },
                  { name: 'Checklist Limpieza Mensual', file: 'CHECKLIST LIMPIEZA MENSUAL MO.pdf' }
                ].map((doc, i) => (
                  <a
                    key={i}
                    href={`/franquicias/manuales-de-operaciones/${doc.file}`}
                    download
                    className="flex items-center gap-3 p-4 bg-sb-green-50 hover:bg-sb-green-100 rounded-xl border-2 border-sb-green-200 transition-colors"
                  >
                    <svg className="w-8 h-8 text-sb-green-700 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-gray-900 truncate">{doc.name}</p>
                      <p className="text-xs text-gray-600">PDF</p>
                    </div>
                    <svg className="w-5 h-5 text-sb-green-700 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Procedimientos Operativos */}
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
            <div className="bg-sb-teal-700 p-6 text-white">
              <h2 className="text-2xl font-bold">Procedimientos Operativos</h2>
              <p className="text-sb-teal-50 text-sm">Guías paso a paso por rol y turno</p>
            </div>
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { name: 'Procedimiento Empleado Apertura', file: 'PROCEDIMIENTO EMPLEADO APERTURA' },
                  { name: 'Procedimiento Empleado Cierre', file: 'PROCEDIMIENTO EMPLEADO CIERRE' },
                  { name: 'Procedimiento Encargado Cierre', file: 'PROCEDIMIENTO ENCARGADO CIERRE' },
                  { name: 'Procedimiento Gerente Apertura', file: 'PROCEDIMIENTO GERENTE APERTURA' }
                ].map((doc, i) => (
                  <a
                    key={i}
                    href={`/franquicias/manuales-de-operaciones/${doc.file}`}
                    download
                    className="flex items-center gap-3 p-4 bg-sb-teal-50 hover:bg-sb-teal-100 rounded-xl border-2 border-sb-teal-200 transition-colors"
                  >
                    <svg className="w-8 h-8 text-sb-teal-700 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-gray-900 truncate">{doc.name}</p>
                      <p className="text-xs text-gray-600">PDF</p>
                    </div>
                    <svg className="w-5 h-5 text-sb-teal-700 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Formatos de Recursos Humanos */}
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
            <div className="bg-sb-green-700 p-6 text-white">
              <h2 className="text-2xl font-bold">Formatos de Recursos Humanos</h2>
              <p className="text-sb-green-50 text-sm">Contratos, solicitudes y documentos de personal</p>
            </div>
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { name: 'Bitácora de Asistencia', file: 'FORMATO BITACORA DE ASISTENCIA' },
                  { name: 'Carta de Renuncia', file: 'FORMATO CARTA DE RENUNCIA' },
                  { name: 'Contrato de Capacitación Laboral', file: 'FORMATO CONTRATO DE CAPACITACIÓN LABORAL' },
                  { name: 'Contrato Laboral 3 Meses', file: 'FORMATO CONTRATO LABORAL 3 MESES' },
                  { name: 'Reglamento Interno de Trabajo', file: 'FORMATO REGLAMENTO INTERNO DE TRABAJO' },
                  { name: 'Solicitud de Vacaciones', file: 'FORMATO SOLICITUD DE VACACIONES' }
                ].map((doc, i) => (
                  <a
                    key={i}
                    href={`/franquicias/manuales-de-operaciones/${doc.file}`}
                    download
                    className="flex items-center gap-3 p-4 bg-sb-green-50 hover:bg-sb-green-100 rounded-xl border-2 border-sb-green-200 transition-colors"
                  >
                    <svg className="w-8 h-8 text-sb-green-700 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-gray-900 truncate">{doc.name}</p>
                      <p className="text-xs text-gray-600">PDF</p>
                    </div>
                    <svg className="w-5 h-5 text-sb-green-700 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Formatos de Limpieza y Seguridad Alimentaria */}
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
            <div className="bg-sb-teal-700 p-6 text-white">
              <h2 className="text-2xl font-bold">Limpieza y Seguridad Alimentaria</h2>
              <p className="text-sb-teal-50 text-sm">Formatos de control y manejo de alimentos</p>
            </div>
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { name: 'Formato de Limpieza de Áreas', file: 'FORMATO DE LIMPIEZA DE AREAS MO.pdf' },
                  { name: 'Factores Críticos Manejo de Alimentos', file: 'factores críticos manejo de alimentos' }
                ].map((doc, i) => (
                  <a
                    key={i}
                    href={`/franquicias/manuales-de-operaciones/${doc.file}`}
                    download
                    className="flex items-center gap-3 p-4 bg-sb-teal-50 hover:bg-sb-teal-100 rounded-xl border-2 border-sb-teal-200 transition-colors"
                  >
                    <svg className="w-8 h-8 text-sb-teal-700 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-gray-900 truncate">{doc.name}</p>
                      <p className="text-xs text-gray-600">PDF</p>
                    </div>
                    <svg className="w-5 h-5 text-sb-teal-700 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
