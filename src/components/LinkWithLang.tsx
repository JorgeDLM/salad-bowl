'use client';

import Link from 'next/link';
import { useTranslation } from '@/hooks/useTranslation';
import { ReactNode } from 'react';

interface LinkWithLangProps {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  target?: string;
  rel?: string;
}

export default function LinkWithLang({ 
  href, 
  children, 
  className, 
  onClick, 
  target, 
  rel 
}: LinkWithLangProps) {
  const { createUrlWithLang } = useTranslation();
  
  // Si es un link externo (http/https) o un anchor (#), no modificar
  if (href.startsWith('http') || href.startsWith('#') || href.startsWith('mailto:')) {
    return (
      <Link 
        href={href} 
        className={className} 
        onClick={onClick}
        target={target}
        rel={rel}
      >
        {children}
      </Link>
    );
  }
  
  // Para links internos, preservar el idioma
  const urlWithLang = createUrlWithLang(href);
  
  return (
    <Link 
      href={urlWithLang} 
      className={className} 
      onClick={onClick}
      target={target}
      rel={rel}
    >
      {children}
    </Link>
  );
}
