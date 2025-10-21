import { redirect } from 'next/navigation';
import { getCurrentUser } from '@/lib/session';
import DashboardLayout from '@/components/admin/DashboardLayout';
import GuideBreadcrumb from '@/components/GuideBreadcrumb';

export default async function LimpiezaMantenimientoPage() {
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
          { label: 'Limpieza y Mantenimiento', href: '/franchisee/dashboard/guides/operaciones/limpieza-mantenimiento' }
        ]} />

        <div className="mb-12 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-sb-teal-600 to-sb-teal-500 rounded-3xl mb-6 shadow-lg">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Limpieza y Mantenimiento</h1>
          <p className="text-xl text-gray-600">Estándares de higiene y cuidado de instalaciones</p>
        </div>

        <div className="space-y-8">
          {/* Intro con imagen */}
          <div className="bg-gradient-to-br from-sb-green-50 to-white rounded-3xl shadow-xl overflow-hidden border-2 border-sb-green-200">
            <div className="flex flex-col md:grid md:grid-cols-5 gap-0">
              <div className="md:col-span-3 md:order-2 relative h-[400px] md:h-auto overflow-hidden">
                <img 
                  src="/sucursal.JPG" 
                  alt="Preparación en Salad Bowl" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="md:col-span-2 md:order-1 p-6 md:p-10 flex flex-col justify-center bg-white/80 backdrop-blur-sm">
                <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4 font-medium">
                  Cada sucursal es diferente. Los planos y estaciones de trabajo varían, y algunos espacios cuentan con equipos especializados.
                </p>
                <div className="pl-3 md:pl-4 border-l-4 border-sb-teal-600">
                  <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                    Todas las sucursales de <strong className="text-sb-green-700">SALAD BOWL</strong> deben seguir un programa integral de limpieza y desinfección. Esperamos los más altos niveles de limpieza.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Diferencia entre limpiar y desinfectar */}
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100">
            <div className="bg-gradient-to-r from-sb-teal-600 to-sb-teal-500 p-6 md:p-8 text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Conceptos Fundamentales</h2>
              <p className="text-sb-teal-50">Entiende la diferencia</p>
            </div>
            
            <div className="p-6 md:p-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-sb-teal-50 rounded-2xl p-6 border-2 border-sb-teal-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-sb-teal-700 rounded-xl flex items-center justify-center">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-sb-teal-900">Limpiar</h3>
                  </div>
                  <p className="text-gray-800 text-lg">
                    Eliminar suciedad, manchas o residuos <strong>visibles</strong>.
                  </p>
                </div>

                <div className="bg-sb-green-50 rounded-2xl p-6 border-2 border-sb-green-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-sb-green-700 rounded-xl flex items-center justify-center">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-sb-green-900">Desinfectar</h3>
                  </div>
                  <p className="text-gray-800 text-lg">
                    Reducir las <strong>bacterias</strong> a un nivel seguro (sanitizar).
                  </p>
                </div>
              </div>

              <div className="mt-6 bg-gradient-to-r from-sb-green-100 to-sb-teal-100 rounded-xl p-4 md:p-6 border-l-4 border-sb-green-700">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-sb-green-700 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-gray-800 font-medium text-sm md:text-base">
                    <strong className="text-sb-green-700">Regla de oro:</strong> Todas las áreas deben limpiarse, pero las superficies en contacto con alimentos deben limpiarse <strong>Y</strong> desinfectarse siempre.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Frecuencias de limpieza */}
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100">
            <div className="bg-gradient-to-r from-sb-green-700 to-sb-green-600 p-6 md:p-8 text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Frecuencias de Limpieza</h2>
              <p className="text-sb-green-50">Organización y constancia</p>
            </div>
            
            <div className="p-6 md:p-8">
              <p className="text-gray-700 text-lg mb-6">
                Las tareas están detalladas en bitácoras y se dividen en frecuencias para facilitar una limpieza constante y organizada:
              </p>

              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { 
                    title: 'Diarias', 
                    color: 'sb-teal',
                    icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  },
                  { 
                    title: 'Semanales', 
                    color: 'sb-green',
                    icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                  },
                  { 
                    title: 'Mensuales', 
                    color: 'sb-teal',
                    icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
                  }
                ].map((freq, i) => (
                  <div key={i} className={`bg-${freq.color}-50 rounded-xl p-6 border-2 border-${freq.color}-200 text-center transform hover:scale-105 transition-transform`}>
                    <div className={`w-16 h-16 bg-${freq.color}-700 rounded-full flex items-center justify-center mx-auto mb-4 text-white`}>
                      {freq.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{freq.title}</h3>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-sb-green-50 rounded-xl p-6 border-l-4 border-sb-green-700">
                <p className="text-gray-800 leading-relaxed">
                  <strong className="text-sb-green-700">Sin un sistema estructurado</strong>, es probable que algunas tareas se pasen por alto debido a otras actividades. Un programa de limpieza envía un mensaje claro al equipo sobre la importancia del orden y la higiene.
                </p>
              </div>
            </div>
          </div>

          {/* Zonas de limpieza */}
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100">
            <div className="bg-gradient-to-r from-sb-teal-600 to-sb-green-600 p-6 md:p-8 text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Limpieza de Zonas</h2>
              <p className="text-sb-teal-50">División estratégica del espacio</p>
            </div>
            
            <div className="p-6 md:p-8">
              <p className="text-gray-700 text-lg mb-6">
                Para garantizar que todas las áreas se limpien con regularidad y siguiendo un estándar uniforme, el espacio se divide en <strong className="text-sb-teal-700">zonas de limpieza</strong>.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {[
                  { 
                    title: 'Cocina y área de producción',
                    icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" /></svg>,
                    color: 'sb-green'
                  },
                  { 
                    title: 'Barra y área de atención al cliente',
                    icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
                    color: 'sb-teal'
                  },
                  { 
                    title: 'Baños',
                    icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" /></svg>,
                    color: 'sb-green'
                  },
                  { 
                    title: 'Comedor y terraza',
                    icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>,
                    color: 'sb-teal'
                  }
                ].map((zona, i) => (
                  <div key={i} className={`bg-${zona.color}-50 rounded-xl p-6 border-2 border-${zona.color}-200 flex items-center gap-4 hover:shadow-lg transition-shadow`}>
                    <div className={`w-14 h-14 bg-${zona.color}-700 rounded-xl flex items-center justify-center flex-shrink-0 text-white`}>
                      {zona.icon}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">{zona.title}</h3>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-sb-teal-50 to-sb-green-50 rounded-2xl p-6 border-l-4 border-sb-teal-600">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <svg className="w-6 h-6 text-sb-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  Importante: Evita la contaminación cruzada
                </h3>
                <p className="text-gray-800 mb-4">
                  Cada zona debe tener sus propios <strong>utensilios de limpieza exclusivos</strong>. Esto se puede lograr de dos formas:
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 bg-white rounded-lg p-4">
                    <div className="w-8 h-8 bg-sb-teal-700 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">
                      1
                    </div>
                    <p className="text-gray-800">Marcando el <strong>nombre de la zona</strong> en cada herramienta.</p>
                  </div>
                  <div className="flex items-start gap-3 bg-white rounded-lg p-4">
                    <div className="w-8 h-8 bg-sb-green-700 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">
                      2
                    </div>
                    <p className="text-gray-800">Usando un <strong>código de color</strong>. Por ejemplo: rojo para el área de atención al cliente.</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-sb-green-50 rounded-xl p-6 border-l-4 border-sb-green-700">
                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <svg className="w-5 h-5 text-sb-green-700" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  Cultura: "Limpia mientras trabajas"
                </h3>
                <p className="text-gray-800">
                  Limpiar los derrames de inmediato evita residuos azucarados que puedan atraer plagas como hormigas, cucarachas o moscas, y asegura un entorno seguro, higiénico y agradable para todos.
                </p>
              </div>
            </div>
          </div>

          {/* Programa de limpieza + 7 reglas */}
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100">
            <div className="bg-gradient-to-r from-sb-green-700 to-sb-teal-700 p-6 md:p-8 text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Programa de Limpieza</h2>
              <p className="text-sb-green-50">Planificación y asignación organizada</p>
            </div>
            
            <div className="p-6 md:p-8">
              <p className="text-gray-700 text-lg mb-6">
                Un programa de limpieza es una forma sencilla y eficaz de demostrar que todo el equipo se limpia regularmente. Además, permite planificar y asignar tareas de manera organizada.
              </p>

              <div className="bg-sb-teal-50 rounded-2xl p-6 mb-6 border-2 border-sb-teal-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Cada programa debe incluir:</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { label: 'Qué se limpia', icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg> },
                    { label: 'Con qué frecuencia', icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
                    { label: 'Qué productos o químicos', icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg> },
                    { label: 'Quién es responsable', icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg> },
                    { label: 'Equipo de protección necesario', icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg> }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 bg-white rounded-lg p-3">
                      <div className="w-8 h-8 bg-sb-teal-700 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                        {item.icon}
                      </div>
                      <span className="text-gray-800 font-medium">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-r from-sb-green-600 to-sb-teal-600 rounded-2xl p-6 md:p-8 text-white">
                <h3 className="text-2xl font-bold mb-6 text-center">7 Reglas Principales de Limpieza</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    'Limpia los derrames inmediatamente',
                    'Mantén la práctica de "Limpia mientras trabajas"',
                    'Guarda los productos de limpieza lejos de los alimentos',
                    'Usa trapos o utensilios codificados por color para cada zona',
                    'Superficies que tocan alimentos listos para comer deben desinfectarse cada 4 horas',
                    'Puntos de contacto (manijas, grifos, interruptores) deben sanitizarse cada 4 horas',
                    'Vacía los botes de basura regularmente'
                  ].map((regla, i) => (
                    <div key={i} className="flex items-start gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-sb-teal-700 font-black">{i + 1}</span>
                      </div>
                      <p className="text-white">{regla}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Estándares de limpieza */}
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100">
            <div className="bg-gradient-to-r from-sb-teal-700 to-sb-teal-600 p-6 md:p-8 text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Estándares de Limpieza</h2>
              <p className="text-sb-teal-50">Frecuencias mínimas requeridas</p>
            </div>
            
            <div className="p-6 md:p-8">
              <div className="bg-gradient-to-r from-sb-teal-50 to-sb-green-50 rounded-xl p-6 border-l-4 border-sb-teal-600 mb-8">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-sb-teal-700 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="text-gray-800 text-lg font-medium mb-2">
                      Las frecuencias indicadas son el <strong className="text-sb-teal-700">mínimo requerido</strong>. Puede ser necesario realizar limpiezas adicionales si lo exigen las regulaciones locales o las directrices del departamento de salud.
                    </p>
                    <p className="text-gray-700">
                      <strong>Cualquier área sucia que afecte la seguridad alimentaria o la percepción del cliente debe limpiarse de inmediato</strong>, sin importar la frecuencia programada.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-sb-green-50 rounded-xl p-6 text-center">
                <svg className="w-16 h-16 text-sb-green-700 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <p className="text-gray-800 text-lg font-medium">
                  Ver formatos de limpieza por áreas
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  (Consultar bitácoras específicas de cada zona)
                </p>
              </div>
            </div>
          </div>

          {/* Reparaciones y Mantenimiento */}
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100">
            <div className="bg-gradient-to-r from-gray-700 to-gray-600 p-6 md:p-8 text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Reparaciones y Mantenimiento</h2>
              <p className="text-gray-100">Componente clave de los Estándares de Marca</p>
            </div>
            
            <div className="p-6 md:p-8">
              <p className="text-gray-700 text-lg mb-8">
                Nuestros clientes forman una opinión sobre la marca desde el momento en que cruzan el área exterior. Una imagen positiva significa que las instalaciones están bien mantenidas, correctamente iluminadas y no presentan riesgos de seguridad ni de higiene.
              </p>

              {/* Exterior */}
              <div className="mb-8 bg-gray-50 rounded-2xl p-6 border-2 border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <svg className="w-7 h-7 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  Exterior
                </h3>
                <div className="space-y-4">
                  {[
                    { title: 'Letreros exteriores, iluminación y menús', desc: 'No deben tener acumulación de suciedad, estar oxidados, desteñidos o sin iluminación. No deben verse dañados. Todos los focos deben funcionar o reemplazarse en máximo 7 días, dejando evidencia del reporte.' },
                    { title: 'Pasillos exteriores', desc: 'Libres de suciedad, goma de mascar o basura. Sin grietas que representen riesgo. Drenajes cubiertos. En caso de ceniza, tierra, nieve o hielo, limpiar lo antes posible.' },
                    { title: 'Fachada del edificio', desc: 'Sin daños visibles, grafitis, acumulación de suciedad, pintura descascarada o decolorada. Sellado adecuadamente para evitar entrada de plagas. Todas las puertas exteriores deben tener cierrapuertas funcionales.' },
                    { title: 'Rampas (si aplica)', desc: 'Deben ser accesibles y seguras para personas con discapacidad.' },
                    { title: 'Estacionamientos (si aplica)', desc: 'Deben mantenerse en buen estado y bien iluminados.' },
                    { title: 'Botes de basura externos', desc: 'Deben revisarse varias veces al día, no deben desbordarse ni estar sucios o dañados.' },
                    { title: 'Contenedores de residuos y trampas de grasa', desc: 'Cerrados, en buen estado, sin olores y limpios. Las trampas de grasa no deben desbordarse ni emitir olor. Solo proveedores autorizados pueden darles mantenimiento ya que tienen que emitir un certificado para las autoridades locales.' }
                  ].map((item, i) => (
                    <div key={i} className="bg-white rounded-lg p-4 border-l-4 border-gray-600">
                      <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                      <p className="text-sm text-gray-700">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Comedor y terraza */}
              <div className="mb-8 bg-sb-teal-50 rounded-2xl p-6 border-2 border-sb-teal-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <svg className="w-7 h-7 text-sb-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  Área de Comedor y Terraza
                </h3>
                <div className="space-y-4">
                  {[
                    { title: 'Comedor', desc: 'El gerente en turno debe supervisar que el equipo cumpla con las tareas de limpieza según el cronograma. Se deben realizar recorridos cada 30 minutos en horas pico.' },
                    { title: 'Ventanas y puertas', desc: 'Sin manchas, huellas o acumulación de suciedad. Marcos sin daño, cristales sin grietas. Manijas y bisagras deben funcionar correctamente.' },
                    { title: 'Pisos', desc: 'Sin grietas, baldosas rotas ni acumulación de mugre o chicle. Barrer y trapear frecuentemente y al final del día. Usar señal de "Piso Mojado" hasta que el área esté seca.' },
                    { title: 'Sillas y mesas', desc: 'Sin daños significativos. Las mesas o sillas rotas deben retirarse. Las superficies deben limpiarse y desinfectarse varias veces al día. Las sillas para bebé deben tener cinturones seguros.' },
                    { title: 'Paredes', desc: 'En buen estado, sin pintura descascarada ni daños visibles.' },
                    { title: 'Luminarias', desc: 'Limpias y funcionando. Focos dañados deben reemplazarse en menos de 24 horas.' },
                    { title: 'Plantas', desc: 'Bien cuidadas y regadas.' },
                    { title: 'Condimentos', desc: 'En envases limpios, sin residuos. Revisar y limpiar durante el día y al cierre.' },
                    { title: 'Mostrador y cajas', desc: 'Limpios y en buen estado. Solo deben tener productos aprobados y materiales de marketing autorizados. Los derrames deben limpiarse de inmediato.' },
                    { title: 'Baños para clientes', desc: 'Limpios, secos, sin olores. Revisar constantemente durante la jornada. Mantener abastecidos con papel, jabón y toallas. Los sanitarios, espejos y lavabos deben estar en buen estado. Cubículos femeninos deben tener recipiente cerrado.' }
                  ].map((item, i) => (
                    <div key={i} className="bg-white rounded-lg p-4 border-l-4 border-sb-teal-600">
                      <h4 className="font-bold text-sb-teal-900 mb-1">{item.title}</h4>
                      <p className="text-sm text-gray-700">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Cocina */}
              <div className="bg-sb-green-50 rounded-2xl p-6 border-2 border-sb-green-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <svg className="w-7 h-7 text-sb-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                  </svg>
                  Cocina y Área de Producción
                </h3>
                <div className="space-y-4">
                  {[
                    { title: 'Pisos, zoclos, paredes y superficies', desc: 'Sin grietas ni azulejos rotos. Sin acumulación de grasa, suciedad o restos de comida. Barrer y trapear varias veces al día y al cierre. Los drenajes deben estar limpios, tapados y sin olores. Los equipos deben mantenerse a 15 cm del piso.' },
                    { title: 'Techo y ventilación (HVAC)', desc: 'Paneles y rejillas sin daño ni acumulación de polvo o grasa.' },
                    { title: 'Luz e instalaciones eléctricas', desc: 'Focos cubiertos y en buen estado. Sustituir los fundidos de inmediato. Las cubiertas deben estar limpias y sin insectos.' },
                    { title: 'Baños y vestidores del personal', desc: 'Limpios y bien abastecidos. No debe haber ropa ni objetos en el suelo. Se recomienda el uso de lockers.' },
                    { title: 'Equipos', desc: 'Solo se permite el uso de equipos aprobados. Deben mantenerse limpios, libres de grasa y residuos. Deben tener mantenimiento regular y seguir las tareas del programa de limpieza.' }
                  ].map((item, i) => (
                    <div key={i} className="bg-white rounded-lg p-4 border-l-4 border-sb-green-600">
                      <h4 className="font-bold text-sb-green-900 mb-1">{item.title}</h4>
                      <p className="text-sm text-gray-700">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
