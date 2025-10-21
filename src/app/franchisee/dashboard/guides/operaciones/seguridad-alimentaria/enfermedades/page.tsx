import { redirect } from 'next/navigation';
import { getCurrentUser } from '@/lib/session';
import DashboardLayout from '@/components/admin/DashboardLayout';
import Link from 'next/link';

export default async function EnfermedadesPage() {
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
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-gray-700 to-gray-600 rounded-3xl mb-6 shadow-lg">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Enfermedades por Consumo de Alimentos</h1>
          <p className="text-xl text-gray-600">Intoxicación alimentaria</p>
        </div>

        <div className="space-y-8">
          {/* Definición */}
          <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-200">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              También llamada <strong>intoxicación alimentaria</strong>, es una enfermedad causada por el consumo de alimentos contaminados.
            </p>

            {/* Síntomas */}
            <div className="bg-gray-50 rounded-2xl p-6 mb-6 border-l-4 border-gray-600">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Síntomas comunes:</h3>
              <div className="grid md:grid-cols-2 gap-3">
                {['Dolor abdominal', 'Diarrea', 'Fiebre', 'Náuseas y vómito', 'Dolor de cabeza', 'Mareo'].map((symptom, i) => (
                  <div key={i} className="flex gap-3 items-center p-3 bg-white rounded-lg border border-gray-300">
                    <svg className="w-5 h-5 text-gray-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <span className="text-gray-800 font-medium">{symptom}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-600 mt-4 italic">
                Los síntomas pueden variar según la causa y no siempre aparecen de inmediato. El periodo de incubación puede ir desde <strong>30 minutos hasta una semana</strong> después de haber ingerido el alimento contaminado.
              </p>
            </div>
          </div>

          {/* Causas principales */}
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100">
            <div className="bg-gradient-to-r from-sb-teal-700 to-sb-teal-600 p-8 text-white">
              <h2 className="text-3xl font-bold mb-2">Causas principales</h2>
            </div>

            <div className="p-8 space-y-6">
              <p className="text-gray-700">
                Las enfermedades alimentarias suelen ser infecciosas o tóxicas, y son provocadas por bacterias, virus, parásitos o sustancias químicas presentes en alimentos o agua contaminados.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mt-6 mb-4">Tipos de contaminantes:</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-5 bg-sb-teal-50 rounded-xl border-2 border-sb-teal-200">
                  <div className="w-10 h-10 bg-sb-teal-700 rounded-full flex items-center justify-center mb-3">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Físicos</h4>
                  <p className="text-sm text-gray-700">Cabello, fragmentos de vajilla, esmalte de uñas</p>
                </div>

                <div className="p-5 bg-sb-green-50 rounded-xl border-2 border-sb-green-200">
                  <div className="w-10 h-10 bg-sb-green-700 rounded-full flex items-center justify-center mb-3">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Biológicos</h4>
                  <p className="text-sm text-gray-700">Bacterias, virus, parásitos, hongos</p>
                </div>

                <div className="p-5 bg-gray-100 rounded-xl border-2 border-gray-300">
                  <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center mb-3">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Químicos</h4>
                  <p className="text-sm text-gray-700">Productos de limpieza mal almacenados o manipulados</p>
                </div>
              </div>

              {/* Personas de alto riesgo */}
              <div className="bg-gray-50 rounded-2xl p-6 border-l-4 border-gray-600 mt-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Personas de alto riesgo:</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-white rounded-xl border border-gray-200">
                    <h4 className="font-bold text-gray-900 mb-2">Adultos mayores</h4>
                    <p className="text-sm text-gray-700">Su sistema inmune responde más lento</p>
                  </div>
                  <div className="p-4 bg-white rounded-xl border border-gray-200">
                    <h4 className="font-bold text-gray-900 mb-2">Mujeres embarazadas</h4>
                    <p className="text-sm text-gray-700">Los cambios hormonales aumentan la vulnerabilidad</p>
                  </div>
                  <div className="p-4 bg-white rounded-xl border border-gray-200">
                    <h4 className="font-bold text-gray-900 mb-2">Bebés y niños pequeños</h4>
                    <p className="text-sm text-gray-700">Sistema inmune inmaduro</p>
                  </div>
                  <div className="p-4 bg-white rounded-xl border border-gray-200">
                    <h4 className="font-bold text-gray-900 mb-2">Personas con enfermedades crónicas</h4>
                    <p className="text-sm text-gray-700">Como diabetes, cáncer o enfermedades hepáticas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Principales agentes */}
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100">
            <div className="bg-gradient-to-r from-red-700 to-red-600 p-8 text-white">
              <h2 className="text-3xl font-bold mb-2">Principales agentes contaminantes</h2>
            </div>

            <div className="p-8 space-y-6">
              {/* Bacterias */}
              <div className="bg-red-50 rounded-2xl p-6 border-l-4 border-red-600">
                <div className="flex gap-4 items-start mb-3">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Bacterias</h3>
                    <p className="text-gray-700 mb-2">
                      Responsables del <strong className="text-red-700">75% de los casos</strong> de intoxicación. Las más comunes: Salmonella, E. coli, Staphylococcus, Campylobacter y Listeria.
                    </p>
                    <p className="text-sm text-gray-600">
                      No siempre alteran el olor, sabor o aspecto del alimento. Pueden provenir de alimentos crudos, personas, animales o suciedad.
                    </p>
                  </div>
                </div>
              </div>

              {/* Virus */}
              <div className="bg-purple-50 rounded-2xl p-6 border-l-4 border-purple-600">
                <div className="flex gap-4 items-start mb-3">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Virus</h3>
                    <p className="text-gray-700 mb-2">
                      Causan cerca del <strong className="text-purple-700">20% de los casos</strong>. Se transmiten por agua, mariscos o por personas infectadas.
                    </p>
                    <p className="text-sm text-gray-600">
                      Se propagan por manipulación inadecuada, tos o estornudos. Se eliminan con calor, ya que no resisten altas temperaturas.
                    </p>
                  </div>
                </div>
              </div>

              {/* Químicos */}
              <div className="bg-yellow-50 rounded-2xl p-6 border-l-4 border-yellow-600">
                <div className="flex gap-4 items-start mb-3">
                  <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Químicos</h3>
                    <p className="text-gray-700 mb-2">
                      Ocurren con menor frecuencia, pero pueden ser graves.
                    </p>
                    <p className="text-sm text-gray-600">
                      Ejemplo: productos de limpieza en contacto con bebidas o utensilios. <strong>Nunca deben almacenarse cerca ni encima de los alimentos</strong> (mínimo 30 cm de distancia).
                    </p>
                  </div>
                </div>
              </div>

              {/* Fuentes comunes */}
              <div className="bg-gray-50 rounded-2xl p-6 mt-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Fuentes comunes de contaminación:</h3>
                <div className="space-y-3">
                  {[
                    { icon: 'leaf', text: 'Verduras: bacterias del suelo, por eso deben lavarse bien' },
                    { icon: 'users', text: 'Personas: portamos bacterias en la piel, nariz y garganta' },
                    { icon: 'bug', text: 'Roedores: buscan comida y transportan bacterias' },
                    { icon: 'bug', text: 'Insectos: moscas y cucarachas contaminan zonas limpias' },
                    { icon: 'bird', text: 'Aves: como palomas, que portan Salmonella y Campylobacter' }
                  ].map((source, i) => (
                    <div key={i} className="flex gap-3 items-start p-3 bg-white rounded-lg">
                      <svg className="w-5 h-5 text-gray-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-700">{source.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Factores multiplicación */}
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100">
            <div className="bg-gradient-to-r from-sb-green-700 to-sb-teal-700 p-8 text-white">
              <h2 className="text-3xl font-bold mb-2">Factores que favorecen la multiplicación bacteriana</h2>
            </div>

            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 bg-blue-50 rounded-xl border-2 border-blue-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">1</div>
                    <h3 className="text-lg font-bold text-gray-900">Humedad</h3>
                  </div>
                  <p className="text-gray-700">Las bacterias no crecen en productos secos, pero sí cuando aumenta la humedad.</p>
                </div>

                <div className="p-6 bg-green-50 rounded-xl border-2 border-green-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">2</div>
                    <h3 className="text-lg font-bold text-gray-900">Alimento</h3>
                  </div>
                  <p className="text-gray-700">Prefieren productos ricos en proteínas como carne, pescado, huevo, queso, leche y arroz cocido.</p>
                </div>

                <div className="p-6 bg-yellow-50 rounded-xl border-2 border-yellow-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-yellow-600 rounded-full flex items-center justify-center text-white font-bold">3</div>
                    <h3 className="text-lg font-bold text-gray-900">Tiempo</h3>
                  </div>
                  <p className="text-gray-700">Se multiplican rápidamente; en condiciones ideales pueden llegar a millones en pocas horas.</p>
                </div>

                <div className="p-6 bg-red-50 rounded-xl border-2 border-red-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white font-bold">4</div>
                    <h3 className="text-lg font-bold text-gray-900">Temperatura</h3>
                  </div>
                  <p className="text-gray-700 mb-3">Crecen más rápido entre <strong>5°C y 65°C</strong>, conocida como la "zona de peligro".</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 bg-red-600 rounded-full"></span>
                      <span className="text-gray-600">Por encima de 65°C mueren</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 bg-blue-600 rounded-full"></span>
                      <span className="text-gray-600">Por debajo de 5°C se contienen pero no mueren</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
                      <span className="text-gray-600">En congelación "duermen"</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Consecuencias y prevención */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Consecuencias */}
            <div className="bg-red-50 rounded-2xl p-6 border-2 border-red-300">
              <h3 className="text-xl font-bold text-red-900 mb-4">Consecuencias para el negocio</h3>
              <p className="text-gray-700 mb-4">Un brote de intoxicación alimentaria puede causar:</p>
              <div className="space-y-2">
                {[
                  'Riesgos para la salud de los clientes',
                  'Pérdida de ventas y reputación',
                  'Ausencias del personal',
                  'Baja moral del equipo',
                  'Daño en medios de comunicación',
                  'Demandas y gastos legales'
                ].map((item, i) => (
                  <div key={i} className="flex gap-2 items-start">
                    <svg className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-gray-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Medidas preventivas */}
            <div className="bg-sb-green-50 rounded-2xl p-6 border-2 border-sb-green-300">
              <h3 className="text-xl font-bold text-sb-green-900 mb-4">Medidas preventivas clave</h3>
              <div className="space-y-2">
                {[
                  'Lavar manos, utensilios y superficies con frecuencia',
                  'Separar alimentos crudos de los listos para consumir',
                  'Cocinar a temperaturas seguras',
                  'Refrigerar o congelar alimentos perecederos de inmediato',
                  'Descongelar de forma segura, siempre dentro del refrigerador',
                  'Seguir la regla: "Si hay duda, tíralo"'
                ].map((item, i) => (
                  <div key={i} className="flex gap-2 items-start">
                    <svg className="w-5 h-5 text-sb-green-700 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mensaje final */}
          <div className="bg-gradient-to-br from-sb-green-600 to-sb-teal-600 rounded-3xl shadow-xl p-10 text-center text-white">
            <p className="text-xl font-medium leading-relaxed">
              La intoxicación alimentaria es <strong>evitable</strong> si se cumplen buenas prácticas de higiene, manipulación, almacenamiento y cocción. La prevención protege tanto la salud del cliente como la reputación del negocio.
            </p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
