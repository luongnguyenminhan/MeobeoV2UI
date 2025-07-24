'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

const FooterSection = ({ id }: { id: string }) => {
  const t = useTranslations('Footer');

  return (
    <footer
      id={id}
      className="
        py-4 px-5 text-center text-sm
        bg-[var(--background-color)]
        text-[var(--muted-text-color)]
        border-t border-[var(--border-color)]
        font-[var(--font-family-base)]
      "
    >
      <p className="mb-2 text-[var(--text-color)]">
        &copy; {new Date().getFullYear()} {t('title')} . {t('rights')}
      </p>
      <p>
        <a
          href="https://github.com/aelabid/Next-StarterKit"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--link-color)] hover:text-[var(--link-hover-color)] underline-offset-2 hover:underline transition-colors"
        >
          {t('github')}
        </a>
        {' | '}
        <Link
          href="/privacy"
          className="text-[var(--link-color)] hover:text-[var(--link-hover-color)] underline-offset-2 hover:underline transition-colors"
        >
          {t('privacy')}
        </Link>
        {' | '}
        <Link
          href="/terms"
          className="text-[var(--link-color)] hover:text-[var(--link-hover-color)] underline-offset-2 hover:underline transition-colors"
        >
          {t('terms')}
        </Link>
      </p>
    </footer>
  );
};

export default FooterSection;
