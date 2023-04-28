import { style } from '@vanilla-extract/css';
import { theme } from '../../theme/theme.css';

export const post = style({
  border: `1px solid ${theme.color.border}`,
  borderRadius: '4px',
});

export const postContent = style({
  padding: theme.spacing[3],
});

export const postTags = style({
  marginBottom: theme.spacing[3],
});

export const postTitle = style({
  marginBottom: theme.spacing[3],
});
