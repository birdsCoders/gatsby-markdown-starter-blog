import { style } from '@vanilla-extract/css';
import { media } from '../../theme/media.css';
import { theme } from '../../theme/theme.css';

export const layout = style({
  display: 'grid',
  gridTemplateAreas: '"header" "main" "footer"',
  gridTemplateRows: 'max-content auto max-content',
  gridTemplateColumns: '100%',
  minHeight: '100vh',
});

export const main = style({
  gridArea: 'main',
  '@media': {
    [media.desktop]: {
      padding: `${theme.spacing[5]} 0`,
    },
    [media.mobile]: {
      padding: `${theme.spacing[4]} 0`,
    },
  },
});
