import { Kit, Persona, Ocasion, Estilo, Tier } from '@/types/regalazo';

export function filterKits(
  kits: Kit[],
  filters: {
    persona?: Persona;
    ocasion?: Ocasion;
    estilo?: Estilo;
    tier?: Tier;
    sameDayOnly?: boolean;
  }
): Kit[] {
  return kits.filter(kit => {
    if (filters.persona && !kit.personas.includes(filters.persona)) {
      return false;
    }
    
    if (filters.ocasion && !kit.ocasiones.includes(filters.ocasion)) {
      return false;
    }
    
    if (filters.estilo && !kit.estilos.includes(filters.estilo)) {
      return false;
    }
    
    if (filters.tier) {
      const hasVariant = kit.variants.some(v => v.tier === filters.tier);
      if (!hasVariant) return false;
    }
    
    if (filters.sameDayOnly) {
      const hasSameDayVariant = kit.variants.some(v => v.availableSameDay);
      if (!hasSameDayVariant) return false;
    }
    
    return true;
  });
}

export function getKitBySlug(kits: Kit[], slug: string): Kit | undefined {
  return kits.find(kit => kit.slug === slug);
}
