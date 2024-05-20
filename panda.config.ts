import { defineConfig, defineTextStyles } from '@pandacss/dev';

export const textStyles = defineTextStyles({
  body: {
    value: {
      fontFamily: 'LINE Seed',
      fontWeight: 500,
      fontSize: '16px',
      lineHeight: '26px',
      letterSpacing: 'normal',
      textDecoration: 'None',
      textTransform: 'None'
    }
  },
  caption: {
    value: {
      fontFamily: 'LINE Seed',
      fontWeight: 500,
      fontSize: '14px',
      lineHeight: '26px',
      letterSpacing: 'normal',
      textDecoration: 'None',
      textTransform: 'None'
    }
  },
  h1: {
    value: {
      fontFamily: 'LINE Seed',
      fontWeight: 700,
      fontSize: '30px',
      lineHeight: '40px',
      letterSpacing: '-0.5px',
      textDecoration: 'None',
      textTransform: 'None'
    }
  },
  h2: {
    value: {
      fontFamily: 'LINE Seed',
      fontWeight: 700,
      fontSize: '24px',
      lineHeight: '32px',
      letterSpacing: '-0.5px',
      textDecoration: 'None',
      textTransform: 'None'
    }
  },
  h3: {
    value: {
      fontFamily: 'LINE Seed',
      fontWeight: 700,
      fontSize: '20px',
      lineHeight: '28px',
      letterSpacing: '-0.5px',
      textDecoration: 'None',
      textTransform: 'None'
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
