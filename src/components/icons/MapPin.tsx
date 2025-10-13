import React from 'react';
import { IconBase } from './IconBase';

export const MapPin = ({ className }: { className?: string }) => (
  <IconBase className={className}>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" fill="currentColor" strokeWidth="0" />
  </IconBase>
);
