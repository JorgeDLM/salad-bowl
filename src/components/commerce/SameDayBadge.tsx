'use client';

import React, { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/Badge';
import { isSameDayAvailable } from '@/lib/time';
import { SITE } from '@/config';

interface SameDayBadgeProps {
  availableSameDay: boolean;
  className?: string;
}

export function SameDayBadge({ availableSameDay, className = '' }: SameDayBadgeProps) {
  const [canDeliver, setCanDeliver] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setCanDeliver(isSameDayAvailable());
  }, []);

  if (!mounted || !availableSameDay) return null;

  if (!canDeliver) {
    return (
      <Badge variant="default" className={className}>
        Entrega mañana
      </Badge>
    );
  }

  return (
    <Badge variant="gold" className={`${className} animate-pulse`}>
      ⚡ Entrega hoy
    </Badge>
  );
}

export function SameDayCutoffMessage() {
  const [mounted, setMounted] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    setMounted(true);
    setShowMessage(!isSameDayAvailable());
  }, []);

  if (!mounted || !showMessage) return null;

  return (
    <div className="text-sm text-[color:var(--chip-ink)] bg-[color:var(--chip-peach)] px-4 py-2 rounded-full inline-flex items-center gap-2">
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      Corte para entrega hoy: {SITE.sameDayCutoffHour}:00 hrs
    </div>
  );
}
