'use client';

import { useT, useTranslation } from '@/hooks/useTranslation';

export default function TranslationTest() {
  const t = useT();
  const { currentLang } = useTranslation();

  return (
    <div className="fixed top-20 right-4 bg-red-500 text-white p-4 rounded-lg z-50 text-sm">
      <div>Current Lang: {currentLang}</div>
      <div>Test: {t('test')}</div>
      <div>Contact: {t('contact')}</div>
      <div>UI Contact: {t('ui.contactMe')}</div>
      <div>Personal Title: {t('personal.title')}</div>
    </div>
  );
}
