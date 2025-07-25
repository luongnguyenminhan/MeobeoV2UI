'use client';
import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

interface LoaderWrapperProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export const LoaderWrapper: React.FC<LoaderWrapperProps> = ({
  children,
  fallback = <div className="fixed inset-0 flex items-center justify-center bg-white z-50">Loading theme...</div>,
}) => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || resolvedTheme === undefined) {
    return <>{fallback}</>;
  }
  return <>{children}</>;
};
