'use client';

import { useState, useRef, useEffect, ReactNode } from 'react';

interface InfiniteCarouselProps {
  children: ReactNode[];
  baseSpeed?: number;
  gap?: number;
  className?: string;
}

export default function InfiniteCarousel({ 
  children, 
  baseSpeed = 1.0,
  gap = 24,
  className = ''
}: InfiniteCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Triplicar para efecto infinito perfecto
  const triplicatedChildren = [...children, ...children, ...children];

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    let animationId: number;
    let scrollPosition = container.scrollWidth / 3; // Empezar en el segundo set

    const animate = () => {
      if (!container) return;

      scrollPosition -= baseSpeed;
      container.scrollLeft = scrollPosition;

      // Reset cuando llega al inicio (scroll infinito)
      if (scrollPosition <= 0) {
        scrollPosition = container.scrollWidth / 3;
      }
      // Reset cuando llega al final
      else if (scrollPosition >= (container.scrollWidth / 3) * 2) {
        scrollPosition = container.scrollWidth / 3;
      }

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, [baseSpeed]);

  return (
    <div 
      ref={containerRef}
      className={`overflow-x-hidden overflow-y-visible ${className}`}
    >
      <div className="flex" style={{ gap: `${gap}px` }}>
        {triplicatedChildren.map((child, index) => (
          <div key={index} className="flex-shrink-0">
            {child}
          </div>
        ))}
      </div>
    </div>
  );
}
