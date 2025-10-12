// Iconos SVG personalizados para Regalazo
import React from 'react';

export const GiftIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="10" width="18" height="12" rx="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 10V22" strokeLinecap="round"/>
    <path d="M3 10H21" strokeLinecap="round"/>
    <path d="M12 3L15 6H9L12 3Z" fill="currentColor" opacity="0.2"/>
    <path d="M12 3V10M12 3C12 3 14 5 16 5C18 5 19 4 19 4C19 4 20 5 20 7C20 9 18 10 16 10H12M12 3C12 3 10 5 8 5C6 5 5 4 5 4C5 4 4 5 4 7C4 9 6 10 8 10H12" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const SparkleIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" opacity="0.8"/>
    <path d="M19 3L20 6L23 7L20 8L19 11L18 8L15 7L18 6L19 3Z" opacity="0.6"/>
    <path d="M6 15L7 17L9 18L7 19L6 21L5 19L3 18L5 17L6 15Z" opacity="0.6"/>
  </svg>
);

export const HeartIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
  </svg>
);

export const ClockIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10"/>
    <path d="M12 6v6l4 2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const CheckIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M20 6L9 17L4 12" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const TruckIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="1" y="8" width="15" height="10" rx="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 8h3.5L22 12v6h-2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="6" cy="18" r="2" fill="currentColor"/>
    <circle cx="18" cy="18" r="2" fill="currentColor"/>
    <path d="M1 11h15" strokeLinecap="round"/>
  </svg>
);

export const CardIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="5" width="20" height="14" rx="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7 15h0M11 15h3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"/>
    <path d="M12 10c0-1.5-1-2-2-2s-2 .5-2 2c0 1 .5 1.5 1.5 2s1.5 1 1.5 2" strokeLinecap="round" opacity="0.3"/>
  </svg>
);

export const BoxIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" strokeLinecap="round" strokeLinejoin="round"/>
    <polyline points="3.27 6.96 12 12.01 20.73 6.96" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="12" y1="22.08" x2="12" y2="12" strokeLinecap="round"/>
  </svg>
);

export const FlowerIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <circle cx="12" cy="12" r="2" />
    <path d="M12 6c-1.5 0-2.5 1-2.5 2.5S11 11 12 11s2.5-1 2.5-2.5S13.5 6 12 6z" opacity="0.7"/>
    <path d="M18 12c0-1.5-1-2.5-2.5-2.5S13 11 13 12s1 2.5 2.5 2.5S18 13.5 18 12z" opacity="0.7"/>
    <path d="M12 18c1.5 0 2.5-1 2.5-2.5S13 13 12 13s-2.5 1-2.5 2.5S10.5 18 12 18z" opacity="0.7"/>
    <path d="M6 12c0 1.5 1 2.5 2.5 2.5S11 13 11 12s-1-2.5-2.5-2.5S6 10.5 6 12z" opacity="0.7"/>
    <path d="M15.5 8.5c-1-1-2.5-.5-3 .5s0 2.5 1 3 2.5.5 3-.5.5-2.5-.5-3z" opacity="0.7"/>
    <path d="M15.5 15.5c1 1 2.5.5 3-.5s0-2.5-1-3-2.5-.5-3 .5-.5 2.5.5 3z" opacity="0.7"/>
    <path d="M8.5 8.5c1-1 .5-2.5-.5-3s-2.5 0-3 1-.5 2.5.5 3 2.5 1 3-.5z" opacity="0.7"/>
    <path d="M8.5 15.5c-1 1-.5 2.5.5 3s2.5 0 3-1 .5-2.5-.5-3-2.5-1-3 .5z" opacity="0.7"/>
  </svg>
);

export const MapPinIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12" cy="10" r="3" fill="currentColor"/>
  </svg>
);

export const SearchIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="11" cy="11" r="8"/>
    <path d="m21 21-4.35-4.35" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const ArrowRightIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M5 12h14m-6-6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
