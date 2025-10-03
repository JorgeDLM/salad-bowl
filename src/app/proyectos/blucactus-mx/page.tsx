'use client';

import Image from 'next/image';
import { useState } from 'react';
import ContactModal from '@/components/ContactModal';
import LinkWithLang from '@/components/LinkWithLang';
import { useT } from '@/hooks/useTranslation';

export default function BluCactusMXPage() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const t = useT();

  const achievements = [
    {
      metric: '30%',
      descriptionKey: 'blucactus.cplReduction',
      detailKey: 'blucactus.metaAdsOptimization'
    },
    {
      metric: '$500K+',
      descriptionKey: 'blucactus.monthlyBudget',
      detailKey: 'blucactus.adBudgetManagement'
    },
    {
      metric: '15+',
      descriptionKey: 'blucactus.specialists',
      detailKey: 'blucactus.teamLeadership'
    },
    {
      metric: '25%',
      descriptionKey: 'blucactus.deliveryImprovement',
      detailKey: 'blucactus.workflowOptimization'
    }
  ];

  const responsibilities = [
    {
      titleKey: 'blucactus.metaAdsCampaigns',
      descriptionKey: 'blucactus.metaAdsCampaignsDesc',
      icon: '📊'
    },
    {
      titleKey: 'blucactus.teamLeadershipTitle',
      descriptionKey: 'blucactus.teamLeadershipDesc',
      icon: '👥'
    },
    {
      titleKey: 'blucactus.workflowOptimizationTitle',
      descriptionKey: 'blucactus.workflowOptimizationDesc',
      icon: '⚡'
    },
    {
      titleKey: 'blucactus.concurrentProjects',
      descriptionKey: 'blucactus.concurrentProjectsDesc',
      icon: '🎯'
    }
  ];

  const industries = [
    'E-commerce',
    'SaaS',
    'Educación',
    'Salud',
    'Fintech',
    'Real Estate',
    'Retail',
    'Tecnología'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-sky-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/20 via-sky-600/20 to-slate-600/20"></div>
          <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-sky-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-sky-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="mb-12">
            <Image
              src="/bluecactus-logo.png"
              alt="BluCactus MX Logo"
              width={300}
              height={120}
              className="mx-auto rounded-2xl shadow-2xl bg-white p-4"
            />
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-black mb-8 bg-gradient-to-r from-sky-400 via-blue-400 to-slate-300 bg-clip-text text-transparent">
            {t('blucactus.title')}
          </h1>
          
          <p className="text-2xl lg:text-3xl font-light mb-6 text-sky-200">
            {t('blucactus.role')}
          </p>
          
          <div className="w-32 h-1 bg-gradient-to-r from-sky-400 to-blue-400 mx-auto mb-8 rounded-full"></div>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            {t('blucactus.description')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              onClick={() => setIsContactModalOpen(true)}
              className="bg-gradient-to-r from-sky-500 to-blue-500 text-white px-10 py-5 rounded-full font-bold text-lg hover:from-sky-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              {t('contact')}
            </button>
            <LinkWithLang 
              href="/"
              className="border-2 border-sky-400 text-sky-400 px-10 py-5 rounded-full font-bold text-lg hover:bg-sky-400 hover:text-blue-900 transition-all duration-300 transform hover:scale-105"
            >
              {t('backToCV')}
            </LinkWithLang>
          </div>
        </div>
      </section>

      {/* Role Overview */}
      <section className="py-20 bg-gray-900/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
              {t('blucactus.roleTitle')}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t('blucactus.period')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-blue-600/20 to-sky-600/20 backdrop-blur-sm rounded-3xl p-8 border border-blue-400/30">
                <h3 className="text-2xl font-bold text-sky-400 mb-4">{t('blucactus.achievements')}</h3>
                <ul className="space-y-3 text-gray-300">
                  {(() => {
                    const achievements = t('blucactus.achievementsList');
                    if (Array.isArray(achievements)) {
                      return achievements.map((achievement: string, index: number) => (
                        <li key={index} className="flex items-start">
                          <span className="text-sky-400 mr-3">•</span>
                          {achievement}
                        </li>
                      ));
                    }
                    // Fallback para español
                    return [
                      'Dirigí campañas de Meta Ads de alto volumen, reduciendo costos de adquisición en 30%',
                      'Orquesté 9+ proyectos concurrentes across diversas industrias',
                      'Optimicé workflows para equipos cross-funcionales internacionales',
                      'Mejoré tasas de entrega en tiempo en 25%'
                    ].map((achievement, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-sky-400 mr-3">•</span>
                        {achievement}
                      </li>
                    ));
                  })()
                  }
                </ul>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-gradient-to-br from-sky-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-6 border border-sky-400/30 text-center hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl font-black text-sky-400 mb-2">
                    {achievement.metric}
                  </div>
                  <div className="text-white font-semibold mb-1">
                    {t(achievement.descriptionKey)}
                  </div>
                  <div className="text-sm text-gray-400">
                    {t(achievement.detailKey)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-sky-600 via-blue-600 to-slate-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl lg:text-5xl font-black mb-8">
            {t('blucactus.ctaTitle')}
          </h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
            {t('blucactus.ctaDescription')}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              onClick={() => setIsContactModalOpen(true)}
              className="bg-white text-blue-600 px-12 py-6 rounded-full font-bold text-xl hover:bg-gray-100 transition-colors transform hover:scale-105 shadow-2xl"
            >
              {t('blucactus.ctaButton')}
            </button>
            <LinkWithLang 
              href="/"
              className="border-2 border-white text-white px-12 py-6 rounded-full font-bold text-xl hover:bg-white hover:text-blue-600 transition-colors transform hover:scale-105"
            >
              {t('backToCV')}
            </LinkWithLang>
          </div>
        </div>
      </section>

      {/* Contact Modal */}
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </div>
  );
}