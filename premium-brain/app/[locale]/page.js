'use client';

import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { IndustryProvider } from '@/components/IndustryProvider';
import Hero from '@/components/Hero';

// Lazy-load below-fold sections for faster initial paint
const Problem = dynamic(() => import('@/components/Problem'));
const Solution = dynamic(() => import('@/components/Solution'));
const Features = dynamic(() => import('@/components/Features'));
const SocialProof = dynamic(() => import('@/components/SocialProof'));
const Pricing = dynamic(() => import('@/components/Pricing'));
const FAQ = dynamic(() => import('@/components/FAQ'));
const FinalCTA = dynamic(() => import('@/components/FinalCTA'));

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
