import { globalStyle, style } from '@vanilla-extract/css';
import { media } from '../../theme/media.css';
import { theme } from '../../theme/theme.css';

export const grid = style({
  display: 'grid',
  gap: theme.spacing[4],
  gridAutoColumns: '1fr',
  '@media': {
    [media.desktop]: {
      gridTemplateColumns: '1fr 340px',
    },
    [media.mobile]: {
      gridTemplateColumns: '1fr',
    },
  },
});

export const colLeft = style({});
export const colRight = style({});

globalStyle(`${colLeft} > * + *`, {
  marginTop: theme.spacing[5],
});

globalStyle(`${colRight} > * + *`, {
  marginTop: theme.spacing[4],
});
