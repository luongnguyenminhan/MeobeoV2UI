'use client';
import React from 'react';
import { useTranslations } from 'next-intl';

const TestimonialsSection = ({ id }: { id: string }) => {
  const t = useTranslations('HomePage.testimonials');
  return (
    <section
      id={id}
      className="w-full py-16 px-4 text-center bg-[var(--background-color)] text-[var(--text-color)] font-[var(--font-family-base)]"
    >
      <h2 className="text-4xl font-semibold mb-6 text-[var(--text-color)] font-sofia">
        {t('title')}
      </h2>
      <p className="text-lg mb-8 text-[var(--muted-text-color)]">
        {t('description')}
      </p>
      {/* Placeholder for testimonials */}
    </section>
  );
};

export default TestimonialsSection;
