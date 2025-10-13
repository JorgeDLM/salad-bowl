import React from 'react';
import { IconBase } from './IconBase';

export const Mail = ({ className }: { className?: string }) => (
  <IconBase className={className}>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="M22 6l-10 7L2 6" />
  </IconBase>
);
