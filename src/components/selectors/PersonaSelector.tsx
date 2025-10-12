'use client';

import React from 'react';
import Image from 'next/image';
import { Persona, PersonaOption } from '@/types/regalazo';

interface PersonaSelectorProps {
  selected?: Persona;
  onChange: (persona: Persona) => void;
}

const personaOptions: PersonaOption[] = [
  { id: 'pareja', label: 'Pareja', image: '/img/avatars/pareja.webp' },
  { id: 'mama', label: 'Mamá', image: '/img/avatars/mama.webp' },
  { id: 'papa', label: 'Papá', image: '/img/avatars/papa.webp' },
  { id: 'bebe', label: 'Bebé', image: '/img/avatars/bebe.webp' },
  { id: 'amigo', label: 'Amigo/a', image: '/img/avatars/amigo.webp' },
  { id: 'jefe_equipo', label: 'Jefe/Equipo', image: '/img/avatars/jefe-equipo.webp' },
];

export function PersonaSelector({ selected, onChange }: PersonaSelectorProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {personaOptions.map((option) => (
        <button
          key={option.id}
          type="button"
          onClick={() => onChange(option.id)}
          aria-pressed={selected === option.id}
          className={`
            group relative rounded-2xl overflow-hidden transition-all duration-300
            focus:outline-none focus:ring-2 focus:ring-[color:var(--focus)] focus:ring-offset-2
            ${
              selected === option.id
                ? 'ring-4 ring-[color:var(--brand-terracotta)] scale-105'
                : 'hover:scale-105'
            }
          `}
        >
          <div className="relative aspect-square">
            <Image
              src={option.image}
              alt={option.label}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
            />
            <div
              className={`
                absolute inset-0 transition-colors duration-300
                ${
                  selected === option.id
                    ? 'bg-[color:var(--brand-terracotta)]/20'
                    : 'bg-black/0 group-hover:bg-black/10'
                }
              `}
            />
          </div>
          <div
            className={`
              absolute bottom-0 left-0 right-0 p-3 text-center font-semibold
              transition-colors duration-300
              ${
                selected === option.id
                  ? 'bg-[color:var(--brand-terracotta)] text-white'
                  : 'bg-[color:var(--paper)]/95 text-[color:var(--ink)] group-hover:bg-[color:var(--brand-terracotta)] group-hover:text-white'
              }
            `}
          >
            {option.label}
          </div>
        </button>
      ))}
    </div>
  );
}
