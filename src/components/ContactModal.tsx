'use client';

import { useState } from 'react';
import { useT } from '@/hooks/useTranslation';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const phoneNumber = '2212220447';
  const t = useT();

  const handleCall = () => {
    window.open(`tel:+52${phoneNumber}`, '_self');
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(t('contactModal.whatsappMessage'));
    window.open(`https://wa.me/52${phoneNumber}?text=${message}`, '_blank');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[200] flex items-center justify-center p-4">
      <div className="bg-stone-900 border-4 border-stone-400 p-8 max-w-md w-full shadow-2xl" style={{
        backgroundImage: 'linear-gradient(135deg, rgba(41,37,36,0.95) 0%, rgba(28,25,23,0.95) 100%)'
      }}>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-black text-stone-200 uppercase tracking-wide">{t('contactModal.title')}</h2>
          <button
            onClick={onClose}
            className="text-stone-400 hover:text-stone-200 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-stone-400 border-2 border-stone-300 flex items-center justify-center mx-auto mb-4 shadow-lg">
            <svg className="w-8 h-8 text-stone-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <h3 className="text-xl font-black text-stone-200 mb-2 uppercase tracking-wide">ADRIANA MEJÍA</h3>
          <p className="text-stone-400 mb-4 tracking-wide">MARKETING STRATEGIST • TEAM LEADERSHIP</p>
          <div className="bg-stone-800 border border-stone-600 p-4 mb-6">
            <p className="text-lg font-mono text-stone-300">adriana.mejiarivera@gmail.com</p>
            <p className="text-lg font-mono text-stone-300">+52 221-222-0447</p>
          </div>
        </div>

        <div className="space-y-3">
          <button
            onClick={handleCall}
            className="w-full flex items-center justify-center gap-3 bg-stone-200 text-stone-900 px-6 py-4 font-bold hover:bg-stone-100 transition-colors uppercase tracking-wide border border-stone-300 shadow-lg"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            {t('contactModal.callNow')}
          </button>

          <button
            onClick={handleWhatsApp}
            className="w-full flex items-center justify-center gap-3 bg-stone-700 text-stone-200 px-6 py-4 font-bold hover:bg-stone-600 transition-colors uppercase tracking-wide border border-stone-500 shadow-lg"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.787"/>
            </svg>
            {t('contactModal.sendWhatsApp')}
          </button>

          <button
            onClick={onClose}
            className="w-full px-6 py-3 border-2 border-stone-500 text-stone-400 font-bold hover:bg-stone-800 hover:text-stone-300 transition-colors uppercase tracking-wide"
          >
            {t('contactModal.cancel')}
          </button>
        </div>
      </div>
    </div>
  );
}
