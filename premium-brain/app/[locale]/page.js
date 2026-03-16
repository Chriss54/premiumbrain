'use client';

import { Suspense } from 'react';
import { IndustryProvider } from '@/components/IndustryProvider';
import Hero from '@/components/Hero';
import Problem from '@/components/Problem';
import Solution from '@/components/Solution';
import Features from '@/components/Features';
import SocialProof from '@/components/SocialProof';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';

function LandingPage() {
  return (
    <IndustryProvider>
      <Hero />
      <Problem />
      <Solution />
      <Features />
      <SocialProof />
      <Pricing />
      <FAQ />
      <FinalCTA />
    </IndustryProvider>
  );
}

export default function Home() {
  return (
    <Suspense fallback={null}>
      <LandingPage />
    </Suspense>
  );
}
