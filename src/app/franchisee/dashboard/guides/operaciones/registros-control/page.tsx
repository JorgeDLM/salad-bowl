import { redirect } from 'next/navigation';
import { getCurrentUser } from '@/lib/session';
import DashboardLayout from '@/components/admin/DashboardLayout';
import GuideBreadcrumb from '@/components/GuideBreadcrumb';

export default async function RegistrosControlPage() {
  const user = await getCurrentUser();
  
  if (!user || user.role !== 'FRANCHISEE') {
    redirect('/admin/login');
  }

  return (
    <DashboardLayout userEmail={user.email} userRole={user.role}>
      <div className="max-w-6xl mx-auto pb-12">
        <GuideBreadcrumb items={[
          { label: 'Guías', href: '/franchisee/dashboard/guides' },
          { label: 'Operaciones', href: '/franchisee/dashboard/guides/operaciones' },
          { label: 'Registros Diarios de Control', href: '/franchisee/dashboard/guides/operaciones/registros-control' }
        ]} />

        <div className="mb-12 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-sb-green-700 rounded-3xl mb-6 shadow-lg">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Registros Diarios de Control</h1>
          <p className="text-xl text-gray-600">DCL: Documentación y trazabilidad</p>
        </div>

        <div className="space-y-8">
          {/* Intro */}
          <div className="bg-sb-green-50 rounded-3xl p-8 border-2 border-sb-green-200">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-sb-green-700 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <div>
                <p className="text-lg text-gray-800 leading-relaxed mb-4">
                  El <strong className="text-sb-green-700">Registro Diario de Control (DCL)</strong> es el documento donde se registran todos los controles de calidad y factores críticos de seguridad alimentaria que se realizan diariamente en cada sucursal de SALAD BOWL.
                </p>
                <p className="text-gray-800 leading-relaxed">
                  Este registro es una herramienta esencial para garantizar que se cumplan los estándares internos de la marca y las normativas sanitarias locales.
                </p>
              </div>
            </div>
          </div>

          {/* Importancia */}
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100">
            <div className="bg-sb-green-700 p-8 text-white">
              <h2 className="text-3xl font-bold mb-2">Importancia de los Registros</h2>
              <p className="text-sb-green-50">Por qué documentar es fundamental</p>
            </div>
            
            <div className="p-8">
              <p className="text-lg text-gray-700 mb-6">Registrar toda la información es fundamental porque:</p>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {[
                  { 
                    title: 'Cumplimiento', 
                    desc: 'Demuestra que SALAD BOWL cumple con los estándares de seguridad'
                  },
                  { 
                    title: 'Evidencia legal', 
                    desc: 'Sirve como evidencia ante inspecciones de autoridades sanitarias'
                  },
                  { 
                    title: 'Trazabilidad', 
                    desc: 'Contribuye a mantener trazabilidad y responsabilidad legal en las operaciones diarias'
                  }
                ].map((item, i) => (
                  <div key={i} className="bg-sb-green-50 rounded-xl p-6 border-2 border-sb-green-200">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-700">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="bg-sb-teal-700 rounded-2xl p-6 text-white">
                <div className="flex items-center gap-3 mb-3">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-xl font-bold">Tiempo de almacenamiento</h3>
                </div>
                <p className="text-sb-teal-50">
                  Cada libro de registro debe almacenarse por un <strong>mínimo de 2 años</strong> (salvo que las autoridades locales indiquen un periodo diferente), ya que forma parte de la documentación oficial relacionada con la seguridad alimentaria.
                </p>
              </div>
            </div>
          </div>

          {/* Secciones principales */}
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100">
            <div className="bg-sb-green-700 p-8 text-white">
              <h2 className="text-3xl font-bold mb-2">Secciones Principales de los Registros</h2>
              <p className="text-sb-green-50">6 áreas clave de documentación</p>
            </div>
            
            <div className="p-8">
              <p className="text-lg text-gray-700 mb-8">El formato de registros está dividido en las siguientes áreas:</p>

              <div className="space-y-6">
                {[
                  {
                    num: '1',
                    title: 'Factores Críticos de Seguridad Alimentaria y Controles de Temperatura',
                    desc: 'Registro diario de temperaturas de refrigeradores, congeladores y alimentos, asegurando el cumplimiento de los estándares de inocuidad.'
                  },
                  {
                    num: '2',
                    title: 'Listas de Verificación de Apertura, Pre-Pico y Cierre',
                    desc: '"Checklists" operativos que garantizan que todas las áreas estén limpias, abastecidas y listas para el servicio.'
                  },
                  {
                    num: '3',
                    title: 'Checklist de Supervisión',
                    desc: 'Inspección detallada del local durante el día para identificar posibles fallas operativas, de limpieza o atención al cliente.'
                  },
                  {
                    num: '4',
                    title: 'Tareas Diarias de Limpieza',
                    desc: 'Control de las acciones de limpieza rutinaria y sanitización en cocina, barra y comedor.'
                  },
                  {
                    num: '5',
                    title: 'Revisiones Semanales de Equipos',
                    desc: 'Registro de mantenimiento preventivo y funcionamiento de equipos esenciales.'
                  },
                  {
                    num: '6',
                    title: 'Tareas de Limpieza Profunda',
                    desc: 'Actividades programadas de limpieza general en profundidad (hornos, ductos, cámaras, etc.).'
                  }
                ].map((section, i) => (
                  <div key={i} className={`relative ${i % 2 === 0 ? 'bg-sb-green-50 border-sb-green-200' : 'bg-sb-teal-50 border-sb-teal-200'} rounded-2xl p-6 border-2 pl-20`}>
                    <div className={`absolute -left-4 top-1/2 -translate-y-1/2 w-16 h-16 ${i % 2 === 0 ? 'bg-sb-green-700' : 'bg-sb-teal-700'} rounded-full flex items-center justify-center text-white font-black text-xl shadow-lg`}>
                      {section.num}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{section.title}</h3>
                    <p className="text-sm text-gray-700">{section.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Requisitos locales */}
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100">
            <div className="bg-sb-teal-700 p-8 text-white">
              <h2 className="text-3xl font-bold mb-2">Requisitos Locales y Adaptaciones</h2>
              <p className="text-sb-teal-50">Flexibilidad según normativas</p>
            </div>
            
            <div className="p-8">
              <div className="bg-sb-teal-50 rounded-2xl p-8 border-l-4 border-sb-teal-700">
                <p className="text-lg text-gray-800 leading-relaxed mb-4">
                  Los registros pueden incluir también <strong className="text-gray-900">apartados adicionales</strong> según lo que exijan las regulaciones de cada país o solicitudes especiales del equipo de operaciones local.
                </p>
                <p className="text-gray-700">
                  Es importante mantener una comunicación constante con las autoridades sanitarias locales para asegurar que todos los registros cumplan con los requerimientos específicos de cada jurisdicción.
                </p>
              </div>

              <div className="mt-8 grid md:grid-cols-2 gap-6">
                <div className="bg-sb-green-50 rounded-xl p-6 border-2 border-sb-green-200">
                  <h3 className="font-bold text-sb-green-900 mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Adaptabilidad
                  </h3>
                  <p className="text-sm text-gray-700">
                    Cada mercado puede tener requerimientos específicos que deben incorporarse al formato estándar de DCL.
                  </p>
                </div>

                <div className="bg-sb-teal-50 rounded-xl p-6 border-2 border-sb-teal-200">
                  <h3 className="font-bold text-sb-teal-900 mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    Coordinación
                  </h3>
                  <p className="text-sm text-gray-700">
                    El equipo de operaciones local puede solicitar secciones adicionales según las necesidades operativas específicas.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Mejores prácticas */}
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100">
            <div className="bg-sb-green-700 p-8 text-white">
              <h2 className="text-3xl font-bold">Mejores Prácticas para el DCL</h2>
            </div>
            
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  'Completar los registros en el momento de realizar cada control, nunca al final del día',
                  'Incluir fecha, hora, temperaturas exactas, nombre del responsable y cualquier observación relevante',
                  'Escribir con letra clara y legible, usar tinta (no lápiz) para evitar alteraciones',
                  'Si hay un error, tachar con una línea y escribir al lado (nunca borrar o usar corrector)',
                  'El gerente debe revisar y firmar los registros al final de cada turno',
                  'Guardar en un lugar seco, protegido y de fácil acceso para inspecciones',
                  'Todo el equipo debe estar capacitado en cómo completar los registros correctamente',
                  'Documentar cualquier incidencia y las acciones tomadas para corregirla'
                ].map((practice, i) => (
                  <div key={i} className="bg-sb-green-50 rounded-xl p-4 border-l-4 border-sb-green-700">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-sb-green-700 rounded-full flex items-center justify-center flex-shrink-0 text-white text-xs font-bold">
                        {i + 1}
                      </div>
                      <p className="text-sm text-gray-800">{practice}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Resumen final */}
          <div className="bg-sb-green-700 rounded-3xl p-8 text-white">
            <div className="text-center">
              <h2 className="text-3xl font-black mb-4">Recuerda</h2>
              <p className="text-xl text-sb-green-50 leading-relaxed">
                Los Registros Diarios de Control no son solo un requisito legal, son una herramienta esencial para garantizar la <strong>calidad</strong>, <strong>seguridad</strong> y <strong>consistencia</strong> de nuestras operaciones en cada sucursal de SALAD BOWL.
              </p>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
