import { redirect } from 'next/navigation';
import { getCurrentUser } from '@/lib/session';
import DashboardLayout from '@/components/admin/DashboardLayout';
import GuideBreadcrumb from '@/components/GuideBreadcrumb';

export default async function AlmacenamientoPage() {
  const user = await getCurrentUser();
  
  if (!user || user.role !== 'FRANCHISEE') {
    redirect('/admin/login');
  }

  return (
    <DashboardLayout userEmail={user.email} userRole={user.role}>
      <div className="max-w-7xl mx-auto pb-12">
        <GuideBreadcrumb items={[
          { label: 'Guías', href: '/franchisee/dashboard/guides' },
          { label: 'Operaciones', href: '/franchisee/dashboard/guides/operaciones' },
          { label: 'Proveedores y Almacenamiento', href: '/franchisee/dashboard/guides/operaciones/almacenamiento' }
        ]} />

        <div className="mb-12 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-sb-green-600 to-sb-green-500 rounded-3xl mb-6 shadow-lg">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Proveedores y Almacenamiento</h1>
          <p className="text-xl text-gray-600">Recepción, almacenaje y sistema PEPS</p>
        </div>

        <div className="space-y-8">
          {/* Hero Image */}
          <div className="rounded-3xl overflow-hidden shadow-xl">
            <img src="/sucursal.JPG" alt="Sucursal Salad Bowl" className="w-full h-64 object-cover" />
          </div>

          {/* PEPS */}
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100">
            <div className="bg-gradient-to-r from-sb-green-700 to-sb-green-600 p-8 text-white">
              <h2 className="text-3xl font-black mb-2">PEPS: Primeras Entradas, Primeras Salidas</h2>
              <p className="text-sb-green-50">Sistema de rotación por fecha de caducidad</p>
            </div>
            
            <div className="p-8">
              <p className="text-lg text-gray-700 mb-6">El método PEPS consiste en rotar los productos por fecha de caducidad. Los artículos con la fecha de vencimiento más próxima deben utilizarse primero. Este sistema ayuda a mantener la calidad, reducir el desperdicio y conservar el área de almacenamiento organizada.</p>

              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="bg-sb-green-50 rounded-xl p-6 border-2 border-sb-green-200 text-center">
                  <div className="text-4xl mb-3">📅</div>
                  <h3 className="font-bold text-gray-900 mb-2">Fecha exacta</h3>
                  <p className="text-sm text-gray-700">Día, mes y año del fabricante</p>
                </div>
                <div className="bg-sb-teal-50 rounded-xl p-6 border-2 border-sb-teal-200 text-center">
                  <div className="text-4xl mb-3">🥬</div>
                  <h3 className="font-bold text-gray-900 mb-2">Sin fecha</h3>
                  <p className="text-sm text-gray-700">Orden de recepción</p>
                </div>
                <div className="bg-sb-green-50 rounded-xl p-6 border-2 border-sb-green-200 text-center">
                  <div className="text-4xl mb-3">↔️</div>
                  <h3 className="font-bold text-gray-900 mb-2">Al guardar</h3>
                  <p className="text-sm text-gray-700">Antiguos al frente</p>
                </div>
              </div>
            </div>
          </div>

          {/* Vida útil y cadena de frío */}
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-sb-teal-600 to-sb-green-600 p-8 text-white">
              <h2 className="text-3xl font-bold">Vida Útil y Cadena de Frío</h2>
            </div>
            <div className="p-8 grid md:grid-cols-3 gap-6">
              {[
                { title: 'Vida útil', desc: 'Tiempo durante el cual un producto sigue siendo seguro bajo condiciones específicas. Atención especial: verduras, frutas procesadas y lácteos.', icon: '⏰' },
                { title: 'Vida útil secundaria', desc: 'Tiempo que un producto puede conservarse una vez abierto. Info del fabricante en tablas de cocina.', icon: '📋' },
                { title: 'Cadena de frío', desc: 'Sistema continuo de refrigeración. Romperla afecta calidad, seguridad y duración.', icon: '❄️' }
              ].map((item, i) => (
                <div key={i} className="bg-gray-50 rounded-xl p-6">
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-700">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Alimentos de alto riesgo */}
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-red-600 to-orange-600 p-8 text-white">
              <h2 className="text-3xl font-bold">Alimentos de Alto Riesgo</h2>
              <p className="text-red-50">Deben mantenerse a temperatura para evitar bacterias o toxinas</p>
            </div>
            <div className="p-8">
              <div className="grid md:grid-cols-4 gap-4 mb-6">
                {[
                  { title: 'Carnes', items: 'Pavo, roast beef, pollo', color: 'red', icon: '🥩' },
                  { title: 'Lácteos', items: 'Huevos, quesos, leche, yogurth', color: 'blue', icon: '🥛' },
                  { title: 'Procesadas', items: 'Lechuga y espinaca picada', color: 'green', icon: '🥬' },
                  { title: 'Dips', items: 'Aderezos, hummus, jocoque, sopas', color: 'orange', icon: '🥣' }
                ].map((cat, i) => (
                  <div key={i} className={`bg-${cat.color}-50 rounded-xl p-4 border-2 border-${cat.color}-200`}>
                    <div className="text-3xl mb-2">{cat.icon}</div>
                    <h4 className="font-bold text-gray-900 mb-1 text-sm">{cat.title}</h4>
                    <p className="text-xs text-gray-700">{cat.items}</p>
                  </div>
                ))}
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-600">
                  <strong className="text-blue-900">Temperatura objetivo:</strong> Temperatura óptima de almacenamiento
                </div>
                <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-600">
                  <strong className="text-red-900">Temperatura crítica:</strong> Requiere acciones inmediatas
                </div>
              </div>
            </div>
          </div>

          {/* Recepción */}
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-sb-green-600 to-sb-teal-600 p-8 text-white">
              <h2 className="text-3xl font-bold">Recepción de Productos</h2>
            </div>
            <div className="p-8">
              <div className="bg-blue-600 rounded-2xl p-6 text-white mb-6">
                <h3 className="text-xl font-bold mb-4">Estándares de Temperatura</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white/20 rounded-lg p-4 text-center">
                    <div className="text-2xl mb-2">🌡️</div>
                    <p className="font-bold">Ambiente</p>
                    <p className="text-sm">18°C a 29°C</p>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4 text-center">
                    <div className="text-2xl mb-2">❄️</div>
                    <p className="font-bold">Refrigerados</p>
                    <p className="text-sm">0°C a 5°C</p>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4 text-center">
                    <div className="text-2xl mb-2">🧊</div>
                    <p className="font-bold">Congelados</p>
                    <p className="text-sm">-18°C a -23°C</p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Preparación antes de recibir:</h3>
              <div className="grid md:grid-cols-2 gap-3 mb-6">
                {['Revisar el pedido y tamaño de entrega', 'Limpiar áreas de almacenamiento (pisos, paredes, estantes)', 'Retirar cajas vacías o empaques', 'Organizar los productos en sus áreas asignadas', 'Revisar fechas de caducidad y aplicar PEPS'].map((item, i) => (
                  <div key={i} className="flex gap-2 bg-sb-green-50 rounded-lg p-3 border-l-4 border-sb-green-600">
                    <span className="font-bold text-sb-green-700">{i + 1}.</span>
                    <span className="text-sm text-gray-800">{item}</span>
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Durante y después de entrega:</h3>
              <div className="space-y-3 mb-6">
                <div className="bg-sb-teal-50 rounded-lg p-4 border-l-4 border-sb-teal-600">
                  <strong className="text-sb-teal-900">Factura:</strong> Verificar cantidades. Reportar discrepancias.
                </div>
                <div className="bg-orange-50 rounded-lg p-4 border-l-4 border-orange-600">
                  <strong className="text-orange-900">Empaque:</strong> Rechazar cajas rotas, sin sello o con plagas.
                </div>
                <div className="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-600">
                  <strong className="text-purple-900">Inspección visual:</strong> Congelados (sin cristales), Refrigerados (color, textura, olor), Ambiente (moho, plagas, latas dañadas).
                </div>
                <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-600">
                  <strong className="text-red-900">Fecha caducidad:</strong> Rechazar vencidos o con poca vida útil.
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6 border-2 border-blue-300">
                <h4 className="font-bold text-blue-900 mb-3">Control de temperatura en recepción:</h4>
                <ul className="space-y-2 text-sm text-gray-800">
                  <li>• Refrigerados: recibirse entre 0°C y 5°C</li>
                  <li>• Congelados: recibirse entre -18°C y -23°C</li>
                  <li>• Usar termómetro calibrado y desinfectado</li>
                  <li>• Insertar entre dos bolsas y esperar estabilización</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Temperaturas críticas */}
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-red-600 to-orange-600 p-8 text-white">
              <h2 className="text-3xl font-bold">Temperaturas Críticas y Flujos de Aceptación</h2>
            </div>
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-200">
                  <h3 className="text-lg font-bold text-blue-900 mb-4">🧊 Congelados</h3>
                  <div className="space-y-2 text-sm">
                    <div className="bg-white rounded-lg p-3">
                      <strong className="text-green-700">Estándar:</strong> -18°C a -23°C
                    </div>
                    <div className="bg-white rounded-lg p-3">
                      <strong className="text-orange-700">Aceptable:</strong> -15°C a -23°C
                    </div>
                    <div className="bg-white rounded-lg p-3">
                      <strong className="text-red-700">Inaceptable:</strong> {'>'} -15°C
                    </div>
                  </div>
                  <div className="mt-4 bg-blue-100 rounded-lg p-4 text-xs">
                    <strong>Flujo:</strong> Aceptar si temp entre bolsas: -18°C a -23°C. Si supera -15°C, abrir bolsa y medir directamente. Rechazar si {'>'} -15°C.
                  </div>
                </div>

                <div className="bg-green-50 rounded-xl p-6 border-2 border-green-200">
                  <h3 className="text-lg font-bold text-green-900 mb-4">❄️ Refrigerados</h3>
                  <div className="space-y-2 text-sm">
                    <div className="bg-white rounded-lg p-3">
                      <strong className="text-green-700">Estándar:</strong> 0°C a 5°C
                    </div>
                    <div className="bg-white rounded-lg p-3">
                      <strong className="text-orange-700">Aceptable:</strong> 0°C a 7°C
                    </div>
                    <div className="bg-white rounded-lg p-3">
                      <strong className="text-red-700">Inaceptable:</strong> {'>'} 7°C
                    </div>
                  </div>
                  <div className="mt-4 bg-green-100 rounded-lg p-4 text-xs">
                    <strong>Flujo:</strong> Aceptar si temp: 0°C a 5°C. Si supera 5°C, medir directamente. Aceptar si 0°C a 7°C. Rechazar si {'>'} 7°C.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Almacenamiento */}
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-sb-teal-700 to-sb-green-700 p-8 text-white">
              <h2 className="text-3xl font-bold">Almacenamiento</h2>
            </div>
            <div className="p-8">
              <div className="bg-sb-green-50 rounded-xl p-6 mb-6 border-l-4 border-sb-green-700">
                <h3 className="font-bold text-gray-900 mb-3">Responsabilidad y tiempos:</h3>
                <ul className="space-y-2 text-sm text-gray-800">
                  <li>• Conductor y empleado registran 2 temps de congelados y 2 de refrigerados</li>
                  <li>• Productos deben guardarse inmediatamente</li>
                  <li>• Tiempo máximo entre descarga y almacenamiento: <strong>30 minutos</strong></li>
                  <li>• Orden: primero congelados, luego refrigerados</li>
                </ul>
              </div>

              <div className="bg-blue-600 rounded-xl p-6 text-white mb-6">
                <h3 className="text-xl font-bold mb-3">Estándares de temperatura en almacenamiento:</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white/20 rounded-lg p-3 text-center">
                    <p className="font-bold">Ambiente</p>
                    <p className="text-sm">18°C a 29°C</p>
                  </div>
                  <div className="bg-white/20 rounded-lg p-3 text-center">
                    <p className="font-bold">Refrigeración</p>
                    <p className="text-sm">0°C a 4°C</p>
                  </div>
                  <div className="bg-white/20 rounded-lg p-3 text-center">
                    <p className="font-bold">Congelación</p>
                    <p className="text-sm">-18°C a -23°C</p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Falla en equipos:</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 rounded-xl p-6 border-2 border-red-200">
                  <h4 className="font-bold text-red-900 mb-3">🔴 Refrigerador</h4>
                  <div className="space-y-3 text-sm text-gray-800">
                    <p>Si aire {'>'} 4°C pero producto {'<'} 7°C: Mover alimentos de alto riesgo a otro refrigerador.</p>
                    <p><strong>Si alimentos {'>'} 7°C: DESECHAR</strong></p>
                    <p>Alimentos de bajo riesgo pueden permanecer 24 hrs.</p>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-200">
                  <h4 className="font-bold text-blue-900 mb-3">🔵 Congelador</h4>
                  <div className="space-y-3 text-sm text-gray-800">
                    <p>Si aire {'>'} -18°C pero producto {'<'} -15°C: Trasladar a otro congelador.</p>
                    <p><strong>Si {'>'} -15°C: usar inmediatamente o desechar</strong></p>
                    <p>Alimentos descongelados NO volver a congelar.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Reglas generales */}
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-sb-green-700 to-sb-teal-700 p-8 text-white">
              <h2 className="text-3xl font-bold">Reglas Generales de Almacenamiento</h2>
            </div>
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {[
                  'Almacenar en estantes limpios, higiénicos, secos y en buen estado',
                  'Productos en contacto con alimentos deben estar cubiertos',
                  'Estantes a mínimo 15 cm del suelo',
                  'Productos no directamente en el piso',
                  'Usar sistema PEPS siempre',
                  'Fechas de caducidad visibles al frente',
                  'Evitar sobrecargar refrigeradores (bloquea circulación)',
                  'Productos químicos debajo y lejos de alimentos (gabinete con llave ideal)',
                  'Frascos de vidrio y líquidos en estantes inferiores',
                  'Carne y pescado crudos separados de alimentos listos',
                  'Productos sin alérgenos encima y alejados (10-20 cm)',
                  'Productos con alérgenos en bandejas separadas'
                ].map((rule, i) => (
                  <div key={i} className="flex gap-2 bg-gray-50 rounded-lg p-4 border-l-4 border-sb-green-600">
                    <div className="w-6 h-6 bg-sb-green-700 rounded-full flex items-center justify-center flex-shrink-0 text-white text-xs font-bold">
                      {i + 1}
                    </div>
                    <p className="text-sm text-gray-800">{rule}</p>
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Reglas específicas para refrigeración y congelación:</h3>
              <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-200">
                <ul className="space-y-2 text-sm text-gray-800">
                  <li>• Productos a 5 cm de las paredes (circulación de aire)</li>
                  <li>• Al menos 5 cm entre productos (enfriamiento uniforme)</li>
                  <li>• Evitar sobrecarga (reduce eficiencia)</li>
                  <li>• Productos en congelador sellados (evita deshidratación)</li>
                  <li>• Alimentos preparados/listos: estantes superiores</li>
                  <li>• Vegetales sin lavar: estantes del medio</li>
                  <li>• Carnes y huevos: estantes inferiores, alejados</li>
                  <li>• Productos no peligrosos: cerca de la puerta</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Alertas Operativas */}
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-gray-700 to-gray-600 p-8 text-white">
              <h2 className="text-3xl font-bold">Alertas Operativas</h2>
              <p className="text-gray-100">Documentación de procesos y procedimientos</p>
            </div>
            <div className="p-8">
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-6 mb-6 border-l-4 border-gray-700">
                <p className="text-gray-800 text-lg mb-4">
                  Una <strong>Alerta Operativa</strong> es un documento creado para registrar procesos y procedimientos específicos dentro de las sucursales de SALAD BOWL. Es una hoja informativa que ofrece una visión rápida y clara sobre cómo realizar una tarea, utilizando texto, íconos e imágenes.
                </p>
                <p className="text-gray-700">
                  Es una forma estructurada de comunicar nuevos estándares o actualizaciones. Cada vez que se introduce un nuevo proceso, equipo, procedimiento o estándar —o se modifica uno ya existente— se crea una Alerta Operativa correspondiente. Este documento es <strong>obligatorio</strong> y sustituye cualquier acuerdo previo.
                </p>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Elementos esenciales de toda Alerta Operativa:</h3>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { num: '1', title: 'Información general', desc: 'Estándares clave', icon: '📋' },
                  { num: '2', title: 'Herramientas', desc: 'Equipos requeridos (si aplica)', icon: '🔧' },
                  { num: '3', title: 'Procedimiento', desc: 'Pasos detallados', icon: '📝' }
                ].map((item, i) => (
                  <div key={i} className="bg-gray-50 rounded-xl p-6 border-2 border-gray-200 text-center">
                    <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-3 text-white font-black">
                      {item.num}
                    </div>
                    <div className="text-3xl mb-2">{item.icon}</div>
                    <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 bg-sb-green-50 rounded-xl p-6 border-l-4 border-sb-green-700">
                <p className="text-gray-800 text-sm">
                  <strong>Nota:</strong> Las Alertas Operativas pueden crearse a solicitud del equipo operativo local cuando surge la necesidad de documentar un procedimiento específico, o cuando los requisitos locales difieren de los estándares de marca, garantizando que todas las normas estén por escrito y disponibles como referencia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
