import { redirect } from 'next/navigation';
import { getCurrentUser } from '@/lib/session';
import DashboardLayout from '@/components/admin/DashboardLayout';
import Link from 'next/link';
import GuidesSearch from '@/components/franchisee/GuidesSearch';

export default async function FranchiseeGuidesPage() {
  const user = await getCurrentUser();
  
  if (!user || user.role !== 'FRANCHISEE') {
    redirect('/admin/login');
  }

  const guides = [
    {
      id: 1,
      title: 'Quiénes Somos',
      description: 'Misión, visión y valores de Salad Bowl',
      href: '/franchisee/dashboard/guides/quienes-somos',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      gradient: 'from-sb-green-700 to-sb-green-600',
      bgHover: 'bg-sb-green-700',
      bgLight: 'bg-sb-green-50',
    },
    {
      id: 2,
      title: 'Manual de Imagen',
      description: 'Identidad visual, logo y branding',
      href: '/franchisee/dashboard/guides/manual-imagen',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      gradient: 'from-sb-green-600 to-sb-green-500',
      bgHover: 'bg-sb-green-600',
      bgLight: 'bg-sb-green-100',
    },
    {
      id: 3,
      title: 'Manual de Recursos Humanos',
      description: 'Contratación, capacitación y evaluación',
      href: '/franchisee/dashboard/guides/recursos-humanos',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      gradient: 'from-sb-teal-600 to-sb-teal-500',
      bgHover: 'bg-sb-teal-600',
      bgLight: 'bg-sb-teal-50',
    },
    {
      id: 4,
      title: 'Manual de Marketing y Promociones',
      description: 'Estrategias de promoción y ventas',
      href: '/franchisee/dashboard/guides/marketing-promociones',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
        </svg>
      ),
      gradient: 'from-sb-green-500 to-sb-green-400',
      bgHover: 'bg-sb-green-500',
      bgLight: 'bg-sb-green-100',
    },
    {
      id: 5,
      title: 'Manual de Operaciones',
      description: 'Procesos diarios y estándares operativos',
      href: '/franchisee/dashboard/guides/operaciones',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      gradient: 'from-sb-green-700 to-sb-teal-600',
      bgHover: 'bg-sb-green-700',
      bgLight: 'bg-sb-green-50',
    },
    {
      id: 6,
      title: 'Manual de Logística y Proveedores',
      description: 'Cadena de suministro y proveedores',
      href: '/franchisee/dashboard/guides/logistica-proveedores',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
        </svg>
      ),
      gradient: 'from-sb-teal-700 to-sb-teal-600',
      bgHover: 'bg-sb-teal-700',
      bgLight: 'bg-sb-teal-100',
    },
    {
      id: 7,
      title: 'Formatos y Procedimientos',
      description: 'Plantillas, bitácoras y formatos',
      href: '/franchisee/dashboard/guides/formatos-procedimientos',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      gradient: 'from-sb-green-600 to-sb-green-500',
      bgHover: 'bg-sb-green-600',
      bgLight: 'bg-sb-green-100',
    },
    {
      id: 8,
      title: 'Contratos y Legal',
      description: 'Documentación legal y contratos',
      href: '/franchisee/dashboard/guides/contratos-legal',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
      ),
      gradient: 'from-sb-teal-600 to-sb-teal-500',
      bgHover: 'bg-sb-teal-600',
      bgLight: 'bg-sb-teal-50',
    },
    {
      id: 9,
      title: 'Recetario y Ficha Técnica',
      description: 'Recetas oficiales e ingredientes',
      href: '/franchisee/dashboard/guides/recetario',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      gradient: 'from-sb-green-500 to-sb-green-400',
      bgHover: 'bg-sb-green-500',
      bgLight: 'bg-sb-green-50',
    },
  ];

  return (
    <DashboardLayout userEmail={user.email} userRole={user.role}>
      <div className="max-w-7xl mx-auto">
        {/* Header aesthetic */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Guías y Recursos
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Toda la documentación esencial para operar tu franquicia con excelencia
          </p>
        </div>

        {/* Buscador */}
        <GuidesSearch />

        {/* Grid de Guías - 3 columnas aesthetic */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {guides.map((guide) => (
            <Link
              key={guide.id}
              href={guide.href}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 block"
            >
              {/* Solid Background on Hover */}
              <div className={`absolute inset-0 ${guide.bgHover} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              
              {/* Content */}
              <div className="relative p-8">
                {/* Icon */}
                <div className={`mb-6 ${guide.bgLight} rounded-2xl w-16 h-16 flex items-center justify-center text-sb-green-700 group-hover:bg-white/20 group-hover:text-white transition-all duration-300`}>
                  {guide.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-white transition-colors duration-300">
                  {guide.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 mb-6 group-hover:text-white/90 transition-colors duration-300">
                  {guide.description}
                </p>

                {/* Badge */}
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-sb-green-100 text-sb-green-700 text-xs font-semibold rounded-full group-hover:bg-white/20 group-hover:text-white transition-all duration-300">
                    Próximamente
                  </span>
                </div>

                {/* Arrow indicator */}
                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Footer note aesthetic */}
        <div className="mt-12 text-center p-8 bg-gradient-to-r from-sb-green-50 to-sb-teal-50 rounded-2xl border border-sb-green-200">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-sb-green-700 rounded-full mb-4">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <p className="text-gray-700">
            <span className="font-bold text-sb-green-700">Nota:</span> Los contenidos completos de cada guía estarán disponibles próximamente.
          </p>
        </div>
      </div>
    </DashboardLayout>
  );
}
