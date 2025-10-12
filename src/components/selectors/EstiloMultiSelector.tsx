'use client';

import React from 'react';
import { Estilo } from '@/types/regalazo';
import { Chip } from '@/components/ui/Chip';

interface EstiloMultiSelectorProps {
  selected: Estilo[];
  onChange: (estilos: Estilo[]) => void;
}

const estiloOptions: { id: Estilo; label: string; emoji: string }[] = [
  { id: 'wellness', label: 'Wellness', emoji: '🧘' },
  { id: 'romantico', label: 'Romántico', emoji: '💝' },
  { id: 'eco', label: 'Eco', emoji: '🌿' },
  { id: 'divertido', label: 'Divertido', emoji: '🎉' },
  { id: 'foodie', label: 'Foodie', emoji: '🍰' },
  { id: 'techie', label: 'Tech', emoji: '💻' },
  { id: 'petlover', label: 'Pet Lover', emoji: '🐾' },
];

export function EstiloMultiSelector({ selected, onChange }: EstiloMultiSelectorProps) {
  const handleToggle = (estiloId: Estilo) => {
    if (selected.includes(estiloId)) {
      onChange(selected.filter(id => id !== estiloId));
    } else {
      onChange([...selected, estiloId]);
    }
  };

  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {estiloOptions.map((option) => (
        <Chip
          key={option.id}
          selected={selected.includes(option.id)}
          onClick={() => handleToggle(option.id)}
        >
          <span className="mr-1.5">{option.emoji}</span>
          {option.label}
        </Chip>
      ))}
    </div>
  );
}
