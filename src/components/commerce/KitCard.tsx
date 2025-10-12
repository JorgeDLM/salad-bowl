'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Kit, Tier } from '@/types/regalazo';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { SameDayBadge } from './SameDayBadge';
import { Button } from '@/components/ui/Button';

interface KitCardProps {
  kit: Kit;
  selectedTier?: Tier;
}

export function KitCard({ kit, selectedTier }: KitCardProps) {
  // Get the variant for the selected tier or default to the first one
  const variant = selectedTier
    ? kit.variants.find(v => v.tier === selectedTier) || kit.variants[0]
    : kit.variants[0];

  const badgeConfig = {
    mas_vendido: { label: 'Más vendido', variant: 'gold' as const },
    nuevo: { label: 'Nuevo', variant: 'new' as const },
    editor_pick: { label: 'Favorito', variant: 'featured' as const },
  };

  return (
    <Card hover className="overflow-hidden group">
      <Link href={`/kit/${kit.slug}`}>
        <div className="relative aspect-[4/3] overflow-hidden bg-[color:var(--muted)]">
          <Image
            src={variant.image}
            alt={kit.title}
            fill
            className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          
          {/* Overlay gradient on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-ink/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Badges overlay */}
          <div className="absolute top-3 left-3 flex flex-col gap-2 z-10">
            <SameDayBadge availableSameDay={variant.availableSameDay} />
            {kit.badges?.map((badge) => (
              <Badge key={badge} variant={badgeConfig[badge].variant}>
                {badgeConfig[badge].label}
              </Badge>
            ))}
          </div>
        </div>

        <div className="p-5">
          <h3 className="text-xl font-fraunces font-semibold text-[color:var(--ink)] mb-2 group-hover:text-[color:var(--brand-terracotta)] transition-colors duration-300">
            {kit.title}
          </h3>
          
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-sm text-[color:var(--chip-ink)] mb-1">Desde</p>
              <p className="text-2xl font-bold text-[color:var(--brand-terracotta)] group-hover:scale-105 transition-transform duration-300">
                ${variant.tier.toLocaleString('es-MX')}
              </p>
            </div>
            
            {kit.variants.length > 1 && (
              <p className="text-sm text-[color:var(--chip-ink)]">
                {kit.variants.length} opciones
              </p>
            )}
          </div>

          <Button variant="outline" size="sm" className="w-full group-hover:bg-brand-terra group-hover:text-white group-hover:border-brand-terra transition-all duration-300">
            Ver opciones
          </Button>
        </div>
      </Link>
    </Card>
  );
}
