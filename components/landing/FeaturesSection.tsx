'use client';

import React, { useState } from 'react';
// Remove Ant Design imports
// import { Typography, Row, Col, Card, theme } from 'antd';
import { useTranslations } from 'next-intl';

// Keep react-icons imports
import { FaArrowCircleUp, FaCode, FaGlobe, FaLaptopCode } from 'react-icons/fa';
import { GiGears } from 'react-icons/gi';

// Define a common interface for icon components that accept color and size
interface CustomIconProps {
  color?: string;
  size?: string | number; // react-icons use 'size' instead of 'width'/'height' for scaling
  className?: string; // For Tailwind classes
}

const features = [
  {
    key: 'openSource',
    // The original OpenSourceIcon was inline SVG, we'll keep it as a component
    icon: function OpenSourceIcon({ color, size, className }: CustomIconProps) {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill={color} // Use the passed color prop
          className={`size-8 ${className || ''}`} // Combine with Tailwind classes
          width={size || '24px'}
          height={size || '24px'}
        >
          <path
            fillRule="evenodd"
            d="M2.25 6a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V6Zm3.97.97a.75.75 0 0 1 1.06 0l2.25 2.25a.75.75 0 0 1 0 1.06l-2.25 2.25a.75.75 0 0 1-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 0 1 0-1.06Zm4.28 4.28a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z"
            clipRule="evenodd"
          />
        </svg>
      );
    },
  },
  { key: 'devStack', icon: FaCode },
  { key: 'stateManagement', icon: GiGears },
  { key: 'i18n', icon: FaGlobe },
  { key: 'cicd', icon: FaArrowCircleUp },
  { key: 'devEnv', icon: FaLaptopCode },
];

const SwirlyDoodle = ({
  fillColor,
  className,
  ...props
}: {
  fillColor: string;
  className?: string;
}) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 418 42"
    preserveAspectRatio="none"
    fill={fillColor}
    className={className} // Apply Tailwind classes
    {...props}
  >
    <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
  </svg>
);

const FeatureCard = ({
  featureKey,
  icon: IconComponent,
}: {
  featureKey: string;
  icon: React.ComponentType<CustomIconProps>;
}) => {
  const t = useTranslations('HomePage.features.items');
  const [isHovered, setIsHovered] = useState(false);

  // Use CSS variables for colors
  const cardClasses = `
    w-full bg-[var(--card-bg)] border
    ${isHovered ? 'border-[var(--primary-color)] shadow-md transform -translate-y-0.5' : 'border-[var(--border-color)]'}
    rounded-[var(--border-radius)] p-6 transition-all duration-200 cursor-pointer
    flex flex-col items-start text-left text-[var(--text-color)]
  `;
  const iconWrapperClasses = `
    w-9 h-9 flex items-center justify-center rounded-lg
  `;
  const iconColor = 'text-[var(--primary-color)]'; // Use variable for icon color
  const nameTextClasses = 'mt-6 text-sm font-medium text-[var(--text-color)]';
  const separatorClasses = `my-3 w-8 border-t-2 border-[var(--primary-color)]`;
  const summaryTextClasses = 'mt-2 text-xl font-heading text-[var(--muted-text-color)]';
  const descriptionTextClasses = 'mt-4 text-sm text-[var(--muted-text-color)]';

  return (
    <div
      className={cardClasses}
      onClick={() => alert(`Feature card for ${featureKey} clicked!`)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      tabIndex={0}
      role="button"
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          alert(`Feature card for ${featureKey} clicked!`);
        }
      }}
    >
      <div className={iconWrapperClasses}>
        <IconComponent className={`w-6 h-6 ${iconColor}`} />
      </div>

      <p className={nameTextClasses}>{t(`${featureKey}.name`)}</p>

      <div className={separatorClasses} />

      <h4 className={summaryTextClasses}>{t(`${featureKey}.summary`)}</h4>

      <p className={descriptionTextClasses}>{t(`${featureKey}.description`)}</p>
    </div>
  );
};

export default function FeaturesSection({ id }: { id: string }) {
  // Use CSS variables for section background and text
  const sectionBg = 'bg-[var(--background-color)]';
  const headingColor = 'text-[var(--text-color)]';
  const svgFillColor = 'text-[var(--accent-color)]';
  const paragraphColor = 'text-[var(--muted-text-color)]';
  const t = useTranslations('HomePage.features');

  return (
    <section
      id={id}
      className={`relative overflow-hidden py-16 lg:py-24 ${sectionBg}`}
    >
      <div className="max-w-screen-xl mx-auto relative z-10 px-5">
        <div className="max-w-2xl xl:max-w-none mx-auto text-center md:text-center">
          <h2
            className={`text-3xl sm:text-4xl tracking-tight ${headingColor} mb-6`}
          >
            <span className="relative inline-block">
              <SwirlyDoodle
                fillColor="currentColor"
                className={`absolute left-0 top-1/2 h-4 w-full -translate-y-1/2 ${svgFillColor}`}
              />
              <span className="relative">{t('title.prefix')}</span>
            </span>{' '}
            {t('title.suffix')}
          </h2>
          <p
            className={`text-lg tracking-tight px-4 md:px-8 ${paragraphColor} mb-12`}
          >
            {t('description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <FeatureCard
              key={feature.key}
              featureKey={feature.key}
              icon={feature.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}