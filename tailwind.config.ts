import openColors from 'open-color/open-color.json';
import type { Config } from 'tailwindcss';

// const openColors = require('open-color/open-color.json');

const colors = Object.entries(openColors).reduce((acc, [color, values]) => {
  if (['white', 'black'].includes(color)) return acc;
  return { ...acc, [color]: { ...(values as string[]) } };
}, {});

const config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors,
    },
    colors: {
      body: 'var(--color-body)',
      wrapper: 'var(--color-wrapper)',
      link: 'var(--color-link)',
      text: 'var(--color-text)',
      'title-border': 'var(--color-title-border)',
      warn: 'var(--color-warn)',
      white: '#ffffff',
    },
  },
  plugins: [],
} satisfies Config;

export default config;
