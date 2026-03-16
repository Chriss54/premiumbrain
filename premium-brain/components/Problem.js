'use client';

import { useTranslations } from 'next-intl';
import { useState, useEffect, useRef } from 'react';
import useInView from '@/hooks/useInView';
import BlurFadeIn from './BlurFadeIn';
import styles from './Problem.module.css';

/**
 * useCountUp — animates a number from 0 to target when triggered.
 * Handles integers, decimals, currency prefixes/suffixes.
 * R3-4: Now includes shimmer completion callback.
 */
function useCountUp(targetString, shouldStart, duration = 2000) {
  const [display, setDisplay] = useState('0');
  const [isDone, setIsDone] = useState(false);
  const hasRun = useRef(false);

  useEffect(() => {
    if (!shouldStart || hasRun.current) return;
    hasRun.current = true;

    const match = targetString.match(/^([€$£]?)(\d+[\d.,]*)([%+]?)$/);
    if (!match) {
      setDisplay(targetString);
      setIsDone(true);
      return;
    }

    const prefix = match[1];
    const numStr = match[2];
    const suffix = match[3];
    
    const hasDecimal = numStr.includes('.');
    const hasComma = numStr.includes(',');
    const cleanNum = numStr.replace(/,/g, '');
    const targetNum = parseFloat(cleanNum);
    const decimalPlaces = hasDecimal ? cleanNum.split('.')[1]?.length || 0 : 0;

    const startTime = performance.now();
    const step = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = targetNum * eased;

      let formatted;
      if (decimalPlaces > 0) {
        formatted = current.toFixed(decimalPlaces);
      } else {
        const rounded = Math.round(current);
        if (hasComma && rounded >= 1000) {
          formatted = rounded.toLocaleString('en-US');
        } else {
          formatted = rounded.toString();
        }
      }

      setDisplay(`${prefix}${formatted}${suffix}`);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setIsDone(true);
      }
    };

    requestAnimationFrame(step);
  }, [shouldStart, targetString, duration]);

  return { display, isDone };
}

export default function Problem() {
  const t = useTranslations('problem');
  const [ref, isInView] = useInView();

  const stats = [
    { value: t('stats.searchTime'), label: t('stats.searchTimeLabel'), icon: '🔍' },
    { value: t('stats.knowledgeLoss'), label: t('stats.knowledgeLossLabel'), icon: '📉' },
    { value: t('stats.trainingCost'), label: t('stats.trainingCostLabel'), icon: '💰' },
  ];

  return (
    <section className={styles.problem} ref={ref} aria-labelledby="problem-heading">
      <div className="container">
        <div className={styles.content}>
          <BlurFadeIn delay={0}>
            <span className="section-label">{t('label')}</span>
          </BlurFadeIn>
          <BlurFadeIn delay={100} blurAmount={10}>
            <h2 id="problem-heading" className={styles.headline}>{t('headline')}</h2>
          </BlurFadeIn>
          <BlurFadeIn delay={200}>
            <p className={styles.description}>{t('description')}</p>
          </BlurFadeIn>
        </div>

        <div className={styles.stats}>
          {stats.map((stat, i) => (
            <BlurFadeIn key={i} delay={300 + i * 150} yOffset={30}>
              <StatCard stat={stat} index={i} isInView={isInView} />
            </BlurFadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCard({ stat, index, isInView }) {
  const { display: countedValue, isDone } = useCountUp(stat.value, isInView, 2000 + index * 300);

  return (
    <div className={styles.statCard}>
      <span className={styles.statIcon} aria-hidden="true">{stat.icon}</span>
      {/* R3-4: Shimmer effect on number when count-up completes */}
      <span className={`${styles.statValue} ${isDone ? styles.shimmerDone : ''}`}>
        {countedValue}
      </span>
      <span className={styles.statLabel}>{stat.label}</span>
    </div>
  );
}
