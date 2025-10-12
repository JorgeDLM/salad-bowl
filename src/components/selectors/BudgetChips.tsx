'use client';

import React from 'react';
import { Tier } from '@/types/regalazo';
import { Chip } from '@/components/ui/Chip';

interface BudgetChipsProps {
  selected?: Tier;
  onChange: (tier: Tier | undefined) => void;
}

const tierOptions: Tier[] = [499, 999, 1499, 1999, 2999, 4999, 9999];

export function BudgetChips({ selected, onChange }: BudgetChipsProps) {
  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {tierOptions.map((tier) => (
        <Chip
          key={tier}
          selected={selected === tier}
          onClick={() => onChange(selected === tier ? undefined : tier)}
        >
          ${tier.toLocaleString('es-MX')}
        </Chip>
      ))}
    </div>
  );
}
