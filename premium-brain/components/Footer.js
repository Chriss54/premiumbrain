'use client';

import { useTranslations, useLocale } from 'next-intl';
import styles from './Footer.module.css';

export default function Footer() {
  const t = useTranslations('footer');
  const locale = useLocale();

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={`container ${styles.content}`}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <a href={`/${locale}`} className={styles.logo} aria-label="PremiumBrain Home">
              <span className={styles.logoStripe} aria-hidden="true" />
              <span className={styles.logoText}>
                Premium<strong>Brain</strong>
              </span>
            </a>
            <p className={styles.tagline}>{t('tagline')}</p>
            <p className={styles.description}>{t('description')}</p>
          </div>

          <div className={styles.columns}>
            <div className={styles.column}>
              <h4 className={styles.columnTitle}>{t('legal')}</h4>
              <ul className={styles.columnLinks}>
                <li><a href="#">{t('privacy')}</a></li>
                <li><a href="#">{t('terms')}</a></li>
                <li><a href="#">{t('imprint')}</a></li>
              </ul>
            </div>

            <div className={styles.column}>
              <h4 className={styles.columnTitle}>{t('contact')}</h4>
              <ul className={styles.columnLinks}>
                <li><a href={`mailto:${t('email')}`}>{t('email')}</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <span className={styles.rights}>{t('rights')}</span>
        </div>
      </div>
    </footer>
  );
}
