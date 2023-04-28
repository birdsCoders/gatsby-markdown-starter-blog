import { style, styleVariants } from '@vanilla-extract/css';
import * as Types from './types.css';
import { media } from '../../../theme/media.css';
import { theme } from '../../../theme/theme.css';

export const flex = style({
  alignItems: 'center',
  display: 'flex',
});

export const flexVariants: Record<Types.FlexTypes, string> = styleVariants({
  wrap: {
    flexWrap: 'wrap',
  },
  start: {
    alignItems: 'flex-start',
  },
  end: {
    alignItems: 'flex-end',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  center: {
    justifyContent: 'center',
  },
  responsive: {
    '@media': {
      [media.xs]: {
        flexDirection: 'column',
      },
    },
  },
});

export const flexGap = styleVariants(theme.spacing, (gap) => ({ gap }));
