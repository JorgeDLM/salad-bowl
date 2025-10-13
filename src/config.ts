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
    name: 'Plaza Vía San Ángel',
    address: 'Blvd. Atlixcáyotl 1405, Local B 5, Reserva Territorial Atlixcáyotl, 72192 San Bernardino Tlaxcalancingo, Pue.',
    mapsUrl: 'https://maps.google.com/?q=Plaza+Via+San+Angel+Puebla',
    phone: '222 225 2125',
    schedule: {
      weekdays: 'Lunes a Domingo: 9:00 AM - 8:30 PM',
      weekend: null,
    },
  },
  {
    name: 'Zavaleta',
    address: 'Calz Zavaleta 3916, Sta Cruz Buenavista, 72150 Heroica Puebla de Zaragoza, Pue.',
    mapsUrl: 'https://maps.google.com/?q=Calz+Zavaleta+3916+Puebla',
    phone: '222 169 5444',
    schedule: {
      weekdays: 'Lunes a Domingo: 11:00 AM - 8:00 PM',
      weekend: null,
    },
  },
  {
    name: 'Lomas de Angelópolis',
    address: 'Blvd. los Reyes 6201, Lomas de Angelópolis, 72830 San Bernardino Tlaxcalancingo, Pue.',
    mapsUrl: 'https://maps.google.com/?q=Blvd.+los+Reyes+6201+Lomas+de+Angelópolis+Puebla',
    phone: null,
    schedule: {
      weekdays: 'Lunes a Viernes: 9:00 AM - 8:30 PM',
      weekend: 'Sábado y Domingo: 12:00 PM - 8:30 PM',
    },
  },
] as const;
