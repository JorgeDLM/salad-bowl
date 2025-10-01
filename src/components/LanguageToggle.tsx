'use client';

import { useTranslation, Language } from '@/hooks/useTranslation';

export default function LanguageToggle() {
  const { currentLang, setLanguage } = useTranslation();

  return (
    <div className="flex items-center gap-2 bg-gray-100 rounded-full p-1">
      <button
        onClick={() => setLanguage('es')}
        className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 ${
          currentLang === 'es'
            ? 'bg-amber-500 text-white shadow-sm'
            : 'text-gray-600 hover:text-gray-800'
        }`}
      >
        ES
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 ${
          currentLang === 'en'
            ? 'bg-amber-500 text-white shadow-sm'
            : 'text-gray-600 hover:text-gray-800'
        }`}
      >
        EN
      </button>
    </div>
  );
}
