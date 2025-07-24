import React from 'react';
import {
  HeroSection,
  FeaturesSection,
  StackSection,
  ComponentsSection,
} from '@/components/landing';
import InstallationSection from '@/components/landing/InstallationSection';
import DocsSection from '@/components/landing/DocsSection';
import TestimonialsSection from '@/components/landing/TestimonialsSection';
import FooterSection from '@/components/landing/FooterSection';
// import { getIntl } from '@/i18n/request';

export default async function HomePage() {
  // const intl = await getIntl(locale); // i18n ready
  return (
    <main>
      <HeroSection id="hero" />
      <FeaturesSection id="features" />
      <StackSection id="stack" />
      <ComponentsSection id="components" />
      <InstallationSection id="installation" />
      <DocsSection id="docs" />
      <TestimonialsSection id="testimonials" />
      <FooterSection id="footer" />
    </main>
  );
}
