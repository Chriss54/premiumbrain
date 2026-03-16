'use client';

import { useRef, useCallback } from 'react';

/**
 * MagicCard — Radial spotlight follows the cursor, creating depth.
 * Inspired by MagicUI Magic Card component.
 */
export default function MagicCard({ children, className = '', style = {}, ...rest }) {
  const cardRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
    card.style.setProperty('--spotlight-opacity', '1');
  }, []);

  const handleMouseLeave = useCallback(() => {
    const card = cardRef.current;
    if (!card) return;
    card.style.setProperty('--spotlight-opacity', '0');
  }, []);

  return (
    <div
      ref={cardRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        position: 'relative',
        overflow: 'hidden',
        '--mouse-x': '50%',
        '--mouse-y': '50%',
        '--spotlight-opacity': '0',
        ...style,
      }}
      {...rest}
    >
      {/* Spotlight overlay */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: 'inherit',
          background: 'radial-gradient(300px circle at var(--mouse-x) var(--mouse-y), rgba(196, 30, 58, 0.08), transparent 60%)',
          opacity: 'var(--spotlight-opacity)',
          transition: 'opacity 300ms ease',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      {/* Content sits on top */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        {children}
      </div>
    </div>
  );
}
