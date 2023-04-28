import { style } from '@vanilla-extract/css';
import { theme } from '../../theme/theme.css';

export const footer = style({
  background: theme.color.background,
  gridArea: 'footer',
  padding: `${theme.spacing[3]} 0`,
});

export const copyright = style({
  fontSize: theme.fontSize.xs,
  marginBottom: 0,
});

export const footerLink = style({
  fontSize: theme.fontSize.xs,
});
