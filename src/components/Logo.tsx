'use client';

import React, { useEffect, useRef } from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'white'; // light = blanco abajo, dark = verde oscuro abajo, white = todo blanco
  width?: number;
  height?: number;
}

export default function Logo({ 
  className = '', 
  variant = 'light',
  width = 200,
  height = 113
}: LogoProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Fetch y modificar el SVG para cambiar colores según variante
    if (containerRef.current) {
      fetch('/salad-logo.svg')
        .then(response => response.text())
        .then(svgText => {
          if (variant === 'dark') {
            // Cambiar todos los fills de blanco a verde oscuro
            svgText = svgText.replace(/\.cls-1\{fill:#fff;\}/g, '.cls-1{fill:#0f4f44;}');
            svgText = svgText.replace(/fill="#fff"/g, 'fill="#0f4f44"');
          } else if (variant === 'white') {
            // Cambiar todo a blanco (cls-1 y cls-2)
            svgText = svgText.replace(/\.cls-1\{fill:#fff;\}/g, '.cls-1{fill:#ffffff;}');
            svgText = svgText.replace(/\.cls-2\{fill:#c4d45b;\}/g, '.cls-2{fill:#ffffff;}');
            svgText = svgText.replace(/fill="#c4d45b"/g, 'fill="#ffffff"');
          }
          
          if (containerRef.current) {
            containerRef.current.innerHTML = svgText;
            // Ajustar dimensiones del SVG
            const svg = containerRef.current.querySelector('svg');
            if (svg) {
              svg.setAttribute('width', width.toString());
              svg.setAttribute('height', height.toString());
              
              // Cambiar fills directamente en los paths según variante
              if (variant === 'dark') {
                const cls1Paths = svg.querySelectorAll('.cls-1');
                cls1Paths.forEach((path) => {
                  (path as SVGElement).style.fill = '#0f4f44';
                });
              } else if (variant === 'white') {
                const allPaths = svg.querySelectorAll('.cls-1, .cls-2');
                allPaths.forEach((path) => {
                  (path as SVGElement).style.fill = '#ffffff';
                });
              }
            }
          }
        })
        .catch(err => console.error('Error loading SVG:', err));
    }
  }, [variant, width, height]);

  return (
    <div 
      ref={containerRef}
      className={className}
      style={{ width, height, display: 'inline-block' }}
    />
  );
}
