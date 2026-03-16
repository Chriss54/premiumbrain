import defaultConfig from '@/config/industries/default.json';
import hotelConfig from '@/config/industries/hotel.json';
import tradesConfig from '@/config/industries/trades.json';

const industries = {
  default: defaultConfig,
  hotel: hotelConfig,
  trades: tradesConfig,
};

/**
 * Deep merge industry config over defaults.
 * Returns merged config with industry-specific overrides.
 */
function deepMerge(target, source) {
  const result = { ...target };
  for (const key of Object.keys(source)) {
    if (
      source[key] &&
      typeof source[key] === 'object' &&
      !Array.isArray(source[key]) &&
      target[key] &&
      typeof target[key] === 'object'
    ) {
      result[key] = deepMerge(target[key], source[key]);
    } else {
      result[key] = source[key];
    }
  }
  return result;
}

/**
 * Get industry-specific config, merged with defaults.
 * @param {string|null} industry - Industry key (hotel, trades, etc.)
 * @returns {object} Merged config
 */
export function getIndustryConfig(industry) {
  if (!industry || !industries[industry]) {
    return defaultConfig;
  }
  return deepMerge(defaultConfig, industries[industry]);
}

/**
 * Get the list of available industries.
 */
export function getAvailableIndustries() {
  return Object.keys(industries).filter((k) => k !== 'default');
}
