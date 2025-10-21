import { redirect } from 'next/navigation';
import { getCurrentUser } from '@/lib/session';
import DashboardLayout from '@/components/admin/DashboardLayout';
import GuideBreadcrumb from '@/components/GuideBreadcrumb';

export default async function FactoresCriticosPage() {
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
          { label: 'Factores Críticos', href: '/franchisee/dashboard/guides/operaciones/seguridad-alimentaria/factores-criticos' }
        ]} />

        <div className="mb-12 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-sb-green-700 to-sb-green-600 rounded-3xl mb-6 shadow-lg">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">10 Factores Críticos</h1>
          <p className="text-xl text-gray-600">Elementos clave para la óptima conservación de alimentos</p>
        </div>

        <div className="space-y-8">
          {/* Intro */}
          <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-200">
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              La seguridad alimentaria es nuestra prioridad y debemos hacer absolutamente todo para asegurarnos de servir alimentos seguros. Para facilitar su control, se han establecido <strong>Factores Críticos de Seguridad Alimentaria</strong>.
            </p>
            <div className="bg-sb-green-50 rounded-xl p-6 border-l-4 border-sb-green-700">
              <p className="text-gray-800 font-semibold">
                Un Factor Crítico de Seguridad Alimentaria es cualquier elemento que "si no se cumple" pone en riesgo la seguridad de los alimentos para nuestros comensales y el equipo.
              </p>
            </div>
          </div>

          {/* Lista visual de 10 factores */}
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
            {[
              { num: 1, name: 'Lavado de manos' },
              { num: 2, name: 'Agua caliente' },
              { num: 3, name: 'Contaminación cruzada' },
              { num: 4, name: 'Alérgenos' },
              { num: 5, name: 'Control temperatura' },
              { num: 6, name: 'Control tiempo' },
              { num: 7, name: 'Control plagas' },
              { num: 8, name: 'Ítems aprobados' },
              { num: 9, name: 'Inspecciones' },
              { num: 10, name: 'Otras infracciones' }
            ].map((factor) => {
              const isGreen = factor.num % 3 === 1;
              const isTeal = factor.num % 3 === 2;
              const bgColor = isGreen ? 'bg-sb-green-50' : isTeal ? 'bg-sb-teal-50' : 'bg-gray-50';
              const borderColor = isGreen ? 'border-sb-green-200' : isTeal ? 'border-sb-teal-200' : 'border-gray-300';
              const iconBg = isGreen ? 'bg-sb-green-700' : isTeal ? 'bg-sb-teal-700' : 'bg-gray-600';
              
              return (
                <div key={factor.num} className={`${bgColor} rounded-xl p-4 border-2 ${borderColor} text-center`}>
                  <div className={`w-10 h-10 ${iconBg} rounded-full flex items-center justify-center text-white font-bold mx-auto mb-2`}>
                    {factor.num}
                  </div>
                  <p className="text-sm font-medium text-gray-800">{factor.name}</p>
                </div>
              );
            })}
          </div>

          {/* Factor 1: Lavado de manos */}
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100">
            <div className="bg-gradient-to-r from-sb-green-700 to-sb-green-600 p-8 text-white">
              <h2 className="text-3xl font-bold mb-2">1. Lavado de manos</h2>
              <p className="text-sb-green-50">Procedimiento básico pero vital</p>
            </div>
            
            <div className="p-8 space-y-6">
              <p className="text-gray-700">
                Es un procedimiento básico pero vital para prevenir enfermedades transmitidas por alimentos. No es solo cómo lavarse, sino <strong>cuándo</strong> y contar con un <strong>lavamanos adecuado</strong>.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Lávate antes de */}
                <div className="bg-sb-green-50 rounded-2xl p-6">
                  <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <svg className="w-6 h-6 text-sb-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Lávate las manos ANTES de:
                  </h3>
                  <div className="space-y-2">
                    {[
                      'Entrar a cocina',
                      'Iniciar turno',
                      'Ponerte guantes',
                      'Empezar una tarea de preparación',
                      'Manipular alimentos crudos',
                      'Cambiar de estación',
                      'Preparar un ticket con alergia',
                      'Preparar un pedido especial'
                    ].map((item, i) => (
                      <div key={i} className="flex gap-2 items-center text-sm text-gray-700">
                        <span className="w-2 h-2 bg-sb-green-700 rounded-full"></span>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Lávate después de */}
                <div className="bg-sb-teal-50 rounded-2xl p-6">
                  <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <svg className="w-6 h-6 text-sb-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    Lávate las manos DESPUÉS de:
                  </h3>
                  <div className="space-y-2">
                    {[
                      'Tocar carne cruda',
                      'Estornudar o toser',
                      'Usar pañuelos',
                      'Abastecer/retiro de inventario',
                      'Sacar basura',
                      'Realizar tareas no alimentarias',
                      'Usar tabaco o mascar chicle',
                      'Limpiar',
                      'Comer o beber',
                      'Manipular dinero',
                      'Tocar utensilios sucios'
                    ].map((item, i) => (
                      <div key={i} className="flex gap-2 items-center text-sm text-gray-700">
                        <span className="w-2 h-2 bg-sb-teal-700 rounded-full"></span>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-sb-green-50 rounded-xl p-6 border-2 border-sb-green-200">
                <p className="text-gray-800 font-bold text-center">
                  Frecuencia mínima: <span className="text-sb-green-700 text-xl">al menos una vez por hora</span>
                </p>
              </div>

              {/* Montaje obligatorio */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="font-bold text-gray-900 mb-4">Montaje obligatorio del lavamanos:</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    'Tarja exclusiva, limpia y en buen estado',
                    'Jabón antibacteriano',
                    'Póster con el procedimiento de lavado',
                    'Toallas de papel en dispensador cubierto',
                    'Bote de basura dedicado',
                    'Guantes desechables (vinilo, sin talco)',
                    'Gel desinfectante (si se requiere)'
                  ].map((item, i) => (
                    <div key={i} className="flex gap-2 items-start p-3 bg-white rounded-lg">
                      <svg className="w-5 h-5 text-sb-green-700 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Factores 2-3: Compactos */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Factor 2 */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-sb-teal-700 rounded-full flex items-center justify-center text-white font-bold">2</div>
                <h3 className="text-xl font-bold text-gray-900">Agua caliente</h3>
              </div>
              <p className="text-gray-700">
                Preferentemente para lavado eficaz de manos, equipos y superficies; algunos químicos requieren temperaturas específicas.
              </p>
            </div>

            {/* Factor 3 */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center text-white font-bold">3</div>
                <h3 className="text-xl font-bold text-gray-900">Alimentos y contaminación cruzada</h3>
              </div>
              <p className="text-gray-700 mb-3">
                Tipos de contaminación: física, biológica y química.
              </p>
              <p className="text-sm text-gray-600">
                <strong>Contaminación cruzada:</strong> transferencia involuntaria de microorganismos de un objeto o alimento a otro con efectos nocivos. La previene el Líder de Turno mediante revisión, seguimiento, capacitación y control.
              </p>
            </div>
          </div>

          {/* Factor 4: Alérgenos (expandido) */}
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100">
            <div className="bg-gradient-to-r from-sb-green-700 to-sb-green-600 p-8 text-white">
              <h2 className="text-3xl font-bold mb-2">4. Alérgenos</h2>
              <p className="text-sb-green-50">Tema crítico de seguridad</p>
            </div>
            
            <div className="p-8 space-y-6">
              <p className="text-lg text-gray-700">
                Son sustancias o componentes de los alimentos que pueden provocar una reacción alérgica en las personas que lo consumen.
              </p>

              <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-gray-600">
                <p className="text-gray-800 font-semibold">
                  Tema crítico: debemos segregar y controlar el riesgo de contaminación cruzada por alérgenos y proveer información exacta a los comensales.
                </p>
              </div>

              {/* Protocolo de emergencia */}
              <div className="bg-sb-teal-50 rounded-2xl p-6 border-2 border-sb-teal-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Protocolo de emergencia por reacción alérgica:</h3>
                <div className="space-y-3">
                  {[
                    'Mantener a la persona acostada con piernas elevadas (si hay desvanecimiento/mareo)',
                    'Llamar de inmediato al número de emergencia y decir "Anafilaxia"',
                    'Verificar si el huésped tiene autoinyector de adrenalina',
                    'Enviar a alguien a esperar la ambulancia y no dejar sola a la persona',
                    'Reportar al FRANQUICIANTE'
                  ].map((step, i) => (
                    <div key={i} className="flex gap-3 items-start p-3 bg-white rounded-lg">
                      <div className="w-6 h-6 bg-sb-teal-700 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                        {i + 1}
                      </div>
                      <span className="text-gray-800">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="font-bold text-gray-900 mb-3">Letreros obligatorios en caja:</h4>
                <div className="space-y-2 text-sm text-gray-700">
                  <p className="p-3 bg-white rounded border-l-4 border-sb-green-700">
                    "Si no te entregan tu ticket favor de llamar al número X o al correo X"
                  </p>
                  <p className="p-3 bg-white rounded border-l-4 border-sb-green-700">
                    "Si ud. es alérgico a algún ingrediente favor de comentarlo al personal"
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Factores 5-6-7: Grid compacto */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Factor 5 */}
            <div className="bg-sb-green-50 rounded-2xl p-6 border-2 border-sb-green-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-sb-green-700 rounded-full flex items-center justify-center text-white font-bold">5</div>
                <h3 className="text-lg font-bold text-gray-900">Control de temperatura</h3>
              </div>
              <p className="text-sm text-gray-700 mb-3">
                Alimentos de alto riesgo requieren temperaturas específicas para minimizar crecimiento bacteriano.
              </p>
              <div className="space-y-2 text-xs">
                <div className="p-2 bg-white rounded">Mantener puerta del refrigerador cerrada</div>
                <div className="p-2 bg-white rounded">No sobrecargar refrigerador</div>
                <div className="p-2 bg-white rounded">Actuar de inmediato si no mantiene temperatura</div>
              </div>
            </div>

            {/* Factor 6 */}
            <div className="bg-sb-teal-50 rounded-2xl p-6 border-2 border-sb-teal-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-sb-teal-700 rounded-full flex items-center justify-center text-white font-bold">6</div>
                <h3 className="text-lg font-bold text-gray-900">Control de tiempo</h3>
              </div>
              <p className="text-sm text-gray-700 mb-3">
                Controlar el tiempo en zona de peligro es crítico.
              </p>
              <div className="space-y-2 text-xs">
                <div className="p-2 bg-white rounded">Marcar caducidades en todos los productos</div>
                <div className="p-2 bg-white rounded">No servir producto vencido</div>
                <div className="p-2 bg-white rounded">Cumplir tiempos/temperaturas</div>
              </div>
            </div>

            {/* Factor 7 */}
            <div className="bg-gray-50 rounded-2xl p-6 border-2 border-gray-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center text-white font-bold">7</div>
                <h3 className="text-lg font-bold text-gray-900">Control de plagas</h3>
              </div>
              <p className="text-sm text-gray-700 mb-3">
                Moscas, cucarachas, ratas y ratones transmiten enfermedades.
              </p>
              <div className="space-y-2 text-xs">
                <div className="p-2 bg-white rounded">Fumigación 1 vez al mes</div>
                <div className="p-2 bg-white rounded">Limpieza trampa de grasas cada 2 meses</div>
                <div className="p-2 bg-white rounded">Gestión adecuada de residuos</div>
              </div>
            </div>
          </div>

          {/* Factores 8-9-10: Compactos */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-sb-green-50 rounded-2xl p-6 border-2 border-sb-green-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-sb-green-700 rounded-full flex items-center justify-center text-white font-bold">8</div>
                <h3 className="text-lg font-bold text-gray-900">Ítems aprobados</h3>
              </div>
              <p className="text-sm text-gray-700">
                Solo se permiten alimentos, empaques, equipos y químicos aprobados y de proveedores/centros autorizados. Garantiza trazabilidad y seguridad.
              </p>
            </div>

            <div className="bg-sb-teal-50 rounded-2xl p-6 border-2 border-sb-teal-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-sb-teal-700 rounded-full flex items-center justify-center text-white font-bold">9</div>
                <h3 className="text-lg font-bold text-gray-900">Inspecciones sanitarias</h3>
              </div>
              <p className="text-sm text-gray-700">
                Visitas no anunciadas para evaluar almacenamiento, producción, proceso, limpieza y manipulación. Reporte debe estar disponible.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 border-2 border-gray-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center text-white font-bold">10</div>
                <h3 className="text-lg font-bold text-gray-900">Otras infracciones</h3>
              </div>
              <div className="space-y-1 text-xs text-gray-700">
                <p>• No laborar con diarrea, vómito, fiebre</p>
                <p>• Químicos rotulados y alejados</p>
                <p>• Útiles de limpieza exclusivos por área</p>
                <p>• Tablas de picar por código de color</p>
              </div>
            </div>
          </div>

          {/* Resumen */}
          <div className="bg-gradient-to-br from-sb-green-600 to-sb-teal-600 rounded-3xl shadow-xl p-10 text-center text-white">
            <h3 className="text-2xl font-bold mb-4">Cumplimiento Obligatorio</h3>
            <p className="text-xl leading-relaxed">
              Estos 10 factores críticos son <strong>fundamentales</strong> para garantizar la seguridad de nuestros alimentos y la salud de nuestros clientes y equipo.
            </p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
