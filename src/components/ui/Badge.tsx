import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'gold' | 'default' | 'featured' | 'new';
  className?: string;
}

export function Badge({ children, variant = 'default', className = '' }: BadgeProps) {
  const variantClasses = {
    gold: 'bg-gradient-to-r from-gold to-[#D4B896] text-white shadow-lg backdrop-blur-sm',
    default: 'bg-white/95 backdrop-blur-sm text-[color:var(--ink)] border border-[color:var(--border)] shadow-md',
    featured: 'bg-gradient-to-r from-brand-terra to-brand-wine text-white shadow-lg backdrop-blur-sm',
    new: 'bg-gradient-to-r from-sage to-[#A8C5B0] text-white shadow-lg backdrop-blur-sm',
  };
  
  return (
    <span
      className={`
        inline-flex items-center px-3 py-1.5 rounded-full text-xs font-bold tracking-wide
        ${variantClasses[variant]}
        ${className}
        hover:scale-105 transition-transform duration-200
      `}
    >
      {children}
    </span>
  );
}
