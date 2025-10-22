import { redirect } from 'next/navigation';
import { getCurrentUser } from '@/lib/session';
import DashboardLayout from '@/components/admin/DashboardLayout';
import GuideBreadcrumb from '@/components/GuideBreadcrumb';
import ContactDisplay from '@/components/ContactDisplay';

export default async function ContratoPage() {
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
          { label: 'Contrato de Franquicia', href: '/franchisee/dashboard/guides/contratos-legal/contrato' }
        ]} />

        <div className="mb-12 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-sb-teal-700 rounded-3xl mb-6 shadow-lg">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Contrato de Franquicia</h1>
          <p className="text-xl text-gray-600">Términos y condiciones completos</p>
        </div>

        <div className="space-y-8">
          {/* Botón descarga */}
          <div className="bg-white rounded-3xl shadow-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Descargar Documento Oficial</h3>
            <p className="text-gray-600 mb-6">
              Descarga el Contrato de Franquicia en formato DOCX para revisión offline
            </p>
            <a
              href="/franquicias/contratos/CONTRATO DE FRANQUICIA 2024.docx"
              download
              className="inline-flex items-center gap-3 bg-sb-teal-700 text-white font-bold py-4 px-8 rounded-xl hover:bg-sb-teal-600 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Descargar Contrato (DOCX)
            </a>
          </div>

          {/* Navegación rápida */}
          <div className="bg-white rounded-3xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Navegación del Contrato</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { name: 'Declaraciones', id: 'declaraciones' },
                { name: 'Definiciones', id: 'definiciones' },
                { name: 'Cláusulas 1-10', id: 'clausulas-1' },
                { name: 'Cláusulas 11-20', id: 'clausulas-2' },
                { name: 'Cláusulas 21-31', id: 'clausulas-3' },
                { name: 'Resumen', id: 'resumen' }
              ].map((section, i) => (
                <a
                  key={i}
                  href={`#${section.id}`}
                  className="flex items-center gap-3 p-4 bg-sb-green-50 hover:bg-sb-green-100 rounded-xl border-2 border-sb-green-200 transition-colors"
                >
                  <div className="w-8 h-8 bg-sb-green-700 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    {i + 1}
                  </div>
                  <span className="font-semibold text-gray-900">{section.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Partes del Contrato */}
          <div id="declaraciones" className="bg-sb-teal-50 rounded-3xl p-8 border-2 border-sb-teal-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Partes del Contrato</h2>
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-6 border-l-4 border-sb-teal-700">
                <h3 className="font-bold text-sb-teal-900 mb-2">EL FRANQUICIANTE</h3>
                <p className="text-gray-700">ABUNDALI S.A DE C.V.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border-l-4 border-sb-green-700">
                <h3 className="font-bold text-sb-green-900 mb-2">EL FRANQUICIATARIO</h3>
                <p className="text-gray-700">Persona física que se incorpora al Sistema de Franquicia Salad Bowl®</p>
              </div>
            </div>
          </div>

          {/* Declaración I - Franquiciante */}
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
            <div className="bg-sb-green-700 p-6 text-white">
              <h2 className="text-2xl font-bold">I. Declaración del Franquiciante</h2>
              <p className="text-sb-green-50 text-sm">ABUNDALI S.A DE C.V. declara que:</p>
            </div>
            <div className="p-8 space-y-4">
              {[
                { num: 'I.1', text: 'Es licenciatario de las marcas, nombres comerciales, avisos comerciales, diseños, diseños gráficos, tecnología y patentes del Sistema de Franquicia "Salad Bowl"®' },
                { num: 'I.2', text: 'Las marcas y patentes involucradas se encuentran legalmente protegidas ante el Instituto Mexicano de la Propiedad Industrial' },
                { num: 'I.3', text: 'Tiene amplia experiencia en los negocios de Gastronomía, Industria Alimentaria y Restaurantes' },
                { num: 'I.4', text: 'Ha desarrollado sistemas de operación, administración, calidad y comercialización como propiedad intelectual' }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-sb-green-50 rounded-lg p-4 border-l-4 border-sb-green-700">
                  <div className="w-12 h-12 bg-sb-green-700 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                    {item.num}
                  </div>
                  <p className="text-gray-700 text-sm pt-2">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Declaración II - Franquiciatario */}
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
            <div className="bg-sb-teal-700 p-6 text-white">
              <h2 className="text-2xl font-bold">II. Declaración del Franquiciatario</h2>
              <p className="text-sb-teal-50 text-sm">El candidato a franquiciatario declara que:</p>
            </div>
            <div className="p-8 space-y-4">
              {[
                { num: 'II.1', text: 'Es persona física de nacionalidad mexicana, mayor de edad, con capacidad legal para celebrar el contrato' },
                { num: 'II.2', text: 'Se identifica con pasaporte número [a completar]' },
                { num: 'II.3', text: 'Tiene interés en instalar y operar el Sistema conforme a estándares de imagen, calidad y métodos operativos' },
                { num: 'II.4', text: 'Cuenta con capacidad económica, de trabajo y facultades necesarias para la operación del Restaurante' }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-sb-teal-50 rounded-lg p-4 border-l-4 border-sb-teal-700">
                  <div className="w-12 h-12 bg-sb-teal-700 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 text-sm">
                    {item.num}
                  </div>
                  <p className="text-gray-700 text-sm pt-2">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Puntos clave del contrato */}
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
            <div className="bg-sb-green-700 p-6 text-white">
              <h2 className="text-2xl font-bold">Puntos Clave del Contrato</h2>
            </div>
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { title: 'Duración', value: '5 años', desc: 'Con posibilidad de renovación' },
                  { title: 'Cuota Inicial', value: '$449,000 MXN', desc: '+ IVA a la firma' },
                  { title: 'Regalías', value: '4%', desc: 'Sobre ventas netas (3 meses de gracia)' },
                  { title: 'Renovación', value: '50%', desc: 'Del pago inicial para renovar' },
                  { title: 'Marketing Corporativo', value: '1%', desc: 'Sobre ventas netas' },
                  { title: 'Marketing Local', value: '1%', desc: 'Sobre ventas netas' }
                ].map((item, i) => (
                  <div key={i} className={`${i % 2 === 0 ? 'bg-sb-green-50 border-sb-green-200' : 'bg-sb-teal-50 border-sb-teal-200'} rounded-xl p-6 border-2`}>
                    <h4 className="text-sm font-semibold text-gray-600 mb-1">{item.title}</h4>
                    <p className={`text-3xl font-black ${i % 2 === 0 ? 'text-sb-green-700' : 'text-sb-teal-700'} mb-2`}>{item.value}</p>
                    <p className="text-xs text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Definiciones Clave */}
          <div id="definiciones" className="bg-white rounded-3xl shadow-lg overflow-hidden">
            <div className="bg-sb-green-700 p-6 text-white">
              <h2 className="text-2xl font-bold">III. Definiciones del Contrato</h2>
              <p className="text-sb-green-50 text-sm">Términos y conceptos principales (33 definiciones)</p>
            </div>
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { term: 'Franquiciante', def: 'Persona moral que otorga el derecho de operar bajo el Sistema Salad Bowl®' },
                  { term: 'Franquiciatario', def: 'Persona física o moral que opera el negocio bajo los términos del contrato' },
                  { term: 'Cuota Inicial', def: '$449,000 MXN + IVA por pertenecer al sistema' },
                  { term: 'Know-How', def: 'Aplicación práctica de la tecnología para "saber hacer las cosas"' },
                  { term: 'Confidencial', def: 'Información de procesos, procedimientos, recetas y sistemas de cómputo' },
                  { term: 'Territorio', def: 'Zona geográfica con límites definidos para operar la franquicia' },
                  { term: 'Ventas Netas', def: 'Ingresos menos descuentos, devoluciones y reembolsos' },
                  { term: 'Manuales Operativos', def: 'Documentos que transmiten tecnología y secretos industriales' }
                ].map((item, i) => (
                  <div key={i} className={`${i % 2 === 0 ? 'bg-sb-green-50 border-sb-green-200' : 'bg-sb-teal-50 border-sb-teal-200'} rounded-xl p-4 border-2`}>
                    <h4 className={`font-bold ${i % 2 === 0 ? 'text-sb-green-900' : 'text-sb-teal-900'} mb-2`}>{item.term}</h4>
                    <p className="text-gray-700 text-sm">{item.def}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 bg-gray-50 rounded-xl p-4 text-center">
                <p className="text-sm text-gray-600">
                  El contrato incluye 33 definiciones completas. <strong className="text-gray-900">Descarga el documento</strong> para revisar todas las definiciones.
                </p>
              </div>
            </div>
          </div>

          {/* Cláusulas Principales */}
          <div id="clausulas-1" className="bg-white rounded-3xl shadow-lg overflow-hidden">
            <div className="bg-sb-teal-700 p-6 text-white">
              <h2 className="text-2xl font-bold">Cláusulas del Contrato (1-10)</h2>
              <p className="text-sb-teal-50 text-sm">Términos y obligaciones principales</p>
            </div>
            <div className="p-8 space-y-6">
              {[
                { num: '1', title: 'Descripción del Sistema', desc: 'Objeto, productos y servicios. El sistema transfiere tecnología y know-how para operar restaurantes especializados en comida rápida saludable.' },
                { num: '2', title: 'Propiedad Intelectual', desc: 'Sublicencia de uso de marcas, nombres comerciales y recetas. El franquiciante se reserva los derechos de autor.' },
                { num: '3', title: 'Transferencia de Tecnología', desc: 'Asesoría operativa, recursos humanos, sistemas de información y documentación del know-how.' },
                { num: '4', title: 'Ubicación', desc: 'Territorio específico por restaurante. Requiere autorización escrita para cambios de ubicación.' },
                { num: '5', title: 'Soporte del Franquiciante', desc: 'Visitas mensuales, auditorías operativas y juntas periódicas vía presencial o zoom.' },
                { num: '6', title: 'Duración y Renovación', desc: '5 años de vigencia. Renovación por periodo igual con solicitud 6 meses antes y pago del 50% de cuota inicial.' },
                { num: '7', title: 'Mercadotecnia', desc: '1% ventas netas para fondo corporativo, 1% para marketing local. Requiere autorización previa de campañas.' },
                { num: '8', title: 'Comercialización', desc: 'Precios fijados por franquiciante. Solo productos autorizados. Capacitación en técnicas de venta.' },
                { num: '9', title: 'Territorio', desc: 'Zona exclusiva establecida. Vigilancia de mercado y comunicación de competencia emergente.' },
                { num: '10', title: 'Pagos', desc: 'Cuota inicial $449,000 + IVA. Regalías 4% sobre ventas netas (3 meses de gracia). Pagos días 1 y 16 de cada mes.' }
              ].map((item, i) => (
                <div key={i} className={`${i % 2 === 0 ? 'bg-sb-teal-50' : 'bg-sb-green-50'} rounded-xl p-6 border-l-4 ${i % 2 === 0 ? 'border-sb-teal-700' : 'border-sb-green-700'}`}>
                  <div className="flex items-start gap-4">
                    <div className={`w-16 h-16 ${i % 2 === 0 ? 'bg-sb-teal-700' : 'bg-sb-green-700'} rounded-full flex items-center justify-center text-white font-black text-xl flex-shrink-0`}>
                      {item.num}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg mb-2">{item.title}</h4>
                      <p className="text-gray-700 text-sm">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cláusulas 11-20 */}
          <div id="clausulas-2" className="bg-white rounded-3xl shadow-lg overflow-hidden">
            <div className="bg-sb-green-700 p-6 text-white">
              <h2 className="text-2xl font-bold">Cláusulas del Contrato (11-20)</h2>
              <p className="text-sb-green-50 text-sm">Obligaciones operativas y legales</p>
            </div>
            <div className="p-8 space-y-6">
              {[
                { num: '11', title: 'Independencia', desc: 'Ambas partes son totalmente independientes. Cada uno es responsable de su personal y obligaciones fiscales.' },
                { num: '12', title: 'Visitas de Soporte', desc: 'Acceso para supervisión y auditoría. Gastos de auditorías extraordinarias a cargo del franquiciatario.' },
                { num: '13', title: 'Observancia del Sistema', desc: 'Cumplimiento de manuales, estándares de calidad, limpieza y sanitización. No negar productos de la carta.' },
                { num: '14', title: 'Confidencialidad', desc: 'Obligación de no revelar información confidencial durante contrato y 3 años después.' },
                { num: '15', title: 'Competencia Desleal', desc: 'Prohibición de competir con Salad Bowl® y establecimientos similares. Respeto del territorio asignado.' },
                { num: '16', title: 'Terminación', desc: 'Devolución de manuales y materiales en 30 días a la terminación del contrato.' },
                { num: '17', title: 'Causas de Rescisión', desc: 'Insolvencia, embargo, cambio de ubicación sin autorización, información falsa, cierre por 7 días, entre otras.' },
                { num: '18', title: 'Propiedad Intelectual', desc: 'Sublicencia de marcas por unidad. No adquisición de derechos sobre marcas, nombres o patentes.' },
                { num: '19', title: 'Imagen Corporativa', desc: 'Mantenimiento de imagen según manual. Prohibición de cambios sin autorización. Señalética aprobada.' },
                { num: '20', title: 'Proveedores', desc: 'Uso de productos y materias primas de proveedores autorizados. No alterar recetas. No productos caducados.' }
              ].map((item, i) => (
                <div key={i} className={`${i % 2 === 0 ? 'bg-sb-green-50' : 'bg-sb-teal-50'} rounded-xl p-6 border-l-4 ${i % 2 === 0 ? 'border-sb-green-700' : 'border-sb-teal-700'}`}>
                  <div className="flex items-start gap-4">
                    <div className={`w-16 h-16 ${i % 2 === 0 ? 'bg-sb-green-700' : 'bg-sb-teal-700'} rounded-full flex items-center justify-center text-white font-black text-xl flex-shrink-0`}>
                      {item.num}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg mb-2">{item.title}</h4>
                      <p className="text-gray-700 text-sm">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cláusulas 21-31 */}
          <div id="clausulas-3" className="bg-white rounded-3xl shadow-lg overflow-hidden">
            <div className="bg-sb-teal-700 p-6 text-white">
              <h2 className="text-2xl font-bold">Cláusulas del Contrato (21-31)</h2>
              <p className="text-sb-teal-50 text-sm">Disposiciones finales y administrativas</p>
            </div>
            <div className="p-8 space-y-6">
              {[
                { num: '21', title: 'Faltas e Infracciones', desc: 'Clasificación: Muy Graves (rescisión), Graves (inmediatas), Importantes (plazo), Recomendadas (opcionales).' },
                { num: '22', title: 'Sistemas Administrativos', desc: 'Uso de sistemas informáticos requeridos. Conservar registros por 5 años. Información periódica al franquiciante.' },
                { num: '23', title: 'Capacitación', desc: 'Inicial previo a apertura. Personal capacitado en sucursales del franquiciante. Cursos continuos sin costo.' },
                { num: '24', title: 'Invenciones', desc: 'Innovaciones y mejoras se transmiten al franquiciante. Nuevos productos disponibles una vez probados.' },
                { num: '25', title: 'Cesión de Derechos', desc: 'Prohibida transferencia sin autorización escrita. Cambio de control es causa de rescisión.' },
                { num: '26', title: 'Subfranquicias', desc: 'Prohibido subfranquiciar bajo cualquier circunstancia. No sublicenciar marcas ni tecnología.' },
                { num: '27', title: 'Garantías', desc: 'Fianzas por pagos pendientes, regalías, devolución de manuales y observancia de confidencialidad.' },
                { num: '28', title: 'Transferencia', desc: 'Posible con autorización. Sin adeudos. Cuota de transferencia 20% de cuota inicial vigente.' },
                { num: '29', title: 'Financiamiento', desc: 'El franquiciante no otorga financiamiento ni actúa como aval. Riesgos con proveedores son del franquiciatario.' },
                { num: '30', title: 'Legislación', desc: 'Apego a leyes mexicanas para giros comerciales e industriales de restaurantes.' },
                { num: '31', title: 'Relación entre Contratos', desc: 'Terminación de este contrato cancela automáticamente otros contratos con el grupo de empresas.' }
              ].map((item, i) => (
                <div key={i} className={`${i % 2 === 0 ? 'bg-sb-teal-50' : 'bg-sb-green-50'} rounded-xl p-6 border-l-4 ${i % 2 === 0 ? 'border-sb-teal-700' : 'border-sb-green-700'}`}>
                  <div className="flex items-start gap-4">
                    <div className={`w-16 h-16 ${i % 2 === 0 ? 'bg-sb-teal-700' : 'bg-sb-green-700'} rounded-full flex items-center justify-center text-white font-black text-xl flex-shrink-0`}>
                      {item.num}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg mb-2">{item.title}</h4>
                      <p className="text-gray-700 text-sm">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Firmas */}
          <div className="bg-sb-green-700 rounded-3xl p-8 text-white">
            <h3 className="text-2xl font-black mb-4 text-center">Sección de Firmas</h3>
            <p className="text-sb-green-50 mb-6 text-center">
              Leído por las partes y enterados de su valor y fuerza legal, firman este Contrato de Franquicia.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-white/20 rounded-xl p-6 text-center">
                <div className="h-24 border-b-2 border-white/50 mb-4"></div>
                <p className="font-bold">FRANQUICIANTE</p>
                <p className="text-sm text-sb-green-100">ABUNDALI S.A DE C.V</p>
              </div>
              <div className="bg-white/20 rounded-xl p-6 text-center">
                <div className="h-24 border-b-2 border-white/50 mb-4"></div>
                <p className="font-bold">FRANQUICIATARIO</p>
                <p className="text-sm text-sb-green-100">Nombre completo</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="bg-white/20 rounded-xl p-6 text-center">
                <div className="h-20 border-b-2 border-white/50 mb-4"></div>
                <p className="font-bold text-sm">TESTIGO 1</p>
              </div>
              <div className="bg-white/20 rounded-xl p-6 text-center">
                <div className="h-20 border-b-2 border-white/50 mb-4"></div>
                <p className="font-bold text-sm">TESTIGO 2</p>
              </div>
            </div>
          </div>

          {/* Contacto para dudas */}
          <div className="bg-white rounded-3xl shadow-lg p-8 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-4">¿Dudas sobre el contrato?</h3>
            <p className="text-gray-600 mb-6">
              Para cualquier consulta sobre términos, cláusulas o condiciones del contrato, 
              contacta directamente con el área legal de Salad Bowl.
            </p>
            <ContactDisplay type="LEGAL" />
          </div>

        </div>
      </div>
    </DashboardLayout>
  );
}
