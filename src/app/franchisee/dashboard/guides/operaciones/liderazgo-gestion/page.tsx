import { redirect } from 'next/navigation';
import { getCurrentUser } from '@/lib/session';
import DashboardLayout from '@/components/admin/DashboardLayout';
import GuideBreadcrumb from '@/components/GuideBreadcrumb';

export default async function LiderazgoGestionPage() {
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
          { label: 'Liderazgo y Gestión', href: '/franchisee/dashboard/guides/operaciones/liderazgo-gestion' }
        ]} />

        <div className="mb-12 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-sb-teal-600 to-sb-teal-500 rounded-3xl mb-6 shadow-lg">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Liderazgo y Gestión</h1>
          <p className="text-xl text-gray-600">Liderazgo efectivo en turno y gestión del desempeño</p>
        </div>

        <div className="space-y-8">
          {/* Intro con imagen */}
          <div className="bg-gradient-to-br from-sb-green-50 to-white rounded-3xl shadow-xl overflow-hidden border-2 border-sb-green-200">
            <div className="flex flex-col md:grid md:grid-cols-5 gap-0">
              {/* Imagen primero en móvil */}
              <div className="md:col-span-3 md:order-2 relative h-[500px] md:h-[600px] overflow-hidden">
                <img 
                  src="/franquicias/operaciones/empleada.PNG" 
                  alt="Empleada de Salad Bowl" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"></div>
              </div>
              
              {/* Texto después en móvil */}
              <div className="md:col-span-2 md:order-1 p-6 md:p-10 flex flex-col justify-center bg-white/80 backdrop-blur-sm">
                <div className="mb-4 md:mb-6">
                  <div className="inline-block p-2 md:p-3 bg-sb-teal-100 rounded-xl mb-3 md:mb-4">
                    <svg className="w-6 h-6 md:w-8 md:h-8 text-sb-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4 md:mb-6 font-medium">
                  Trabajar como <span className="text-sb-green-700 font-bold">Líder de Turno</span> en SALAD BOWL no es fácil. Es una responsabilidad seria: enfrentar retos, resolver dificultades y manejar múltiples dependencias.
                </p>
                <div className="pl-3 md:pl-4 border-l-4 border-sb-teal-600">
                  <p className="text-base md:text-lg text-gray-700 leading-relaxed italic">
                    Nos importan nuestros clientes y buscamos crear <strong className="text-sb-teal-700">"Conexiones Significativas"</strong> con cada uno de ellos. Queremos brindar la mejor experiencia para que regresen a nuestras sucursales.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ¿Quién es un Líder de Turno? */}
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100">
            <div className="bg-gradient-to-r from-sb-teal-600 to-sb-teal-500 p-8 text-white">
              <h2 className="text-3xl font-bold mb-2">¿Quién es un Líder de Turno?</h2>
            </div>
            
            <div className="p-8 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  {[
                    { text: 'Responsable de toda la sucursal durante su turno' },
                    { text: 'Fija metas para el equipo, delega tareas, motiva' },
                    { text: 'Observa el trabajo del equipo y entrena' },
                    { text: 'Corrige errores y reconoce comportamientos correctos' }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-3 items-start p-4 bg-sb-teal-50 rounded-xl">
                      <svg className="w-6 h-6 text-sb-teal-700 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-700">{item.text}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-br from-sb-green-600 to-sb-teal-600 rounded-2xl p-6 text-white">
                  <h3 className="text-xl font-bold mb-4">Sin tripulación no hay capitán</h3>
                  <p className="leading-relaxed">
                    No es estar en la oficina frente a la computadora: es liderar con el ejemplo, estar en el corazón de la operación, observando y reaccionando en un ambiente dinámico.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Liderazgo Efectivo */}
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100">
            <div className="bg-gradient-to-r from-sb-green-700 to-sb-green-600 p-8 text-white">
              <h2 className="text-3xl font-bold mb-2">Liderazgo de Turno Efectivo</h2>
            </div>
            
            <div className="p-8 space-y-6">
              <div className="bg-sb-green-50 rounded-xl p-6 border-l-4 border-sb-green-700">
                <p className="text-gray-800 font-semibold text-lg">
                  Regla clave: <span className="text-sb-green-700">"Planifica todo lo predecible para dejar espacio y tiempo a lo impredecible"</span>
                </p>
              </div>

              <h3 className="text-xl font-bold text-gray-900">¿Qué puedes planear con antelación?</h3>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-5 bg-sb-teal-50 rounded-xl border-2 border-sb-teal-200">
                  <div className="w-10 h-10 bg-sb-teal-700 rounded-full flex items-center justify-center mb-3">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Personas</h4>
                  <p className="text-sm text-gray-700">Revisar horarios, posibles incidencias, suficiente personal para venta prevista, capacitaciones</p>
                </div>

                <div className="p-5 bg-sb-green-50 rounded-xl border-2 border-sb-green-200">
                  <div className="w-10 h-10 bg-sb-green-700 rounded-full flex items-center justify-center mb-3">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Producto</h4>
                  <p className="text-sm text-gray-700">Verificar condimentos y empaques, revisar entregas de proveedores, confirmar pedidos completos</p>
                </div>

                <div className="p-5 bg-gray-50 rounded-xl border-2 border-gray-300">
                  <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center mb-3">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Equipo</h4>
                  <p className="text-sm text-gray-700">Ante fallas, llamar a servicio técnico de inmediato para minimizar tiempo fuera de operación</p>
                </div>
              </div>

              {/* Entrega de turno */}
              <div className="bg-sb-teal-50 rounded-2xl p-6 mt-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Entrega de turno</h3>
                <p className="text-gray-700 mb-4">Momento para compartir información crítica entre Líderes y encargados de turnos:</p>
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    { title: 'Personas', desc: 'Ausencias, descansos, entrenamientos' },
                    { title: 'Producto', desc: 'Faltantes, stock agotado, problemas de calidad' },
                    { title: 'Equipo', desc: 'Fallas reportadas y acciones tomadas' }
                  ].map((item, i) => (
                    <div key={i} className="p-4 bg-white rounded-xl">
                      <h4 className="font-bold text-sb-teal-700 mb-2">{item.title}</h4>
                      <p className="text-sm text-gray-700">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* El Arte de Delegar */}
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100">
            <div className="bg-gradient-to-r from-sb-teal-700 to-sb-green-700 p-8 text-white relative overflow-hidden">
              <svg className="absolute right-8 top-4 w-32 h-32 opacity-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
              <h2 className="text-3xl font-bold mb-2 relative z-10">El Arte de Delegar</h2>
              <p className="text-sb-teal-50 relative z-10">Habilidad esencial del Líder de Turno</p>
            </div>
            
            <div className="p-8 space-y-6">
              <div className="grid md:grid-cols-3 gap-6 items-center">
                <div className="md:col-span-2 bg-gradient-to-r from-sb-teal-50 to-sb-green-50 rounded-2xl p-6 border-l-4 border-sb-teal-600">
                  <p className="text-lg text-gray-800 leading-relaxed">
                    <strong className="text-sb-teal-700">Delegar</strong> es confiar una tarea a otra persona del equipo. Un líder que no delega termina tarde, con horas extra y más errores. Bien hecho, desarrolla al equipo, los hace más autónomos, involucrados y motivados.
                  </p>
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img 
                    src="/franquicias/operaciones/empleado-con-barra.JPG" 
                    alt="Empleado en Salad Bowl" 
                    className="w-full h-48 object-cover"
                  />
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border-2 border-sb-teal-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">5 pasos para delegar con éxito</h3>
                <div className="grid md:grid-cols-5 gap-4">
                  {[
                    { step: 'Qué', desc: 'Define la tarea', icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>, color: 'sb-teal' },
                    { step: 'Quién', desc: 'Elige a la persona adecuada', icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>, color: 'sb-green' },
                    { step: 'Por qué', desc: 'Explica el propósito', icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>, color: 'sb-teal' },
                    { step: 'Cómo', desc: 'Especifica el método', icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>, color: 'sb-green' },
                    { step: 'Cuándo', desc: 'Fija el plazo', icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, color: 'sb-teal' }
                  ].map((item, i) => (
                    <div key={i} className={`relative text-center p-4 pt-6 rounded-xl bg-${item.color === 'sb-teal' ? 'sb-teal-50' : 'sb-green-50'} border-2 border-${item.color === 'sb-teal' ? 'sb-teal-200' : 'sb-green-200'} hover:shadow-lg transition-all overflow-visible`}>
                      {/* Número en esquina superior derecha */}
                      <div className={`absolute -top-3 -right-3 w-10 h-10 ${item.color === 'sb-teal' ? 'bg-sb-teal-700' : 'bg-sb-green-700'} rounded-full flex items-center justify-center text-white font-black text-lg shadow-lg z-10`}>
                        {i + 1}
                      </div>
                      <div className={`${item.color === 'sb-teal' ? 'text-sb-teal-700' : 'text-sb-green-700'} flex justify-center mb-3`}>{item.icon}</div>
                      <h4 className="font-bold text-gray-900 mb-1">{item.step}</h4>
                      <p className="text-xs text-gray-600">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {[
                  'Delegar cuanto antes: más tiempo = más probabilidad de éxito',
                  'Usa "colchón" de tiempo en los plazos',
                  'Considera habilidades: evita "aventarlos al agua"',
                  'Motivación y desarrollo: delegar forma al equipo',
                  'Involucra: pide ideas y riesgos que ven',
                  'Verifica comprensión: pide que repitan',
                  'Define monitoreo: forma y frecuencia',
                  'Explica el propósito de la tarea',
                  'Ofrece apoyo: reduce estrés',
                  'Revisa y da retroalimentación'
                ].map((tip, i) => (
                  <div key={i} className="flex gap-2 items-start p-3 bg-gray-50 rounded-lg">
                    <svg className="w-5 h-5 text-sb-teal-700 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm text-gray-700">{tip}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 3 C's - Optimizado para móvil */}
          <div className="bg-gradient-to-br from-sb-teal-600 to-sb-green-600 rounded-3xl shadow-xl p-6 md:p-10 text-white overflow-hidden relative">
            <div className="relative z-10">
              <h2 className="text-2xl md:text-4xl font-bold text-center mb-2 md:mb-4">Receta para un turno fluido</h2>
              <p className="text-center text-sb-teal-50 mb-8 md:mb-12 text-base md:text-lg">Las 3 C's del éxito operativo</p>
              
              {/* Layout móvil: vertical, Desktop: circular */}
              <div className="hidden md:block">
                {/* Diagrama circular para desktop */}
                <div className="relative max-w-4xl mx-auto mb-12">
                  <div className="flex items-center justify-center">
                    <div className="absolute w-32 h-32 bg-white rounded-full flex items-center justify-center z-20 shadow-2xl mt-8">
                      <div className="text-center">
                        <div className="text-3xl font-black text-sb-teal-700">3C's</div>
                        <div className="text-xs text-gray-600 font-semibold">Éxito</div>
                      </div>
                    </div>
                    
                    <div className="relative w-full max-w-md aspect-square">
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4">
                        <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 w-48 border-2 border-white/30">
                          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-3">
                            <svg className="w-7 h-7 text-sb-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <h3 className="text-xl font-bold text-center mb-2">Coordinación</h3>
                          <p className="text-sm text-center">Personas, productos y equipos</p>
                        </div>
                      </div>

                      <div className="absolute bottom-0 left-0 transform translate-y-4">
                        <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 w-48 border-2 border-white/30">
                          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-3">
                            <svg className="w-7 h-7 text-sb-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                            </svg>
                          </div>
                          <h3 className="text-xl font-bold text-center mb-2">Comunicación</h3>
                          <p className="text-sm text-center">Líder ↔ equipo</p>
                        </div>
                      </div>

                      <div className="absolute bottom-0 right-0 transform translate-y-4">
                        <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 w-48 border-2 border-white/30">
                          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-3">
                            <svg className="w-7 h-7 text-sb-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                          </div>
                          <h3 className="text-xl font-bold text-center mb-2">Cooperación</h3>
                          <p className="text-sm text-center">Todos son clave</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Layout vertical para móvil */}
              <div className="md:hidden space-y-4 mb-8">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto shadow-2xl mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-black text-sb-teal-700">3C's</div>
                    <div className="text-xs text-gray-600 font-semibold">Éxito</div>
                  </div>
                </div>

                {[
                  { 
                    title: 'Coordinación', 
                    desc: 'Personas, productos y equipos',
                    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  },
                  { 
                    title: 'Comunicación', 
                    desc: 'Líder ↔ equipo',
                    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                  },
                  { 
                    title: 'Cooperación', 
                    desc: 'Todos son clave',
                    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                  }
                ].map((item, i) => (
                  <div key={i} className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border-2 border-white/30">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0 text-sb-teal-700">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                        <p className="text-sm opacity-90">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quote destacado */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-6 max-w-3xl mx-auto border border-white/20">
                <p className="text-center text-base md:text-xl italic">
                  "Un turno exitoso es el que dirige el Líder, no el que 'corre solo'"
                </p>
              </div>
            </div>
          </div>

          {/* Recorrido de Control */}
          <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Recorrido de Control</h2>
            <p className="text-gray-700 mb-6">
              Es recopilar información por chequeos, observación y comunicación con equipo y huéspedes para concluir y decidir. Permite controlar la situación en tiempo real.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              {[
                'Realizarlo cada 30-60 min y cubrir todas las áreas',
                'Oportunidad para motivar y dar retroalimentación',
                'Más tráfico = más frecuencia',
                'Si detectas un problema, actúa de inmediato',
                'Puedes dividir por secciones',
                'En cocina, usa vista, oído, olfato y tacto'
              ].map((practice, i) => (
                <div key={i} className="flex gap-3 items-start p-4 bg-sb-teal-50 rounded-xl">
                  <svg className="w-6 h-6 text-sb-teal-700 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">{practice}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Prioridades Principales - Pirámide */}
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100">
            <div className="bg-gradient-to-r from-sb-green-700 to-sb-teal-700 p-8 text-white">
              <h2 className="text-3xl font-bold mb-2">Prioridades Principales</h2>
              <p className="text-sb-green-50">Orden de importancia en SALAD BOWL</p>
            </div>
            
            <div className="p-8">
              <div className="bg-sb-green-50 rounded-xl p-6 border-l-4 border-sb-green-700 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-sb-green-700 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <p className="text-xl font-bold text-sb-green-900">
                    La prioridad #1 es la seguridad de los clientes, del equipo y de la comida. Siempre estará por encima de cualquier otra área de operación.
                  </p>
                </div>
              </div>

              {/* Pirámide visual */}
              <div className="max-w-3xl mx-auto space-y-3">
                {/* Nivel 1 - Más ancho */}
                <div className="flex justify-center">
                  <div className="w-full bg-sb-green-600 rounded-2xl p-6 text-white shadow-xl transform hover:scale-105 transition-transform">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-3xl font-black text-sb-green-700 flex-shrink-0">
                        1
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3">
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                          <h3 className="text-2xl font-bold">Seguridad</h3>
                        </div>
                        <p className="text-sb-green-50 mt-2">De clientes, equipo y alimentos</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Nivel 2 */}
                <div className="flex justify-center">
                  <div className="w-11/12 bg-sb-green-700 rounded-2xl p-5 text-white shadow-lg transform hover:scale-105 transition-transform">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-2xl font-black text-sb-teal-700 flex-shrink-0">
                        2
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                          </svg>
                          <h3 className="text-xl font-bold">Calidad, Servicio y Limpieza</h3>
                        </div>
                        <p className="text-sm text-sb-teal-50 mt-1">Platos de alta calidad, trato amable y entorno limpio</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Nivel 3 */}
                <div className="flex justify-center">
                  <div className="w-9/12 bg-sb-green-600 rounded-2xl p-4 text-white shadow-md transform hover:scale-105 transition-transform">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-xl font-black text-sb-green-700 flex-shrink-0">
                        3
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <h3 className="text-lg font-bold">Comodidad y conveniencia</h3>
                        </div>
                        <p className="text-sm text-sb-green-50 mt-1">Del huésped</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Nivel 4 */}
                <div className="flex justify-center">
                  <div className="w-7/12 bg-sb-green-700 rounded-2xl p-4 text-white shadow-sm transform hover:scale-105 transition-transform">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-lg font-black text-sb-teal-700 flex-shrink-0">
                        4
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                          <h3 className="font-bold">Apariencia y operación</h3>
                        </div>
                        <p className="text-xs text-sb-teal-50 mt-1">De la sucursal</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Gestión del desempeño */}
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100">
            <div className="bg-gradient-to-r from-sb-teal-600 to-sb-teal-500 p-8 text-white">
              <h2 className="text-3xl font-bold mb-2">Gestión del desempeño</h2>
              <p className="text-sb-teal-50">Definir, ayudar, revisar y desarrollar</p>
            </div>
            
            <div className="p-8 space-y-8">
              {/* Imagen + Intro */}
              <div className="grid md:grid-cols-2 gap-6 items-center">
                <div>
                  <p className="text-lg text-gray-700 mb-4">
                    Gestionar el desempeño es definir qué queremos que logre el equipo, ayudar en el día a día, revisar resultados y asegurar que desarrollen habilidades y conocimientos.
                  </p>
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img 
                    src="/franquicias/operaciones/empleados-trabajando.JPG" 
                    alt="Empleados trabajando en Salad Bowl" 
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>

              <div className="text-center mb-8">
                
                {/* Los 4 pilares - Visual */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8">
                  {[
                    { icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>, title: 'Motivación', color: 'sb-teal' },
                    { icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>, title: 'Retroalimentación', color: 'sb-green' },
                    { icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>, title: 'Entrenamiento', color: 'gray' },
                    { icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>, title: 'Soporte', color: 'sb-teal' }
                  ].map((pilar, i) => (
                    <div key={i} className={`p-4 bg-${pilar.color === 'sb-teal' ? 'sb-teal-50' : pilar.color === 'sb-green' ? 'sb-green-50' : 'gray-50'} rounded-xl text-center border-2 border-${pilar.color === 'sb-teal' ? 'sb-teal-200' : pilar.color === 'sb-green' ? 'sb-green-200' : 'gray-300'}`}>
                      <div className={`${pilar.color === 'sb-teal' ? 'text-sb-teal-700' : pilar.color === 'sb-green' ? 'text-sb-green-700' : 'text-gray-700'} flex justify-center mb-2`}>{pilar.icon}</div>
                      <div className="font-bold text-gray-900">{pilar.title}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 6.1.1 Motivación */}
              <div className="bg-sb-teal-50 rounded-2xl p-8 border-l-4 border-sb-teal-700 relative overflow-hidden">
                <svg className="absolute top-4 right-4 w-24 h-24 text-sb-teal-200 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
                <div className="relative z-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Motivación</h3>
                <p className="text-gray-700 mb-4">
                  Clave para que el equipo se involucre y rinda al máximo. Un equipo motivado disfruta su trabajo y mejora resultados.
                </p>
                
                <h4 className="font-bold text-gray-900 mb-3">Cómo motivar:</h4>
                <div className="space-y-3">
                  {[
                    'Comparte la visión y fija metas claras, explica su impacto en el objetivo del negocio',
                    'Comunica en doble vía: actualiza y escucha ideas, dudas y sugerencias',
                    'Fomenta el trabajo en equipo: actividades de integración y tareas colaborativas',
                    'Crea un clima sano y divertido: espacios agradables elevan productividad y creatividad',
                    'Da retroalimentación y reconoce logros regularmente',
                    'Ofrece oportunidades de desarrollo: retos, delegación, creatividad y crecimiento'
                  ].map((item, i) => (
                    <div key={i} className="flex gap-3 items-start p-3 bg-white rounded-lg">
                      <svg className="w-5 h-5 text-sb-teal-700 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              </div>

              {/* 6.1.2 Retroalimentación */}
              <div className="bg-sb-green-50 rounded-2xl p-8 border-l-4 border-sb-green-700 relative overflow-hidden">
                <svg className="absolute top-4 right-4 w-24 h-24 text-sb-green-200 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <div className="relative z-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Retroalimentación</h3>
                <p className="text-gray-700 mb-4">
                  Es información para mejorar o reconocer conductas.
                </p>
                
                <h4 className="font-bold text-gray-900 mb-3">Buenas prácticas:</h4>
                <div className="space-y-3">
                  {[
                    { 
                      title: 'Sé positivo', 
                      desc: 'Refuerza lo que hacen bien y luego corrige lo necesario (ej.: seguridad)',
                      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    },
                    { 
                      title: 'Habla de conductas, no de la persona', 
                      desc: '"Actuaste sin cortesía", no "eres descortés"',
                      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>
                    },
                    { 
                      title: 'Sé específico', 
                      desc: 'Describe el caso concreto, evita vaguedades',
                      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                    },
                    { 
                      title: 'Sé oportuno', 
                      desc: 'Cuanto más cerca del hecho, más útil',
                      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    },
                    { 
                      title: 'Hazlo conversación', 
                      desc: 'De ida y vuelta: verifica comprensión y acuerdos',
                      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
                    },
                    { 
                      title: 'Da seguimiento', 
                      desc: 'Busca "atraparlos haciéndolo bien" y refuerza',
                      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    },
                    { 
                      title: 'Sé sincero y genuino', 
                      desc: 'No mecánico',
                      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                    }
                  ].map((item, i) => (
                    <div key={i} className="p-4 bg-white rounded-lg flex gap-3 items-start">
                      <div className="w-10 h-10 bg-sb-green-100 rounded-lg flex items-center justify-center flex-shrink-0 text-sb-green-700">
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <h5 className="font-bold text-sb-green-700 mb-1">{item.title}</h5>
                        <p className="text-sm text-gray-700">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                </div>
              </div>

              {/* 6.1.3 Entrenamiento */}
              <div className="bg-gray-50 rounded-2xl p-8 border-l-4 border-gray-600 relative overflow-hidden">
                <svg className="absolute top-4 right-4 w-24 h-24 text-gray-300 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <div className="relative z-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Entrenamiento</h3>
                <p className="text-gray-700 mb-4">
                  Su propósito es mejorar el desempeño (potenciar habilidades o adquirir nuevas).
                </p>
                
                <h4 className="font-bold text-gray-900 mb-3">Cómo hacerlo efectivo:</h4>
                <div className="space-y-3">
                  {[
                    { 
                      title: 'En el momento', 
                      desc: 'Corrige/guía cuando ocurre la oportunidad',
                      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                    },
                    { 
                      title: 'Pregunta primero', 
                      desc: 'Explora causas (falta de capacitación, carga de trabajo, etc.)',
                      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    },
                    { 
                      title: 'Explica el impacto', 
                      desc: 'Conecta la acción con seguridad, ventas o experiencia del huésped',
                      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                    },
                    { 
                      title: 'Da pautas concretas', 
                      desc: 'Plan en conjunto: qué esperar "la próxima vez" y cómo lograrlo',
                      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>
                    },
                    { 
                      title: 'Reconoce mejoras', 
                      desc: 'Continúa el acompañamiento',
                      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
                    }
                  ].map((item, i) => (
                    <div key={i} className="p-4 bg-white rounded-lg flex gap-3 items-start">
                      <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0 text-gray-700">
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <h5 className="font-bold text-gray-900 mb-1">{item.title}</h5>
                        <p className="text-sm text-gray-700">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                </div>
              </div>

              {/* 6.1.4 Soporte */}
              <div className="bg-sb-teal-50 rounded-2xl p-8 border-l-4 border-sb-teal-700 relative overflow-hidden">
                <svg className="absolute top-4 right-4 w-24 h-24 text-sb-teal-200 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <div className="relative z-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Soporte</h3>
                <p className="text-gray-700 mb-4">
                  El servicio de alimentos es dinámico y estresante; el equipo debe sentir tu respaldo.
                </p>
                
                <h4 className="font-bold text-gray-900 mb-3">Formas de apoyar:</h4>
                <div className="space-y-3">
                  {[
                    'Ambiente de apoyo: guía clara y, cuando sea necesario, entra al piso a ayudar',
                    'Comunica con claridad el propósito y el "para qué" del trabajo',
                    'Empodera e inspira: invita a opinar y a asumir responsabilidad',
                    'Actitud positiva y estimulante',
                    'Conversaciones regulares y cercanas (aunque sean breves)',
                    'Agradece y reconoce el esfuerzo cotidiano (un "gracias" oportuno cuenta mucho)'
                  ].map((item, i) => (
                    <div key={i} className="flex gap-3 items-start p-3 bg-white rounded-lg">
                      <svg className="w-5 h-5 text-sb-teal-700 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
