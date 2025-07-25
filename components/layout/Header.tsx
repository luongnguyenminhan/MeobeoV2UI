'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import ThemeToggle from './ThemeToggle';
import LanguageSwitcher from './LanguageSwitcher';
import Image from 'next/image';
import { Button } from 'antd';
import { useRouter } from 'next/navigation';

const NAV_ITEMS = [
  { label: 'home', href: '#hero' },
  { label: 'features', href: '#features' },
  { label: 'techStack', href: '#stack' },
  { label: 'testimonials', href: '#testimonials' },
];

const Header = () => {
  const t = useTranslations('Header.navigation');
  const [isLandingPage, setIsLandingPage] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const router = useRouter();

  React.useEffect(() => {
    const isLanding =
      window.location.pathname === '/' ||
      /^\/[a-z]{2}(-[A-Z]{2})?$/.test(window.location.pathname);
    setIsLandingPage(isLanding);
  }, []);

  const handleStartNow = () => {
    router.push('/auth');
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--background-color)] shadow font-[var(--font-family-base)]">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logos/logo.png"
              alt="Logo"
              width={1000}
              height={1000}
              className="h-10 w-10 object-contain"
            />
            <span className="hidden md:block text-2xl font-bold text-[var(--text-color)] font-sofia">
              Meobeo.ai
            </span>
          </Link>
          <nav className="hidden md:flex gap-8">
            {isLandingPage &&
              NAV_ITEMS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-[var(--muted-text-color)] hover:text-[var(--primary-color)] font-medium transition"
                >
                  {t(item.label)}
                </Link>
              ))}
          </nav>
          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <ThemeToggle />
            <Button
              type="primary"
              className="hidden md:inline-block"
              onClick={handleStartNow}
            >
              {t('startNow')}
            </Button>
            <button
              className="md:hidden p-2 rounded hover:bg-[var(--surface-color)]"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle Navigation"
            >
              <svg
                className="w-6 h-6 text-[var(--text-color)]"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                {mobileOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
        {mobileOpen && isLandingPage && (
          <nav className="md:hidden bg-[var(--background-color)] px-4 pb-4">
            <ul className="flex flex-col gap-4">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="block text-[var(--muted-text-color)] hover:text-[var(--primary-color)] font-medium py-2"
                    onClick={() => setMobileOpen(false)}
                  >
                    {t(item.label)}
                  </Link>
                </li>
              ))}
              <li>
                <Button
                  type="primary"
                  block
                  onClick={() => {
                    setMobileOpen(false);
                    handleStartNow();
                  }}
                >
                  {t('startNow')}
                </Button>
              </li>
            </ul>
          </nav>
        )}
      </header>
      <div className="h-16" />
    </>
  );
};

export default Header;
