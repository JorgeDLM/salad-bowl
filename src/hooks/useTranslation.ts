import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { useCallback, useState, useEffect } from 'react';

export type Language = 'es' | 'en';
export const useTranslation = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  
  const [currentLang, setCurrentLang] = useState<'es' | 'en'>('es');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const langFromUrl = searchParams.get('lang') as 'es' | 'en';
    if (langFromUrl && (langFromUrl === 'es' || langFromUrl === 'en')) {
      setCurrentLang(langFromUrl);
    }
  }, [searchParams]);

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
  
  // Función para crear URLs que preserven el idioma
  const createUrlWithLang = useCallback((path: string) => {
    if (currentLang === 'es') {
      return path; // No agregamos parámetro para español
    }
    const separator = path.includes('?') ? '&' : '?';
    return `${path}${separator}lang=${currentLang}`;
  }, [currentLang]);
  
  return { currentLang, setLanguage, createUrlWithLang };
};

// Traducciones globales
export const translations = {
  // Test simple
  test: {
    es: 'Prueba',
    en: 'Test'
  },
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
    roles: {
      marketingStrategist: {
        es: 'Marketing Strategist',
        en: 'Marketing Strategist'
      },
      teamLeadership: {
        es: 'Team Leader',
        en: 'Team Leader'
      },
      digitalPerformance: {
        es: 'Digital Performance',
        en: 'Digital Performance'
      },
      projectManager: {
        es: 'Project Manager',
        en: 'Project Manager'
      }
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
    },
    location: {
      es: 'Ubicación',
      en: 'Location'
    },
    locationValue: {
      es: 'Puebla, México',
      en: 'Puebla, Mexico'
    },
    educationLabel: {
      es: 'Educación',
      en: 'Education'
    },
    languagesLabel: {
      es: 'Idiomas',
      en: 'Languages'
    },
    languages: {
      spanish: {
        es: 'Español (nativo)',
        en: 'Spanish (native)'
      },
      english: {
        es: 'Inglés (profesional)',
        en: 'English (professional)'
      },
      french: {
        es: 'Francés (básico)',
        en: 'French (basic)'
      }
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
    },
    // Achievement metrics
    cplReduction: {
      es: 'Reducción CPL',
      en: 'CPL Reduction'
    },
    monthlyBudget: {
      es: 'Presupuesto Mensual',
      en: 'Monthly Budget'
    },
    specialists: {
      es: 'Especialistas',
      en: 'Specialists'
    },
    deliveryImprovement: {
      es: 'Mejora en Delivery',
      en: 'Delivery Improvement'
    },
    // Achievement details
    metaAdsOptimization: {
      es: 'Optimización de Meta Ads',
      en: 'Meta Ads Optimization'
    },
    adBudgetManagement: {
      es: 'Gestión de inversión publicitaria',
      en: 'Advertising investment management'
    },
    teamLeadership: {
      es: 'Equipo bajo mi liderazgo',
      en: 'Team under my leadership'
    },
    workflowOptimization: {
      es: 'Optimización de workflows',
      en: 'Workflow optimization'
    },
    // Responsibilities
    metaAdsCampaigns: {
      es: 'Gestión de Campañas Meta Ads',
      en: 'Meta Ads Campaign Management'
    },
    metaAdsCampaignsDesc: {
      es: 'Dirigí campañas de alto volumen con presupuestos superiores a $500K mensuales, logrando reducción del 30% en costos de adquisición.',
      en: 'Led high-volume campaigns with budgets exceeding $500K monthly, achieving a 30% reduction in acquisition costs.'
    },
    teamLeadershipTitle: {
      es: 'Liderazgo de Equipo',
      en: 'Team Leadership'
    },
    teamLeadershipDesc: {
      es: 'Coordiné 15+ especialistas en marketing digital, implementando metodologías ágiles para maximizar la eficiencia.',
      en: 'Coordinated 15+ digital marketing specialists, implementing agile methodologies to maximize efficiency.'
    },
    workflowOptimizationTitle: {
      es: 'Optimización de Workflows',
      en: 'Workflow Optimization'
    },
    workflowOptimizationDesc: {
      es: 'Implementé procesos optimizados para equipos internacionales, mejorando las tasas de entrega en un 25%.',
      en: 'Implemented optimized processes for international teams, improving delivery rates by 25%.'
    },
    concurrentProjects: {
      es: 'Gestión de Proyectos Concurrentes',
      en: 'Concurrent Project Management'
    },
    concurrentProjectsDesc: {
      es: 'Orquesté 9+ proyectos simultáneos across diversas industrias, asegurando consistencia en brand messaging.',
      en: 'Orchestrated 9+ simultaneous projects across diverse industries, ensuring consistency in brand messaging.'
    },
    // Métricas adicionales BluCactus
    monthlyBudgetDetail: {
      es: 'Gestión de inversión publicitaria',
      en: 'Advertising investment management'
    },
    specialistsDetail: {
      es: 'Equipo bajo mi liderazgo',
      en: 'Team under my leadership'
    },
    deliveryImprovementDetail: {
      es: 'Optimización de workflows',
      en: 'Workflow optimization'
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
    heroDescription: {
      es: 'Mi experiencia única en marketing intercultural trabajando en Casablanca, Marruecos, donde desarrollé campañas para instituciones educativas internacionales y aprendí a navegar mercados multiculturales complejos.',
      en: 'My unique experience in intercultural marketing working in Casablanca, Morocco, where I developed campaigns for international educational institutions and learned to navigate complex multicultural markets.'
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
    },
    ctaButton: {
      es: 'Conversemos sobre tu Expansión',
      en: 'Let\'s Talk About Your Expansion'
    },
    // Featured Projects
    lyceeFrancaisTitle: {
      es: 'Lycée Français Louis-Massignon',
      en: 'Lycée Français Louis-Massignon'
    },
    lyceeFrancaisDesc: {
      es: 'Campaña de marketing pagado que logró un aumento del 50% en seguidores y 10% en inscripciones.',
      en: 'Paid marketing campaign that achieved a 50% increase in followers and 10% in enrollments.'
    },
    lyceeFrancaisImpact: {
      es: 'Crecimiento sostenible de la comunidad educativa',
      en: 'Sustainable growth of the educational community'
    },
    kidsUsTitle: {
      es: 'Kids&Us School',
      en: 'Kids&Us School'
    },
    kidsUsDesc: {
      es: 'Estrategias audiovisuales creativas para engagement a través de Facebook e Instagram.',
      en: 'Creative audiovisual strategies for engagement through Facebook and Instagram.'
    },
    kidsUsImpact: {
      es: 'Mayor participación de padres de familia',
      en: 'Increased parent participation'
    },
    multiculturalTitle: {
      es: 'Campañas Multiculturales',
      en: 'Multicultural Campaigns'
    },
    multiculturalDesc: {
      es: 'Colaboración con equipos diversos para localizar y crear campañas para mercados específicos.',
      en: 'Collaboration with diverse teams to localize and create campaigns for specific markets.'
    },
    multiculturalImpact: {
      es: 'Adaptación cultural efectiva',
      en: 'Effective cultural adaptation'
    },
    // Project categories
    projectInternationalEducation: {
      es: 'Educación Internacional',
      en: 'International Education'
    },
    childEducation: {
      es: 'Educación Infantil',
      en: 'Child Education'
    },
    globalMarketing: {
      es: 'Marketing Global',
      en: 'Global Marketing'
    },
    impactLabel: {
      es: 'Impacto:',
      en: 'Impact:'
    },
    // Métricas y logros
    culturalCampaigns: {
      es: 'Campañas Multiculturales',
      en: 'Multicultural Campaigns'
    },
    educationalInstitutions: {
      es: 'Instituciones Educativas',
      en: 'Educational Institutions'
    },
    marketGrowth: {
      es: 'Crecimiento de Mercado',
      en: 'Market Growth'
    },
    socialEngagement: {
      es: 'Engagement Social',
      en: 'Social Engagement'
    },
    // Detalles de métricas
    crossCulturalCampaigns: {
      es: 'Campañas cross-culturales exitosas',
      en: 'Successful cross-cultural campaigns'
    },
    internationalEducation: {
      es: 'Sector educación internacional',
      en: 'International education sector'
    },
    localMarketGrowth: {
      es: 'Crecimiento en mercado local',
      en: 'Local market growth'
    },
    averageEngagement: {
      es: 'Promedio de engagement obtenido',
      en: 'Average engagement achieved'
    },
    // Aprendizajes
    whatILearned: {
      es: 'Lo Que Aprendí',
      en: 'What I Learned'
    },
    interculturalMarketing: {
      es: 'Marketing Intercultural',
      en: 'Intercultural Marketing'
    },
    interculturalMarketingDesc: {
      es: 'Desarrollé expertise en adaptar mensajes de marca para diferentes culturas, navegando sensibilidades locales mientras mantenía la coherencia global de la marca.',
      en: 'Developed expertise in adapting brand messages for different cultures, navigating local sensitivities while maintaining global brand coherence.'
    },
    multilingualContent: {
      es: 'Contenido Multilingüe',
      en: 'Multilingual Content'
    },
    multilingualContentDesc: {
      es: 'Perfeccioné la habilidad de crear contenido efectivo en árabe, francés y español, entendiendo las sutilezas culturales de cada idioma.',
      en: 'Perfected the ability to create effective content in Arabic, French, and Spanish, understanding the cultural subtleties of each language.'
    },
    internationalTeamwork: {
      es: 'Trabajo en Equipos Internacionales',
      en: 'International Teamwork'
    },
    internationalTeamworkDesc: {
      es: 'Aprendí a colaborar efectivamente con equipos diversos, coordinando proyectos across diferentes zonas horarias y culturas de trabajo.',
      en: 'Learned to collaborate effectively with diverse teams, coordinating projects across different time zones and work cultures.'
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
    heroDescription: {
      es: 'Mi experiencia liderando proyectos creativos en una agencia de branding premium con sede en San Diego, donde coordiné sesiones fotográficas de alta gama y desarrollé identidades visuales para marcas de prestigio.',
      en: 'My experience leading creative projects at a premium branding agency based in San Diego, where I coordinated high-end photo sessions and developed visual identities for prestigious brands.'
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
    },
    // Métricas y logros
    simultaneousProjects: {
      es: 'Proyectos Simultáneos',
      en: 'Simultaneous Projects'
    },
    premiumBrands: {
      es: 'Marcas Premium',
      en: 'Premium Brands'
    },
    clientSatisfaction: {
      es: 'Satisfacción del Cliente',
      en: 'Client Satisfaction'
    },
    onTimeDelivery: {
      es: 'Entrega a Tiempo',
      en: 'On-Time Delivery'
    },
    // Detalles de métricas
    concurrentProjectManagement: {
      es: 'Gestión de proyectos concurrentes',
      en: 'Concurrent project management'
    },
    highEndBrandCollaborations: {
      es: 'Colaboraciones con marcas de alto nivel',
      en: 'High-end brand collaborations'
    },
    averageClientSatisfaction: {
      es: 'Promedio de satisfacción del cliente',
      en: 'Average client satisfaction'
    },
    projectDeliveryRate: {
      es: 'Tasa de entrega de proyectos',
      en: 'Project delivery rate'
    },
    // Responsabilidades
    keyResponsibilities: {
      es: 'Responsabilidades Clave',
      en: 'Key Responsibilities'
    },
    creativeCoordination: {
      es: 'Coordinación de proyectos creativos para marcas emergentes y establecidas',
      en: 'Creative project coordination for emerging and established brands'
    },
    photoSessionManagement: {
      es: 'Gestión de sesiones fotográficas profesionales de alta gama',
      en: 'Management of high-end professional photo sessions'
    },
    visualIdentityDevelopment: {
      es: 'Desarrollo de identidades visuales coherentes y impactantes',
      en: 'Development of coherent and impactful visual identities'
    },
    agileMethodologyImplementation: {
      es: 'Implementación de metodologías ágiles para optimizar entregas',
      en: 'Implementation of agile methodologies to optimize deliveries'
    },
    // CTA
    ctaTitle: {
      es: '¿Necesitas Gestión de Proyectos Creativos?',
      en: 'Need Creative Project Management?'
    },
    ctaDescription: {
      es: 'Si tu agencia o marca necesita coordinar proyectos creativos complejos con metodologías ágiles y resultados de alta calidad, mi experiencia en Volt puede impulsar tu próximo proyecto.',
      en: 'If your agency or brand needs to coordinate complex creative projects with agile methodologies and high-quality results, my experience at Volt can drive your next project.'
    },
    ctaButton: {
      es: 'Hablemos de tu Proyecto Creativo',
      en: 'Let\'s Talk About Your Creative Project'
    },
    // Projects
    premiumBrandTitle: {
      es: 'Premium Brand Photography & Identity',
      en: 'Premium Brand Photography & Identity'
    },
    premiumBrandDesc: {
      es: 'Lideré proyectos para marcas de prestigio como Vessel Brand, coordinando sesiones fotográficas profesionales y desarrollo de identidad visual que reflejan valores premium.',
      en: 'Led projects for prestigious brands like Vessel Brand, coordinating professional photo sessions and visual identity development that reflect premium values.'
    },
    premiumBrandImpact: {
      es: '15+ marcas de prestigio',
      en: '15+ prestigious brands'
    },
    creativeCampaignTitle: {
      es: 'Creative Campaign Management',
      en: 'Creative Campaign Management'
    },
    creativeCampaignDesc: {
      es: 'Coordiné campañas creativas multi-canal aplicando metodologías ágiles para garantizar entregas puntuales y calidad excepcional.',
      en: 'Coordinated multi-channel creative campaigns applying agile methodologies to ensure timely deliveries and exceptional quality.'
    },
    creativeCampaignImpact: {
      es: '9+ proyectos simultáneos',
      en: '9+ simultaneous projects'
    },
    clientRelationshipTitle: {
      es: 'Client Relationship Excellence',
      en: 'Client Relationship Excellence'
    },
    clientRelationshipDesc: {
      es: 'Construí relaciones sólidas con clientes a través de comunicación transparente y entrega consistente de resultados.',
      en: 'Built solid relationships with clients through transparent communication and consistent delivery of results.'
    },
    clientRelationshipImpact: {
      es: '95% retención de clientes',
      en: '95% client retention'
    },
    // Brands section
    brandsDescription: {
      es: 'Colaboraciones con marcas reconocidas que confían en nuestra experiencia para sesiones fotográficas profesionales y diseño de identidad visual.',
      en: 'Collaborations with recognized brands that trust our experience for professional photo sessions and visual identity design.'
    },
    vesselBrandDesc: {
      es: 'Marca de lifestyle premium que confió en nuestro equipo para desarrollar su identidad visual y ejecutar sesiones fotográficas de alta calidad que capturan la esencia de su propuesta de valor.',
      en: 'Premium lifestyle brand that trusted our team to develop their visual identity and execute high-quality photo sessions that capture the essence of their value proposition.'
    },
    professionalSessions: {
      es: 'Sesiones fotográficas profesionales',
      en: 'Professional photo sessions'
    },
    visualIdentityDesign: {
      es: 'Diseño de identidad visual',
      en: 'Visual identity design'
    },
    premiumBrandStrategy: {
      es: 'Estrategia de marca premium',
      en: 'Premium brand strategy'
    },
    // Services
    premiumPhotography: {
      es: 'Fotografía Premium',
      en: 'Premium Photography'
    },
    premiumPhotographyDesc: {
      es: 'Sesiones profesionales que capturan la esencia y valores de marcas de prestigio.',
      en: 'Professional sessions that capture the essence and values of prestigious brands.'
    },
    visualIdentity: {
      es: 'Identidad Visual',
      en: 'Visual Identity'
    },
    visualIdentityDesc: {
      es: 'Desarrollo de identidades visuales coherentes que reflejan la personalidad de cada marca.',
      en: 'Development of coherent visual identities that reflect each brand\'s personality.'
    },
    brandStrategy: {
      es: 'Estrategia de Marca',
      en: 'Brand Strategy'
    },
    brandStrategyDesc: {
      es: 'Consultoría estratégica para posicionar marcas en segmentos premium del mercado.',
      en: 'Strategic consulting to position brands in premium market segments.'
    },
    // Skills developed
    skillsDeveloped: {
      es: 'HABILIDADES DESARROLLADAS',
      en: 'SKILLS DEVELOPED'
    },
    whatILearned: {
      es: 'LO QUE APRENDÍ',
      en: 'WHAT I LEARNED'
    },
    learningQuote: {
      es: 'Perfeccioné la gestión de múltiples proyectos creativos y el manejo de expectativas de clientes exigentes. Aprendí que la clave del éxito en proyectos creativos es la comunicación transparente y la entrega consistente de resultados que superen las expectativas.',
      en: 'I perfected the management of multiple creative projects and handling demanding client expectations. I learned that the key to success in creative projects is transparent communication and consistent delivery of results that exceed expectations.'
    },
    transparentCommunication: {
      es: 'comunicación transparente',
      en: 'transparent communication'
    },
    consistentDelivery: {
      es: 'entrega consistente',
      en: 'consistent delivery'
    },
    // Final CTA
    finalCtaTitle: {
      es: '¿LISTO PARA TRABAJAR JUNTOS?',
      en: 'READY TO WORK TOGETHER?'
    },
    finalCtaDesc: {
      es: 'Si buscas una project manager que entienda el mundo creativo y sepa entregar resultados, hablemos.',
      en: 'If you\'re looking for a project manager who understands the creative world and knows how to deliver results, let\'s talk.'
    },
    finalCtaButton: {
      es: 'CONTACTAR AHORA',
      en: 'CONTACT NOW'
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
    roleSubtitle: {
      es: 'Marketing Manager & Content Strategist',
      en: 'Marketing Manager & Content Strategist'
    },
    description: {
      es: 'Lideré estrategias de marketing para una red de creadores con más de 100M de seguidores combinados, gestionando equipos de 50+ personas y optimizando campañas virales.',
      en: 'Led marketing strategies for a creator network with over 100M combined followers, managing teams of 50+ people and optimizing viral campaigns.'
    },
    heroDescription: {
      es: 'Lideré la estrategia de marketing para las cuentas más grandes de contenido digital en Latinoamérica, gestionando equipos de 50+ personas y audiencias de 100M+ seguidores combinados.',
      en: 'Led marketing strategy for the largest digital content accounts in Latin America, managing teams of 50+ people and audiences of 100M+ combined followers.'
    },
    // Mi Rol en Kraken
    myRole: {
      es: 'Mi Rol en Kraken',
      en: 'My Role at Kraken'
    },
    period: {
      es: 'Período: Marzo - Mayo 2024',
      en: 'Period: March - May 2024'
    },
    keyResponsibilities: {
      es: 'Responsabilidades Clave',
      en: 'Key Responsibilities'
    },
    // Responsabilidades
    teamCoordination: {
      es: 'Coordinación de equipos multidisciplinarios de 50+ personas',
      en: 'Coordination of multidisciplinary teams of 50+ people'
    },
    contentStrategy: {
      es: 'Estrategia de contenido para cuentas con 100M+ seguidores',
      en: 'Content strategy for accounts with 100M+ followers'
    },
    performanceAnalysis: {
      es: 'Análisis de performance y optimización de engagement',
      en: 'Performance analysis and engagement optimization'
    },
    editorialManagement: {
      es: 'Gestión de calendarios editoriales y campañas virales',
      en: 'Editorial calendar management and viral campaigns'
    },
    // Métricas
    followersManaged: {
      es: 'Seguidores Gestionados',
      en: 'Followers Managed'
    },
    combinedAudience: {
      es: 'Audiencia combinada de todas las cuentas',
      en: 'Combined audience of all accounts'
    },
    teamMembers: {
      es: 'Personas en el Equipo',
      en: 'Team Members'
    },
    teamCoordinationDesc: {
      es: 'Coordinación de equipos multidisciplinarios',
      en: 'Multidisciplinary team coordination'
    },
    monthlyViews: {
      es: 'Views Mensuales',
      en: 'Monthly Views'
    },
    contentReach: {
      es: 'Alcance promedio de contenido producido',
      en: 'Average reach of produced content'
    },
    engagementRate: {
      es: 'Engagement Rate',
      en: 'Engagement Rate'
    },
    viralContentInteraction: {
      es: 'Promedio de interacción en contenido viral',
      en: 'Average interaction on viral content'
    },
    // Cuentas Gestionadas
    managedAccounts: {
      es: 'Cuentas Gestionadas',
      en: 'Managed Accounts'
    },
    managedAccountsDesc: {
      es: 'Los creadores de contenido más influyentes de Latinoamérica bajo mi coordinación estratégica',
      en: 'The most influential content creators in Latin America under my strategic coordination'
    },
    // Lo que aprendí
    whatILearned: {
      es: 'Lo Que Aprendí',
      en: 'What I Learned'
    },
    massiveAudienceManagement: {
      es: 'Gestión de Audiencias Masivas',
      en: 'Massive Audience Management'
    },
    massiveAudienceDesc: {
      es: 'Desarrollé expertise en coordinar estrategias de contenido para audiencias de más de 100 millones de seguidores, manteniendo engagement alto y sostenible.',
      en: 'Developed expertise in coordinating content strategies for audiences of over 100 million followers, maintaining high and sustainable engagement.'
    },
    largeTeamCoordination: {
      es: 'Coordinación de Equipos Grandes',
      en: 'Large Team Coordination'
    },
    largeTeamDesc: {
      es: 'Perfeccioné la habilidad de liderar equipos multidisciplinarios de 50+ personas, coordinando desde creativos hasta analistas de datos para maximizar el impacto del contenido.',
      en: 'Perfected the ability to lead multidisciplinary teams of 50+ people, coordinating from creatives to data analysts to maximize content impact.'
    },
    viralPerformanceAnalysis: {
      es: 'Análisis de Performance Viral',
      en: 'Viral Performance Analysis'
    },
    viralPerformanceDesc: {
      es: 'Aprendí a identificar patrones en contenido viral y optimizar estrategias en tiempo real para maximizar alcance y engagement en múltiples plataformas simultáneamente.',
      en: 'Learned to identify patterns in viral content and optimize strategies in real time to maximize reach and engagement across multiple platforms simultaneously.'
    },
    // Quote
    managementQuote: {
      es: 'Gestionar audiencias de 100M+ seguidores me enseñó que el éxito en marketing digital no solo viene de la creatividad, sino de la coordinación perfecta entre equipos grandes y adaptación constante a las tendencias.',
      en: 'Managing audiences of 100M+ followers taught me that success in digital marketing doesn\'t just come from creativity, but from perfect coordination between large teams and constant adaptation to trends.'
    },
    perfectCoordination: {
      es: 'coordinación perfecta',
      en: 'perfect coordination'
    },
    constantAdaptation: {
      es: 'adaptación constante',
      en: 'constant adaptation'
    },
    // CTA Section
    ctaTitle: {
      es: '¿Necesitas Gestionar Audiencias Masivas?',
      en: 'Need to Manage Massive Audiences?'
    },
    ctaDescription: {
      es: 'Si tu empresa maneja cuentas grandes o busca escalar su presencia digital, mi experiencia con 100M+ seguidores puede ser exactamente lo que necesitas.',
      en: 'If your company manages large accounts or seeks to scale its digital presence, my experience with 100M+ followers might be exactly what you need.'
    },
    ctaButton: {
      es: 'Hablemos de tu Proyecto',
      en: 'Let\'s Talk About Your Project'
    },
    // Managed Accounts Descriptions
    luanpalomeraDesc: {
      es: 'Música y entretenimiento',
      en: 'Music and entertainment'
    },
    luanpalomeraContent: {
      es: 'Contenido musical y colaboraciones artísticas',
      en: 'Musical content and artistic collaborations'
    },
    curiosobenDesc: {
      es: 'Contenido educativo y curiosidades',
      en: 'Educational content and curiosities'
    },
    curiosobenContent: {
      es: 'Videos educativos que generan engagement masivo',
      en: 'Educational videos that generate massive engagement'
    },
    wefereDesc: {
      es: 'Canal de entretenimiento y lifestyle',
      en: 'Entertainment and lifestyle channel'
    },
    wefereContent: {
      es: 'Videos virales de comedia y tendencias',
      en: 'Viral comedy and trending videos'
    },
    rayitoDesc: {
      es: 'Influencer de lifestyle y moda',
      en: 'Lifestyle and fashion influencer'
    },
    rayitoContent: {
      es: 'Contenido de moda y estilo de vida',
      en: 'Fashion and lifestyle content'
    },
    lafokaDesc: {
      es: 'Comediante y creador de contenido',
      en: 'Comedian and content creator'
    },
    lafokaContent: {
      es: 'Videos de comedia que se vuelven virales',
      en: 'Comedy videos that go viral'
    },
    // Common labels
    followers: {
      es: 'Seguidores',
      en: 'Followers'
    },
    platform: {
      es: 'Plataforma',
      en: 'Platform'
    },
    viewProfile: {
      es: 'Ver perfil',
      en: 'View profile'
    }
  },

  // KPIs Section
  kpis: {
    title: {
      es: '¡Mis Números Hablan!',
      en: 'My Numbers Speak!'
    },
    subtitle: {
      es: 'Resultados que cualquier empresa querría tener',
      en: 'Results any company would want to have'
    },
    followersManaged: {
      es: 'Seguidores gestionados',
      en: 'Followers managed'
    },
    socialAccounts: {
      es: 'Cuentas de redes sociales',
      en: 'Social media accounts'
    },
    peopleLed: {
      es: 'Personas lideradas',
      en: 'People led'
    },
    multidisciplinaryTeams: {
      es: 'Equipos multidisciplinarios',
      en: 'Multidisciplinary teams'
    },
    costReduction: {
      es: 'Reducción costos',
      en: 'Cost reduction'
    },
    leadAcquisition: {
      es: 'Adquisición de leads',
      en: 'Lead acquisition'
    },
    experience: {
      es: 'Experiencia',
      en: 'Experience'
    },
    digitalMarketing: {
      es: 'Marketing digital',
      en: 'Digital marketing'
    },
    years: {
      es: ' años',
      en: ' years'
    },
    impressive: {
      es: '¿Impresionante, verdad?',
      en: 'Impressive, right?'
    },
    talkProject: {
      es: '¡Hablemos de tu proyecto!',
      en: 'Let\'s talk about your project!'
    }
  },

  // Personal Section
  personal: {
    title: {
      es: 'Más allá del trabajo',
      en: 'Beyond work'
    },
    subtitle: {
      es: 'Lo que realmente me mueve es conectar con personas y crear en espacios donde la creatividad cobra vida',
      en: 'What really drives me is connecting with people and creating in spaces where creativity comes to life'
    },
    whatFillsMe: {
      es: 'Lo que me llena',
      en: 'What fulfills me'
    },
    whatFillsMeDesc: {
      es: 'Conocer y conectar con gente nueva es lo que más disfruto. Me energiza desenvolverme en espacios creativos donde puedo desarrollar campañas de marketing y publicidad que realmente impacten.',
      en: 'Meeting and connecting with new people is what I enjoy most. I\'m energized by working in creative spaces where I can develop marketing and advertising campaigns that truly make an impact.'
    },
    myValues: {
      es: 'Mis valores',
      en: 'My values'
    },
    responsibility: {
      es: 'Responsabilidad',
      en: 'Responsibility'
    },
    leadership: {
      es: 'Liderazgo',
      en: 'Leadership'
    },
    perseverance: {
      es: 'Perseverancia',
      en: 'Perseverance'
    },
    discipline: {
      es: 'Disciplina',
      en: 'Discipline'
    },
    empathy: {
      es: 'Empatía',
      en: 'Empathy'
    },
    order: {
      es: 'Orden',
      en: 'Order'
    },
    harmony: {
      es: 'Armonía',
      en: 'Harmony'
    },
    respect: {
      es: 'Respeto',
      en: 'Respect'
    },
    myPassions: {
      es: 'Mis pasiones',
      en: 'My passions'
    },
    climbing: {
      es: 'Escalada',
      en: 'Climbing'
    },
    climbingDesc: {
      es: 'Desafíos que requieren estrategia y perseverancia',
      en: 'Challenges that require strategy and perseverance'
    },
    traveling: {
      es: 'Viajar',
      en: 'Traveling'
    },
    travelingDesc: {
      es: 'Conocer culturas y conectar con personas',
      en: 'Discovering cultures and connecting with people'
    },
    holisticWellness: {
      es: 'Bienestar holístico',
      en: 'Holistic wellness'
    },
    holisticWellnessDesc: {
      es: 'Equilibrio entre mente, cuerpo y espíritu',
      en: 'Balance between mind, body and spirit'
    },
    myEssence: {
      es: 'Mi esencia',
      en: 'My essence'
    },
    myEssenceDesc: {
      es: 'Soy una persona tranquila y hogareña, que valora profundamente la familia. Vivo sin vicios, buscando siempre la paz interior y el equilibrio en todo lo que hago.',
      en: 'I am a calm and homely person who deeply values family. I live without vices, always seeking inner peace and balance in everything I do.'
    }
  },

  // Projects Section
  projects: {
    blucactusImpact: {
      es: '30% reducción CPL',
      en: '30% CPL reduction'
    },
    blucactusDesc: {
      es: 'Lideré 15 especialistas gestionando $500K+ mensuales',
      en: 'Led 15 specialists managing $500K+ monthly'
    },
    krakenImpact: {
      es: '100M+ seguidores',
      en: '100M+ followers'
    },
    krakenDesc: {
      es: 'Gestión de equipos de 50+ personas y audiencias masivas',
      en: 'Managing teams of 50+ people and massive audiences'
    },
    voltImpact: {
      es: '9+ proyectos simultáneos',
      en: '9+ simultaneous projects'
    },
    voltDesc: {
      es: 'Metodologías ágiles y gestión de clientes premium',
      en: 'Agile methodologies and premium client management'
    },
    kadabraImpact: {
      es: '50% crecimiento',
      en: '50% growth'
    },
    kadabraDesc: {
      es: 'Marketing intercultural en Marruecos',
      en: 'Intercultural marketing in Morocco'
    },
    caseStudySoon: {
      es: 'Caso de estudio próximamente',
      en: 'Case study coming soon'
    }
  },

  // Education Section
  education: {
    subtitle: {
      es: 'Educación que respalda mi expertise',
      en: 'Education that supports my expertise'
    },
    bachelorDesc: {
      es: 'Formación integral en diseño creativo y producción publicitaria, combinando fundamentos artísticos con estrategias de comunicación efectiva.',
      en: 'Comprehensive training in creative design and advertising production, combining artistic fundamentals with effective communication strategies.'
    },
    communityManagerDesc: {
      es: 'Especialización en gestión de comunidades digitales y estrategias de marketing de contenidos para maximizar engagement y conversión.',
      en: 'Specialization in digital community management and content marketing strategies to maximize engagement and conversion.'
    }
  },

  // Skills Section
  skills: {
    subtitle: {
      es: 'Stack tecnológico que domino',
      en: 'Technology stack I master'
    },
    toolCategories: {
      es: 'Categorías de herramientas',
      en: 'Tool categories'
    },
    marketingAnalytics: {
      es: 'Marketing & Analytics',
      en: 'Marketing & Analytics'
    },
    designCreative: {
      es: 'Design & Creative',
      en: 'Design & Creative'
    },
    projectManagement: {
      es: 'Project Management',
      en: 'Project Management'
    }
  },

  // Common UI Elements
  ui: {
    contactMe: {
      es: '¡Contáctame!',
      en: 'Contact me!'
    },
    viewExperience: {
      es: 'Ver Experiencia',
      en: 'View Experience'
    },
    home: {
      es: 'Inicio',
      en: 'Home'
    },
    projects: {
      es: 'Proyectos',
      en: 'Projects'
    },
    backToHome: {
      es: 'Volver al inicio',
      en: 'Back to home'
    },
    openNavigationMenu: {
      es: 'Abrir menú de navegación',
      en: 'Open navigation menu'
    },
    mainNavigation: {
      es: 'Navegación principal',
      en: 'Main navigation'
    }
  },

  // Contact Modal
  contactModal: {
    title: {
      es: 'CONTACTAR',
      en: 'CONTACT'
    },
    callNow: {
      es: 'LLAMAR AHORA',
      en: 'CALL NOW'
    },
    sendWhatsApp: {
      es: 'ENVIAR WHATSAPP',
      en: 'SEND WHATSAPP'
    },
    cancel: {
      es: 'CANCELAR',
      en: 'CANCEL'
    },
    whatsappMessage: {
      es: '¡Hola Adriana! Me interesa conocer más sobre tu experiencia liderando equipos de marketing y gestionando audiencias masivas. ¿Podríamos agendar una conversación? 👋',
      en: 'Hello Adriana! I\'m interested in learning more about your experience leading marketing teams and managing massive audiences. Could we schedule a conversation? 👋'
    }
  },

  // Footer
  footer: {
    contactTitle: {
      es: 'Contacto',
      en: 'Contact'
    },
    experienceTitle: {
      es: 'Experiencia',
      en: 'Experience'
    },
    navigationTitle: {
      es: 'Navegación',
      en: 'Navigation'
    },
    contactAria: {
      es: 'Contactar a Adriana Mejía',
      en: 'Contact Adriana Mejía'
    },
    allRightsReserved: {
      es: 'Todos los derechos reservados.',
      en: 'All rights reserved.'
    }
  }
};

// Hook para obtener texto traducido
export const useT = () => {
  const { currentLang } = useTranslation();
  
  const t = useCallback((key: string): string => {
    if (!key) return '';
    
    const keys = key.split('.');
    let value: any = translations;
    
    for (const k of keys) {
      value = value?.[k];
      if (!value) break;
    }
    
    return value?.[currentLang] || value?.es || key;
  }, [currentLang]);
  
  return t;
};

// Hook para navegación que preserva idioma
export const useNavigateWithLang = () => {
  const { createUrlWithLang } = useTranslation();
  const router = useRouter();
  
  const navigateWithLang = useCallback((path: string) => {
    const urlWithLang = createUrlWithLang(path);
    router.push(urlWithLang);
  }, [createUrlWithLang, router]);
  
  return navigateWithLang;
};
