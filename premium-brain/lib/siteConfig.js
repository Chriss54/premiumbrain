import siteConfig from '@/config/site-config.json';

/**
 * Get the current site configuration.
 * In production, this could read from an API or KV store.
 * For now, reads from the static JSON file.
 */
export function getSiteConfig() {
  return siteConfig;
}

/**
 * Get the Calendly URL from site config.
 */
export function getCalendlyUrl() {
  return siteConfig.calendlyUrl || 'https://calendly.com/premiumbrain/demo';
}
