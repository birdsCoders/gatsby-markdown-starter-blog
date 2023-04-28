import { globalStyle, style } from '@vanilla-extract/css';
import { theme } from '../../../theme/theme.css';

export const container = style({
  maxWidth: theme.container.main,
  margin: '0 auto',
  padding: `0 ${theme.spacing[3]}`,
});

export const containerInner = style({
  maxWidth: theme.container.inner,
  margin: '0 auto',
});

export const panel = style({
  border: `1px solid ${theme.color.border}`,
  padding: theme.spacing[3],
});

// RichTextBlock styles

export const richTextBlock = style({});

globalStyle(`${richTextBlock} ul, ${richTextBlock} ol`, {
  margin: `0 0 ${theme.spacing[4]}`,
});

globalStyle(`${richTextBlock} ul > li`, {
  paddingLeft: theme.spacing[3],
  position: 'relative',
});

globalStyle(`${richTextBlock} ul > li:before`, {
  backgroundColor: theme.color.primary,
  borderRadius: '50%',
  content: '',
  height: '4px',
  left: 0,
  position: 'absolute',
  top: '11px',
  width: '4px',
});
