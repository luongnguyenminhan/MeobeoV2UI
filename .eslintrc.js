module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'jsx-a11y'],
  extends: [
    'next/core-web-vitals',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier' // nếu bạn dùng Prettier
  ],
  rules: {
    // Tailwind thường tạo class dài, nên disable rule này nếu bạn thấy phiền
    'react/jsx-max-props-per-line': ['warn', { maximum: 3 }],
    
    // Optional: ví dụ tắt cảnh báo khi dùng `any`
    '@typescript-eslint/no-explicit-any': 'off',

    // React 17+ không cần import React
    'react/react-in-jsx-scope': 'off',
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
};