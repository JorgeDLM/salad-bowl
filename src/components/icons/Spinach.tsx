import React from 'react';
import { IconBase } from './IconBase';

export const Spinach = ({ className }: { className?: string }) => (
  <IconBase className={className}>
    {/* Hoja de espinaca con forma característica */}
    <path d="M12 3c-3 0-5 2-6 4-1 2-1 4 0 6 1 2 2 4 3 6l3 2 3-2c1-2 2-4 3-6 1-2 1-4 0-6-1-2-3-4-6-4Z" fill="none" />
    <path d="M12 3v18" strokeWidth="1.5" />
    <path d="M12 7c-2 0.5-3.5 1.5-4 3" strokeWidth="1" opacity="0.5" />
    <path d="M12 11c-1.5 0.5-2.5 1.5-3 2.5" strokeWidth="1" opacity="0.5" />
    <path d="M12 7c2 0.5 3.5 1.5 4 3" strokeWidth="1" opacity="0.5" />
    <path d="M12 11c1.5 0.5 2.5 1.5 3 2.5" strokeWidth="1" opacity="0.5" />
    <path d="M9 15c0.5 1 1.5 2 3 3" strokeWidth="1" opacity="0.5" />
    <path d="M15 15c-0.5 1-1.5 2-3 3" strokeWidth="1" opacity="0.5" />
  </IconBase>
);
