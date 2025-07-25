import React from 'react';
import LoginForm from '@/components/auth/LoginForm';
import ThemeToggle from '@/components/layout/ThemeToggle';

export default function AuthPage() {
  return (
    <div className="bg-[var(--background-color)] w-full h-screen flex items-center justify-center">
      <div>
        <LoginForm />
      </div>
      <div className="absolute bottom-10 right-10">
        <ThemeToggle />
      </div>
    </div>
  );
}
