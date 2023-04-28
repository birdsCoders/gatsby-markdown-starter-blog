import { styleVariants } from '@vanilla-extract/css';
import { theme } from '../../../theme/theme.css';
import * as Types from './types.css';

export const link: Record<Types.LinkTypes, string> = styleVariants({
  base: [
    {
      borderBottom: '1px solid transparent',
      color: theme.color.primary,
      transition: `border 0.25s`,
      ':hover': {
        borderColor: theme.color.active,
      },
      ':focus': {
        borderColor: theme.color.active,
      },
    },
  ],
  inherit: [
    {
      color: theme.color.text,
      transition: `color 0.25s`,
      ':hover': {
        color: theme.color.active,
      },
      ':focus': {
        color: theme.color.active,
      },
    },
  ],
});
