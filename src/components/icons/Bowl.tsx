import React from 'react';
import { IconBase } from './IconBase';

export const Bowl = ({ className }: { className?: string }) => (
  <IconBase className={className}>
    {/* Bowl aesthetic con contenido */}
    <path d="M4 11h16" strokeWidth="2" />
    <path d="M5 11c0 5.5 3 10 7 10s7-4.5 7-10" fill="none" strokeWidth="2" />
    {/* Ingredientes dentro del bowl */}
    <circle cx="8" cy="9" r="1" fill="currentColor" opacity="0.5" />
    <circle cx="12" cy="8" r="1.2" fill="currentColor" opacity="0.6" />
    <circle cx="16" cy="9" r="1" fill="currentColor" opacity="0.5" />
    <circle cx="10" cy="6" r="0.8" fill="currentColor" opacity="0.4" />
    <circle cx="14" cy="6" r="0.8" fill="currentColor" opacity="0.4" />
  </IconBase>
);
