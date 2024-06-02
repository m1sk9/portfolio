import { defineConfig, defineTextStyles } from '@pandacss/dev';

export const textStyles = defineTextStyles({
  body: {
    value: {
      fontFamily: 'MPLUS1p',
      fontSize: '17px',
      lineHeight: '26px',
      letterSpacing: 'normal'
    }
  },
  caption: {
    value: {
      fontFamily: 'MPLUS1p',
      fontSize: '14px',
      lineHeight: '26px',
      letterSpacing: 'normal'
    }
  },
  h1: {
    value: {
      fontFamily: 'MPLUS1p',
      fontSize: '30px',
      lineHeight: '40px',
      letterSpacing: '-0.5px'
    }
  },
  h2: {
    value: {
      fontFamily: 'MPLUS1p',
      fontSize: '24px',
      lineHeight: '32px',
      letterSpacing: '-0.5px'
    }
  },
  h3: {
    value: {
      fontFamily: 'MPLUS1p',
      fontSize: '20px',
      lineHeight: '28px',
      letterSpacing: '-0.5px'
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
