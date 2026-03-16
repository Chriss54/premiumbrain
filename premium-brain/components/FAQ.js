'use client';

import { useTranslations } from 'next-intl';
import useInView from '@/hooks/useInView';
import { useState } from 'react';
import BlurFadeIn from './BlurFadeIn';
import styles from './FAQ.module.css';

function FAQItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className={`${styles.item} ${isOpen ? styles.itemOpen : ''}`}>
      <button
        className={styles.question}
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span>{question}</span>
        <svg
          className={styles.chevron}
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      <div className={styles.answerWrap} aria-hidden={!isOpen}>
        <p className={styles.answer}>{answer}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const t = useTranslations('faq');
  const [ref, isInView] = useInView();
  const [openIndex, setOpenIndex] = useState(0);

  const items = t.raw('items');

  return (
    <section id="faq" className={styles.faq} ref={ref} aria-labelledby="faq-heading">
      <div className="container">
        <div className={styles.header}>
          <BlurFadeIn delay={0}>
            <span className="section-label">{t('label')}</span>
          </BlurFadeIn>
          <BlurFadeIn delay={100} blurAmount={10}>
            <h2 id="faq-heading" className={styles.headline}>{t('headline')}</h2>
          </BlurFadeIn>
        </div>

        <BlurFadeIn delay={200} yOffset={20}>
          <div className={styles.list}>
            {items.map((item, i) => (
              <FAQItem
                key={i}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
              />
            ))}
          </div>
        </BlurFadeIn>
      </div>
    </section>
  );
}
