'use client';

import React from 'react';
import { Ocasion } from '@/types/regalazo';
import { Chip } from '@/components/ui/Chip';

interface OcasionSelectorProps {
  selected?: Ocasion;
  onChange: (ocasion: Ocasion) => void;
}

const ocasionOptions: { id: Ocasion; label: string }[] = [
  { id: 'cumpleanos', label: 'Cumpleaños' },
  { id: 'aniversario', label: 'Aniversario' },
  { id: 'newborn', label: 'Bebé recién nacido' },
  { id: 'dia_madres', label: 'Día de las Madres' },
  { id: 'dia_padre', label: 'Día del Padre' },
  { id: 'navidad', label: 'Navidad' },
  { id: 'halloween', label: 'Halloween' },
  { id: 'graduacion', label: 'Graduación' },
  { id: 'housewarming', label: 'Casa nueva' },
];

export function OcasionSelector({ selected, onChange }: OcasionSelectorProps) {
  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {ocasionOptions.map((option) => (
        <Chip
          key={option.id}
          selected={selected === option.id}
          onClick={() => onChange(option.id)}
        >
          {option.label}
        </Chip>
      ))}
    </div>
  );
}
