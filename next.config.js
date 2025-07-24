// next.config.js
// eslint-disable-next-line @typescript-eslint/no-require-imports
const createNextIntlPlugin = require('next-intl/plugin');
const withNextIntl = createNextIntlPlugin();
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['*'], // Allow all hosts for next/image
  },
  experimental: {
    turbo: {}, // Enables TurboPack for faster builds
  },
  output: 'standalone',
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgoConfig: {
              plugins: [
                {
                  name: 'preset-default',
                  params: {
                    overrides: {
                      removeViewBox: false,
                    },
                  },
                },
              ],
            },
          },
        },
      ],
    });

    // Disable cache for the specific loader
    config.cache = {
      type: 'filesystem',
      buildDependencies: {
        config: [__filename],
      },
    };

    return config;
  },
};

module.exports = withNextIntl(nextConfig);
