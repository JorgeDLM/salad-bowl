import React from 'react';
import { IconBase } from './IconBase';

export const Instagram = ({ className }: { className?: string }) => (
  <IconBase className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" strokeWidth="0" />
  </IconBase>
);
