import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { useCallback } from 'react';

export type Language = 'es' | 'en';

export const useTranslation = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  
  const currentLang = (searchParams.get('lang') as Language) || 'es';
  
  const setLanguage = useCallback((lang: Language) => {
    const params = new URLSearchParams(searchParams);
    if (lang === 'es') {
      params.delete('lang'); // Default es español, no necesitamos el parámetro
    } else {
      params.set('lang', lang);
    }
    
    const queryString = params.toString();
    const newUrl = queryString ? `${pathname}?${queryString}` : pathname;
    router.push(newUrl);
  }, [searchParams, router, pathname]);
  
  return { currentLang, setLanguage };
};

// Traducciones globales
export const translations = {
  // Header
  header: {
    es: 'Adriana Mejía - CV Digital',
    en: 'Adriana Mejía - Digital Resume'
  },
  
  // Botones comunes
  contact: {
    es: 'Contactar',
    en: 'Contact'
  },
  backToCV: {
    es: 'Volver al CV',
    en: 'Back to Resume'
  },
  viewFullCase: {
    es: 'Ver caso completo',
    en: 'View full case'
  },
  seeMoreProjects: {
    es: 'Ver más proyectos',
    en: 'See more projects'
  },
  
  // Página principal
  home: {
    title: {
      es: 'ADRIANA MEJÍA',
      en: 'ADRIANA MEJÍA'
    },
    subtitle: {
      es: 'Marketing Digital & Project Management',
      en: 'Digital Marketing & Project Management'
    },
    description: {
      es: 'Especialista en marketing digital con experiencia internacional, liderando equipos y optimizando campañas que generan resultados medibles.',
      en: 'Digital marketing specialist with international experience, leading teams and optimizing campaigns that generate measurable results.'
    },
    experience: {
      es: 'Experiencia Destacada',
      en: 'Featured Experience'
    },
    experienceDesc: {
      es: 'Proyectos que demuestran mi capacidad de generar resultados',
      en: 'Projects that demonstrate my ability to generate results'
    },
    education: {
      es: 'Formación Académica',
      en: 'Academic Background'
    },
    skills: {
      es: 'Habilidades Técnicas',
      en: 'Technical Skills'
    }
  },
  
  // BluCactus
  blucactus: {
    title: {
      es: 'BLUCACTUS MX',
      en: 'BLUCACTUS MX'
    },
    role: {
      es: 'Project Manager & Paid Media Team Manager',
      en: 'Project Manager & Paid Media Team Manager'
    },
    description: {
      es: 'Lideré equipos de 15+ especialistas en marketing digital, gestionando presupuestos de $500K+ mensuales y optimizando campañas que redujeron costos de adquisición en un 30%.',
      en: 'Led teams of 15+ digital marketing specialists, managing budgets of $500K+ monthly and optimizing campaigns that reduced acquisition costs by 30%.'
    },
    period: {
      es: 'Período: Enero 2023 - Febrero 2025 | Modalidad: Remoto',
      en: 'Period: January 2023 - February 2025 | Mode: Remote'
    },
    roleTitle: {
      es: 'Mi Rol en BluCactus',
      en: 'My Role at BluCactus'
    },
    achievements: {
      es: 'Logros Principales',
      en: 'Key Achievements'
    },
    achievementsList: {
      es: [
        'Dirigí campañas de Meta Ads de alto volumen, reduciendo costos de adquisición en 30%',
        'Orquesté 9+ proyectos concurrentes across diversas industrias',
        'Optimicé workflows para equipos cross-funcionales internacionales',
        'Mejoré tasas de entrega en tiempo en 25%'
      ],
      en: [
        'Led high-volume Meta Ads campaigns, reducing acquisition costs by 30%',
        'Orchestrated 9+ concurrent projects across diverse industries',
        'Optimized workflows for cross-functional international teams',
        'Improved on-time delivery rates by 25%'
      ]
    },
    ctaTitle: {
      es: '¿Necesitas Optimizar tus Campañas?',
      en: 'Need to Optimize Your Campaigns?'
    },
    ctaDescription: {
      es: 'Si tu empresa maneja presupuestos grandes en marketing digital o necesita optimizar equipos remotos, mi experiencia reduciendo CPL en 30% puede transformar tus resultados.',
      en: 'If your company handles large digital marketing budgets or needs to optimize remote teams, my experience reducing CPL by 30% can transform your results.'
    },
    ctaButton: {
      es: 'Hablemos de tu Proyecto',
      en: 'Let\'s Talk About Your Project'
    }
  },
  
  // Kadabra
  kadabra: {
    title: {
      es: 'KADABRA PRODUCTIONS',
      en: 'KADABRA PRODUCTIONS'
    },
    role: {
      es: 'Social Media Manager',
      en: 'Social Media Manager'
    },
    description: {
      es: 'Mi experiencia en marketing intercultural en Casablanca, Marruecos, gestionando campañas para instituciones educativas internacionales y desarrollando estrategias multiculturales efectivas.',
      en: 'My experience in intercultural marketing in Casablanca, Morocco, managing campaigns for international educational institutions and developing effective multicultural strategies.'
    },
    period: {
      es: 'Período: 2018 - 2020 | Ubicación: Casablanca, Marruecos',
      en: 'Period: 2018 - 2020 | Location: Casablanca, Morocco'
    },
    roleTitle: {
      es: 'Mi Rol en Kadabra',
      en: 'My Role at Kadabra'
    },
    responsibilities: {
      es: 'Responsabilidades Clave',
      en: 'Key Responsibilities'
    },
    responsibilitiesList: {
      es: [
        'Lideré campañas de marketing pagado para Lycée Français Louis-Massignon',
        'Conceptualicé y ejecuté estrategias audiovisuales creativas para engagement',
        'Colaboré con equipos multiculturales para localizar campañas',
        'Gestioné presencia en Facebook e Instagram para mercados diversos'
      ],
      en: [
        'Led paid marketing campaigns for Lycée Français Louis-Massignon',
        'Conceptualized and executed creative audiovisual strategies for engagement',
        'Collaborated with multicultural teams to localize campaigns',
        'Managed Facebook and Instagram presence for diverse markets'
      ]
    },
    projectsTitle: {
      es: 'Proyectos Destacados',
      en: 'Featured Projects'
    },
    projectsDesc: {
      es: 'Campañas exitosas en el mercado marroquí con enfoque intercultural',
      en: 'Successful campaigns in the Moroccan market with intercultural focus'
    },
    ctaTitle: {
      es: '¿Necesitas Marketing Intercultural?',
      en: 'Need Intercultural Marketing?'
    },
    ctaDescription: {
      es: 'Si tu empresa busca expandirse a mercados internacionales o conectar con audiencias multiculturales, mi experiencia en Marruecos puede ser exactamente lo que necesitas.',
      en: 'If your company seeks to expand to international markets or connect with multicultural audiences, my experience in Morocco might be exactly what you need.'
    }
  },
  
  // Somos Volt
  volt: {
    title: {
      es: 'SOMOS VOLT',
      en: 'SOMOS VOLT'
    },
    tagline: {
      es: 'WE FRAME YOUR BRAND\'S BEST ANGLE',
      en: 'WE FRAME YOUR BRAND\'S BEST ANGLE'
    },
    description: {
      es: 'Mi experiencia como Creative Project Manager en esta agencia de branding y diseño creativo con sede en San Diego, CA.',
      en: 'My experience as Creative Project Manager at this branding and creative design agency based in San Diego, CA.'
    },
    roleTitle: {
      es: 'MI ROL EN VOLT',
      en: 'MY ROLE AT VOLT'
    },
    role: {
      es: 'Creative Project Manager',
      en: 'Creative Project Manager'
    },
    roleDesc: {
      es: 'Responsable de coordinar y ejecutar proyectos creativos para marcas emergentes y de prestigio, incluyendo sesiones fotográficas profesionales y desarrollo de identidad visual, aplicando metodologías ágiles para garantizar entregas de alta calidad.',
      en: 'Responsible for coordinating and executing creative projects for emerging and prestigious brands, including professional photo sessions and visual identity development, applying agile methodologies to ensure high-quality deliveries.'
    },
    period: {
      es: 'Período',
      en: 'Period'
    },
    periodValue: {
      es: 'Febrero 2025 - Septiembre 2025',
      en: 'February 2025 - September 2025'
    },
    methodology: {
      es: 'Metodología',
      en: 'Methodology'
    },
    methodologyDesc: {
      es: 'Implementé frameworks de Scrum y Kanban para optimizar flujos de trabajo y mantener comunicación transparente con clientes.',
      en: 'Implemented Scrum and Kanban frameworks to optimize workflows and maintain transparent communication with clients.'
    },
    keyImpact: {
      es: 'IMPACTO CLAVE',
      en: 'KEY IMPACT'
    },
    projectsTitle: {
      es: 'PROYECTOS DESTACADOS',
      en: 'FEATURED PROJECTS'
    },
    brandsTitle: {
      es: 'MARCAS DE PRESTIGIO',
      en: 'PRESTIGIOUS BRANDS'
    },
    brandsDesc: {
      es: 'Colaboraciones con marcas reconocidas que confían en nuestra experiencia para sesiones fotográficas profesionales y diseño de identidad visual.',
      en: 'Collaborations with recognized brands that trust our experience for professional photo sessions and visual identity design.'
    }
  },
  
  // Kraken
  kraken: {
    title: {
      es: 'KRAKEN VIDEOS',
      en: 'KRAKEN VIDEOS'
    },
    role: {
      es: 'Marketing Manager',
      en: 'Marketing Manager'
    },
    description: {
      es: 'Lideré estrategias de marketing para una red de creadores con más de 100M de seguidores combinados, gestionando equipos de 50+ personas y optimizando campañas virales.',
      en: 'Led marketing strategies for a creator network with over 100M combined followers, managing teams of 50+ people and optimizing viral campaigns.'
    }
  }
};

// Hook para obtener texto traducido
export const useT = () => {
  const { currentLang } = useTranslation();
  
  const t = useCallback((key: string, obj?: any): string => {
    const keys = key.split('.');
    let value = obj || translations;
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value?.[currentLang] || value?.es || key;
  }, [currentLang]);
  
  return t;
};
