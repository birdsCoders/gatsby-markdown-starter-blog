import { style } from '@vanilla-extract/css';
import { media } from '../../theme/media.css';
import { theme } from '../../theme/theme.css';

export const postsList = style({
  display: 'grid',
  gap: theme.spacing[4],
  gridAutoColumns: '1fr',
  '@media': {
    [media.small]: {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    [media.xs]: {
      gridTemplateColumns: 'repeat(1, 1fr)',
    },
  },
});
