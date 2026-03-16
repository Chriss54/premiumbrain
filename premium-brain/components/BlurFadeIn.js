'use client';

import { useRef, useEffect, useState } from 'react';

/**
 * BlurFadeIn — Reveals children with a blur-to-sharp + fade-up animation
 * when scrolled into view. Inspired by MagicUI's Blur Fade component.
 * 
 * Props:
 *   delay      — base delay in ms (default 0)
 *   duration   — animation duration in ms (default 600)
 *   yOffset    — vertical offset in px (default 20)
 *   blurAmount — blur start in px (default 8)
 *   className  — additional class names
 *   as         — HTML element to render (default 'div')
 */
export default function BlurFadeIn({
  children,
  delay = 0,
  duration = 600,
  yOffset = 20,
  blurAmount = 8,
  className = '',
  as: Tag = 'div',
  ...rest
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const style = {
    opacity: isVisible ? 1 : 0,
    filter: isVisible ? 'blur(0px)' : `blur(${blurAmount}px)`,
    transform: isVisible ? 'translateY(0)' : `translateY(${yOffset}px)`,
    transition: `opacity ${duration}ms cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms, filter ${duration}ms cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms`,
    willChange: isVisible ? 'auto' : 'opacity, filter, transform',
  };

  return (
    <Tag ref={ref} className={className} style={style} {...rest}>
      {children}
    </Tag>
  );
}
