// app/RootLayoutClient.tsx
'use client';
import React from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { ReactQueryProvider } from '@/context/ReactQueryProvider';
import { Provider } from 'react-redux';
import store from '@/store/index';
import Header from '@/components/layout/Header';
import 'antd/dist/reset.css';
import '@/styles/globals.css';
import Footer from '@/components/layout/Footer';
import { ThemeProvider } from '@/context/ThemeContext';

export default function RootLayoutClient({
  children,
  locale,
  messages,
}: {
  children: React.ReactNode;
  locale: string;
  messages: any;
}) {
  return (
    <html lang={locale} suppressHydrationWarning={true}>
      <body>
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
                <Footer />
              </NextIntlClientProvider>
            </ReactQueryProvider>
          </Provider>
        </ThemeProvider>
      </body>
    </html>
  );
}
