'use client';

import Link from 'next/link';
import ContactModal from './ContactModal';
import { useState } from 'react';
import { useT } from '@/hooks/useTranslation';
import LinkWithLang from './LinkWithLang';

export default function Footer() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const currentYear = new Date().getFullYear();
  const t = useT();

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.contactTitle')}</h3>
            <div className="space-y-2">
              <p className="text-gray-300">
                <button 
                  onClick={() => setIsContactModalOpen(true)}
                  className="hover:text-white transition-colors text-left"
                  aria-label={t('footer.contactAria')}
                >
                  adriana.mejiarivera@gmail.com
                </button>
              </p>
              <p className="text-gray-300">Puebla, México</p>
            </div>
          </div>

          {/* Projects */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.experienceTitle')}</h3>
            <div className="space-y-2">
              <p className="text-gray-300">
                BluCactus MX
              </p>
              <p className="text-gray-300">
                Kraken Videos
              </p>
              <p className="text-gray-300">
                Kadabra Productions
              </p>
              <p className="text-gray-300">
                Somos Volt
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.navigationTitle')}</h3>
            <div className="space-y-2">
              <p>
                <LinkWithLang 
                  href="/" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {t('ui.home')}
                </LinkWithLang>
              </p>
              <p>
                <LinkWithLang 
                  href="/#proyectos" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {t('footer.experienceTitle')}
                </LinkWithLang>
              </p>
              <p>
                <button 
                  onClick={() => setIsContactModalOpen(true)}
                  className="text-gray-300 hover:text-white transition-colors text-left"
                >
                  {t('contact')}
                </button>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} Marcela Adriana Mejía Rivera. {t('footer.allRightsReserved')}
          </p>
        </div>
      </div>

      {/* Contact Modal */}
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </footer>
  );
}
