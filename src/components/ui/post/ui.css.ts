import { style } from '@vanilla-extract/css';
import { theme } from '../../../theme/theme.css';

export const image = style({
  display: 'block',
});

export const date = style({
  color: theme.color.gray,
  fontSize: theme.fontSize.xs,
});

export const tag = style({
  backgroundColor: theme.color.grayLightest,
  fontSize: theme.fontSize.xxs,
  padding: '0.2rem 0.5rem',
});
