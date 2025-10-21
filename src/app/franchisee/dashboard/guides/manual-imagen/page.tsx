import { redirect } from 'next/navigation';
import { getCurrentUser } from '@/lib/session';
import DashboardLayout from '@/components/admin/DashboardLayout';
import Link from 'next/link';
import Image from 'next/image';

export default async function ManualImagenPage() {
  const user = await getCurrentUser();
  
  if (!user || user.role !== 'FRANCHISEE') {
    redirect('/admin/login');
  }

  return (
    <DashboardLayout userEmail={user.email} userRole={user.role}>
      <div className="max-w-6xl mx-auto">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link href="/franchisee/dashboard/guides" className="text-sb-green-700 hover:text-sb-green-600 font-medium">
            ← Volver a Guías
          </Link>
        </div>

        {/* Header */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-sb-green-600 to-sb-green-500 rounded-3xl mb-6 shadow-lg">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Manual de Imagen</h1>
          <p className="text-xl text-gray-600">Lineamientos oficiales de identidad visual</p>
        </div>

        {/* Content */}
        <div className="space-y-8">
          {/* Logotipo Principal */}
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100">
            <div className="bg-gradient-to-r from-sb-green-600 to-sb-green-500 p-8 text-white">
              <h2 className="text-3xl font-bold mb-2">Uso de Logotipo Salad Bowl</h2>
              <p className="text-sb-green-50">Elemento principal de nuestra identidad visual</p>
            </div>
            
            <div className="p-8">
              {/* Logo Principal SVG sobre fondo verde */}
              <div className="bg-sb-green-700 rounded-2xl p-12 mb-6 flex items-center justify-center">
                <Image 
                  src="/salad-logo.svg"
                  alt="Logotipo principal Salad Bowl"
                  width={500}
                  height={300}
                  className="max-w-full h-auto"
                />
              </div>

              {/* Logo en colores sobre fondo claro */}
              <div className="bg-gray-50 rounded-2xl p-12 mb-8 flex items-center justify-center">
                <Image 
                  src="/franquicias/manual-de-imagen/salad-logo-contraste.png"
                  alt="Logotipo Salad Bowl en colores"
                  width={500}
                  height={300}
                  className="max-w-full h-auto"
                />
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  El logotipo de Salad Bowl es uno de los principales elementos que representan nuestra marca y debe utilizarse siempre con <strong className="text-sb-green-700">coherencia, respeto y consistencia visual</strong>.
                </p>

                <div className="bg-sb-green-50 rounded-xl p-6 border-l-4 border-sb-green-600 mb-6">
                  <p className="text-gray-800 font-medium mb-0">
                    El uso del logo original es <strong className="text-sb-green-700">obligatorio</strong> en todas las aplicaciones de marca, ya sea en materiales impresos, digitales, uniformes, señalización o empaques.
                  </p>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  No está permitido modificar su forma, proporciones, colores, tipografía ni agregar sombras, bordes u otros efectos.
                </p>
              </div>
            </div>
          </div>

          {/* Variación Monocromática */}
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Variación Permitida</h2>
              
              <div className="bg-[#10584a] rounded-2xl p-12 mb-6 flex items-center justify-center">
                <Image 
                  src="/franquicias/manual-de-imagen/logo-alterno.jpg"
                  alt="Logo Salad Bowl versión blanca"
                  width={400}
                  height={240}
                  className="max-w-full h-auto"
                />
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-sb-green-700 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Versión Blanca (Monocromática)</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Debe utilizarse únicamente sobre fondos oscuros o imágenes que dificulten la visibilidad del logotipo original. 
                      El logo debe conservar exactamente las mismas proporciones y disposición que el original.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Paleta Cromática */}
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Paleta Cromática Corporativa</h2>
              
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 mb-6">
                <Image 
                  src="/franquicias/manual-de-imagen/paleta-cromatica.jpg"
                  alt="Paleta cromática Salad Bowl"
                  width={1000}
                  height={400}
                  className="max-w-full h-auto rounded-xl"
                />
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded-xl p-6">
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <p className="text-gray-800 font-medium">
                    Los colores corporativos son parte fundamental de nuestra identidad. Utiliza únicamente los Pantones oficiales especificados en la paleta.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Restricciones */}
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100">
            <div className="bg-red-50 p-8 border-b-2 border-red-200">
              <h2 className="text-2xl font-bold text-red-900 mb-2">Uso No Permitido</h2>
              <p className="text-red-700">En ningún caso se permite lo siguiente</p>
            </div>
            
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex gap-3 p-4 bg-red-50 rounded-xl border border-red-200">
                  <svg className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-gray-800">Cambiar los colores corporativos</span>
                </div>

                <div className="flex gap-3 p-4 bg-red-50 rounded-xl border border-red-200">
                  <svg className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-gray-800">Alterar la orientación o el acomodo de los elementos</span>
                </div>

                <div className="flex gap-3 p-4 bg-red-50 rounded-xl border border-red-200">
                  <svg className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-gray-800">Usar el logo sobre fondos que generen poca legibilidad</span>
                </div>

                <div className="flex gap-3 p-4 bg-red-50 rounded-xl border border-red-200">
                  <svg className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-gray-800">Encerrarlo en marcos o formas no aprobadas</span>
                </div>
              </div>
            </div>
          </div>

          {/* Compromiso Final */}
          <div className="bg-gradient-to-br from-sb-green-600 to-sb-teal-600 rounded-3xl shadow-xl p-10 text-center text-white">
            <div className="max-w-3xl mx-auto">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <p className="text-xl font-medium leading-relaxed">
                El cumplimiento de estas normas garantiza la <strong>uniformidad, reconocimiento y profesionalismo</strong> de la marca Salad Bowl en todas sus sucursales y franquicias.
              </p>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
