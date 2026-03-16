'use client';

import { useState, useEffect, useCallback } from 'react';
import { useTranslations } from 'next-intl';
import { useIndustry } from './IndustryProvider';
import useInView from '@/hooks/useInView';
import ParticleField from './ParticleField';
import BlurFadeIn from './BlurFadeIn';
import styles from './Hero.module.css';

const TYPING_QUERIES_EN = [
  'How do I calibrate the espresso machine?',
  'Show me the onboarding checklist',
  'What was decided in last week\'s meeting?',
  'Safety protocol for chemical storage',
];

function useTypingEffect(queries, speed = 60, pauseMs = 2000, deleteSpeed = 30) {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let cancelled = false;
    const run = async () => {
      let queryIndex = 0;
      while (!cancelled) {
        const query = queries[queryIndex % queries.length];
        for (let i = 0; i <= query.length && !cancelled; i++) {
          setDisplayText(query.slice(0, i));
          setIsTyping(true);
          await new Promise((r) => setTimeout(r, speed + Math.random() * 40));
        }
        if (cancelled) break;
        setIsTyping(false);
        await new Promise((r) => setTimeout(r, pauseMs));
        if (cancelled) break;
        for (let i = query.length; i >= 0 && !cancelled; i--) {
          setDisplayText(query.slice(0, i));
          setIsTyping(true);
          await new Promise((r) => setTimeout(r, deleteSpeed));
        }
        if (cancelled) break;
        await new Promise((r) => setTimeout(r, 300));
        queryIndex++;
      }
    };
    run();
    return () => { cancelled = true; };
  }, [queries, speed, pauseMs, deleteSpeed]);

  return { displayText, isTyping };
}

export default function Hero() {
  const t = useTranslations('hero');
  const { config, calendlyUrl } = useIndustry();
  const [ref, isInView] = useInView();
  const { displayText, isTyping } = useTypingEffect(TYPING_QUERIES_EN);

  const tagline = config?.hero?.tagline || t('tagline');
  const headline = config?.hero?.headline || t('headline');
  const subheadline = config?.hero?.subheadline || t('subheadline');

  return (
    <section className={styles.hero} ref={ref} aria-labelledby="hero-heading">
      {/* R3-1: Ambient particle field */}
      <ParticleField className={styles.particleCanvas} />
      <div className={styles.bgGlow} aria-hidden="true" />
      <div className={styles.gridOverlay} aria-hidden="true" />

      <div className={`container ${styles.content}`}>
        <div className={styles.inner}>
          <BlurFadeIn delay={0}>
            <span className={styles.tagline}>{tagline}</span>
          </BlurFadeIn>
          <BlurFadeIn delay={150} blurAmount={10}>
            <h1 id="hero-heading" className={styles.headline}>
              {headline.split('\n').map((line, i) => (
                <span key={i} className={styles.headlineLine}>
                  {line}
                  {i === 0 && <br />}
                </span>
              ))}
            </h1>
          </BlurFadeIn>
          <BlurFadeIn delay={300}>
            <p className={styles.subheadline}>{subheadline}</p>
          </BlurFadeIn>

          <BlurFadeIn delay={450}>
            <div className={styles.ctaGroup}>
              {/* R3-5: Shimmer border beam CTA */}
              <a
                href={calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`btn btn-primary btn-large ${styles.ctaBtn} ${styles.shimmerBtn}`}
                id="hero-cta-button"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                {t('cta')}
              </a>
              <span className={styles.ctaSub}>{t('ctaSub')}</span>
            </div>
          </BlurFadeIn>
        </div>

        <BlurFadeIn delay={400} yOffset={40} duration={1000}>
          <div className={styles.visual}>
            {/* R3-7: Border beam on dashboard mockup */}
            <div className={styles.dashboardMockup}>
              <div className={styles.borderBeam} aria-hidden="true" />
              <div className={styles.mockupHeader}>
                <div className={styles.mockupDots}>
                  <span /><span /><span />
                </div>
                <span className={styles.mockupUrl}>app.premiumbrain.ai</span>
              </div>
              <div className={styles.mockupBody}>
                <div className={styles.mockupSidebar}>
                  <div className={styles.sidebarItem} data-active="true">
                    <span className={styles.sidebarIcon}>📊</span>
                    {t('mockup.dashboard')}
                  </div>
                  <div className={styles.sidebarItem}>
                    <span className={styles.sidebarIcon}>🔍</span>
                    {t('mockup.askAi')}
                  </div>
                  <div className={styles.sidebarItem}>
                    <span className={styles.sidebarIcon}>📁</span>
                    {t('mockup.documents')}
                  </div>
                  <div className={styles.sidebarItem}>
                    <span className={styles.sidebarIcon}>🎬</span>
                    {t('mockup.videos')}
                  </div>
                  <div className={styles.sidebarItem}>
                    <span className={styles.sidebarIcon}>✅</span>
                    {t('mockup.tasks')}
                  </div>
                </div>
                <div className={styles.mockupMain}>
                  <div className={styles.mockupSearch}>
                    <span className={styles.typingText}>
                      {displayText}
                      <span className={`${styles.cursor} ${isTyping ? styles.cursorBlink : ''}`}>|</span>
                    </span>
                    <span className={styles.askBtn}>{t('mockup.askButton')}</span>
                  </div>
                  <div className={styles.mockupStats}>
                    <div className={styles.statCard}>
                      <span className={styles.statNumber}>1,247</span>
                      <span className={styles.statLabel}>{t('mockup.documents')}</span>
                    </div>
                    <div className={styles.statCard}>
                      <span className={styles.statNumber}>89</span>
                      <span className={styles.statLabel}>{t('mockup.videos')}</span>
                    </div>
                    <div className={styles.statCard}>
                      <span className={styles.statNumber}>3</span>
                      <span className={styles.statLabel}>{t('mockup.languages')}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </BlurFadeIn>
      </div>
    </section>
  );
}
