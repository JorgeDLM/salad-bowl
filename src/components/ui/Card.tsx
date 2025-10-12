import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = '', hover = false }: CardProps) {
  return (
    <div
      className={`
        relative bg-[color:var(--paper)] border border-[color:var(--border)] 
        rounded-2xl shadow-[0_8px_28px_rgba(60,44,41,.08)]
        ${hover ? 'transition-all duration-300 hover:shadow-[0_12px_40px_rgba(60,44,41,.12)] hover:-translate-y-1' : ''}
        ${className}
      `}
    >
      <div className="relative z-10">
        {children}
      </div>
      {/* Grain texture overlay */}
      <div 
        className="absolute inset-0 rounded-2xl pointer-events-none opacity-[0.06] mix-blend-multiply"
        style={{ backgroundImage: 'url(/img/texture/grain.png)' }}
      />
    </div>
  );
}
