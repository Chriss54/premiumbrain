'use client';

import { useEffect, useState } from 'react';

/**
 * ScrollProgress — A thin red line at the top of the viewport
 * that grows as the user scrolls. Inspired by MagicUI Scroll Progress.
 */
export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        setProgress(Math.min(scrollTop / docHeight, 1));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '2px',
        zIndex: 1000,
        pointerEvents: 'none',
        transformOrigin: 'left',
        transform: `scaleX(${progress})`,
        background: 'var(--color-brand-red)',
        boxShadow: progress > 0 ? '0 0 8px var(--color-brand-red-glow)' : 'none',
        transition: 'transform 100ms linear',
      }}
    />
  );
}
