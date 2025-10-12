'use client';

import React from 'react';
import { Ocasion } from '@/types/regalazo';
import { Chip } from '@/components/ui/Chip';

interface OcasionMultiSelectorProps {
  selected: Ocasion[];
  onChange: (ocasiones: Ocasion[]) => void;
}

const ocasionOptions: { id: Ocasion; label: string; emoji: string }[] = [
  { id: 'cumpleanos', label: 'Cumpleaños', emoji: '🎂' },
  { id: 'aniversario', label: 'Aniversario', emoji: '💕' },
  { id: 'newborn', label: 'Bebé nuevo', emoji: '👶' },
  { id: 'navidad', label: 'Navidad', emoji: '🎄' },
  { id: 'dia_madres', label: 'Día de las Madres', emoji: '🌸' },
  { id: 'dia_padre', label: 'Día del Padre', emoji: '👔' },
  { id: 'halloween', label: 'Halloween', emoji: '🎃' },
  { id: 'graduacion', label: 'Graduación', emoji: '🎓' },
];

export function OcasionMultiSelector({ selected, onChange }: OcasionMultiSelectorProps) {
  const handleToggle = (ocasionId: Ocasion) => {
    if (selected.includes(ocasionId)) {
      onChange(selected.filter(id => id !== ocasionId));
    } else {
      onChange([...selected, ocasionId]);
    }
  };

  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {ocasionOptions.map((option) => (
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
