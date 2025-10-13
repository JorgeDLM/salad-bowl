import React from 'react';

export const DotYellow = ({ className = "w-3 h-3" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 12 12" fill="none">
    <circle cx="6" cy="6" r="5" fill="#FCD34D" stroke="#F59E0B" strokeWidth="1" />
  </svg>
);
