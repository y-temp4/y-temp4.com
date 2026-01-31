// @ts-check

import { FlatCompat } from '@eslint/eslintrc';
import gitignore from 'eslint-config-flat-gitignore';
import eslintConfigPrettier from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import tailwind from 'eslint-plugin-tailwindcss';
import tseslint from 'typescript-eslint';

const compat = new FlatCompat();

const config = [
  gitignore(),
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  ...tailwind.configs['flat/recommended'],
  ...tseslint.config({
    rules: {
      '@typescript-eslint/consistent-type-imports': 'error',
    },
  }),
  {
    plugins: {
      import: importPlugin,
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      'import/first': 'error',
      'import/newline-after-import': 'error',
      'import/no-duplicates': 'error',
      'simple-import-sort/exports': 'error',
      'simple-import-sort/imports': 'error',
    },
  },
  eslintConfigPrettier,
];

export default config;
