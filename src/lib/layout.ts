import { cva } from '../../styled-system/css/cva.mjs';

export const BodyLayout = cva({
  base: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10
  }
});
