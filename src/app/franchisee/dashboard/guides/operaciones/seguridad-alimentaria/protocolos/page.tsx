import { redirect } from 'next/navigation';
import { getCurrentUser } from '@/lib/session';
import DashboardLayout from '@/components/admin/DashboardLayout';
import GuideBreadcrumb from '@/components/GuideBreadcrumb';

export default async function ProtocolosPage() {
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
          { label: 'Seguridad Alimentaria', href: '/franchisee/dashboard/guides/operaciones/seguridad-alimentaria' },
          { label: 'Protocolos', href: '/franchisee/dashboard/guides/operaciones/seguridad-alimentaria/protocolos' }
        ]} />

        <div className="mb-12 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-sb-teal-700 to-sb-teal-600 rounded-3xl mb-6 shadow-lg">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Protocolos de Reclamo por Intoxicación</h1>
          <p className="text-xl text-gray-600">Manejo apropiado de quejas por intoxicación alimentaria</p>
        </div>

        <div className="space-y-8">
          {/* Intro */}
          <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-200">
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              En SALAD BOWL existen procedimientos claros para prevenir intoxicaciones alimentarias; sin embargo, también es esencial estar preparados para atender una queja de este tipo, en caso de que ocurra.
            </p>
            <div className="bg-sb-teal-50 rounded-xl p-6 border-l-4 border-sb-teal-600">
              <p className="text-gray-800">
                Una denuncia de intoxicación alimentaria puede provenir directamente de un cliente o de una autoridad sanitaria. En cualquier caso, se debe actuar con <strong className="text-orange-700">seriedad, empatía y profesionalismo</strong>.
              </p>
            </div>
          </div>

          {/* 5 Pasos */}
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100">
            <div className="bg-gradient-to-r from-sb-green-700 to-sb-green-600 p-8 text-white">
              <h2 className="text-3xl font-bold mb-2">5 Pasos Esenciales</h2>
            </div>
            
            <div className="p-8 space-y-6">
              {/* Paso 1 */}
              <div className="bg-sb-green-50 rounded-2xl p-6 border-l-4 border-sb-green-700">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-sb-green-700 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">1</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Tomar la queja en serio</h3>
                    <p className="text-gray-700 mb-4">
                      Todas las quejas deben atenderse con prioridad, especialmente las que involucran la salud de los clientes. En esta etapa no se debe admitir ni negar responsabilidad, solo escuchar e investigar.
                    </p>
                    
                    <div className="bg-white rounded-xl p-4">
                      <h4 className="font-bold text-gray-900 mb-3">Buenas prácticas al recibir la queja:</h4>
                      <div className="space-y-2">
                        {[
                          'Hablar personalmente con el cliente si es posible',
                          'Agradecerle por informar el problema',
                          'Escuchar con atención y mostrar empatía y cortesía',
                          'Evitar actitudes defensivas o frases que resten importancia',
                          'Explicar que la queja será investigada cuidadosamente'
                        ].map((practice, i) => (
                          <div key={i} className="flex gap-2 items-start">
                            <svg className="w-5 h-5 text-sb-green-700 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="text-gray-700">{practice}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Paso 2 */}
              <div className="bg-sb-teal-50 rounded-2xl p-6 border-l-4 border-sb-teal-700">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-sb-teal-700 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">2</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Reunir los hechos</h3>
                    <p className="text-gray-700 mb-4">
                      Es fundamental recopilar toda la información posible, ya que servirá para la investigación:
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-3">
                      {[
                        '¿Qué comió el cliente y cuándo?',
                        '¿Cuándo empezaron los síntomas y cuáles fueron?',
                        '¿Duraron mucho tiempo?',
                        '¿Alguien más tuvo síntomas similares?',
                        '¿Consultó a un médico?',
                        '¿Informó a las autoridades sanitarias?'
                      ].map((question, i) => (
                        <div key={i} className="flex gap-2 items-start p-3 bg-white rounded-lg">
                          <svg className="w-5 h-5 text-sb-teal-700 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-sm text-gray-700">{question}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 p-3 bg-sb-teal-100 rounded-lg">
                      <p className="text-sm text-gray-800">
                        <strong>Nota:</strong> Se utiliza un formato estándar de reporte de intoxicación alimentaria (disponible a través del equipo de soporte de franquicias).
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Paso 3 */}
              <div className="bg-gray-50 rounded-2xl p-6 border-l-4 border-gray-600">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">3</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Acciones inmediatas</h3>
                    <p className="text-gray-700 mb-4">Con base en la información recabada:</p>
                    
                    <div className="space-y-3">
                      <div className="flex gap-3 p-4 bg-white rounded-xl border border-red-200">
                        <svg className="w-6 h-6 text-red-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                        <p className="text-gray-700">
                          Si el alimento señalado aún se sirve, <strong>detener su venta</strong> y ponerlo en cuarentena (no tirarlo, podría requerirse análisis)
                        </p>
                      </div>

                      <div className="flex gap-3 p-4 bg-white rounded-xl border border-red-200">
                        <svg className="w-6 h-6 text-red-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <p className="text-gray-700">
                          Informar <strong>inmediatamente</strong> al equipo del FRANQUICIANTE y a las autoridades sanitarias si la queja llegó directamente del cliente
                        </p>
                      </div>

                      <div className="flex gap-3 p-4 bg-white rounded-xl border border-red-200">
                        <svg className="w-6 h-6 text-red-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <p className="text-gray-700">
                          Proporcionar toda la información obtenida
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Paso 4 */}
              <div className="bg-sb-green-50 rounded-2xl p-6 border-l-4 border-sb-green-700">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-sb-green-700 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">4</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Investigación interna</h3>
                    <p className="text-gray-700 mb-4">
                      Colaborar activamente con las autoridades para determinar la causa y evitar nuevos casos.
                    </p>
                    
                    <div className="bg-white rounded-xl p-4 mb-4">
                      <h4 className="font-bold text-gray-900 mb-3">Verificar:</h4>
                      <div className="space-y-2">
                        {[
                          'Proveedor y fecha de entrega del producto',
                          'Condiciones de almacenamiento y manipulación (temperatura, tiempo, higiene)',
                          'Preparación y cocción: quién la realizó, cuándo y cómo',
                          'Registros de seguridad alimentaria y cumplimiento de protocolos',
                          'Posibles otros casos: revisar redes sociales y reportes similares'
                        ].map((item, i) => (
                          <div key={i} className="flex gap-2 items-start">
                            <svg className="w-5 h-5 text-sb-green-700 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                            </svg>
                            <span className="text-gray-700">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-gray-100 rounded-lg p-4 border border-gray-300">
                      <p className="text-sm text-gray-800">
                        <strong>Importante:</strong> Si el caso es grave, considerar cerrar temporalmente hasta finalizar la investigación. Seguir siempre las instrucciones oficiales sobre reapertura, limpieza y restock.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Paso 5 */}
              <div className="bg-sb-teal-50 rounded-2xl p-6 border-l-4 border-sb-teal-700">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-sb-teal-700 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">5</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Seguimiento al cliente</h3>
                    <p className="text-gray-700 mb-4">
                      Una vez concluida la investigación y aplicadas las medidas correctivas, informar al cliente sobre los resultados y acciones tomadas.
                    </p>
                    
                    <div className="bg-white rounded-xl p-4">
                      <div className="flex gap-3">
                        <svg className="w-6 h-6 text-sb-teal-700 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p className="text-gray-700">
                          Mantenerlo al tanto refuerza la <strong>credibilidad y confianza</strong> en la marca.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Resumen */}
          <div className="bg-gradient-to-br from-sb-green-600 to-sb-teal-600 rounded-3xl shadow-xl p-10 text-white">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4">Objetivo del Protocolo</h3>
              <p className="text-xl leading-relaxed">
                El objetivo no es solo resolver el caso, sino <strong>proteger la salud de los clientes</strong> y la <strong>reputación del negocio</strong>.
              </p>
            </div>

            <div className="grid md:grid-cols-5 gap-4">
              {['Tomar en serio', 'Reunir hechos', 'Actuar inmediato', 'Investigar', 'Dar seguimiento'].map((step, i) => (
                <div key={i} className="bg-white/10 rounded-xl p-4 text-center">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2 text-lg font-bold">
                    {i + 1}
                  </div>
                  <p className="text-sm font-medium">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
