'use client';

import { useTranslations } from 'next-intl';
import { useIndustry } from './IndustryProvider';
import useInView from '@/hooks/useInView';
import BlurFadeIn from './BlurFadeIn';
import MagicCard from './MagicCard';
import styles from './Pricing.module.css';

export default function Pricing() {
  const t = useTranslations('pricing');
  const { calendlyUrl } = useIndustry();
  const [ref, isInView] = useInView();

  return (
    <section id="pricing" className={styles.pricing} ref={ref} aria-labelledby="pricing-heading">
      <div className="container">
        <div className={styles.header}>
          <BlurFadeIn delay={0}>
            <span className="section-label">{t('label')}</span>
          </BlurFadeIn>
          <BlurFadeIn delay={100} blurAmount={10}>
            <h2 id="pricing-heading" className={styles.headline}>{t('headline')}</h2>
          </BlurFadeIn>
        </div>

        <div className={styles.grid}>
          {/* Community Plan */}
          <BlurFadeIn delay={200} yOffset={30}>
            <MagicCard className={styles.card}>
              <div className={styles.cardHeader}>
                <h3 className={styles.planName}>{t('community.name')}</h3>
                <div className={styles.priceWrap}>
                  <span className={styles.price}>{t('community.price')}</span>
                  <span className={styles.period}>{t('community.period')}</span>
                </div>
                <p className={styles.planDescription}>{t('community.description')}</p>
              </div>
              <ul className={styles.featureList}>
                {t.raw('community.features').map((feature, i) => (
                  <li key={i} className={styles.featureItem}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <a href={calendlyUrl} target="_blank" rel="noopener noreferrer" className={`btn btn-secondary ${styles.planCta}`}>
                {t('community.cta')}
              </a>
            </MagicCard>
          </BlurFadeIn>

          {/* Custom Plan (Featured) */}
          <BlurFadeIn delay={350} yOffset={30}>
            <MagicCard className={`${styles.card} ${styles.cardFeatured}`}>
              <div className={styles.cardHeader}>
                <h3 className={styles.planName}>{t('custom.name')}</h3>
                <div className={styles.priceWrap}>
                  <span className={styles.price}>{t('custom.price')}</span>
                </div>
                <p className={styles.planDescription}>{t('custom.description')}</p>
              </div>
              <ul className={styles.featureList}>
                {t.raw('custom.features').map((feature, i) => (
                  <li key={i} className={styles.featureItem}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <a href={calendlyUrl} target="_blank" rel="noopener noreferrer" className={`btn btn-primary ${styles.planCta}`}>
                {t('custom.cta')}
              </a>
            </MagicCard>
          </BlurFadeIn>
        </div>
      </div>
    </section>
  );
}
