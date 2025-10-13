import React from 'react';

interface IconBaseProps {
  className?: string;
  children: React.ReactNode;
  viewBox?: string;
}

export const IconBase = ({ 
  className = "w-6 h-6", 
  children, 
  viewBox = "0 0 24 24" 
}: IconBaseProps) => (
  <svg 
    className={className} 
    viewBox={viewBox} 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {children}
  </svg>
);
