import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'gold' | 'default';
  className?: string;
}

export function Badge({ children, variant = 'default', className = '' }: BadgeProps) {
  const variantClasses = {
    gold: 'border border-[color:var(--gold)] bg-[rgba(194,162,126,.12)] text-[color:var(--gold)]',
    default: 'border border-[color:var(--border)] bg-[color:var(--paper)] text-[color:var(--ink)]',
  };
  
  return (
    <span
      className={`
        inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold
        ${variantClasses[variant]}
        ${className}
      `}
    >
      {children}
    </span>
  );
}
