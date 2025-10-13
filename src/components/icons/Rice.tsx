import React from 'react';
import { IconBase } from './IconBase';

export const Rice = ({ className }: { className?: string }) => (
  <IconBase className={className}>
    {/* Bowl de arroz con granos */}
    <path d="M5 12h14" />
    <path d="M6 12c0 4 2.5 8 6 8s6-4 6-8" fill="none" />
    {/* Granos de arroz */}
    <ellipse cx="8" cy="14" rx="0.8" ry="1.2" fill="currentColor" opacity="0.4" />
    <ellipse cx="10.5" cy="13.5" rx="0.8" ry="1.2" fill="currentColor" opacity="0.5" />
    <ellipse cx="13.5" cy="13.5" rx="0.8" ry="1.2" fill="currentColor" opacity="0.5" />
    <ellipse cx="16" cy="14" rx="0.8" ry="1.2" fill="currentColor" opacity="0.4" />
    <ellipse cx="9" cy="16" rx="0.8" ry="1.2" fill="currentColor" opacity="0.3" />
    <ellipse cx="12" cy="15.5" rx="0.8" ry="1.2" fill="currentColor" opacity="0.4" />
    <ellipse cx="15" cy="16" rx="0.8" ry="1.2" fill="currentColor" opacity="0.3" />
    <ellipse cx="10.5" cy="17.5" rx="0.8" ry="1.2" fill="currentColor" opacity="0.2" />
    <ellipse cx="13.5" cy="17.5" rx="0.8" ry="1.2" fill="currentColor" opacity="0.2" />
    {/* Vapor/líneas decorativas arriba */}
    <path d="M8 9c0-1 0.5-2 1-3" strokeWidth="1.5" opacity="0.3" />
    <path d="M12 8c0-1.5 0.5-3 1-4" strokeWidth="1.5" opacity="0.4" />
    <path d="M16 9c0-1 -0.5-2 -1-3" strokeWidth="1.5" opacity="0.3" />
  </IconBase>
);
