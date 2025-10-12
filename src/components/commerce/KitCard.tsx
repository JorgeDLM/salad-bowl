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

  const badgeLabels = {
    mas_vendido: 'Más vendido',
    nuevo: 'Nuevo',
    editor_pick: 'Favorito del editor',
  };

  return (
    <Card hover className="overflow-hidden group">
      <Link href={`/kit/${kit.slug}`}>
        <div className="relative aspect-[4/3] overflow-hidden bg-[color:var(--muted)]">
          <Image
            src={variant.image}
            alt={kit.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          
          {/* Badges overlay */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            <SameDayBadge availableSameDay={variant.availableSameDay} />
            {kit.badges?.map((badge) => (
              <Badge key={badge} variant="gold">
                {badgeLabels[badge]}
              </Badge>
            ))}
          </div>
        </div>

        <div className="p-5">
          <h3 className="text-xl font-fraunces font-semibold text-[color:var(--ink)] mb-2 group-hover:text-[color:var(--brand-terracotta)] transition-colors">
            {kit.title}
          </h3>
          
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-sm text-[color:var(--chip-ink)] mb-1">Desde</p>
              <p className="text-2xl font-bold text-[color:var(--brand-terracotta)]">
                ${variant.tier.toLocaleString('es-MX')}
              </p>
            </div>
            
            {kit.variants.length > 1 && (
              <p className="text-sm text-[color:var(--chip-ink)]">
                {kit.variants.length} opciones
              </p>
            )}
          </div>

          <Button variant="outline" size="sm" className="w-full">
            Ver opciones
          </Button>
        </div>
      </Link>
    </Card>
  );
}
