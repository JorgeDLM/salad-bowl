export interface Package {
  id: string;
  name: string;
  price: string;
  originalPrice: string;
  priceNumber: number;
  description: string;
  shortDescription: string;
  features: string[];
  result: string;
  color: {
    primary: string;
    secondary: string;
    gradient: string;
    border: string;
  };
  popular?: boolean;
}

export const packages: Package[] = [
  {
    id: 'starter-web',
    name: 'Starter Web',
    price: '$20,000',
    originalPrice: '$50,000',
    priceNumber: 20000,
    description: 'Sitio web profesional completo con diseño moderno y SEO',
    shortDescription: 'Perfecto para emprender o renovar tu presencia digital',
    features: [
      'Diseño UI/UX profesional GRATIS - Ahorra $15K en diseñador',
      'Sitio web profesional - Diseño que convierte',
      'SEO básico - Aparece en Google',
      'Responsive design - Se ve bien en móvil',
      '3 meses soporte - Te acompañamos',
      'Capacitación incluida - Aprende a usarlo'
    ],
    result: '+300% más leads calificados',
    color: {
      primary: 'blue-400',
      secondary: 'blue-300',
      gradient: 'from-blue-900/40 to-purple-900/40',
      border: 'border-blue-400'
    }
  },
  {
    id: 'app-profesional',
    name: 'App Profesional',
    price: '$80,000',
    originalPrice: '$200,000',
    priceNumber: 80000,
    description: 'Aplicación móvil completa con panel administrativo y sistema de pagos',
    shortDescription: 'Para negocios que quieren dominar su mercado',
    features: [
      'Diseño UI/UX profesional GRATIS - Ahorra $25K en diseñador',
      'App móvil nativa - iOS y Android',
      'Panel administrativo - Control total',
      'Sistema de pagos - Cobra automático',
      'Notificaciones push - Conecta con clientes',
      '6 meses soporte - Acompañamiento extendido'
    ],
    result: '+500% engagement con clientes',
    color: {
      primary: 'green-400',
      secondary: 'green-300',
      gradient: 'from-green-900/40 to-blue-900/40',
      border: 'border-green-400'
    },
    popular: true
  },
  {
    id: 'sistema-completo',
    name: 'Sistema Completo',
    price: '$160,000',
    originalPrice: '$400,000',
    priceNumber: 160000,
    description: 'Ecosistema digital completo con automatización total',
    shortDescription: 'Ecosistema digital completo para empresas serias',
    features: [
      'Diseño UI/UX profesional GRATIS - Ahorra $50K en diseñador',
      'Ecosistema completo - Web + App + CRM',
      'Automatización total - Procesos sin intervención',
      'Equipo dedicado - Tu propio team',
      'Soporte 24/7 - Siempre disponibles',
      'Escalabilidad ilimitada - Crece sin límites'
    ],
    result: 'Ahorro de 80% en operaciones',
    color: {
      primary: 'purple-400',
      secondary: 'purple-300',
      gradient: 'from-purple-900/40 to-pink-900/40',
      border: 'border-purple-400'
    }
  }
];

export const getPackageById = (id: string): Package | undefined => {
  return packages.find(pkg => pkg.id === id);
};

export const getPackageByName = (name: string): Package | undefined => {
  return packages.find(pkg => pkg.name === name);
};
