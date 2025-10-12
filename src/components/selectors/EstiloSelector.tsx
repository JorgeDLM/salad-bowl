'use client';

import React from 'react';
import { Estilo } from '@/types/regalazo';
import { Chip } from '@/components/ui/Chip';

interface EstiloSelectorProps {
  selected?: Estilo;
  onChange: (estilo: Estilo | undefined) => void;
}

const estiloOptions: { id: Estilo; label: string }[] = [
  { id: 'wellness', label: 'Wellness/Spa' },
  { id: 'foodie', label: 'Foodie/Café' },
  { id: 'techie', label: 'Techie' },
  { id: 'eco', label: 'Eco' },
  { id: 'romantico', label: 'Romántico' },
  { id: 'divertido', label: 'Divertido' },
  { id: 'petlover', label: 'Pet Lover' },
  { id: 'keto', label: 'Keto' },
];

export function EstiloSelector({ selected, onChange }: EstiloSelectorProps) {
  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {estiloOptions.map((option) => (
        <Chip
          key={option.id}
          selected={selected === option.id}
          onClick={() => onChange(selected === option.id ? undefined : option.id)}
        >
          {option.label}
        </Chip>
      ))}
    </div>
  );
}
