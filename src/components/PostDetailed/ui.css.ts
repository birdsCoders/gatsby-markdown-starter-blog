import { style } from '@vanilla-extract/css';
import { theme } from '../../theme/theme.css';

export const post = style({
  maxWidth: theme.container.inner,
  margin: '0 auto',
});

export const postHeader = style({
  marginBottom: theme.spacing[4],
});

export const postImage = style({
  marginBottom: theme.spacing[4],
  width: '100%',
});

export const postFooter = style({
  borderTop: `1px solid ${theme.color.border}`,
  marginTop: theme.spacing[4],
  paddingTop: theme.spacing[4],
});
