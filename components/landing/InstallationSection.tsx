'use client';

import React from 'react';
import { useTranslations } from 'next-intl';

const InstallationSection = ({ id }: { id: string }) => {
  const t = useTranslations('HomePage.installation');

  return (
    <section
      id={id}
      className="w-full py-16 px-4 text-center bg-[var(--background-color)] text-[var(--text-color)] font-[var(--font-family-base)]"
    >
      <h2 className="text-4xl font-semibold mb-6 text-[var(--text-color)] font-sofia">
        {t('title')}
      </h2>
      <pre className="bg-[var(--surface-color)] text-left text-sm p-6 rounded-[var(--border-radius)] overflow-auto w-full max-w-2xl mx-auto border border-[var(--border-color)]">
        <code className="whitespace-pre-line text-[var(--text-color)]">
          git clone https://github.com/your-repo.git{'\n'}
          cd your-repo{'\n'}
          npm install{'\n'}
          npm run dev
        </code>
      </pre>
    </section>
  );
};

export default InstallationSection;
