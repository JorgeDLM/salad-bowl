'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import ContactModal from '@/components/ContactModal';
import LinkWithLang from '@/components/LinkWithLang';
import { useT } from '@/hooks/useTranslation';

export default function KadabraProductionsPage() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const t = useT();

  const achievements = [
    {
      metric: '5+',
      descriptionKey: 'kadabra.culturalCampaigns',
      detailKey: 'kadabra.crossCulturalCampaigns'
    },
    {
      metric: '3+',
      descriptionKey: 'kadabra.educationalInstitutions',
      detailKey: 'kadabra.internationalEducation'
    },
    {
      metric: '40%',
      descriptionKey: 'kadabra.marketGrowth',
      detailKey: 'kadabra.localMarketGrowth'
    },
    {
      metric: '75%',
      descriptionKey: 'kadabra.socialEngagement',
      detailKey: 'kadabra.averageEngagement'
    }
  ];

  const projects = [
    {
      titleKey: 'kadabra.lyceeFrancaisTitle',
      descriptionKey: 'kadabra.lyceeFrancaisDesc',
      impactKey: 'kadabra.lyceeFrancaisImpact',
      typeKey: 'kadabra.projectInternationalEducation'
    },
    {
      titleKey: 'kadabra.kidsUsTitle',
      descriptionKey: 'kadabra.kidsUsDesc',
      impactKey: 'kadabra.kidsUsImpact',
      typeKey: 'kadabra.childEducation'
    },
    {
      titleKey: 'kadabra.multiculturalTitle',
      descriptionKey: 'kadabra.multiculturalDesc',
      impactKey: 'kadabra.multiculturalImpact',
      typeKey: 'kadabra.globalMarketing'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-cyan-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-600/20 via-purple-600/20 to-cyan-600/20"></div>
          <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-cyan-400/10 to-indigo-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-purple-400/10 to-cyan-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="mb-12">
            <Image
              src="/kadabra-logo.jpg"
              alt="Kadabra Productions Logo"
              width={300}
              height={120}
              className="mx-auto rounded-2xl shadow-2xl"
            />
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-black mb-8 bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
            {t('kadabra.title')}
          </h1>
          
          <p className="text-2xl lg:text-3xl font-light mb-6 text-cyan-200">
            {t('kadabra.role')}
          </p>
          
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-indigo-400 mx-auto mb-8 rounded-full"></div>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            {t('kadabra.heroDescription')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              onClick={() => setIsContactModalOpen(true)}
              className="bg-gradient-to-r from-cyan-500 to-indigo-500 text-white px-10 py-5 rounded-full font-bold text-lg hover:from-cyan-400 hover:to-indigo-400 transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              {t('contact')}
            </button>
            <Link 
              href="/"
              className="border-2 border-cyan-400 text-cyan-400 px-10 py-5 rounded-full font-bold text-lg hover:bg-cyan-400 hover:text-indigo-900 transition-all duration-300 transform hover:scale-105"
            >
              {t('backToCV')}
            </Link>
          </div>
        </div>
      </section>

      {/* Role Overview */}
      <section className="py-20 bg-gray-900/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
              {t('kadabra.roleTitle')}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t('kadabra.period')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-indigo-600/20 to-cyan-600/20 backdrop-blur-sm rounded-3xl p-8 border border-cyan-400/30">
                <h3 className="text-2xl font-bold text-cyan-400 mb-4">{t('kadabra.responsibilities')}</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3">•</span>
                    {t('kadabra.responsibilitiesList')[0]}
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3">•</span>
                    {t('kadabra.responsibilitiesList')[1]}
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3">•</span>
                    {t('kadabra.responsibilitiesList')[2]}
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3">•</span>
                    {t('kadabra.responsibilitiesList')[3]}
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-gradient-to-br from-cyan-600/20 to-indigo-600/20 backdrop-blur-sm rounded-2xl p-6 border border-cyan-400/30 text-center hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl font-black text-cyan-400 mb-2">
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

      {/* Projects Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900/50 to-indigo-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
              {t('kadabra.projectsTitle')}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t('kadabra.projectsDesc')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-700 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105 hover:-translate-y-2">
                <div className="mb-6">
                  <div className="inline-block px-3 py-1 bg-cyan-600/20 text-cyan-400 rounded-full text-sm font-semibold mb-4">
                    {t(project.typeKey)}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {t(project.titleKey)}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">{t(project.descriptionKey)}</p>
                </div>
                
                <div className="border-t border-gray-700 pt-4">
                  <div className="text-cyan-400 font-bold text-lg mb-2">{t('kadabra.impactLabel')}</div>
                  <p className="text-gray-300 text-sm">{t(project.impactKey)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 via-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl lg:text-5xl font-black mb-8">
            {t('kadabra.ctaTitle')}
          </h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
            {t('kadabra.ctaDescription')}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              onClick={() => setIsContactModalOpen(true)}
              className="bg-white text-indigo-600 px-12 py-6 rounded-full font-bold text-xl hover:bg-gray-100 transition-colors transform hover:scale-105 shadow-2xl"
            >
              {t('kadabra.ctaButton')}
            </button>
            <Link 
              href="/"
              className="border-2 border-white text-white px-12 py-6 rounded-full font-bold text-xl hover:bg-white hover:text-indigo-600 transition-colors transform hover:scale-105"
            >
              {t('backToCV')}
            </Link>
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