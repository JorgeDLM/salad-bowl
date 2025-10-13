import React from 'react';

export const DotBlue = ({ className = "w-3 h-3" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 12 12" fill="none">
    <circle cx="6" cy="6" r="5" fill="#93C5FD" stroke="#3B82F6" strokeWidth="1" />
  </svg>
);
