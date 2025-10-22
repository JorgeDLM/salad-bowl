import { redirect } from 'next/navigation';
import { getCurrentUser } from '@/lib/session';
import DashboardLayout from '@/components/admin/DashboardLayout';
import GuideBreadcrumb from '@/components/GuideBreadcrumb';

export default async function ReclamosClientesPage() {
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
          { label: 'Reclamos de Clientes', href: '/franchisee/dashboard/guides/operaciones/reclamos-clientes' }
        ]} />

        <div className="mb-12 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-sb-green-700 rounded-3xl mb-6 shadow-lg">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Reclamos de Clientes</h1>
          <p className="text-xl text-gray-600">Convertir problemas en oportunidades</p>
        </div>

        <div className="space-y-8">
          {/* Intro */}
          <div className="bg-sb-green-50 rounded-3xl p-8 border-2 border-sb-green-200">
            <p className="text-lg text-gray-800 leading-relaxed mb-4">
              A todos nos gustaría poder decir que nunca hemos tenido, tenemos ni tendremos que enfrentar la insatisfacción de un cliente en nuestras sucursales. Desafortunadamente, esto no es posible. Existen demasiadas personalidades, gustos, expectativas y situaciones diferentes.
            </p>
            <p className="text-lg text-gray-800 leading-relaxed mb-4">
              Sin embargo, lo que sí podemos hacer es <strong className="text-sb-green-700">aprender a manejar esas situaciones</strong> para que, aun después de una experiencia negativa, el cliente se vaya contento, con una sonrisa y con ganas de regresar.
            </p>
            <div className="bg-white rounded-xl p-6 border-l-4 border-sb-green-700">
              <p className="text-gray-800 font-medium">
                <strong className="text-sb-green-700">Importante:</strong> Si no se atiende correctamente, un problema se convierte en una queja, y resolver una queja es mucho más difícil. No podemos evitar todos los problemas, pero sí podemos evitar que se transformen en quejas.
              </p>
            </div>
          </div>

          {/* Cómo lo hacemos */}
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100">
            <div className="bg-sb-green-700 p-8 text-white">
              <h2 className="text-3xl font-bold mb-2">¿Cómo lo Hacemos en Salad Bowl?</h2>
              <p className="text-sb-green-50">Identificación temprana y prevención</p>
            </div>
            
            <div className="p-8">
              <div className="bg-sb-teal-700 rounded-2xl p-8 text-white mb-8">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  MUY IMPORTANTE
                </h3>
                <p className="text-xl text-white">
                  El primer paso es <strong>identificar el problema y resolverlo ANTES</strong> de que se convierta en una queja
                </p>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6">Durante los recorridos de supervisión:</h3>
              <p className="text-gray-700 text-lg mb-6">
                El gerente o encargado debe observar activamente el ambiente para detectar cualquier señal que pueda indicar una situación a corregir.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { 
                    signal: 'Clientes sentados con abrigo', 
                    question: '¿La temperatura del local es demasiado baja?'
                  },
                  { 
                    signal: 'Clientes que no terminan su comida', 
                    question: '¿La comida no está lo suficientemente sabrosa o algún ingrediente no fue de su agrado?'
                  },
                  { 
                    signal: 'Cliente limpiando cubiertos o mesa con servilleta', 
                    question: '¿La limpieza no fue adecuada?'
                  },
                  { 
                    signal: 'Clientes con lenguaje corporal negativo', 
                    question: '¿Hay alguna inconformidad?'
                  }
                ].map((item, i) => (
                  <div key={i} className="bg-sb-green-50 rounded-xl p-6 border-2 border-sb-green-200">
                    <div className="bg-white rounded-lg p-4 mb-3">
                      <p className="font-bold text-gray-900 mb-2">Señal:</p>
                      <p className="text-sm text-gray-700">{item.signal}</p>
                    </div>
                    <div className="bg-sb-teal-50 rounded-lg p-4">
                      <p className="font-bold text-sb-teal-900 mb-2">Pregunta:</p>
                      <p className="text-sm text-gray-700">{item.question}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Comunicación con el cliente */}
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100">
            <div className="bg-sb-teal-700 p-8 text-white">
              <h2 className="text-3xl font-bold">Comunicación con el Cliente</h2>
            </div>
            
            <div className="p-8">
              <div className="bg-sb-teal-50 rounded-2xl p-8 border-2 border-sb-teal-200 mb-6">
                <p className="text-lg text-gray-800 leading-relaxed mb-4">
                  Hablar con los clientes es esencial. Pequeñas acciones de atención y escucha activa hacen que se sientan valorados. Detectar la <strong className="text-sb-teal-700">causa raíz del problema</strong> permite actuar desde la prevención y no solo "apagar incendios".
                </p>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Para prevenir quejas, el equipo debe estar preparado:</h3>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  'Conocer a fondo la operación del restaurante',
                  'Revisar los resultados del programa de retroalimentación de clientes',
                  'Analizar los problemas más comunes para corregirlos antes de que se repitan'
                ].map((text, i) => (
                  <div key={i} className="bg-sb-green-50 rounded-xl p-4 border-2 border-sb-green-200">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-sb-green-700 rounded-full flex items-center justify-center flex-shrink-0 text-white text-xs font-bold">
                        {i + 1}
                      </div>
                      <p className="text-sm text-gray-800">{text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 bg-sb-green-700 rounded-xl p-6 text-white">
                <p className="text-lg">
                  <strong>Realizar este análisis regularmente reduce significativamente las incidencias y mejora la satisfacción general.</strong>
                </p>
              </div>
            </div>
          </div>

          {/* Actúa rápido */}
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100">
            <div className="bg-sb-green-700 p-8 text-white">
              <h2 className="text-3xl font-bold">Actúa Rápido y con Eficacia</h2>
            </div>
            
            <div className="p-8">
              <div className="bg-sb-green-50 rounded-2xl p-8 border-l-4 border-sb-green-700 mb-8">
                <p className="text-lg text-gray-800 leading-relaxed mb-4">
                  Cuando detectes un problema, resuélvelo de inmediato y con profesionalismo. Esto demuestra compromiso y hace que el cliente se sienta cuidado y valorado.
                </p>
                <p className="text-lg text-gray-800 leading-relaxed">
                  Si el cliente percibe que la situación se manejó con respeto y eficacia, saldrá satisfecho y con una buena impresión de SALAD BOWL, incluso si algo no salió perfecto.
                </p>
              </div>

              <div className="bg-sb-teal-700 rounded-2xl p-8 text-white text-center">
                <h3 className="text-2xl font-bold mb-3">Recuerda</h3>
                <p className="text-xl">Un problema bien atendido puede transformarse en una experiencia positiva y memorable</p>
              </div>
            </div>
          </div>

          {/* Proceso de la queja */}
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100">
            <div className="bg-sb-teal-700 p-8 text-white">
              <h2 className="text-3xl font-bold">Proceso de la Queja</h2>
              <p className="text-sb-teal-50">5 pasos clave</p>
            </div>
            
            <div className="p-8">
              <div className="space-y-4">
                {[
                  { 
                    letter: 'A', 
                    title: 'CREERLE al cliente', 
                    desc: 'Después de un comentario del cliente lo primero que hay que hacer es CREERLE, y nunca en primera instancia contraponer su primer punto de vista.'
                  },
                  { 
                    letter: 'B', 
                    title: 'Escucha activa', 
                    desc: 'Escucha las razones del cliente, déjalo explicar de principio a fin su inconformidad sin reclamar de regreso.'
                  },
                  { 
                    letter: 'C', 
                    title: 'Ofrecer disculpa', 
                    desc: 'Ofrecer una disculpa en nombre de la marca empáticamente sin culpar a nadie.'
                  },
                  { 
                    letter: 'D', 
                    title: 'Resolver con criterio', 
                    desc: 'Resolver con una disculpa seguida de una solución rápida con criterio dependiendo la gravedad de la queja, haciendo lo posible por reparar el daño.'
                  },
                  { 
                    letter: 'E', 
                    title: 'Agradece sinceramente', 
                    desc: 'Agradece al cliente sinceramente.'
                  }
                ].map((step, i) => (
                  <div key={i} className={`relative ${i % 2 === 0 ? 'bg-sb-green-50 border-sb-green-200' : 'bg-sb-teal-50 border-sb-teal-200'} rounded-xl p-6 border-2 pl-20`}>
                    <div className={`absolute -left-4 top-1/2 -translate-y-1/2 w-16 h-16 ${i % 2 === 0 ? 'bg-sb-green-700' : 'bg-sb-teal-700'} rounded-full flex items-center justify-center text-white font-black text-2xl shadow-lg`}>
                      {step.letter}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-700">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Manejo de quejas */}
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100">
            <div className="bg-sb-green-700 p-8 text-white">
              <h2 className="text-3xl font-bold">Manejo de Quejas de Clientes</h2>
              <p className="text-sb-green-50">Consejos clave</p>
            </div>
            
            <div className="p-8">
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { 
                    title: 'Efectivo = RÁPIDO', 
                    desc: 'La velocidad es fundamental. Una respuesta tardía aumenta la frustración, mientras que una solución inmediata demuestra profesionalismo y empatía.'
                  },
                  { 
                    title: 'Empodera a tu equipo', 
                    desc: 'Permite que los colaboradores resuelvan quejas simples por sí mismos (cambiar platillo, reemplazar bebida). Los clientes esperan atención ágil.'
                  },
                  { 
                    title: 'Comunicación interna', 
                    desc: 'Aunque el equipo resuelva, debe informar al gerente lo sucedido y cómo se solucionó para anticipar y prevenir futuras situaciones.'
                  }
                ].map((tip, i) => (
                  <div key={i} className="bg-sb-teal-50 rounded-xl p-6 border-2 border-sb-teal-200">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{tip.title}</h3>
                    <p className="text-sm text-gray-700">{tip.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Situaciones por nivel */}
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100">
            <div className="bg-sb-teal-700 p-8 text-white">
              <h2 className="text-3xl font-bold">Clasificación de Situaciones</h2>
            </div>
            
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Solo gerente */}
                <div className="bg-sb-green-50 rounded-2xl p-6 border-2 border-sb-green-200">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-sb-green-700 rounded-full flex items-center justify-center text-white">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-sb-green-900">Solo Gerente</h3>
                  </div>
                  <p className="text-sm text-gray-700 mb-4">Requieren manejo directo y profesional, pueden necesitar escalamiento:</p>
                  <ul className="space-y-2">
                    {[
                      'Posible intoxicación o enfermedad',
                      'Lesiones dentro del restaurante',
                      'Presunta contaminación de productos',
                      'Actitudes ofensivas o agresivas hacia el personal',
                      'Clientes excesivamente molestos que ponen en riesgo el ambiente'
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 bg-white rounded-lg p-3">
                        <span className="w-5 h-5 bg-sb-green-700 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">¡</span>
                        <span className="text-sm text-gray-800">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Empleados */}
                <div className="bg-sb-teal-50 rounded-2xl p-6 border-2 border-sb-teal-200">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-sb-teal-700 rounded-full flex items-center justify-center text-white">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-sb-teal-900">Empleados</h3>
                  </div>
                  <p className="text-sm text-gray-700 mb-4">Quejas que deben solucionarse en el momento:</p>
                  <ul className="space-y-2">
                    {[
                      'Un pelo en el platillo',
                      'No le agradó el producto',
                      'Algún ingrediente estaba en mal estado',
                      'Exceso de aderezo',
                      'Higiene de mesa, utensilio o temperatura del lugar'
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 bg-white rounded-lg p-3">
                        <span className="w-5 h-5 bg-sb-teal-700 rounded-full flex items-center justify-center text-white text-xs flex-shrink-0">✓</span>
                        <span className="text-sm text-gray-800">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 bg-sb-teal-100 rounded-lg p-4">
                    <p className="text-xs text-gray-700">
                      <strong>Solución:</strong> Ofrecer cantidad "x" a monedero electrónico o cambio de platillo según gravedad.
                    </p>
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
