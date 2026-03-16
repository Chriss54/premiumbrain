'use client';

import { createContext, useContext, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { getIndustryConfig } from '@/lib/industryConfig';
import { getCalendlyUrl } from '@/lib/siteConfig';

const IndustryContext = createContext({
  industry: null,
  config: {},
  calendlyUrl: 'https://calendly.com/premiumbrain/demo',
});

export function IndustryProvider({ children }) {
  const searchParams = useSearchParams();
  const industry = searchParams.get('industry');
  const config = useMemo(() => getIndustryConfig(industry), [industry]);
  const calendlyUrl = getCalendlyUrl();

  return (
    <IndustryContext.Provider value={{ industry, config, calendlyUrl }}>
      {children}
    </IndustryContext.Provider>
  );
}

export function useIndustry() {
  return useContext(IndustryContext);
}
