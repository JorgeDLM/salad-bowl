import React from 'react';
import { IconBase } from './IconBase';

export const Leaf = ({ className }: { className?: string }) => (
  <IconBase className={className}>
    {/* Hoja de lechuga con venas */}
    <path d="M12 3C8 3 5 6 5 10c0 3 1.5 5.5 3 7.5 1 1.5 2 3 2 4.5h4c0-1.5 1-3 2-4.5 1.5-2 3-4.5 3-7.5 0-4-3-7-7-7Z" fill="none" />
    <path d="M12 3v19" strokeWidth="1.5" />
    <path d="M12 8c-1.5 1-3 2-4 3.5" strokeWidth="1" opacity="0.5" />
    <path d="M12 12c1.5 1 3 2 4 3.5" strokeWidth="1" opacity="0.5" />
    <path d="M12 6c-1 0.5-2 1-3 2" strokeWidth="1" opacity="0.5" />
    <path d="M12 10c1 0.5 2 1 3 2" strokeWidth="1" opacity="0.5" />
  </IconBase>
);
