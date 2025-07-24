'use client';

import React from 'react';
import { Typography } from 'antd';

const { Text, Link } = Typography;

const DocsSection = ({ id }: { id: string }) => (
  <div
    id={id}
    className="docs-section py-10 px-5 text-center bg-[var(--background-color)] text-[var(--text-color)]"
  >
    <span className="mb-4 block text-2xl font-semibold text-[var(--text-color)] font-sofia">
      Documentation & CI/CD
    </span>
    <Text className="text-lg mb-6 block text-[var(--text-color)]">
      Learn how to use this starter and set up CI/CD pipelines for seamless
      deployments.
    </Text>
    <Link
      href="https://github.com/aelabid/Next-StarterKit"
      target="_blank"
      rel="noopener noreferrer"
      className="text-[var(--link-color)] text-base hover:text-[var(--link-hover-color)]"
    >
      Read Documentation
    </Link>
  </div>
);

export default DocsSection;
