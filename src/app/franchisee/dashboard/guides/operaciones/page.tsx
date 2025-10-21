import { redirect } from 'next/navigation';
import { getCurrentUser } from '@/lib/session';
import DashboardLayout from '@/components/admin/DashboardLayout';
import Link from 'next/link';
import GuideBreadcrumb from '@/components/GuideBreadcrumb';

export default async function OperacionesPage() {
  const user = await getCurrentUser();
  
  if (!user || user.role !== 'FRANCHISEE') {
    redirect('/admin/login');
  }

  const sections = [
    {
      id: 1,
      title: 'Seguridad Alimentaria',
      description: 'Información general, enfermedades, protocolos y factores críticos',
      href: '/franchisee/dashboard/guides/operaciones/seguridad-alimentaria',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      gradient: 'from-sb-green-700 to-sb-green-600',
      bgLight: 'bg-sb-green-50',
    },
    {
      id: 2,
      title: 'Liderazgo y Gestión',
      description: 'Liderazgo efectivo en turno y prioridades principales',
      href: '/franchisee/dashboard/guides/operaciones/liderazgo-gestion',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      gradient: 'from-sb-teal-600 to-sb-teal-500',
      bgLight: 'bg-sb-teal-50',
    },
    {
      id: 3,
      title: 'Limpieza y Mantenimiento',
      description: 'Zonas, programas, estándares y reparaciones',
      href: '/franchisee/dashboard/guides/operaciones/limpieza-mantenimiento',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      gradient: 'from-sb-green-600 to-sb-green-500',
      bgLight: 'bg-sb-green-100',
    },
    {
      id: 4,
      title: 'Proveedores y Almacenamiento',
      description: 'Proveedores, recepción, almacenaje y PEPS',
      href: '/franchisee/dashboard/guides/operaciones/almacenamiento',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
      gradient: 'from-sb-green-500 to-sb-green-400',
      bgLight: 'bg-sb-green-50',
    },
    {
      id: 5,
      title: 'Velocidad en el Servicio',
      description: 'Eficiencia, tiempos y mejores prácticas',
      href: '/franchisee/dashboard/guides/operaciones/velocidad-servicio',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      gradient: 'from-sb-green-600 to-sb-teal-600',
      bgLight: 'bg-sb-green-100',
    },
    {
      id: 6,
      title: 'Reclamos de Clientes',
      description: 'Manejo de quejas y resolución de problemas',
      href: '/franchisee/dashboard/guides/operaciones/reclamos-clientes',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      gradient: 'from-orange-600 to-red-600',
      bgLight: 'bg-orange-100',
    },
    {
      id: 7,
      title: 'Registros Diarios de Control',
      description: 'DCL, documentación y trazabilidad',
      href: '/franchisee/dashboard/guides/operaciones/registros-control',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      gradient: 'from-blue-700 to-blue-600',
      bgLight: 'bg-blue-100',
    },
  ];

  return (
    <DashboardLayout userEmail={user.email} userRole={user.role}>
      <div className="max-w-7xl mx-auto">
        <GuideBreadcrumb items={[
          { label: 'Guías', href: '/franchisee/dashboard/guides' },
          { label: 'Operaciones', href: '/franchisee/dashboard/guides/operaciones' }
        ]} />

        {/* Header */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-sb-green-700 to-sb-teal-600 rounded-3xl mb-6 shadow-lg">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Manual de Operaciones</h1>
          <p className="text-xl text-gray-600">Procesos diarios y estándares operativos</p>
        </div>

        {/* Intro */}
        <div className="bg-gradient-to-br from-sb-green-50 to-white rounded-3xl shadow-lg p-8 border-l-4 border-sb-green-600 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Bienvenido al Manual de Operaciones</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Este manual contiene todos los procedimientos y estándares esenciales para operar tu franquicia Salad Bowl con excelencia. 
            Está organizado en secciones temáticas para facilitar su consulta y aplicación diaria.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Selecciona cualquier sección para acceder a la información detallada, procedimientos paso a paso y mejores prácticas operativas.
          </p>
        </div>

        {/* Grid de Secciones */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((section) => (
            <Link
              key={section.id}
              href={section.href}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 block"
            >
              {/* Content */}
              <div className="relative p-8">
                {/* Icon */}
                <div className={`mb-6 ${section.bgLight} rounded-2xl w-16 h-16 flex items-center justify-center text-sb-green-700 transition-all duration-300`}>
                  {section.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {section.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 mb-6">
                  {section.description}
                </p>

                {/* Arrow indicator */}
                <div className="flex items-center text-sb-green-700 font-medium">
                  <span>Ver contenido</span>
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-12 text-center p-8 bg-gradient-to-r from-sb-green-50 to-sb-teal-50 rounded-2xl border border-sb-green-200">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-sb-green-700 rounded-full mb-4">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <p className="text-gray-700">
            <span className="font-bold text-sb-green-700">Importante:</span> Todos los procedimientos de este manual son de cumplimiento obligatorio y deben ser consultados regularmente por todo el equipo operativo.
          </p>
        </div>
      </div>
    </DashboardLayout>
  );
}
