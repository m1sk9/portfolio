import { cva } from '../../../styled-system/css';

export const Link = cva({
  base: {
    textStyle: 'body',
    _hover: {
      textDecoration: 'underline',
      color: '#62a0ff'
    }
  }
});
