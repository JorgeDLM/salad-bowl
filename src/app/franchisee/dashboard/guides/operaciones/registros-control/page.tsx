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
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-500 rounded-3xl mb-6 shadow-lg">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Registros Diarios de Control</h1>
          <p className="text-xl text-gray-600">DCL: Documentación y trazabilidad</p>
        </div>

        <div className="space-y-8">
          {/* Intro */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 border-2 border-blue-200">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 text-white text-2xl">
                📋
              </div>
              <div>
                <p className="text-lg text-gray-800 leading-relaxed mb-4">
                  El <strong className="text-blue-700">Registro Diario de Control (DCL)</strong> es el documento donde se registran todos los controles de calidad y factores críticos de seguridad alimentaria que se realizan diariamente en cada sucursal de SALAD BOWL.
                </p>
                <p className="text-gray-800 leading-relaxed">
                  Este registro es una herramienta esencial para garantizar que se cumplan los estándares internos de la marca y las normativas sanitarias locales.
                </p>
              </div>
            </div>
          </div>

          {/* Importancia */}
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100">
            <div className="bg-gradient-to-r from-blue-700 to-blue-600 p-8 text-white">
              <h2 className="text-3xl font-bold mb-2">Importancia de los Registros</h2>
              <p className="text-blue-50">Por qué documentar es fundamental</p>
            </div>
            
            <div className="p-8">
              <p className="text-lg text-gray-700 mb-6">Registrar toda la información es fundamental porque:</p>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {[
                  { 
                    icon: '✅', 
                    title: 'Cumplimiento', 
                    desc: 'Demuestra que SALAD BOWL cumple con los estándares de seguridad',
                    color: 'green'
                  },
                  { 
                    icon: '🔍', 
                    title: 'Evidencia legal', 
                    desc: 'Sirve como evidencia ante inspecciones de autoridades sanitarias',
                    color: 'blue'
                  },
                  { 
                    icon: '📊', 
                    title: 'Trazabilidad', 
                    desc: 'Contribuye a mantener trazabilidad y responsabilidad legal en las operaciones diarias',
                    color: 'purple'
                  }
                ].map((item, i) => (
                  <div key={i} className={`bg-${item.color}-50 rounded-xl p-6 border-2 border-${item.color}-200 text-center`}>
                    <div className="text-5xl mb-4">{item.icon}</div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-700">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl p-6 text-white">
                <div className="flex items-center gap-3 mb-3">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-xl font-bold">Tiempo de almacenamiento</h3>
                </div>
                <p className="text-red-50">
                  Cada libro de registro debe almacenarse por un <strong>mínimo de 2 años</strong> (salvo que las autoridades locales indiquen un periodo diferente), ya que forma parte de la documentación oficial relacionada con la seguridad alimentaria.
                </p>
              </div>
            </div>
          </div>

          {/* Secciones principales */}
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100">
            <div className="bg-gradient-to-r from-sb-green-700 to-sb-teal-700 p-8 text-white">
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
                    desc: 'Registro diario de temperaturas de refrigeradores, congeladores y alimentos, asegurando el cumplimiento de los estándares de inocuidad.',
                    icon: '🌡️',
                    color: 'red'
                  },
                  {
                    num: '2',
                    title: 'Listas de Verificación de Apertura, Pre-Pico y Cierre',
                    desc: '"Checklists" operativos que garantizan que todas las áreas estén limpias, abastecidas y listas para el servicio.',
                    icon: '✓',
                    color: 'blue'
                  },
                  {
                    num: '3',
                    title: 'Checklist de Supervisión',
                    desc: 'Inspección detallada del local durante el día para identificar posibles fallas operativas, de limpieza o atención al cliente.',
                    icon: '👁️',
                    color: 'purple'
                  },
                  {
                    num: '4',
                    title: 'Tareas Diarias de Limpieza',
                    desc: 'Control de las acciones de limpieza rutinaria y sanitización en cocina, barra y comedor.',
                    icon: '🧹',
                    color: 'green'
                  },
                  {
                    num: '5',
                    title: 'Revisiones Semanales de Equipos',
                    desc: 'Registro de mantenimiento preventivo y funcionamiento de equipos esenciales.',
                    icon: '🔧',
                    color: 'orange'
                  },
                  {
                    num: '6',
                    title: 'Tareas de Limpieza Profunda',
                    desc: 'Actividades programadas de limpieza general en profundidad (hornos, ductos, cámaras, etc.).',
                    icon: '✨',
                    color: 'teal'
                  }
                ].map((section, i) => (
                  <div key={i} className={`relative bg-${section.color}-50 rounded-2xl p-6 border-2 border-${section.color}-200 pl-24`}>
                    <div className={`absolute -left-4 top-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-br from-${section.color}-600 to-${section.color}-500 rounded-full flex flex-col items-center justify-center text-white shadow-lg`}>
                      <div className="text-2xl mb-1">{section.icon}</div>
                      <div className="font-black text-sm">{section.num}</div>
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
            <div className="bg-gradient-to-r from-gray-700 to-gray-600 p-8 text-white">
              <h2 className="text-3xl font-bold mb-2">Requisitos Locales y Adaptaciones</h2>
              <p className="text-gray-100">Flexibilidad según normativas</p>
            </div>
            
            <div className="p-8">
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 border-l-4 border-gray-700">
                <div className="flex items-start gap-4">
                  <div className="text-5xl">🌍</div>
                  <div>
                    <p className="text-lg text-gray-800 leading-relaxed mb-4">
                      Los registros pueden incluir también <strong className="text-gray-900">apartados adicionales</strong> según lo que exijan las regulaciones de cada país o solicitudes especiales del equipo de operaciones local.
                    </p>
                    <p className="text-gray-700">
                      Es importante mantener una comunicación constante con las autoridades sanitarias locales para asegurar que todos los registros cumplan con los requerimientos específicos de cada jurisdicción.
                    </p>
                  </div>
                </div>
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
            <div className="bg-gradient-to-r from-sb-green-600 to-sb-teal-600 p-8 text-white">
              <h2 className="text-3xl font-bold">Mejores Prácticas para el DCL</h2>
            </div>
            
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { 
                    title: 'Registro inmediato', 
                    desc: 'Completar los registros en el momento de realizar cada control, nunca al final del día',
                    icon: '⏱️'
                  },
                  { 
                    title: 'Información completa', 
                    desc: 'Incluir fecha, hora, temperaturas exactas, nombre del responsable y cualquier observación relevante',
                    icon: '📝'
                  },
                  { 
                    title: 'Legibilidad', 
                    desc: 'Escribir con letra clara y legible, usar tinta (no lápiz) para evitar alteraciones',
                    icon: '✍️'
                  },
                  { 
                    title: 'Correcciones apropiadas', 
                    desc: 'Si hay un error, tachar con una línea y escribir al lado (nunca borrar o usar corrector)',
                    icon: '✂️'
                  },
                  { 
                    title: 'Revisión diaria', 
                    desc: 'El gerente debe revisar y firmar los registros al final de cada turno',
                    icon: '✅'
                  },
                  { 
                    title: 'Almacenamiento seguro', 
                    desc: 'Guardar en un lugar seco, protegido y de fácil acceso para inspecciones',
                    icon: '🗄️'
                  },
                  { 
                    title: 'Capacitación continua', 
                    desc: 'Todo el equipo debe estar capacitado en cómo completar los registros correctamente',
                    icon: '👥'
                  },
                  { 
                    title: 'Acciones correctivas', 
                    desc: 'Documentar cualquier incidencia y las acciones tomadas para corregirla',
                    icon: '🔧'
                  }
                ].map((practice, i) => (
                  <div key={i} className="bg-gray-50 rounded-xl p-6 border-l-4 border-sb-green-600 hover:shadow-lg transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="text-4xl">{practice.icon}</div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-2">{practice.title}</h3>
                        <p className="text-sm text-gray-700">{practice.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Resumen final */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-500 rounded-3xl p-8 text-white">
            <div className="text-center">
              <div className="text-6xl mb-4">📊</div>
              <h2 className="text-3xl font-black mb-4">Recuerda</h2>
              <p className="text-xl text-blue-50 leading-relaxed">
                Los Registros Diarios de Control no son solo un requisito legal, son una herramienta esencial para garantizar la <strong>calidad</strong>, <strong>seguridad</strong> y <strong>consistencia</strong> de nuestras operaciones en cada sucursal de SALAD BOWL.
              </p>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
