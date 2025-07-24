'use client';
import React, { useState } from 'react';
import {
  Button,
  Card,
  Typography,
  Row,
  Col,
  Space,
  Collapse,
} from 'antd';
import { DownOutlined, UpOutlined } from '@ant-design/icons';
import { FaReact } from 'react-icons/fa';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const { Title, Text } = Typography;

const ComponentsSection = ({ id }: { id: string }) => {
  const t = useTranslations('Components');
  const [showCode, setShowCode] = useState<{ [key: string]: boolean }>({});

  const toggleCodeVisibility = (componentType: string) => {
    setShowCode((prev) => ({ ...prev, [componentType]: !prev[componentType] }));
  };

  const buttonData = [
    {
      type: t('button.primary'),
      color: 'primary',
      code: `<Button type="primary" onClick={() => alert('Primary Button Clicked')}>Primary Button</Button>`,
    },
    {
      type: t('button.default'),
      color: 'default',
      code: `<Button onClick={() => alert('Default Button Clicked')}>Default Button</Button>`,
    },
    {
      type: t('button.danger'),
      color: 'primary',
      danger: true,
      code: `<Button type="primary" danger onClick={() => alert('Danger Button Clicked')}>Danger Button</Button>`,
    },
    {
      type: t('button.dashed'),
      color: 'dashed',
      code: `<Button type="dashed" onClick={() => alert('Dashed Button Clicked')}>Dashed Button</Button>`,
    },
    {
      type: t('button.link'),
      color: 'link',
      code: `<Button type="link" onClick={() => alert('Link Button Clicked')}>Link Button</Button>`,
    },
  ];

  const cardData = [
    {
      type: t('card.user'),
      code: `<Card
 title="Dan Abramov"
extra={<a href="https://react.dev/" target="_blank" rel="noopener noreferrer">More</a>}
 style={{ width: 300 }}
>
 <p>React Developer</p>
 <p>Dan is a software engineer working on React.</p>
 <Button onClick={() => alert('Comment Clicked')}>Comment</Button>
 <Button onClick={() => alert('Share Clicked')} style={{ marginLeft: 8 }}>Share</Button>
</Card>`,
    },
  ];

  return (
    <div
      id={id}
      className="py-10 px-5 text-center bg-[var(--background-color)] text-[var(--text-color)] font-[var(--font-family-base)]"
    >
      <Title level={2} className="mb-4 font-sofia">
        <span style={{ color: 'var(--text-color)' }}>{t('title')}</span>
      </Title>
      <Text className="text-lg mb-6 block text-[var(--muted-text-color)]">
        {t('description')}
      </Text>

      <div className="mt-6">
        <Title level={3} className="mb-4">
          <span style={{ color: 'var(--muted-text-color)' }}>
            {t('button.title')}
          </span>
        </Title>
        <Text className="text-base mb-4 block text-[var(--muted-text-color)]">
          {t('button.description')}
        </Text>
        <Row gutter={[24, 24]} justify="center">
          {buttonData.map((button) => (
            <Col xs={24} md={12} key={button.type}>
              <Card
                size="small"
                title={
                  <span
                    className="font-bold"
                    style={{ color: 'var(--primary-color)' }}
                  >
                    {button.type}
                  </span>
                }
                className="bg-[var(--card-bg)] text-[var(--text-color)] border border-[var(--border-color)] rounded-[var(--border-radius)] shadow-[var(--box-shadow)]"
              >
                <Space>
                  <Button
                    type={
                      button.color as
                        | 'primary'
                        | 'default'
                        | 'dashed'
                        | 'link'
                        | 'text'
                        | undefined
                    }
                    danger={button.danger}
                    onClick={() => alert(`${button.type} Clicked`)}
                    className={[
                      'rounded-[var(--border-radius)]',
                      button.danger
                        ? 'bg-[var(--error-color)] text-white'
                        : button.color === 'primary'
                          ? 'bg-[var(--primary-color)] text-white'
                          : button.color === 'dashed'
                            ? 'bg-[var(--accent-color)] text-[var(--text-color)] border-dashed'
                            : button.color === 'link'
                              ? 'bg-transparent text-[var(--link-color)]'
                              : 'bg-[var(--surface-color)] text-[var(--text-color)]',
                      'border border-[var(--border-color)]',
                    ].join(' ')}
                  >
                    {button.type}
                  </Button>
                  <Button
                    icon={
                      showCode[button.type] ? <UpOutlined /> : <DownOutlined />
                    }
                    onClick={() => toggleCodeVisibility(button.type)}
                    className="bg-[var(--surface-color)] text-[var(--text-color)] rounded-[var(--border-radius)] border border-[var(--border-color)]"
                  >
                    {showCode[button.type]
                      ? t('common.hideCode')
                      : t('common.showCode')}
                  </Button>
                </Space>
                <Collapse
                  activeKey={showCode[button.type] ? '1' : ''}
                  className="mt-2"
                  items={[
                    {
                      key: '1',
                      label: 'Code',
                      children: (
                        <pre className="text-left bg-gray-200 p-2 rounded overflow-x-auto">
                          <code>{button.code}</code>
                        </pre>
                      ),
                      showArrow: false,
                    },
                  ]}
                />
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      <hr className="my-10 border-t border-[var(--border-color)]" />

      <div className="mt-6">
        <Title level={3} className="mb-4">
          <span style={{ color: 'var(--secondary-color)' }}>
            {t('card.title')}
          </span>
        </Title>
        <Text className="text-base mb-4 block text-[var(--muted-text-color)]">
          {t('card.description')}
        </Text>
        <Row gutter={[24, 24]} justify="center">
          {cardData.map((cardItem) => (
            <Col xs={24} md={12} key={cardItem.type}>
              <Card
                size="small"
                title={
                  <span
                    className="font-bold"
                    style={{ color: 'var(--primary-color)' }}
                  >
                    {cardItem.type}
                  </span>
                }
                className="bg-[var(--card-bg)] text-[var(--text-color)] border border-[var(--border-color)] rounded-[var(--border-radius)] shadow-[var(--box-shadow)]"
              >
                <Card
                  title="Dan Abramov"
                  extra={
                    <a
                      href="https://react.dev/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--link-color)]"
                    >
                      More
                    </a>
                  }
                  className="w-full bg-[var(--surface-color)] text-[var(--text-color)] rounded-[var(--border-radius)] border border-[var(--border-color)]"
                >
                  <div className="flex items-center mb-4">
                    <Image
                      src="/images/dan-abramov.png"
                      alt="Dan Abramov"
                      width={48}
                      height={48}
                      className="rounded-full mr-4 border-2 border-[var(--primary-color)]"
                    />
                    <div>
                      <Title
                        level={5}
                        className="m-0 text-[var(--primary-color)]"
                      >
                        Dan Abramov
                      </Title>
                      <Text
                        type="secondary"
                        className="text-[var(--muted-text-color)]"
                      >
                        React Developer
                      </Text>
                    </div>
                  </div>
                  <Text className="text-[var(--text-color)]">
                    {t('card.text')}
                  </Text>
                  <div className="mt-4">
                    <Button
                      onClick={() => alert('Comment Clicked')}
                      icon={<FaReact />}
                      className="bg-[var(--primary-color)] text-white rounded-[var(--border-radius)] border-none"
                    >
                      {t('card.comment')}
                    </Button>
                    <Button
                      onClick={() => alert('Share Clicked')}
                      className="ml-2 bg-[var(--accent-color)] text-white rounded-[var(--border-radius)] border-none"
                      style={{ marginLeft: 'var(--spacing-unit)' }}
                    >
                      {t('card.share')}
                    </Button>
                  </div>
                </Card>
                <Button
                  className="mt-2 bg-[var(--surface-color)] text-[var(--text-color)] rounded-[var(--border-radius)] border border-[var(--border-color)]"
                  icon={
                    showCode[cardItem.type] ? <UpOutlined /> : <DownOutlined />
                  }
                  onClick={() => toggleCodeVisibility(cardItem.type)}
                >
                  {showCode[cardItem.type]
                    ? t('common.hideCode')
                    : t('common.showCode')}
                </Button>
                <Collapse
                  activeKey={showCode[cardItem.type] ? '1' : ''}
                  className="mt-2"
                  items={[
                    {
                      key: '1',
                      label: 'Code',
                      children: (
                        <pre className="text-left bg-gray-200 p-2 rounded overflow-x-auto">
                          <code>{cardItem.code}</code>
                        </pre>
                      ),
                      showArrow: false,
                    },
                  ]}
                />
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default ComponentsSection;
