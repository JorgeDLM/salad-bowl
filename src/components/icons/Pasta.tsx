import React from 'react';
import { IconBase } from './IconBase';

export const Pasta = ({ className }: { className?: string }) => (
  <IconBase className={className}>
    {/* Fideos/tallarines con forma ondulada */}
    <path d="M4 8c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2" strokeWidth="2" />
    <path d="M4 12c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2" strokeWidth="2" />
    <path d="M4 16c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2" strokeWidth="2" />
    <path d="M6 8v8M10 6v10M14 6v10M18 8v8" strokeWidth="1" opacity="0.3" />
  </IconBase>
);
