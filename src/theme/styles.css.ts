import { globalStyle } from '@vanilla-extract/css';
import { theme } from './theme.css';

globalStyle('*', {
  boxSizing: 'border-box',
});

globalStyle('html', {
  margin: 0,
  padding: 0,
  scrollBehavior: 'smooth',
});

globalStyle('body', {
  color: theme.color.text,
  fontFamily: theme.font.base,
  fontSize: theme.fontSize.sm,
  lineHeight: theme.lineHeight.base,
  margin: 0,
  padding: 0,
  overflowX: 'hidden',
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
});

globalStyle('button', {
  background: 'transparent',
  border: '0 none',
  cursor: 'pointer',
  padding: 0,
});

globalStyle('a', {
  textDecoration: 'none',
});

globalStyle('ul, ol', {
  margin: 0,
  padding: 0,
});

globalStyle('ul', {
  listStyle: 'none',
});

globalStyle('p', {
  marginTop: 0,
  marginBottom: theme.spacing[3],
});

globalStyle('h1, h2, h3, h4, h5, h6', {
  marginTop: 0,
  marginBottom: theme.spacing[3],
});

globalStyle('h1', {
  fontSize: theme.fontSize.xxl,
});

globalStyle('h2', {
  fontSize: theme.fontSize.xl,
});

globalStyle('h3', {
  fontSize: theme.fontSize.lg,
});

globalStyle('h4', {
  fontSize: theme.fontSize.md,
});

globalStyle('h5', {
  fontSize: theme.fontSize.sm,
});
