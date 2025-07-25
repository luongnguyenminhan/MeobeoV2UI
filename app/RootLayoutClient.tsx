/* eslint-disable @next/next/no-css-tags */
/* eslint-disable @next/next/no-page-custom-font */
// app/RootLayoutClient.tsx
'use client';
import React from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { ReactQueryProvider } from '@/context/ReactQueryProvider';
import { Provider } from 'react-redux';
import store from '@/store/index';
import 'antd/dist/reset.css';
import '@/styles/globals.css';
import { ThemeProvider } from '@/context/ThemeContext';
import Header from '@/components/layout/Header';

export default function RootLayoutClient({
  children,
  locale,
  messages,
}: {
  children: React.ReactNode;
  locale: string;
  messages: any;
}) {
  // Đảm bảo SSR luôn có className phù hợp theme (light/dark)
  // ThemeProvider sẽ cập nhật lại nếu user chọn theme khác
  return (
    <html lang={locale} suppressHydrationWarning={true} className="bg-[var(--background-color)] text-[var(--text-color)]">
      <head>
        {/* Preload CSS để tránh FART */}
        <link rel="preload" href="/styles/globals.css" as="style" />
        <link rel="stylesheet" href="/styles/globals.css" />
        <link rel="preload" href="https://fonts.googleapis.com/css2?family=Sofia&display=swap" as="style" />
        <link rel="preload" href="https://fonts.googleapis.com/css2?family=Afacad:ital,wght@0,400..700;1,400..700&family=Sofia&display=swap" as="style" />
      </head>
      <body style={{ fontFamily: "var(--font-family-base)" }}>
        <ThemeProvider>
          <Provider store={store}>
            <ReactQueryProvider>
              <NextIntlClientProvider
                locale={locale}
                messages={messages}
                timeZone="Europe/Paris"
              >
                <Header />
                <main>{children}</main>
              </NextIntlClientProvider>
            </ReactQueryProvider>
          </Provider>
        </ThemeProvider>
      </body>
    </html>
  );
}
