'use client';

import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface GuideBreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function GuideBreadcrumb({ items }: GuideBreadcrumbProps) {
  return (
    <nav className="mb-6">
      <div className="flex items-center gap-2 text-sm flex-wrap">
        {items.map((item, index) => (
          <div key={item.href} className="flex items-center gap-2">
            {index > 0 && (
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            )}
            {index === items.length - 1 ? (
              <span className="text-gray-600 font-medium">{item.label}</span>
            ) : (
              <Link 
                href={item.href} 
                className="text-sb-green-700 hover:text-sb-green-600 font-medium transition-colors"
              >
                {item.label}
              </Link>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
}
