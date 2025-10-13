export const SITE = {
  brand: 'Salad Bowl',
  tagline: 'Life is now',
  whatsapp: '5215512345678',
  timezone: 'America/Mexico_City',
  url: 'https://jorge-de-la-mora-cv.netlify.app',
  instagram: 'https://instagram.com/saladbowl',
  facebook: 'https://facebook.com/saladbowl',
} as const;

export const ROUTES = {
  home: '/',
  menu: '/menu',
  sucursales: '/sucursales',
  franquicias: '/franquicias',
  contacto: '/contacto',
} as const;

export const LOCATIONS = [
  {
    name: 'Vía San Ángel',
    address: 'Blvd. Atlixcáyotl 1504, local B5',
    mapsUrl: 'https://maps.google.com/?q=Blvd.+Atlixcáyotl+1504,+local+B5',
  },
  {
    name: 'Zavaleta',
    address: 'Calz. de Zavaleta 3916, Plaza Office Depot',
    mapsUrl: 'https://maps.google.com/?q=Calz.+de+Zavaleta+3916,+Plaza+Office+Depot',
  },
] as const;
