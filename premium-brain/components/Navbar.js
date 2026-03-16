'use client';

import { useTranslations, useLocale } from 'next-intl';
import { useTheme } from './ThemeProvider';
import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { getCalendlyUrl } from '@/lib/siteConfig';
import styles from './Navbar.module.css';

export default function Navbar() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const calendlyUrl = getCalendlyUrl();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const switchLocale = (newLocale) => {
    const path = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(path);
  };

  const locales = [
    { code: 'en', flag: '🇬🇧' },
    { code: 'de', flag: '🇩🇪' },
    { code: 'fr', flag: '🇫🇷' },
  ];

  return (
    <header
      className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}
      role="banner"
    >
      <nav className={styles.nav} aria-label="Main navigation">
        <a href={`/${locale}`} className={styles.logo} aria-label="PremiumBrain Home">
          <span className={styles.logoStripe} aria-hidden="true" />
          <span className={styles.logoText}>
            Premium<span className={styles.logoBold}>Brain</span>
          </span>
        </a>

        <ul className={`${styles.links} ${mobileOpen ? styles.linksOpen : ''}`}>
          <li><a href="#features" className={styles.link} onClick={() => setMobileOpen(false)}>{t('features')}</a></li>
          <li><a href="#pricing" className={styles.link} onClick={() => setMobileOpen(false)}>{t('pricing')}</a></li>
          <li><a href="#faq" className={styles.link} onClick={() => setMobileOpen(false)}>{t('faq')}</a></li>
        </ul>

        <div className={styles.actions}>
          <div className={styles.localeSwitch} role="group" aria-label="Language selector">
            {locales.map((l) => (
              <button
                key={l.code}
                className={`${styles.localeBtn} ${locale === l.code ? styles.localeBtnActive : ''}`}
                onClick={() => switchLocale(l.code)}
                aria-label={`Switch to ${l.code}`}
                aria-pressed={locale === l.code}
              >
                {l.flag}
              </button>
            ))}
          </div>

          <button
            className={styles.themeToggle}
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>

          <a href={calendlyUrl} target="_blank" rel="noopener noreferrer" className={`btn btn-primary ${styles.ctaBtn}`}>
            {t('bookDemo')}
          </a>

          <button
            className={`${styles.hamburger} ${mobileOpen ? styles.hamburgerOpen : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className={styles.mobileMenu}>
          <ul className={styles.mobileLinks}>
            <li><a href="#features" className={styles.mobileLink} onClick={() => setMobileOpen(false)}>{t('features')}</a></li>
            <li><a href="#pricing" className={styles.mobileLink} onClick={() => setMobileOpen(false)}>{t('pricing')}</a></li>
            <li><a href="#faq" className={styles.mobileLink} onClick={() => setMobileOpen(false)}>{t('faq')}</a></li>
            <li>
              <a href={calendlyUrl} target="_blank" rel="noopener noreferrer" className={`btn btn-primary ${styles.mobileCta}`} onClick={() => setMobileOpen(false)}>
                {t('bookDemo')}
              </a>
            </li>
          </ul>
          <div className={styles.mobileActions}>
            <div className={styles.localeSwitch} style={{ display: 'flex' }} role="group" aria-label="Language selector">
              {locales.map((l) => (
                <button
                  key={l.code}
                  className={`${styles.localeBtn} ${locale === l.code ? styles.localeBtnActive : ''}`}
                  onClick={() => { switchLocale(l.code); setMobileOpen(false); }}
                  aria-label={`Switch to ${l.code}`}
                  aria-pressed={locale === l.code}
                >
                  {l.flag}
                </button>
              ))}
            </div>
            <button
              className={styles.themeToggle}
              style={{ display: 'flex' }}
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
