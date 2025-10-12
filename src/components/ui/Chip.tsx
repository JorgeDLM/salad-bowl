import React from 'react';

interface ChipProps {
  selected?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}

export function Chip({ selected = false, onClick, children, className = '' }: ChipProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={`
        px-4 h-10 rounded-full text-sm font-medium transition-all duration-200
        focus:outline-none focus:ring-2 focus:ring-[color:var(--focus)] focus:ring-offset-2
        ${
          selected
            ? 'bg-[color:var(--chip-peach)] text-[color:var(--chip-ink)] border-2 border-[color:var(--brand-terracotta)] scale-105'
            : 'bg-[color:var(--chip-peach)] text-[color:var(--chip-ink)] border border-[#E6C8BA] hover:border-[color:var(--brand-terracotta)] hover:scale-105'
        }
        ${className}
      `}
    >
      {children}
    </button>
  );
}
