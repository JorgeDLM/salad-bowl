import React from 'react';
import { IconBase } from './IconBase';

export const ArrowLeft = ({ className }: { className?: string }) => (
  <IconBase className={className}>
    <path d="M19 12H5" strokeWidth="2" strokeLinecap="round" />
    <path d="M12 19l-7-7 7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </IconBase>
);
