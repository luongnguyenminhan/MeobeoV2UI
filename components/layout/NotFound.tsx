'use client';
import React from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { FaArrowLeft, FaHome, FaExclamationTriangle } from 'react-icons/fa';

const NotFound = () => {
  const router = useRouter();
  const t = useTranslations('NotFound');

  const handleGoBack = () => {
    router.back();
  };

  const handleGoHome = () => {
    router.push('/dashboard');
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-6 py-12"
      style={{
        background: 'var(--background)',
        color: 'var(--text-primary)',
      }}
    >
      <div className="max-w-md w-full text-center space-y-8">
        {/* Error Icon */}
        <div className="flex justify-center">
          <div
            className="w-24 h-24 rounded-full flex items-center justify-center"
            style={{
              background: 'var(--gradient-soft)',
              boxShadow: 'var(--shadow-lg)',
            }}
          >
            <FaExclamationTriangle className="text-white text-3xl" />
          </div>
        </div>

        {/* 404 Number */}
        <div>
          <h1
            className="text-8xl font-bold mb-2 text-gradient"
            style={{
              background: 'var(--gradient-primary)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            404
          </h1>
        </div>

        {/* Title */}
        <div>
          <h2
            className="text-3xl font-semibold mb-4"
            style={{ color: 'var(--text-primary)' }}
          >
            {t('notFound.title')}
          </h2>

          <p
            className="text-lg leading-relaxed"
            style={{ color: 'var(--text-muted)' }}
          >
            {t('notFound.description')}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={handleGoBack}
            className="flex items-center justify-center gap-2 px-6 py-3 text-lg border-2 rounded-lg transition-all duration-300 hover:shadow-md"
            style={{
              borderColor: 'var(--color-primary)',
              color: 'var(--color-primary)',
              backgroundColor: 'transparent',
            }}
          >
            <FaArrowLeft />
            {t('notFound.goBack')}
          </button>

          <button
            onClick={handleGoHome}
            className="flex items-center justify-center gap-2 px-6 py-3 text-lg rounded-lg text-white transition-all duration-300 hover:shadow-md"
            style={{
              background: 'var(--gradient-primary)',
            }}
          >
            <FaHome />
            {t('notFound.goHome')}
          </button>
        </div>

        {/* Additional Help Text */}
        <div
          className="pt-8 border-t"
          style={{ borderColor: 'var(--border-gray)' }}
        >
          <p
            className="text-sm leading-relaxed"
            style={{ color: 'var(--text-muted)' }}
          >
            <Link
              href="/contact"
              className="font-medium hover:underline"
              style={{ color: 'var(--color-primary)' }}
            >
              {t('notFound.contactUs')}
            </Link>{' '}
            {t('notFound.forSupport')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
