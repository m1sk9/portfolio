import { cva } from '../../../styled-system/css/cva.mjs';

export const ItemLayout = cva({
  base: {
    mb: 10
  },
  variants: {
    type: {
      centerAlign: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }
    }
  }
});
