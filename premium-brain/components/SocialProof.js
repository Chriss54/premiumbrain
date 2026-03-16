'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import useInView from '@/hooks/useInView';
import BlurFadeIn from './BlurFadeIn';
import styles from './SocialProof.module.css';

export default function SocialProof() {
  const t = useTranslations('socialProof');
  const [ref, isInView] = useInView();

  const stats = [
    { value: t('stats.meetings'), label: t('stats.meetingsLabel'), icon: '📅' },
    { value: t('stats.actions'), label: t('stats.actionsLabel'), icon: '✅' },
    { value: t('stats.hours'), label: t('stats.hoursLabel'), icon: '⏱️' },
  ];

  const testimonials = [
    {
      quote: t('testimonials.chris.quote'),
      name: t('testimonials.chris.name'),
      role: t('testimonials.chris.role'),
      image: '/team/chris.png',
    },
    {
      quote: t('testimonials.lutfiya.quote'),
      name: t('testimonials.lutfiya.name'),
      role: t('testimonials.lutfiya.role'),
      image: '/team/lutfiya.png',
    },
  ];

  // R3-6: Double the testimonials for marquee effect
  const marqueeItems = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section className={styles.socialProof} ref={ref} aria-labelledby="proof-heading">
      <div className={styles.bgAccent} aria-hidden="true" />
      <div className="container">
        <div className={styles.content}>
          <BlurFadeIn delay={0}>
            <span className="section-label">{t('label')}</span>
          </BlurFadeIn>
          <BlurFadeIn delay={100} blurAmount={10}>
            <h2 id="proof-heading" className={styles.headline}>
              {t('headline').split('\n').map((line, i) => (
                <span key={i}>{line}{i === 0 && <br />}</span>
              ))}
            </h2>
          </BlurFadeIn>
          <BlurFadeIn delay={200}>
            <p className={styles.description}>{t('description')}</p>
          </BlurFadeIn>
        </div>

        {/* R3-6: Marquee testimonials — infinite horizontal scroll */}
        <BlurFadeIn delay={300} yOffset={30}>
          <div className={styles.marqueeWrapper}>
            <div className={styles.marqueeFadeLeft} aria-hidden="true" />
            <div className={styles.marqueeFadeRight} aria-hidden="true" />
            <div className={styles.marqueeTrack}>
              {marqueeItems.map((item, i) => (
                <div key={i} className={styles.testimonialCard}>
                  <div className={styles.quoteIcon} aria-hidden="true">"</div>
                  <blockquote className={styles.quote}>
                    {item.quote}
                  </blockquote>
                  <div className={styles.author}>
                    <div className={styles.authorImage}>
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={56}
                        height={56}
                        className={styles.headshot}
                      />
                    </div>
                    <div className={styles.authorInfo}>
                      <strong>{item.name}</strong>
                      <span>{item.role}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </BlurFadeIn>

        <div className={styles.stats}>
          {stats.map((stat, i) => (
            <BlurFadeIn key={i} delay={400 + i * 100}>
              <div className={styles.statCard}>
                <span className={styles.statIcon} aria-hidden="true">{stat.icon}</span>
                <span className={styles.statValue}>{stat.value}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            </BlurFadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
