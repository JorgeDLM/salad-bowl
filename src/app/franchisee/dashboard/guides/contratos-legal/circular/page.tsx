import { redirect } from 'next/navigation';
import { getCurrentUser } from '@/lib/session';
import DashboardLayout from '@/components/admin/DashboardLayout';
import GuideBreadcrumb from '@/components/GuideBreadcrumb';

export default async function ContratosLegalPage() {
  const user = await getCurrentUser();
  
  if (!user || user.role !== 'FRANCHISEE') {
    redirect('/admin/login');
  }

  return (
    <DashboardLayout userEmail={user.email} userRole={user.role}>
      <div className="max-w-6xl mx-auto pb-12">
        <GuideBreadcrumb items={[
          { label: 'Guías', href: '/franchisee/dashboard/guides' },
          { label: 'Contratos y Legal', href: '/franchisee/dashboard/guides/contratos-legal' },
          { label: 'Circular Oferta de Franquicia', href: '/franchisee/dashboard/guides/contratos-legal/circular' }
        ]} />

        <div className="mb-12 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-sb-green-700 rounded-3xl mb-6 shadow-lg">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Circular Oferta de Franquicia</h1>
          <p className="text-xl text-gray-600">Sistema de Franquicia Salad Bowl®</p>
        </div>

        <div className="space-y-8">
          {/* Botón descarga */}
          <div className="bg-white rounded-3xl shadow-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Descargar Documento Oficial</h3>
            <p className="text-gray-600 mb-6">
              Descarga la Circular Oferta de Franquicia en formato DOC para revisión offline
            </p>
            <a
              href="/franquicias/contratos/Circular Oferta Franquicia COF.doc"
              download
              className="inline-flex items-center gap-3 bg-sb-green-700 text-white font-bold py-4 px-8 rounded-xl hover:bg-sb-green-600 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Descargar COF (DOC)
            </a>
          </div>

          {/* INTRO DECLARACIONES */}
          <div className="bg-sb-green-50 rounded-3xl p-8 border-2 border-sb-green-200">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-sb-green-700 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Declaración</h2>
                <p className="text-gray-800 leading-relaxed mb-3">
                  ABUNDALI S.A de C.V., presenta la siguiente Circular Oferta de Franquicia referente al Sistema de Franquicia de <strong className="text-sb-green-700">"Salad Bowl"®</strong>, en cumplimiento con el marco legal establecido en:
                </p>
                <div className="space-y-2">
                  <div className="bg-white rounded-lg p-4 border-l-4 border-sb-green-700">
                    <p className="text-sm font-semibold text-sb-green-900 mb-1">Artículo 142 - Ley de Propiedad Industrial</p>
                    <p className="text-xs text-gray-700">Define el concepto de franquicia y sus elementos constitutivos</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border-l-4 border-sb-teal-700">
                    <p className="text-sm font-semibold text-sb-teal-900 mb-1">Artículo 65 - Reglamento de la LPI</p>
                    <p className="text-xs text-gray-700">Establece los requisitos de información técnica, económica y financiera</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Capítulo 1 */}
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
            <div className="bg-sb-green-700 p-6 text-white">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center font-black text-xl">
                  1
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Franquiciante</h2>
                  <p className="text-sb-green-50 text-sm">Información de la empresa</p>
                </div>
              </div>
            </div>
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-sb-green-50 rounded-xl p-6 border-2 border-sb-green-200">
                  <div className="flex items-center gap-2 mb-3">
                    <svg className="w-6 h-6 text-sb-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <h3 className="font-bold text-sb-green-900">Razón Social</h3>
                  </div>
                  <p className="text-gray-700">ABUNDALI S.A de C.V.</p>
                </div>
                <div className="bg-sb-teal-50 rounded-xl p-6 border-2 border-sb-teal-200">
                  <div className="flex items-center gap-2 mb-3">
                    <svg className="w-6 h-6 text-sb-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h3 className="font-bold text-sb-teal-900">Constitución</h3>
                  </div>
                  <p className="text-gray-700 text-sm">Escritura 49620, Vol. 935 - 26 Abril 2024</p>
                  <p className="text-gray-600 text-xs mt-1">Notaría Pública 31, Puebla</p>
                </div>
                <div className="bg-sb-green-50 rounded-xl p-6 border-2 border-sb-green-200">
                  <div className="flex items-center gap-2 mb-3">
                    <svg className="w-6 h-6 text-sb-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <h3 className="font-bold text-sb-green-900">Domicilio Fiscal</h3>
                  </div>
                  <p className="text-gray-700 text-sm">Blvd. Atlixcayotl 1504 Int B5</p>
                  <p className="text-gray-600 text-xs">San Andrés Cholula, Puebla - CP 72820</p>
                </div>
                <div className="bg-sb-teal-50 rounded-xl p-6 border-2 border-sb-teal-200">
                  <div className="flex items-center gap-2 mb-3">
                    <svg className="w-6 h-6 text-sb-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <h3 className="font-bold text-sb-teal-900">Objeto Social</h3>
                  </div>
                  <p className="text-gray-700 text-sm">Desarrollo de franquicias, comercialización de alimentos y bebidas</p>
                </div>
              </div>
            </div>
          </div>

          {/* Capítulo 2 */}
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
            <div className="bg-sb-teal-700 p-6 text-white">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center font-black text-xl">
                  2
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Descripción de la Franquicia</h2>
                  <p className="text-sb-teal-50 text-sm">Concepto y modelo de negocio</p>
                </div>
              </div>
            </div>
            <div className="p-8">
              <div className="bg-sb-teal-50 rounded-2xl p-6 border-2 border-sb-teal-200 mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">¿Qué es Salad Bowl®?</h3>
                <p className="text-gray-800 leading-relaxed">
                  Un concepto dinámico que parte de una extensa barra de ingredientes, donde los clientes pueden elegir entre más de 50 opciones para combinar su BOWL.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white rounded-xl p-6 border-l-4 border-sb-green-700">
                  <h4 className="font-bold text-sb-green-900 mb-2">Slogan</h4>
                  <p className="text-lg text-gray-800 italic">"El platillo perfecto lo creas TÚ"</p>
                </div>
                <div className="bg-white rounded-xl p-6 border-l-4 border-sb-teal-700">
                  <h4 className="font-bold text-sb-teal-900 mb-2">Diferenciador</h4>
                  <p className="text-gray-700 text-sm">Experiencias dinámicas con ingredientes nutritivos, frescos y precios accesibles</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-sb-green-50 rounded-xl p-6 border-2 border-sb-green-200">
                  <div className="flex items-center gap-2 mb-3">
                    <svg className="w-6 h-6 text-sb-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <h4 className="font-bold text-sb-green-900">Misión</h4>
                  </div>
                  <p className="text-gray-700 text-sm">Construir una cultura saludable para mejorar la calidad de vida de las personas.</p>
                </div>
                <div className="bg-sb-teal-50 rounded-xl p-6 border-2 border-sb-teal-200">
                  <div className="flex items-center gap-2 mb-3">
                    <svg className="w-6 h-6 text-sb-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    <h4 className="font-bold text-sb-teal-900">Visión</h4>
                  </div>
                  <p className="text-gray-700 text-sm">Ser marca líder en comida rápida saludable, reconocida por su compromiso social.</p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
                <h4 className="font-bold text-gray-900 mb-4">Valores que nos definen</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {['Respeto', 'Honestidad', 'Amabilidad', 'Motivación', 'Compromiso', 'Responsabilidad'].map((valor, i) => (
                    <div key={i} className="flex items-center gap-2 bg-sb-green-50 rounded-lg p-3">
                      <div className="w-2 h-2 bg-sb-green-700 rounded-full"></div>
                      <span className="text-sm text-gray-800">{valor}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Capítulo 3 */}
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
            <div className="bg-sb-green-700 p-6 text-white">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center font-black text-xl">
                  3
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Antigüedad</h2>
                  <p className="text-sb-green-50 text-sm">Historia y trayectoria</p>
                </div>
              </div>
            </div>
            <div className="p-8">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-sb-green-50 rounded-xl p-6 border-2 border-sb-green-200 text-center">
                  <div className="text-4xl font-black text-sb-green-700 mb-2">14</div>
                  <p className="text-gray-700 font-semibold">Años de experiencia</p>
                </div>
                <div className="bg-sb-teal-50 rounded-xl p-6 border-2 border-sb-teal-200 text-center">
                  <div className="text-4xl font-black text-sb-teal-700 mb-2">2010</div>
                  <p className="text-gray-700 font-semibold">Año de fundación</p>
                  <p className="text-xs text-gray-600 mt-1">8 de Enero</p>
                </div>
                <div className="bg-sb-green-50 rounded-xl p-6 border-2 border-sb-green-200 text-center">
                  <div className="text-4xl font-black text-sb-green-700 mb-2">3</div>
                  <p className="text-gray-700 font-semibold">Unidades operando</p>
                </div>
              </div>
              <div className="mt-6 bg-white rounded-xl p-6 border-2 border-gray-200">
                <h4 className="font-bold text-gray-900 mb-3">Sucursales</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-3">
                    <div className="w-8 h-8 bg-sb-green-700 rounded-full flex items-center justify-center text-white text-xs font-bold">1</div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">Centro Comercial Vía San Ángel</p>
                      <p className="text-xs text-gray-600">San Andrés Cholula - Abierta desde 2010</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-3">
                    <div className="w-8 h-8 bg-sb-teal-700 rounded-full flex items-center justify-center text-white text-xs font-bold">2</div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">Calzada de Zavaleta</p>
                      <p className="text-xs text-gray-600">Puebla - Abierta desde 2012</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Capítulo 4 */}
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
            <div className="bg-sb-teal-700 p-6 text-white">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center font-black text-xl">
                  4
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Propiedad Intelectual</h2>
                  <p className="text-sb-teal-50 text-sm">Marcas y derechos registrados</p>
                </div>
              </div>
            </div>
            <div className="p-8">
              <div className="bg-sb-teal-50 rounded-2xl p-6 border-2 border-sb-teal-200 mb-6">
                <div className="flex items-start gap-3">
                  <svg className="w-8 h-8 text-sb-teal-700 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <div>
                    <p className="text-gray-800 leading-relaxed mb-2">
                      ABUNDALI S.A DE C.V. es licenciataria de las marcas registradas en el Instituto Mexicano de la Propiedad Industrial (IMPI).
                    </p>
                    <p className="text-sm text-gray-700">
                      <strong>Registro IMPI:</strong> 1138791
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 border-l-4 border-sb-green-700">
                  <h4 className="font-semibold text-sb-green-900 mb-2">En trámite de registro</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Manual de Operaciones</li>
                    <li>• Programas de Capacitación</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-4 border-l-4 border-sb-teal-700">
                  <h4 className="font-semibold text-sb-teal-900 mb-2">Derechos protegidos</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Marcas registradas</li>
                    <li>• Tecnología y sistemas</li>
                    <li>• Diseños gráficos</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Capítulo 5 */}
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
            <div className="bg-sb-green-700 p-6 text-white">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center font-black text-xl">
                  5
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Inversión y Pagos</h2>
                  <p className="text-sb-green-50 text-sm">Estructura financiera</p>
                </div>
              </div>
            </div>
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-sb-green-700 text-white rounded-2xl p-6">
                  <div className="text-4xl font-black mb-2">$449,000</div>
                  <p className="text-sb-green-50 text-sm">Cuota Inicial de Franquicia</p>
                  <p className="text-xs text-sb-green-100 mt-1">+ IVA, pago a la firma de contrato</p>
                </div>
                <div className="bg-sb-teal-700 text-white rounded-2xl p-6">
                  <div className="text-4xl font-black mb-2">4%</div>
                  <p className="text-sb-teal-50 text-sm">Regalías sobre ventas netas</p>
                  <p className="text-xs text-sb-teal-100 mt-1">3 meses de periodo de gracia</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-white rounded-lg p-4 border-2 border-sb-green-200">
                  <h4 className="font-semibold text-gray-900 mb-2">Mercadotecnia Corporativa</h4>
                  <p className="text-2xl font-bold text-sb-green-700">1%</p>
                  <p className="text-xs text-gray-600">sobre ventas netas</p>
                </div>
                <div className="bg-white rounded-lg p-4 border-2 border-sb-teal-200">
                  <h4 className="font-semibold text-gray-900 mb-2">Mercadotecnia Local</h4>
                  <p className="text-2xl font-bold text-sb-teal-700">1%</p>
                  <p className="text-xs text-gray-600">sobre ventas netas</p>
                </div>
              </div>

              <div className="bg-sb-green-50 rounded-xl p-6 border-l-4 border-sb-green-700">
                <h4 className="font-bold text-sb-green-900 mb-3">Fechas de pago</h4>
                <p className="text-gray-700 text-sm">Las regalías y aportaciones se pagan los días <strong>1 y 16 de cada mes</strong>. Si caen en día feriado, el pago procede el siguiente día hábil.</p>
              </div>
            </div>
          </div>

          {/* Capítulo 6 */}
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
            <div className="bg-sb-teal-700 p-6 text-white">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center font-black text-xl">
                  6
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Asistencia y Servicios</h2>
                  <p className="text-sb-teal-50 text-sm">Soporte del franquiciante</p>
                </div>
              </div>
            </div>
            <div className="p-8">
              <div className="space-y-4">
                {[
                  { title: 'Transferencia de tecnología', desc: 'Sistema completo de operación de Salad Bowl®' },
                  { title: 'Visitas y supervisión', desc: 'Aproximadamente 1 vez al mes vía presencial o zoom' },
                  { title: 'Manuales de operación', desc: 'Entrega de manuales necesarios para el funcionamiento' },
                  { title: 'Capacitación inicial', desc: 'Para franquiciatario y personal operativo en unidad funcional' },
                  { title: 'Capacitación continua', desc: 'En innovaciones y nuevos desarrollos sin costo' },
                  { title: 'Asesoría pre-apertura', desc: 'Soporte en actividades previas al lanzamiento' }
                ].map((item, i) => (
                  <div key={i} className={`flex items-start gap-3 ${i % 2 === 0 ? 'bg-sb-green-50' : 'bg-sb-teal-50'} rounded-lg p-4 border-l-4 ${i % 2 === 0 ? 'border-sb-green-700' : 'border-sb-teal-700'}`}>
                    <div className={`w-8 h-8 ${i % 2 === 0 ? 'bg-sb-green-700' : 'bg-sb-teal-700'} rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0`}>
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm">{item.title}</h4>
                      <p className="text-xs text-gray-700 mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 bg-white rounded-xl p-6 border-2 border-gray-200">
                <p className="text-sm text-gray-700">
                  <strong className="text-gray-900">Importante:</strong> El éxito depende del trabajo, capacidad y diligencia del franquiciatario, así como su apego a procesos y estándares del sistema.
                </p>
              </div>
            </div>
          </div>

          {/* Capítulo 7-8-9: Zona, Subfranquicias y Confidencialidad */}
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
            <div className="bg-sb-green-700 p-6 text-white">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center font-black text-xl">
                  7-9
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Territorio y Confidencialidad</h2>
                  <p className="text-sb-green-50 text-sm">Zona de operación y protección de información</p>
                </div>
              </div>
            </div>
            <div className="p-8">
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="bg-sb-green-50 rounded-xl p-6 border-2 border-sb-green-200">
                  <div className="flex items-center gap-2 mb-3">
                    <svg className="w-6 h-6 text-sb-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                    <h3 className="font-bold text-sb-green-900">Cap. 7: Zona</h3>
                  </div>
                  <p className="text-sm text-gray-700">Territorio exclusivo sin contraponerse con otras unidades del sistema</p>
                </div>
                <div className="bg-sb-teal-50 rounded-xl p-6 border-2 border-sb-teal-200">
                  <div className="flex items-center gap-2 mb-3">
                    <svg className="w-6 h-6 text-sb-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                    </svg>
                    <h3 className="font-bold text-sb-teal-900">Cap. 8: Subfranquicias</h3>
                  </div>
                  <p className="text-sm text-gray-700">NO se permite subfranquiciar ni sublicenciar las marcas y tecnología</p>
                </div>
                <div className="bg-sb-green-50 rounded-xl p-6 border-2 border-sb-green-200">
                  <div className="flex items-center gap-2 mb-3">
                    <svg className="w-6 h-6 text-sb-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    <h3 className="font-bold text-sb-green-900">Cap. 9: Confidencialidad</h3>
                  </div>
                  <p className="text-sm text-gray-700">Obligación de no divulgar información confidencial durante y 3 años después</p>
                </div>
              </div>
            </div>
          </div>

          {/* Capítulo 10: Obligaciones y Causas de Terminación */}
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
            <div className="bg-sb-teal-700 p-6 text-white">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center font-black text-xl">
                  10
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Causales de Terminación</h2>
                  <p className="text-sb-teal-50 text-sm">Situaciones que pueden terminar el contrato</p>
                </div>
              </div>
            </div>
            <div className="p-8">
              <div className="bg-sb-teal-50 rounded-2xl p-6 border-2 border-sb-teal-200 mb-6">
                <p className="text-gray-800 mb-3">
                  <strong>El contrato puede terminar anticipadamente sin notificación previa en las siguientes situaciones:</strong>
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  'Declaración de insolvencia del franquiciatario',
                  'Nombramiento de síndico o administrador judicial',
                  'Cesión general de bienes a acreedores',
                  'Embargo que afecte la operación',
                  'Falta de pago por 3 meses consecutivos',
                  'Cambio de control sin autorización',
                  'Cambio de ubicación sin aprobación',
                  'Libros o información falsa',
                  'Multas reincidentes por leyes de salud',
                  'Cesión no autorizada de la franquicia',
                  'Cierre por 7 días consecutivos',
                  'Venta de productos no autorizados',
                  'Operación de negocio competidor',
                  'Incumplimiento de manuales',
                  'Mala reputación documentada',
                  'Uso indebido de marcas',
                  'Sistemas fuera de línea +15 días'
                ].map((causal, i) => (
                  <div key={i} className="flex items-start gap-2 bg-white rounded-lg p-3 border-l-4 border-sb-teal-700">
                    <svg className="w-5 h-5 text-sb-teal-700 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <span className="text-sm text-gray-800">{causal}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Capítulo 11: Competencia Desleal */}
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
            <div className="bg-sb-green-700 p-6 text-white">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center font-black text-xl">
                  11
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Competencia Desleal</h2>
                  <p className="text-sb-green-50 text-sm">Restricciones de competencia</p>
                </div>
              </div>
            </div>
            <div className="p-8">
              <div className="bg-sb-green-50 rounded-2xl p-6 border-2 border-sb-green-200">
                <div className="flex items-start gap-3">
                  <svg className="w-8 h-8 text-sb-green-700 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                  </svg>
                  <div>
                    <h4 className="font-bold text-sb-green-900 mb-2">Prohibiciones</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• El franquiciatario no puede competir con Salad Bowl® bajo ninguna circunstancia</li>
                      <li>• No se permite establecer negocios con productos iguales o similares</li>
                      <li>• Los familiares en primer grado también están sujetos a esta restricción</li>
                      <li>• No usar gráficos o imágenes que creen confusión con Salad Bowl®</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Capítulo 12: Proyecciones Financieras */}
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
            <div className="bg-sb-teal-700 p-6 text-white">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center font-black text-xl">
                  12
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Proyecciones Financieras</h2>
                  <p className="text-sb-teal-50 text-sm">Inversión estimada y retorno</p>
                </div>
              </div>
            </div>
            <div className="p-8">
              <div className="bg-sb-teal-50 rounded-2xl p-6 border-2 border-sb-teal-200 mb-6">
                <p className="text-sm text-gray-700">
                  <strong>Nota:</strong> Los parámetros dependen de la ubicación, mercado, eficiencia operativa y condiciones externas. Proyecciones en fase madura de penetración.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl p-6 border-2 border-sb-green-200">
                  <h3 className="text-2xl font-bold text-sb-green-700 mb-4">Restaurante</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Superficie</p>
                      <p className="text-xl font-bold text-gray-900">80 - 130 m²</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Inversión Estimada</p>
                      <p className="text-2xl font-bold text-sb-green-700">$1,200,000 - $1,500,000</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Retorno sobre Inversión</p>
                      <p className="text-2xl font-bold text-sb-green-700">35% - 45% anual</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-2xl p-6 border-2 border-sb-teal-200">
                  <h3 className="text-2xl font-bold text-sb-teal-700 mb-4">Food Court</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Superficie</p>
                      <p className="text-xl font-bold text-gray-900">40 - 60 m²</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Inversión Estimada</p>
                      <p className="text-2xl font-bold text-sb-teal-700">$900,000 - $1,200,000</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Retorno sobre Inversión</p>
                      <p className="text-2xl font-bold text-sb-teal-700">35% - 45% anual</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Resumen Final */}
          <div className="bg-sb-green-700 rounded-3xl p-8 text-white text-center">
            <h3 className="text-2xl font-black mb-4">Documento Oficial</h3>
            <p className="text-sb-green-50 leading-relaxed max-w-3xl mx-auto">
              Esta Circular Oferta de Franquicia se extiende en cumplimiento con la Ley de Propiedad Industrial y su Reglamento. 
              Todo candidato a franquiciatario debe leer y comprender completamente este documento antes de proceder con la firma del contrato.
            </p>
          </div>

        </div>
      </div>
    </DashboardLayout>
  );
}
