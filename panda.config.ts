import { defineConfig, defineTextStyles } from '@pandacss/dev';

export const textStyles = defineTextStyles({
  body: {
    value: {
      fontFamily: 'LINE Seed',
      fontSize: '16px',
      lineHeight: '26px'
    }
  },
  caption: {
    value: {
      fontFamily: 'LINE Seed',
      fontSize: '14px',
      lineHeight: '26px'
    }
  },
  h1: {
    value: {
      fontFamily: 'LINE Seed',
      fontSize: '30px',
      lineHeight: '36px'
    }
  },
  h2: {
    value: {
      fontFamily: 'LINE Seed',
      fontSize: '24px',
      lineHeight: '32px'
    }
  },
  h3: {
    value: {
      fontFamily: 'LINE Seed',
      fontSize: '16px',
      lineHeight: '26px'
    }
  }
});

export default defineConfig({
  preflight: true,

  include: ['./src/**/*.{ts,tsx,astro}'],

  exclude: [],

  theme: {
    extend: {
      textStyles
    }
  },

  outdir: 'styled-system'
});
