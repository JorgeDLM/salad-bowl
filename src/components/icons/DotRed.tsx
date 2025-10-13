import React from 'react';

export const DotRed = ({ className = "w-3 h-3" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 12 12" fill="none">
    <circle cx="6" cy="6" r="5" fill="#FCA5A5" stroke="#EF4444" strokeWidth="1" />
  </svg>
);
