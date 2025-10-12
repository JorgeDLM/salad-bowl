export type Persona = 'pareja' | 'mama' | 'papa' | 'bebe' | 'amigo' | 'jefe_equipo';

export type Ocasion = 
  | 'cumpleanos'
  | 'aniversario'
  | 'newborn'
  | 'dia_madres'
  | 'dia_padre'
  | 'navidad'
  | 'halloween'
  | 'graduacion'
  | 'housewarming';

export type Estilo = 
  | 'wellness'
  | 'foodie'
  | 'techie'
  | 'eco'
  | 'romantico'
  | 'divertido'
  | 'petlover'
  | 'keto';

export type Tier = 499 | 999 | 1499 | 1999 | 2999 | 4999 | 9999;

export interface KitVariant {
  tier: Tier;
  sku: string;
  title: string;
  contents: string[];
  image: string;
  availableSameDay: boolean;
}

export interface Kit {
  id: string;
  slug: string;
  title: string;
  personas: Persona[];
  ocasiones: Ocasion[];
  estilos: Estilo[];
  variants: KitVariant[];
  badges?: ('mas_vendido' | 'nuevo' | 'editor_pick')[];
}

export interface DeliveryZone {
  name: string;
  postalCodes: string[];
  sameDayCutoffHour: number;
}

export interface AddOn {
  id: string;
  name: string;
  price: number;
  image: string;
}

export interface PersonaOption {
  id: Persona;
  label: string;
  image: string;
}

export interface OcasionOption {
  id: Ocasion;
  label: string;
  icon: string;
}

export interface EstiloOption {
  id: Estilo;
  label: string;
  icon: string;
}
