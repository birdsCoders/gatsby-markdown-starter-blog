import { style } from '@vanilla-extract/css';
import { theme } from '../../theme/theme.css';

export const navLink = style({
  color: theme.color.text,
  fontSize: theme.fontSize.xs,
  fontWeight: theme.fontWeight.bold,
  position: 'relative',
  transition: `color 0.25s, border 0.25s`,
  ':hover': {
    color: theme.color.active,
  },
  ':focus': {
    color: theme.color.active,
  },
});

export const navLinkActive = style({
  color: theme.color.active,
});
