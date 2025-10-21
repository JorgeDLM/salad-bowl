import { redirect } from 'next/navigation';
import { getCurrentUser } from '@/lib/session';
import DashboardLayout from '@/components/admin/DashboardLayout';
import Link from 'next/link';

export default async function LiderazgoPage() {
  const user = await getCurrentUser();
  
  if (!user || user.role !== 'FRANCHISEE') {
    redirect('/admin/login');
  }

  return (
    <DashboardLayout userEmail={user.email} userRole={user.role}>
      <div className="max-w-6xl mx-auto pb-12">
        <div className="mb-6">
          <Link href="/franchisee/dashboard/guides/operaciones/seguridad-alimentaria" className="text-sb-green-700 hover:text-sb-green-600 font-medium">
            ← Volver a Seguridad Alimentaria
          </Link>
        </div>

        <div className="mb-12 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-sb-teal-600 to-sb-teal-500 rounded-3xl mb-6 shadow-lg">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Liderazgo Efectivo en Turno</h1>
          <p className="text-xl text-gray-600">Gestión, delegación y prioridades principales</p>
        </div>

        <div className="space-y-8">
          {/* Intro */}
          <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-200">
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Trabajar como Líder de Turno en SALAD BOWL no es fácil. Es una responsabilidad seria: enfrentar retos, resolver dificultades y manejar múltiples dependencias.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Nos importan nuestros clientes y buscamos crear <strong className="text-sb-teal-700">"Conexiones Significativas"</strong> con cada uno de ellos. Queremos brindar la mejor experiencia para que regresen a nuestras sucursales.
            </p>
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
                    { icon: 'target', text: 'Responsable de toda la sucursal durante su turno' },
                    { icon: 'users', text: 'Fija metas para el equipo, delega tareas, motiva' },
                    { icon: 'eye', text: 'Observa el trabajo del equipo y entrena' },
                    { icon: 'check', text: 'Corrige errores y reconoce comportamientos correctos' }
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
                <div className="p-5 bg-blue-50 rounded-xl border-2 border-blue-200">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mb-3">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Personas</h4>
                  <p className="text-sm text-gray-700">Revisar horarios, posibles incidencias, suficiente personal para venta prevista, capacitaciones</p>
                </div>

                <div className="p-5 bg-green-50 rounded-xl border-2 border-green-200">
                  <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center mb-3">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Producto</h4>
                  <p className="text-sm text-gray-700">Verificar condimentos y empaques, revisar entregas de proveedores, confirmar pedidos completos</p>
                </div>

                <div className="p-5 bg-purple-50 rounded-xl border-2 border-purple-200">
                  <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center mb-3">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Equipo</h4>
                  <p className="text-sm text-gray-700">Ante fallas, llamar a servicio técnico de inmediato para minimizar tiempo fuera de operación</p>
                </div>
              </div>
            </div>
          </div>

          {/* El Arte de Delegar */}
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100">
            <div className="bg-gradient-to-r from-purple-600 to-purple-500 p-8 text-white">
              <h2 className="text-3xl font-bold mb-2">El Arte de Delegar</h2>
              <p className="text-purple-50">Habilidad esencial del Líder de Turno</p>
            </div>
            
            <div className="p-8 space-y-6">
              <p className="text-gray-700 leading-relaxed">
                Delegar es confiar una tarea a otra persona del equipo. Un líder que no delega termina tarde, con horas extra y más errores. Bien hecho, desarrolla al equipo, los hace más autónomos, involucrados y motivados.
              </p>

              <div className="bg-purple-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">5 pasos para delegar con éxito:</h3>
                <div className="space-y-3">
                  {[
                    { step: 'Qué', desc: 'Define la tarea' },
                    { step: 'Quién', desc: 'Elige a la persona adecuada' },
                    { step: 'Por qué', desc: 'Explica el propósito' },
                    { step: 'Cómo', desc: 'Especifica el método' },
                    { step: 'Cuándo', desc: 'Fija el plazo de entrega' }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 items-center p-4 bg-white rounded-xl">
                      <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                        {i + 1}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">{item.step}</h4>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                      </div>
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
                    <svg className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm text-gray-700">{tip}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 3 C's */}
          <div className="bg-gradient-to-br from-sb-teal-600 to-sb-green-600 rounded-3xl shadow-xl p-10 text-white">
            <h2 className="text-3xl font-bold text-center mb-8">Receta para un turno fluido</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/10 rounded-2xl p-6 text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3">Coordinación</h3>
                <p>Personas, productos y equipos para un servicio sin interrupciones</p>
              </div>

              <div className="bg-white/10 rounded-2xl p-6 text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3">Comunicación</h3>
                <p>Sin comunicación no hay información. Líder ↔ equipo constantemente</p>
              </div>

              <div className="bg-white/10 rounded-2xl p-6 text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3">Cooperación</h3>
                <p>Todos cumplen un rol clave para ser la mejor unidad y lograr resultados</p>
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

          {/* Prioridades Principales */}
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100">
            <div className="bg-gradient-to-r from-red-600 to-red-500 p-8 text-white">
              <h2 className="text-3xl font-bold mb-2">Prioridades Principales</h2>
              <p className="text-red-50">Orden de importancia en SALAD BOWL</p>
            </div>
            
            <div className="p-8">
              <div className="bg-red-50 rounded-xl p-6 border-l-4 border-red-600 mb-6">
                <p className="text-xl font-bold text-red-900">
                  La prioridad #1 es la seguridad de los clientes, del equipo y de la comida. Siempre estará por encima de cualquier otra área de operación.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  { num: 1, title: 'Seguridad', desc: 'De clientes, equipo y alimentos', color: 'red' },
                  { num: 2, title: 'Calidad, Servicio y Limpieza', desc: 'Platos de alta calidad, trato amable y entorno limpio', color: 'orange' },
                  { num: 3, title: 'Comodidad y conveniencia', desc: 'Del huésped', color: 'yellow' },
                  { num: 4, title: 'Apariencia y operación', desc: 'De la sucursal', color: 'green' }
                ].map((priority) => (
                  <div key={priority.num} className={`flex gap-4 items-start p-5 bg-${priority.color}-50 rounded-xl border-2 border-${priority.color}-200`}>
                    <div className={`w-12 h-12 bg-${priority.color}-600 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0`}>
                      {priority.num}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{priority.title}</h3>
                      <p className="text-gray-700">{priority.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Gestión del desempeño */}
          <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Gestión del desempeño</h2>
            <p className="text-gray-700 mb-6">
              Se logra mediante cuatro pilares esenciales:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Motivación */}
              <div className="p-6 bg-blue-50 rounded-2xl border-l-4 border-blue-600">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Motivación</h3>
                <p className="text-sm text-gray-700 mb-3">Clave para que el equipo se involucre y rinda al máximo.</p>
                <div className="space-y-2 text-sm">
                  <p>• Comparte visión y fija metas claras</p>
                  <p>• Comunica en doble vía</p>
                  <p>• Fomenta trabajo en equipo</p>
                  <p>• Crea clima sano y divertido</p>
                </div>
              </div>

              {/* Retroalimentación */}
              <div className="p-6 bg-green-50 rounded-2xl border-l-4 border-green-600">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Retroalimentación</h3>
                <p className="text-sm text-gray-700 mb-3">Información para mejorar o reconocer conductas.</p>
                <div className="space-y-2 text-sm">
                  <p>• Sé positivo: refuerza lo bueno primero</p>
                  <p>• Habla de conductas, no de la persona</p>
                  <p>• Sé específico y oportuno</p>
                  <p>• Da seguimiento y reconoce mejoras</p>
                </div>
              </div>

              {/* Entrenamiento */}
              <div className="p-6 bg-purple-50 rounded-2xl border-l-4 border-purple-600">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Entrenamiento</h3>
                <p className="text-sm text-gray-700 mb-3">Mejorar el desempeño potenciando habilidades.</p>
                <div className="space-y-2 text-sm">
                  <p>• En el momento: corrige cuando ocurre</p>
                  <p>• Pregunta primero las causas</p>
                  <p>• Explica el impacto</p>
                  <p>• Da pautas concretas</p>
                </div>
              </div>

              {/* Apoyo */}
              <div className="p-6 bg-orange-50 rounded-2xl border-l-4 border-orange-600">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Apoyo</h3>
                <p className="text-sm text-gray-700 mb-3">El equipo debe sentir tu respaldo.</p>
                <div className="space-y-2 text-sm">
                  <p>• Ambiente de apoyo: guía clara</p>
                  <p>• Comunica con claridad el propósito</p>
                  <p>• Empodera e inspira</p>
                  <p>• Agradece y reconoce el esfuerzo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
