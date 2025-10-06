'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import ContactModal from '@/components/ContactModal';
import LinkWithLang from '@/components/LinkWithLang';
import { useT } from '@/hooks/useTranslation';

export default function KrakenVideosPage() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const t = useT();

  const accounts = [
    {
      name: 'Luanpalomera',
      username: '@luanpalomera',
      descriptionKey: 'kraken.luanpalomeraDesc',
      followers: '18M+',
      platform: 'Instagram & YouTube',
      contentKey: 'kraken.luanpalomeraContent',
      instagramUrl: 'https://www.instagram.com/luanpalomera/?hl=es-la',
      profileImage: '/profiles/luanpalomera.jpg'
    },
    {
      name: 'Curiosoben',
      username: '@curiosoben',
      descriptionKey: 'kraken.curiosobenDesc',
      followers: '12M+',
      platform: 'Instagram & YouTube',
      contentKey: 'kraken.curiosobenContent',
      instagramUrl: 'https://www.instagram.com/curiosoben/?hl=es-la',
      profileImage: '/profiles/curiosoben.jpg'
    },
    {
      name: 'Wefere',
      username: '@wefere',
      descriptionKey: 'kraken.wefereDesc',
      followers: '15M+',
      platform: 'Instagram & TikTok',
      contentKey: 'kraken.wefereContent',
      instagramUrl: 'https://www.instagram.com/wefere/?hl=es-la',
      profileImage: '/profiles/wefere.jpg'
    },
    {
      name: 'Rayito',
      username: '@rayito',
      descriptionKey: 'kraken.rayitoDesc',
      followers: '8M+',
      platform: 'Instagram & TikTok',
      contentKey: 'kraken.rayitoContent',
      instagramUrl: 'https://www.instagram.com/rayito/',
      profileImage: '/profiles/rayito.jpg'
    },
    {
      name: 'Lafoka',
      username: '@lafoka',
      descriptionKey: 'kraken.lafokaDesc',
      followers: '25M+',
      platform: 'TikTok & Instagram',
      contentKey: 'kraken.lafokaContent',
      instagramUrl: 'https://www.instagram.com/lafoka/',
      profileImage: '/profiles/lafoka.jpg'
    },
    {
      name: 'Wereverwero',
      username: '@wereverwero',
      descriptionKey: 'kraken.wefereDesc',
      followers: '1.3M+',
      platform: 'TikTok & Instagram',
      contentKey: 'kraken.wefereContent',
      instagramUrl: 'https://www.instagram.com/wereverwero/',
      profileImage: '/profiles/wereverwero.jpg'
    }
  ];

  const achievements = [
    {
      metric: '100M+',
      descriptionKey: 'kraken.followersManaged',
      detailKey: 'kraken.combinedAudience'
    },
    {
      metric: '50+',
      descriptionKey: 'kraken.teamMembers',
      detailKey: 'kraken.teamCoordinationDesc'
    },
    {
      metric: '500M+',
      descriptionKey: 'kraken.monthlyViews',
      detailKey: 'kraken.contentReach'
    },
    {
      metric: '85%',
      descriptionKey: 'kraken.engagementRate',
      detailKey: 'kraken.viralContentInteraction'
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-indigo-600/20"></div>
          <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="mb-12">
            <Image
              src="/kraken-logo.webp"
              alt="Kraken Videos Logo"
              width={300}
              height={120}
              className="mx-auto rounded-2xl shadow-2xl"
            />
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-black mb-8 bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
            KRAKEN VIDEOS
          </h1>
          
          <p className="text-2xl lg:text-3xl font-light mb-6 text-cyan-200">
            {t('kraken.roleSubtitle')}
          </p>
          
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-8 rounded-full"></div>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            {t('kraken.heroDescription')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              onClick={() => setIsContactModalOpen(true)}
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-10 py-5 rounded-full font-bold text-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              {t('contact')}
            </button>
            <Link 
              href="/"
              className="border-2 border-cyan-400 text-cyan-400 px-10 py-5 rounded-full font-bold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 transform hover:scale-105"
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
              {t('kraken.myRole')}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t('kraken.period')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm rounded-3xl p-8 border border-purple-400/30">
                <h3 className="text-2xl font-bold text-cyan-400 mb-4">{t('kraken.keyResponsibilities')}</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3">•</span>
                    {t('kraken.teamCoordination')}
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3">•</span>
                    {t('kraken.contentStrategy')}
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3">•</span>
                    {t('kraken.performanceAnalysis')}
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3">•</span>
                    {t('kraken.editorialManagement')}
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-gradient-to-br from-cyan-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-6 border border-cyan-400/30 text-center hover:scale-105 transition-transform duration-300">
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

      {/* Accounts Managed */}
      <section className="py-20 bg-gradient-to-br from-indigo-900/50 to-purple-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
              {t('kraken.managedAccounts')}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t('kraken.managedAccountsDesc')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {accounts.map((account, index) => (
              <a 
                key={index} 
                href={account.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-br from-slate-800/80 to-blue-900/80 backdrop-blur-sm rounded-3xl p-8 border border-slate-700 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105 hover:-translate-y-2 block"
              >
                <div className="text-center mb-6">
                  <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 border-2 border-cyan-400/50">
                    <Image
                      src={account.profileImage}
                      alt={`${account.name} profile`}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback to initial letter if image fails
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          parent.innerHTML = `<div class="w-full h-full bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center"><span class="text-2xl font-black text-white">${account.name.charAt(0).toUpperCase()}</span></div>`;
                        }
                      }}
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                    {account.name}
                  </h3>
                  <p className="text-cyan-400 text-sm mb-3 font-mono">{account.username}</p>
                  <p className="text-gray-400 text-sm mb-4">{t(account.descriptionKey)}</p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center border-b border-gray-700 pb-2">
                    <span className="text-gray-400">{t('kraken.followers')}</span>
                    <span className="text-cyan-400 font-bold">{account.followers}</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-700 pb-2">
                    <span className="text-gray-400">{t('kraken.platform')}</span>
                    <span className="text-purple-400 font-semibold text-sm">{account.platform}</span>
                  </div>
                  <div className="pt-2">
                    <p className="text-gray-300 text-sm leading-relaxed">{t(account.contentKey)}</p>
                  </div>
                </div>
                
                <div className="text-center mt-4">
                  <div className="inline-flex items-center gap-2 text-cyan-400 text-sm font-semibold group-hover:text-cyan-300 transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    {t('kraken.viewProfile')}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Learning & Impact */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-black text-white mb-8">
                {t('kraken.whatILearned')}
              </h2>
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-cyan-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-6 border-l-4 border-cyan-400">
                  <h3 className="text-xl font-bold text-cyan-400 mb-3">{t('kraken.massiveAudienceManagement')}</h3>
                  <p className="text-gray-300 leading-relaxed">
                    {t('kraken.massiveAudienceDesc')}
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-6 border-l-4 border-purple-400">
                  <h3 className="text-xl font-bold text-purple-400 mb-3">{t('kraken.largeTeamCoordination')}</h3>
                  <p className="text-gray-300 leading-relaxed">
                    {t('kraken.largeTeamDesc')}
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-blue-600/20 to-indigo-600/20 backdrop-blur-sm rounded-2xl p-6 border-l-4 border-blue-400">
                  <h3 className="text-xl font-bold text-blue-400 mb-3">{t('kraken.viralPerformanceAnalysis')}</h3>
                  <p className="text-gray-300 leading-relaxed">
                    {t('kraken.viralPerformanceDesc')}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-12 border border-gray-700">
              <blockquote className="text-2xl lg:text-3xl font-light text-gray-300 italic leading-relaxed text-center">
                "{t('kraken.managementQuote')}"
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl lg:text-5xl font-black mb-8">
            {t('kraken.ctaTitle') || '¿Necesitas Gestionar Audiencias Masivas?'}
          </h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
            {t('kraken.ctaDescription') || 'Si tu empresa maneja cuentas grandes o busca escalar su presencia digital, mi experiencia con 100M+ seguidores puede ser exactamente lo que necesitas.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              onClick={() => setIsContactModalOpen(true)}
              className="bg-white text-blue-600 px-12 py-6 rounded-full font-bold text-xl hover:bg-gray-100 transition-colors transform hover:scale-105 shadow-2xl"
            >
              {t('kraken.ctaButton') || 'Hablemos de tu Proyecto'}
            </button>
            <Link 
              href="/"
              className="border-2 border-white text-white px-12 py-6 rounded-full font-bold text-xl hover:bg-white hover:text-blue-600 transition-colors transform hover:scale-105"
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
