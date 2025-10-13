import React from 'react';
import { IconBase } from './IconBase';

export const Coin = ({ className }: { className?: string }) => (
  <IconBase className={className}>
    {/* Moneda con símbolo de peso mexicano */}
    <circle cx="12" cy="12" r="9" strokeWidth="2" />
    <path d="M12 7v10" strokeWidth="2" />
    <path d="M10 9h4c1.1 0 2 0.9 2 2s-0.9 2-2 2h-4" strokeWidth="1.5" />
    <path d="M8 11h8" strokeWidth="1.5" />
  </IconBase>
);
