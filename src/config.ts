export const SITE = {
  brand: 'Regalazo',
  whatsapp: '5215512345678', // Update with real number
  timezone: 'America/Mexico_City',
  sameDayCutoffHour: 12,
  url: 'https://jorge-de-la-mora-cv.netlify.app',
} as const;

export const ROUTES = {
  home: '/',
  quiz: '/quiz',
  paraQuien: (slug: string) => `/para-quien/${slug}`,
  ocasion: (slug: string) => `/ocasion/${slug}`,
  estilo: (slug: string) => `/estilo/${slug}`,
  presupuesto: (tier: number) => `/presupuesto/${tier}`,
  kit: (slug: string) => `/kit/${slug}`,
  empresas: '/empresas',
  contacto: '/contacto',
} as const;
