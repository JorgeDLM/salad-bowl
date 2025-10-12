'use client';

import Image from 'next/image';
import { useState } from 'react';

// Custom SVG Icons - Monocromáticos minimalistas
const DownloadIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const EmailIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const PhoneIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const LocationIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const WebIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
  </svg>
);

// Iconos personalizados minimalistas
const BudgetIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const TeamIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);

const TrendUpIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>
);

const UsersIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

export default function CVPage() {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownloadCV = () => {
    setIsDownloading(true);
    
    // Usar la funcionalidad nativa del navegador para imprimir/guardar como PDF
    setTimeout(() => {
      window.print();
      setIsDownloading(false);
    }, 500);
  };

  const careerHighlights = [
    {
      icon: TeamIcon,
      metric: "50+",
      label: "Creative Team Led"
    },
    {
      icon: TrendUpIcon,
      metric: "100+",
      label: "Projects Delivered"
    },
    {
      icon: UsersIcon,
      metric: "100M+",
      label: "Audience Reach"
    },
    {
      icon: BudgetIcon,
      metric: "25%",
      label: "Efficiency Increase"
    }
  ];

  const experiences = [
    {
      title: "Creative Project Manager",
      company: "Somos Volt",
      logo: "/somosvolt-logo.webp",
      period: "Jan 2025 - Present",
      location: "Remote",
      description: "Premium creative agency specializing in celebrity campaigns and high-profile brands",
      metrics: { clients: "Celebrity brands", focus: "Premium production", model: "Agile/Scrum" },
      achievements: [
        "Directed creative campaigns for celebrity brands achieving 100% client satisfaction and renewals",
        "Implemented Agile workflows reducing project delivery time by 25% while elevating quality standards",
        "Led cross-functional creative teams (designers, copywriters, producers) across global projects"
      ]
    },
    {
      title: "Creative Strategy Manager",
      company: "BluCactus MX",
      logo: "/bluecactus-logo.png",
      period: "Jan 2023 - Feb 2025",
      location: "Remote",
      description: "Leading creative agency with multi-industry client portfolio",
      metrics: { campaigns: "9+ projects", team: "15+ specialists", focus: "Brand campaigns" },
      achievements: [
        "Orchestrated creative strategy for 9+ simultaneous multi-channel brand campaigns",
        "Led 15+ creative and marketing specialists ensuring brand consistency and campaign excellence",
        "Implemented data-driven creative optimization frameworks improving performance by 30%"
      ]
    },
    {
      title: "Creative Content Director",
      company: "Kraken Videos",
      logo: "/kraken-logo.jpg",
      period: "Mar 2024 - May 2024",
      location: "Remote",
      description: "Largest digital content network in Latin America with 100M+ combined followers",
      metrics: { audience: "100M+ reach", team: "50+ creators", platforms: "Multi-platform" },
      achievements: [
        "Developed integrated content strategies for 100M+ audience across Instagram, TikTok, and YouTube",
        "Directed creative team of 50+ content creators, editors, and producers ensuring brand excellence",
        "Implemented creative analytics framework increasing engagement by 45% through strategic optimization"
      ]
    },
    {
      title: "Brand & Content Manager",
      company: "Kadabra Productions",
      logo: "/kadabra-logo2.jpg",
      period: "2018 - 2020",
      location: "Casablanca, Morocco",
      description: "International production company creating content for global brands",
      metrics: { location: "International", focus: "Content production", growth: "Brand building" },
      achievements: [
        "Built brand presence from ground up achieving 250% growth through strategic creative content",
        "Developed cross-cultural creative strategies for European and North African markets",
        "Produced behind-the-scenes content generating 3x higher engagement than standard posts"
      ]
    }
  ];

  const skills = [
    { 
      category: "Creative Direction & Strategy", 
      items: ["Brand Strategy", "Creative Campaigns", "Content Strategy", "Visual Storytelling", "Creative Direction", "Brand Development"] 
    },
    { 
      category: "Project & Team Management", 
      items: ["Agile/Scrum", "Project Management", "Team Leadership", "Cross-functional Collaboration", "Stakeholder Management", "Resource Planning"] 
    },
    { 
      category: "Design & Production", 
      items: ["Figma", "Adobe Creative Suite", "Design Thinking", "UX/UI Principles", "Production Management", "Quality Control"] 
    },
    { 
      category: "Marketing & Growth", 
      items: ["Integrated Campaigns", "Multi-channel Strategy", "Performance Marketing", "Content Marketing", "Brand Positioning", "Market Research"] 
    },
    { 
      category: "Analytics & Optimization", 
      items: ["Google Analytics", "Data-Driven Decisions", "A/B Testing", "Performance Metrics", "Creative Analytics", "Reporting Dashboards"] 
    }
  ];

  const education = [
    {
      degree: "Bachelor of Design & Advertising Production",
      institution: "Universidad Popular Autónoma del Estado de Puebla (UPAEP)",
      period: "2010 - 2016",
      description: "Comprehensive training in design thinking, advertising strategy, and creative production. Strong foundation in visual communication, brand development, and integrated marketing campaigns."
    },
    {
      degree: "Community Manager & Content Marketing Specialist",
      institution: "Aula CM",
      period: "2015",
      location: "Madrid, Spain",
      description: "Specialized certification in social media management, content marketing, and digital community building. Advanced training in social media strategy and digital engagement."
    }
  ];

  const languages = [
    { language: "Spanish", level: "Native" },
    { language: "English", level: "Fluent" },
    { language: "French", level: "Fluent" }
  ];

  return (
    <>
      <style jsx global>{`
        @media print {
          @page {
            size: A4;
            margin: 0.5cm;
          }
          
          * {
            -webkit-print-color-adjust: exact !important;
            color-adjust: exact !important;
          }
          
          body {
            margin: 0 !important;
            padding: 0 !important;
            background: white !important;
          }
          
          /* Hide header, footer, and navigation */
          header,
          footer,
          nav,
          .no-print {
            display: none !important;
          }
          
          /* Hide background wrapper */
          .min-h-screen {
            background: white !important;
            min-height: auto !important;
            padding: 0 !important;
          }
          
          /* Optimize CV container for print - make it wider */
          .cv-print-container {
            margin: 0 auto !important;
            padding: 0 !important;
            max-width: 100% !important;
            width: 800px !important;
          }
          
          /* Make inner container full width */
          .cv-print-container > div {
            max-width: none !important;
            width: 800px !important;
          }
          
          /* Remove shadows and excessive borders */
          .shadow-xl, .shadow-lg, .shadow-sm {
            box-shadow: none !important;
          }
          
          .rounded-2xl {
            border-radius: 0 !important;
          }
          
          .rounded-xl, .rounded-lg {
            border-radius: 4px !important;
          }
          
          /* Ensure main content is visible */
          main {
            padding: 0 !important;
            margin: 0 !important;
          }
          
          /* Optimize content sections for wider layout */
          .p-8 {
            padding: 1.5rem !important;
          }
          
          .p-6 {
            padding: 1rem !important;
          }
          
          /* Force grid layouts to display properly */
          .grid {
            display: grid !important;
          }
          
          /* Flex layouts */
          .flex {
            display: flex !important;
          }
          
          .flex-wrap {
            flex-wrap: wrap !important;
          }
          
          /* Contact info section - force 2x2 grid */
          .bg-gray-50.p-6.border-b .grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 1rem !important;
          }
          
          /* Impact metrics - force 4 columns in one row */
          section .grid-cols-4 {
            grid-template-columns: repeat(4, 1fr) !important;
          }
          
          /* Reduce spacing for compactness */
          .space-y-6 {
            gap: 1rem !important;
          }
          
          .mb-10 {
            margin-bottom: 1.5rem !important;
          }
          
          /* Skills grid - 2 columns */
          section .grid.gap-4 {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          
          /* Languages grid - 3 columns */
          section .grid.gap-3 {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
      `}</style>
      
      <div className="min-h-screen bg-gray-50">
      {/* Header con botón de descarga */}
      <div className="bg-white shadow-sm border-b no-print">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold" style={{ color: '#2D3748' }}>Resume</h1>
            <button
              onClick={handleDownloadCV}
              disabled={isDownloading}
              className="inline-flex items-center text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ backgroundColor: '#5A6C57' }}
            >
              {isDownloading ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Generating PDF...
                </>
              ) : (
                <>
                  <DownloadIcon className="w-5 h-5 mr-2" />
                  Download Resume
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* CV Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 cv-print-container">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          
          {/* Header Personal - Centrado */}
          <div className="text-center py-12 px-8">
            <div className="flex justify-center mb-6">
              <div className="w-28 h-28 relative">
                <Image
                  src="/adriana-foto.webp"
                  alt="Marcela Adriana Mejía Rivera"
                  fill
                  className="rounded-full object-cover shadow-lg"
                  style={{ border: '4px solid #5A6C57' }}
                />
              </div>
            </div>
            
            <h1 className="text-4xl font-bold mb-3" style={{ color: '#2D3748' }}>
              Adriana Mejía Rivera
            </h1>
            
            <p className="text-xl font-semibold mb-4" style={{ color: '#5A6C57' }}>
              Creative Project Manager | Brand Strategist | Team Leader
            </p>
            
            <p className="text-base font-medium mb-4 max-w-3xl mx-auto" style={{ color: '#4A5568' }}>
              <strong>8 years</strong> directing creative campaigns • Leading <strong>50+ creative teams</strong> • Managing <strong>100+ projects</strong> for global brands
            </p>
            
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              <span className="px-4 py-2 rounded-full text-sm font-semibold" style={{ backgroundColor: '#C8E6E0', color: '#5A6C57' }}>Creative Direction</span>
              <span className="px-4 py-2 rounded-full text-sm font-semibold" style={{ backgroundColor: '#C8E6E0', color: '#5A6C57' }}>Project Management</span>
              <span className="px-4 py-2 rounded-full text-sm font-semibold" style={{ backgroundColor: '#C8E6E0', color: '#5A6C57' }}>Brand Strategy</span>
              <span className="px-4 py-2 rounded-full text-sm font-semibold" style={{ backgroundColor: '#C8E6E0', color: '#5A6C57' }}>Team Leadership</span>
            </div>
          </div>

          {/* Información de Contacto - Grid 2x2 */}
          <div className="bg-white px-8 py-6 border-y" style={{ borderColor: '#E8DCC8' }}>
            <div className="grid grid-cols-2 gap-x-12 gap-y-4 max-w-2xl mx-auto">
              <div className="flex items-center gap-3">
                <EmailIcon className="w-5 h-5 flex-shrink-0" style={{ color: '#5A6C57' }} />
                <div className="min-w-0">
                  <p className="text-xs font-medium" style={{ color: '#718096' }}>Email</p>
                  <p className="font-semibold text-sm truncate" style={{ color: '#2D3748' }}>adriana.mejiarivera@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <PhoneIcon className="w-5 h-5 flex-shrink-0" style={{ color: '#5A6C57' }} />
                <div>
                  <p className="text-xs font-medium" style={{ color: '#718096' }}>Phone</p>
                  <p className="font-semibold text-sm" style={{ color: '#2D3748' }}>+52 221 222 0447</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <LocationIcon className="w-5 h-5 flex-shrink-0" style={{ color: '#5A6C57' }} />
                <div>
                  <p className="text-xs font-medium" style={{ color: '#718096' }}>Location</p>
                  <p className="font-semibold text-sm" style={{ color: '#2D3748' }}>Puebla, Mexico</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <WebIcon className="w-5 h-5 flex-shrink-0" style={{ color: '#5A6C57' }} />
                <div>
                  <p className="text-xs font-medium" style={{ color: '#718096' }}>Portfolio</p>
                  <p className="font-semibold text-sm" style={{ color: '#2D3748' }}>Multiple Projects</p>
                </div>
              </div>
            </div>
          </div>

          <div className="px-8 py-10">
            {/* Executive Summary - Borde verde */}
            <section className="mb-10">
              <div className="p-6 rounded-lg" style={{ backgroundColor: 'white', borderLeft: '4px solid #5A6C57' }}>
                <p className="text-base leading-relaxed font-medium" style={{ color: '#4A5568' }}>
                  <strong className="text-lg" style={{ color: '#2D3748' }}>Creative Project Leader</strong> specializing in brand strategy and campaign execution. 8 years directing creative teams of 50+, delivering 100+ successful projects for celebrity brands and international markets. Expert in Agile methodologies, creative direction, and data-driven optimization. <strong>Trilingual (ES/EN/FR)</strong>
                </p>
              </div>
            </section>

            {/* Impact Metrics - Cards compactas */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-6 pb-3" style={{ color: '#2D3748', borderBottom: '2px solid #5A6C57' }}>
                Impact Metrics
              </h2>
              <div className="grid grid-cols-4 gap-3">
                {careerHighlights.map((highlight, index) => {
                  const Icon = highlight.icon;
                  return (
                    <div key={index} className="text-center p-4 bg-white rounded-lg shadow-sm border hover:shadow-md transition-all" style={{ borderColor: '#E2E8F0' }}>
                      <Icon className="w-8 h-8 mx-auto mb-2" style={{ color: '#5A6C57' }} />
                      <div className="text-2xl font-black mb-1" style={{ color: '#5A6C57' }}>{highlight.metric}</div>
                      <div className="text-xs font-semibold leading-tight" style={{ color: '#4A5568' }}>{highlight.label}</div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Professional Experience */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-6 pb-3" style={{ color: '#2D3748', borderBottom: '2px solid #5A6C57' }}>
                Professional Experience
              </h2>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-sm border" style={{ borderColor: '#E2E8F0' }}>
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 flex-shrink-0 rounded-lg p-2 bg-white border flex items-center justify-center" style={{ borderColor: '#E2E8F0' }}>
                        <Image
                          src={exp.logo}
                          alt={`${exp.company} logo`}
                          width={48}
                          height={32}
                          className="max-w-full max-h-full object-contain"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="text-lg font-bold" style={{ color: '#2D3748' }}>{exp.title}</h3>
                            <p className="font-semibold text-sm" style={{ color: '#5A6C57' }}>{exp.company}</p>
                          </div>
                          <span className="text-xs font-medium" style={{ color: '#718096' }}>{exp.period}</span>
                        </div>
                        
                        {/* Achievements compactos */}
                        <div className="space-y-1 mt-3">
                          {exp.achievements.map((achievement, idx) => (
                            <div key={idx} className="flex items-start text-sm leading-relaxed" style={{ color: '#4A5568' }}>
                              <span className="w-1.5 h-1.5 rounded-full mr-2 mt-2 flex-shrink-0" style={{ backgroundColor: '#5A6C57' }}></span>
                              <span>{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Core Competencies */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-6 pb-3" style={{ color: '#2D3748', borderBottom: '2px solid #5A6C57' }}>
                Core Competencies
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skillGroup, index) => (
                  <div key={index} className="bg-white p-5 rounded-lg border" style={{ borderColor: '#E2E8F0' }}>
                    <h3 className="text-sm font-bold mb-3" style={{ color: '#2D3748' }}>{skillGroup.category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 rounded text-xs font-semibold"
                          style={{ backgroundColor: '#5A6C57', color: 'white' }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Education */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-6 pb-3" style={{ color: '#2D3748', borderBottom: '2px solid #5A6C57' }}>
                Education
              </h2>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div key={index} className="bg-white p-5 rounded-lg border" style={{ borderColor: '#E2E8F0' }}>
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="text-base font-bold" style={{ color: '#2D3748' }}>{edu.degree}</h3>
                        <p className="font-semibold text-sm" style={{ color: '#5A6C57' }}>{edu.institution}</p>
                        {edu.location && <p className="text-xs" style={{ color: '#718096' }}>{edu.location}</p>}
                      </div>
                      <span className="font-medium text-xs" style={{ color: '#718096' }}>{edu.period}</span>
                    </div>
                    <p className="text-sm" style={{ color: '#4A5568' }}>{edu.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Languages */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-6 pb-3" style={{ color: '#2D3748', borderBottom: '2px solid #5A6C57' }}>
                Languages
              </h2>
              <div className="grid grid-cols-3 gap-4">
                {languages.map((lang, index) => (
                  <div key={index} className="text-center p-4 bg-white rounded-lg border" style={{ borderColor: '#E2E8F0' }}>
                    <p className="font-bold text-sm" style={{ color: '#2D3748' }}>{lang.language}</p>
                    <p className="text-xs font-medium" style={{ color: '#5A6C57' }}>{lang.level}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Professional Value Proposition */}
            <section>
              <h2 className="text-2xl font-bold mb-6 pb-3" style={{ color: '#2D3748', borderBottom: '2px solid #5A6C57' }}>
                Professional Philosophy
              </h2>
              <div className="p-6 rounded-lg border" style={{ backgroundColor: 'white', borderColor: '#5A6C57', borderWidth: '2px' }}>
                <p className="text-sm font-medium text-center leading-relaxed" style={{ color: '#4A5568' }}>
                  Data-driven strategy meets empathetic leadership. <strong style={{ color: '#2D3748' }}>Analyze deeply • Execute precisely • Optimize continuously</strong>
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
