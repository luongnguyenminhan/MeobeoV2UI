'use client';

import React, { useEffect, useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import authApi from '@/services/api/auth';
import AuthTemplate from './AuthTemplate';
import { Button, Input, Typography, Checkbox } from 'antd';
import { showToast } from '@/hooks/useShowToast';
import { MailOutlined, LockOutlined, LoginOutlined } from '@ant-design/icons';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const { Title, Text } = Typography;

const LoginForm: React.FC = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const t = useTranslations('AuthForm');
  const router = useRouter();

  useEffect(() => {
    if (error) {
      showToast('error', error, 4000);
      const timer = setTimeout(() => setError(null), 4000);
      return () => clearTimeout(timer);
    }
  }, [error]);
 showToast('success', "Test", 50000);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    if (!email) {
      setError(t('errorEmail'));
      setLoading(false);
      return;
    }
    if (!password) {
      setError(t('errorPassword'));
      setLoading(false);
      return;
    }
    try {
      const res = await authApi.login({ email, password });
      login();
      showToast('success', t('loginSuccess'), 3000);
      setTimeout(() => {
        router.push('/dashboard');
      }, 1000); // chờ 1s để toast hiển thị
    } catch (err: any) {
      setError(err?.response?.data?.message || t('loginFailed'));
    }
  };
  // ...
  const inputStyle = {
    background: 'var(--background-color)',
    color: 'var(--text-color)',
    borderColor: 'var(--border-color)',
  };

  return (
    <AuthTemplate
      sideTitle={t('sideTitle')}
      sideDescription={t('sideDescription')}
      sideTag="Meobeo.ai"
    >
      <div className="text-center mb-6">
        <Title
          level={1}
          style={{
            fontWeight: 700,
            background:
              'linear-gradient(90deg, var(--primary-color), var(--secondary-color))',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
          }}
        >
          {t('welcome')}
        </Title>
        <Text type="secondary" style={{ color: 'var(--text-color)' }}>
          {t('subtitle')}
        </Text>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <Input
          prefix={<MailOutlined />}
          type="email"
          placeholder={t('emailPlaceholder')}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={loading}
          size="large"
          style={inputStyle}
          className="custom-placeholder"
        />
        <Input.Password
          prefix={<LockOutlined />}
          placeholder={t('passwordPlaceholder')}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={loading}
          size="large"
          style={inputStyle}
          className="custom-placeholder"
        />

        <div className="flex items-center justify-between text-[var(--text-color)]">
          <Checkbox
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
            disabled={loading}
            style={{ color: 'var(--text-color)' }}
          >
            {t('rememberMe')}
          </Checkbox>
          <a
            href="/forgot-password"
            className="text-primary hover:underline text-sm"
            style={{ color: 'var(--link-color)' }}
          >
            {t('forgotPassword')}
          </a>
        </div>

        <Button
          type="primary"
          htmlType="submit"
          loading={loading}
          icon={<LoginOutlined />}
          block
          size="large"
          style={{
            borderRadius: 6,
            background: 'var(--primary-color)',
            border: 'none',
          }}
        >
          {t('loginButton')}
        </Button>
      </form>

      <div className="text-center mt-6">
        <Text type="secondary" style={{ color: 'var(--text-color)' }}>
          {t('noAccount')}{' '}
          <Link
            href="/register"
            className="text-primary hover:underline font-medium text-[var(--link-color)]"
          >
            {t('registerNow')}
          </Link>
        </Text>
      </div>
    </AuthTemplate>
  );
};

export default LoginForm;
