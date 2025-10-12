'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/Button';

interface StickyC TAProps {
  onAction: () => void;
  label: string;
  price?: number;
}

export function StickyCTA({ onAction, label, price }: StickyCTAProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling down 400px
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden transform transition-transform duration-300">
      <div className="bg-[color:var(--paper)]/95 backdrop-blur-sm border-t-2 border-[color:var(--border)] px-4 py-3 shadow-[0_-4px_24px_rgba(60,44,41,.12)]">
        <div className="flex items-center justify-between gap-4">
          {price && (
            <div>
              <p className="text-xs text-[color:var(--chip-ink)]">Precio</p>
              <p className="text-xl font-bold text-[color:var(--brand-terracotta)]">
                ${price.toLocaleString('es-MX')}
              </p>
            </div>
          )}
          <Button onClick={onAction} size="md" className="flex-1">
            {label}
          </Button>
        </div>
      </div>
    </div>
  );
}
