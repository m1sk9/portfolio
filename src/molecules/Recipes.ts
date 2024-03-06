import { cva } from '@/styled-system/css';

export const Heading = cva({
  base: {
    fontWeight: 'bold'
  },
  variants: {
    level: {
      h1: {
        fontSize: '36px'
      },
      h2: {
        fontSize: '30px'
      },
      h3: {
        fontSize: '24px'
      }
    }
  },
  defaultVariants: {
    level: 'h1'
  }
});

export const Description = cva({
  base: { display: 'flex', flexDirection: 'column', mt: 3, gap: '10px' }
});
