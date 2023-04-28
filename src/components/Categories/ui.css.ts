import { style } from '@vanilla-extract/css';
import { theme } from '../../theme/theme.css';

export const categoryItem = style({
  selectors: {
    '&:not(:last-child)': {
      marginBottom: theme.spacing[2],
    },
  },
});
