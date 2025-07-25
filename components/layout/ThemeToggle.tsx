'use client';
import { RiMoonFill, RiSunLine } from 'react-icons/ri';
import { useTranslations } from 'next-intl';
import { useTheme } from '@/context/ThemeContext';

const ThemeToggle = () => {
  const t = useTranslations('ThemeToggle');
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      aria-label={t('toggleTheme')}
      onClick={toggleTheme}
      className="p-2 rounded-[var(--border-radius)] bg-[var(--background-color)] text-[var(--muted-text-color)] hover:bg-[var(--surface-color)] transition border border-[var(--border-color)] font-[var(--font-family-base)]"
      type="button"
    >
      {theme === 'light' ? <RiMoonFill size={20} /> : <RiSunLine size={20} />}
    </button>
  );
};

export default ThemeToggle;
