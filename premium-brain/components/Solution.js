'use client';

import { useTranslations } from 'next-intl';
import useInView from '@/hooks/useInView';
import BlurFadeIn from './BlurFadeIn';
import styles from './Solution.module.css';

export default function Solution() {
  const t = useTranslations('solution');
  const [ref, isInView] = useInView();

  const steps = [
    { key: 'upload', number: '01', icon: '📤' },
    { key: 'analyze', number: '02', icon: '🧠' },
    { key: 'query', number: '03', icon: '💬' },
  ];

  return (
    <section className={styles.solution} ref={ref} aria-labelledby="solution-heading">
      <div className="container">
        <div className={styles.header}>
          <BlurFadeIn delay={0}>
            <span className="section-label">{t('label')}</span>
          </BlurFadeIn>
          <BlurFadeIn delay={100} blurAmount={10}>
            <h2 id="solution-heading" className={styles.headline}>{t('headline')}</h2>
          </BlurFadeIn>
          <BlurFadeIn delay={200}>
            <p className={styles.description}>{t('description')}</p>
          </BlurFadeIn>
        </div>

        <div className={styles.steps}>
          {steps.map((step, i) => (
            <BlurFadeIn key={step.key} delay={300 + i * 200} yOffset={30}>
              <div className={styles.step}>
                <div className={styles.stepNumber}>{step.number}</div>
                <span className={styles.stepIcon} aria-hidden="true">{step.icon}</span>
                <h3 className={styles.stepTitle}>{t(`steps.${step.key}.title`)}</h3>
                <p className={styles.stepDescription}>{t(`steps.${step.key}.description`)}</p>
                {i < steps.length - 1 && (
                  <div className={styles.connector} aria-hidden="true">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                )}
              </div>
            </BlurFadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
