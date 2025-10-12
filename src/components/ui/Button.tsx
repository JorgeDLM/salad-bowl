import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export function Button({ 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  children, 
  ...props 
}: ButtonProps) {
  const baseClasses = 'rounded-full font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[color:var(--focus)] focus:ring-offset-2';
  
  const variantClasses = {
    primary: 'bg-[color:var(--brand-terracotta)] text-white hover:bg-[color:var(--brand-terracotta-600)] active:scale-95',
    ghost: 'bg-transparent text-[color:var(--ink)] hover:bg-[color:var(--muted)]',
    outline: 'border-2 border-[color:var(--brand-terracotta)] text-[color:var(--brand-terracotta)] hover:bg-[color:var(--brand-terracotta)] hover:text-white',
  };
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm h-10',
    md: 'px-6 py-3 text-base h-12',
    lg: 'px-8 py-4 text-lg h-14',
  };
  
  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
