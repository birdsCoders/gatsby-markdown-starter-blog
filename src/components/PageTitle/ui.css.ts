import { style } from '@vanilla-extract/css';
import { theme } from '../../theme/theme.css';

export const pageTitle = style({
  marginBottom: theme.spacing[4],
});

export const pageTitleH1 = style({
  marginBottom: 0,
});

export const totalCount = style({
  marginTop: theme.spacing[2],
});
