'use client';

import { Suspense } from 'react';

interface TranslationProviderProps {
  children: React.ReactNode;
}

function TranslationProviderInner({ children }: TranslationProviderProps) {
  return <>{children}</>;
}

export default function TranslationProvider({ children }: TranslationProviderProps) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TranslationProviderInner>{children}</TranslationProviderInner>
    </Suspense>
  );
}
