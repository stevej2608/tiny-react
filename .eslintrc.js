const webpack = require("webpack");

module.exports = {
  extends: [
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
  ],
  plugins: ['react', '@typescript-eslint', 'jest'],
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js', 'webpack.config.js'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  rules: {
    'linebreak-style': 'off',
    'react/jsx-props-no-spreading': 'off',
    'import/extension': 'off',
    'import/prefer-default-export': 'off',
    'react/state-in-constructor': ['warn', 'never'],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    'no-console': 'off',
    'no-param-reassign': 'off',
    'jsx-a11y/anchor-is-valid': 'off'
  },

};