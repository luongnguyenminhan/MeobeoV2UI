'use client';
import React, { useState } from 'react';
// import Image from 'next/image';
import { usePathname, useRouter } from '@/i18n/navigation';
import { useLocale, useTranslations } from 'next-intl';
import { FiChevronDown, FiFlag } from 'react-icons/fi';

const languages = [
  {
    code: 'en',
    name: 'English',
    // flag: '/flags/us.png',
  },
  {
    code: 'vi',
    name: 'Tiếng Việt',
    // flag: '/flags/vn.png',
  },
];

const LanguageSwitcher = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations('LanguageSwitcher');

  const [open, setOpen] = useState(false);

  const currentLanguage =
    languages.find((lang) => lang.code === locale) || languages[0];

  const handleLanguageChange = (language: (typeof languages)[0]) => {
    setOpen(false);
    const normalizedPath = pathname.replace(/^\/(en|vi)/, '') || '/';
    router.push(normalizedPath, { locale: language.code });
  };

  return (
    <div className="relative">
      <button
        className="flex items-center gap-2 px-3 py-2 rounded-[var(--border-radius)] bg-[var(--background-color)] text-[var(--muted-text-color)] hover:bg-[var(--surface-color)] transition font-[var(--font-family-base)] border border-[var(--border-color)]"
        onClick={() => setOpen((v) => !v)}
        aria-label={t('selectLanguage', { current: currentLanguage.name })}
        type="button"
      >
        <FiFlag className="w-5 h-5" />
        <span className="uppercase">{currentLanguage.code}</span>
        <FiChevronDown className="w-4 h-4" />
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-40 bg-[var(--background-color)] rounded-[var(--border-radius)] shadow-lg z-10 border border-[var(--border-color)]">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => handleLanguageChange(language)}
              className="flex items-center w-full px-4 py-2 hover:bg-[var(--surface-color)] transition text-[var(--text-color)] font-[var(--font-family-base)]"
              type="button"
            >
              <FiFlag className="w-5 h-5" />
              <span className="ml-2">{language.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
