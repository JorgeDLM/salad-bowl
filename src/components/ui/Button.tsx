import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
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
  const baseClasses = 'rounded-full font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-sb-green-500 focus:ring-offset-2 min-h-[44px]';
  
  const variantClasses = {
    primary: 'bg-sb-green-700 text-white hover:bg-sb-green-700/90 active:scale-95 shadow-md hover:shadow-lg',
    secondary: 'bg-white text-sb-green-700 border-2 border-sb-green-700 hover:bg-sb-green-700 hover:text-white active:scale-95',
    outline: 'border-2 border-sb-green-700 text-sb-green-700 hover:bg-sb-green-700 hover:text-white active:scale-95',
  };
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
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
