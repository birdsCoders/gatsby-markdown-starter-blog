import { style } from '@vanilla-extract/css';
import { theme } from '../../theme/theme.css';

export const header = style({
  borderBottom: `1px solid ${theme.color.border}`,
  gridArea: 'header',
  padding: `${theme.spacing[3]} 0`,
});

export const logo = style({
  color: theme.color.text,
  display: 'inline-block',
  fontSize: theme.fontSize.xl,
  fontWeight: theme.fontWeight.bold,
});

export const logoText = style({
  color: theme.color.primary,
});
