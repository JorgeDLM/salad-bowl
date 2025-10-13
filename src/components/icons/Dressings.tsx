import React from 'react';
import { IconBase } from './IconBase';

export const Dressings = ({ className }: { className?: string }) => (
  <IconBase className={className}>
    {/* Botella de aderezo con gotas */}
    <path d="M9 3h6v3l2 2v10a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V8l2-2V3Z" fill="none" strokeWidth="1.75" />
    <path d="M10 3h4" strokeWidth="2" />
    {/* Gotas de aderezo */}
    <path d="M12 13c0 1.5-1 2-1 3h2c0-1-1-1.5-1-3Z" fill="currentColor" opacity="0.3" />
    <circle cx="10" cy="16" r="0.5" fill="currentColor" opacity="0.4" />
    <circle cx="14" cy="16" r="0.5" fill="currentColor" opacity="0.4" />
  </IconBase>
);
