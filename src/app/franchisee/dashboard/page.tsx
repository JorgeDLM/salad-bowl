import { redirect } from 'next/navigation';
import { getCurrentUser } from '@/lib/session';
import DashboardLayout from '@/components/admin/DashboardLayout';
import Link from 'next/link';
import Image from 'next/image';

export default async function FranchiseeDashboardPage() {
  const user = await getCurrentUser();
  
  if (!user || user.role !== 'FRANCHISEE') {
    redirect('/admin/login');
  }

  return (
    <DashboardLayout userEmail={user.email} userRole={user.role}>
      <div className="max-w-5xl mx-auto">
        {/* Hero Section con Logo */}
        <div className="relative overflow-hidden rounded-3xl mb-8">
          <div className="absolute inset-0 bg-gradient-to-br from-sb-green-700/95 to-sb-green-600/95 z-10" />
          <div className="relative z-20 px-8 md:px-12 py-16 md:py-20">
            <div className="max-w-3xl">
              <div className="mb-8">
              <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
                Bienvenido a
              </h1>
                <Image
                  src="/salad-logo.svg"
                  alt="Salad Bowl"
                  width={200}
                  height={60}
                  className="drop-shadow-2xl"
                />
              </div>
              <p className="text-xl md:text-2xl text-white/90 font-light">
                Guía completa para franquicias
              </p>
            </div>
          </div>
        </div>

        {/* Mensaje Principal */}
        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-10 mb-8">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Aquí encontrarás todas las guías, herramientas y recursos necesarios para crear y operar con éxito tu sucursal de Salad Bowl.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center p-6 bg-sb-green-50 rounded-xl">
              <div className="w-12 h-12 bg-sb-green-700 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-1">Frescura</h3>
              <p className="text-sm text-gray-600">Ingredientes de calidad</p>
            </div>
            
            <div className="text-center p-6 bg-sb-green-50 rounded-xl">
              <div className="w-12 h-12 bg-sb-green-700 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-1">Higiene</h3>
              <p className="text-sm text-gray-600">Estándares elevados</p>
            </div>
            
            <div className="text-center p-6 bg-sb-green-50 rounded-xl">
              <div className="w-12 h-12 bg-sb-green-700 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-1">Excelencia</h3>
              <p className="text-sm text-gray-600">Cada platillo perfecto</p>
            </div>
          </div>

          <div 
            className="rounded-xl p-8 border-l-4 border-sb-green-700 space-y-5"
            style={{
              backgroundImage: "url('/bg-paper-texture.png')",
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <p className="text-gray-700 leading-relaxed">
              En <span className="font-black text-sb-green-500">Salad</span><span className="font-black text-sb-green-700"> Bowl</span> nuestro principal objetivo es <span className="font-bold text-sb-green-700">mejorar la calidad de vida de las personas</span> a través de la comida saludable, deliciosa y fresca, partiendo de un concepto de comida rápida, balanceada y abundante.
            </p>
            <p className="text-gray-700 leading-relaxed">
              La <span className="font-bold text-sb-green-700">consistencia</span> es la base de nuestro éxito: cada platillo servido debe reflejar la base de nuestros valores de <span className="font-bold text-sb-green-700">frescura, higiene, y excelencia</span>.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Esta guía te ayudará a aplicar cada aspecto del concepto: operación diaria, manejo de alimentos, atención a cliente, marketing e identidad de marca, así como formatos y bitácoras. Siguiendo estos lineamientos, aseguramos la misma experiencia excepcional en todas las unidades de nuestra marca.
            </p>
          </div>
          <div className="mb-6 p-4  rounded">
            <p className="text-sm text-sb-green-700 font-black">
              - Equipo Salad Bowl
            </p>
          </div>
        </div>

        {/* Footer Message */}
        <div className="mt-8 text-center">
          <p className="text-gray-500 italic">
            Sigamos creando un mundo más saludable, un bowl a la vez.
          </p>
          <p className="text-sb-green-700 font-semibold mt-2">
            — Equipo Salad Bowl 🥗
          </p>
        </div>
      </div>
    </DashboardLayout>
  );
}
