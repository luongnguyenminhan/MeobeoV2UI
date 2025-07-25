'use client';

import React, { ReactNode } from 'react';
import Image from 'next/image';
import { Card, Typography } from 'antd';
import { motion } from 'framer-motion';

const { Title, Text } = Typography;

interface AuthTemplateProps {
  children: ReactNode;
  sideTitle: string;
  sideDescription: string;
  logoSize?: number;
  mobileLogo?: boolean;
  sideTag?: string;
}

const AuthTemplate: React.FC<AuthTemplateProps> = ({
  children,
  sideTitle,
  sideDescription,
  sideTag = 'Meobeo.ai',
  logoSize = 160,
  mobileLogo = true,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      className="md:flex md:items-stretch md:max-w-4xl mx-auto"
      style={{ fontFamily: 'var(--font-family-base)' }}
    >
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="hidden md:block md:w-1/2"
      >
        <Card
          style={{
            background: 'var(--primary-color)',
            border: 'none',
            boxShadow: 'var(--box-shadow)',
            borderRadius: 'var(--border-radius) 0 0 var(--border-radius)',
            height: '100%',
            color: 'var(--text-color)',
          }}
          className="p-12"
        >
          <div className="text-center relative z-10">
            <Image
              src="/images/logos/logo.png"
              alt="Meobeo.ai Logo"
              width={logoSize}
              height={logoSize}
              className="mx-auto mb-6 drop-shadow-lg"
              priority
            />
            <div className="space-y-6">
              <div>
                <span
                  className="bg-clip-text text-transparent text-sm font-bold tracking-wider uppercase"
                  style={{
                    backgroundImage:
                      'linear-gradient(to right, #c7d2fe, #ffffff)',
                    letterSpacing: 2,
                  }}
                >
                  {sideTag}
                </span>
                <Title
                  level={2}
                  style={{
                    color: '#fff',
                    textAlign: 'center',
                    marginTop: 8,
                    textShadow: '0 2px 6px rgba(0,0,0,0.2)',
                  }}
                >
                  {sideTitle}
                </Title>
              </div>
              <Text
                style={{
                  color: 'rgba(255,255,255,0.9)',
                  fontSize: 'var(--font-size-lg)',
                  maxWidth: 400,
                  margin: '0 auto',
                  display: 'block',
                  lineHeight: 'var(--line-height-base)',
                }}
              >
                {sideDescription}
              </Text>
              <div className="pt-4 flex justify-center">
                <div
                  className="w-16 h-1 rounded-full"
                  style={{
                    background:
                      'linear-gradient(90deg, #93c5fd 0%, #818cf8 100%)',
                  }}
                ></div>
              </div>
            </div>
          </div>
        </Card>
      </motion.div>

      <Card
        style={{
          backdropFilter: 'blur(8px)',
          background: 'var(--background-color)',
          boxShadow: 'var(--box-shadow)',
          borderRadius: '0 var(--border-radius) var(--border-radius) 0',
          border: 'none',
        }}
        className="md:w-1/2 md:rounded-l-none p-12"
      >
        {mobileLogo && (
          <div className="md:hidden flex justify-center mb-6">
            <Image
              src="/images/logos/logo.png"
              alt="Company Logo"
              width={100}
              height={100}
              priority
            />
          </div>
        )}
        {children}
      </Card>
    </motion.div>
  );
};

export default AuthTemplate;
