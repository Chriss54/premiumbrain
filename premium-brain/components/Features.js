'use client';

import { useTranslations } from 'next-intl';
import useInView from '@/hooks/useInView';
import BlurFadeIn from './BlurFadeIn';
import MagicCard from './MagicCard';
import styles from './Features.module.css';

const featureIcons = {
  multimodal: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="23 7 16 12 23 17 23 7" />
      <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
    </svg>
  ),
  multilingual: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  ),
  voice: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
      <line x1="12" y1="19" x2="12" y2="23" />
      <line x1="8" y1="23" x2="16" y2="23" />
    </svg>
  ),
  automation: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
      <line x1="14" y1="4" x2="10" y2="20" />
    </svg>
  ),
  security: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  ),
  integration: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  ),
};

export default function Features() {
  const t = useTranslations('features');
  const [ref, isInView] = useInView();

  const heroKey = 'multimodal';
  const supportingKeys = ['multilingual', 'voice', 'automation', 'security', 'integration'];

  const heroBullets = [
    { icon: '🎥', text: t('heroBullets.video') },
    { icon: '📊', text: t('heroBullets.settings') },
    { icon: '🔬', text: t('heroBullets.procedures') },
  ];

  return (
    <section id="features" className={styles.features} ref={ref} aria-labelledby="features-heading">
      <div className="container">
        <div className={styles.header}>
          <BlurFadeIn delay={0}>
            <span className="section-label">{t('label')}</span>
          </BlurFadeIn>
          <BlurFadeIn delay={100} blurAmount={10}>
            <h2 id="features-heading" className={styles.headline}>{t('headline')}</h2>
          </BlurFadeIn>
        </div>

        {/* Hero Feature — Multimodal Analysis */}
        <BlurFadeIn delay={200} yOffset={30} duration={800}>
          <div className={`${styles.heroFeature} ${isInView ? styles.visible : ''}`}>
            <div className={styles.heroContent}>
              <div className={styles.heroIconWrap} aria-hidden="true">
                {featureIcons[heroKey]}
              </div>
              <span className={styles.heroBadge}>Core Technology</span>
              <h3 className={styles.heroTitle}>{t(`items.${heroKey}.title`)}</h3>
              <p className={styles.heroDescription}>{t(`items.${heroKey}.description`)}</p>
              <ul className={styles.heroBullets}>
                {heroBullets.map((b, i) => (
                  <li key={i} className={styles.heroBullet}>
                    <span className={styles.bulletIcon} aria-hidden="true">{b.icon}</span>
                    <span>{b.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.heroVisual}>
              <div className={styles.visualFrame}>
                <div className={styles.visualHeader}>
                  <span className={styles.visualDot} style={{ background: '#C41E3A' }} />
                  <span className={styles.visualDot} style={{ background: '#FFB800' }} />
                  <span className={styles.visualDot} style={{ background: '#4CAF50' }} />
                  <span className={styles.visualTitle}>training_sop_v3.mp4</span>
                </div>
                <div className={styles.visualBody}>
                  <div className={styles.videoPlaceholder}>
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className={styles.playIcon}>
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                    <span className={styles.videoLabel}>Training Video</span>
                  </div>
                  <div className={styles.extractedData}>
                    <div className={styles.dataRow}>
                      <span className={styles.dataTag}>⚙️ Detected</span>
                      <span className={styles.dataValue}>Temperature: 93°C</span>
                    </div>
                    <div className={styles.dataRow}>
                      <span className={styles.dataTag}>📐 Detected</span>
                      <span className={styles.dataValue}>Pressure: 9 bar</span>
                    </div>
                    <div className={styles.dataRow}>
                      <span className={styles.dataTag}>⏱️ Detected</span>
                      <span className={styles.dataValue}>Extraction: 25-30s</span>
                    </div>
                    <div className={styles.dataRow}>
                      <span className={styles.dataTag}>🔧 Detected</span>
                      <span className={styles.dataValue}>Grind: Fine (2.5)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </BlurFadeIn>

        {/* R3-3: Supporting Features with Magic Card spotlight */}
        <div className={styles.supportingGrid}>
          {supportingKeys.map((key, i) => (
            <BlurFadeIn key={key} delay={400 + i * 100} yOffset={20}>
              <MagicCard
                className={styles.supportingCard}
              >
                <div className={styles.iconWrap} aria-hidden="true">
                  {featureIcons[key]}
                </div>
                <div className={styles.supportingText}>
                  <h3 className={styles.cardTitle}>{t(`items.${key}.title`)}</h3>
                  <p className={styles.cardDescription}>{t(`items.${key}.description`)}</p>
                </div>
              </MagicCard>
            </BlurFadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
