'use client';

import { useTranslations } from 'next-intl';
import { useIndustry } from './IndustryProvider';
import useInView from '@/hooks/useInView';
import BlurFadeIn from './BlurFadeIn';
import styles from './FinalCTA.module.css';

export default function FinalCTA() {
  const t = useTranslations('cta');
  const { calendlyUrl } = useIndustry();
  const [ref, isInView] = useInView();

  return (
    <section id="cta" className={styles.cta} ref={ref} aria-labelledby="cta-heading">
      <div className={styles.bgGlow} aria-hidden="true" />
      <div className={`container ${styles.content}`}>
        <BlurFadeIn delay={0} blurAmount={10}>
          <h2 id="cta-heading" className={styles.headline}>{t('headline')}</h2>
        </BlurFadeIn>
        <BlurFadeIn delay={150}>
          <p className={styles.description}>{t('description')}</p>
        </BlurFadeIn>
        <BlurFadeIn delay={300}>
          {/* R3-5: Shimmer border beam CTA */}
          <a
            href={calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`btn btn-primary btn-large ${styles.ctaBtn} ${styles.shimmerBtn}`}
            id="main-cta-button"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            {t('button')}
          </a>
        </BlurFadeIn>
        <BlurFadeIn delay={400}>
          <span className={styles.note}>{t('note')}</span>
        </BlurFadeIn>
      </div>
    </section>
  );
}
