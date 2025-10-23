import Link from 'next/link';

interface GuideSectionProps {
  id: number;
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
  gradient: string;
  bgLight: string;
}

export default function GuideSection({ 
  title, 
  description, 
  href, 
  icon, 
  gradient, 
  bgLight 
}: GuideSectionProps) {
  return (
    <Link href={href}>
      <div className={`group ${bgLight} rounded-2xl p-6 border-2 border-transparent hover:border-sb-green-300 transition-all hover:shadow-xl cursor-pointer h-full`}>
        <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${gradient} text-white mb-4 group-hover:scale-110 transition-transform`}>
          {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-sb-green-700 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          {description}
        </p>
        <div className="flex items-center gap-2 mt-4 text-sb-green-700 font-semibold text-sm group-hover:gap-3 transition-all">
          <span>Ver más</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
