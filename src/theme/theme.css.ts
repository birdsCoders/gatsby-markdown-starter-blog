import { createGlobalTheme } from '@vanilla-extract/css';
import { color } from './colors.css';
import * as Types from './types.css';

const spacing: Record<Types.SpacingTypes, string> = {
  0: '0',
  1: '0.3rem', // 5px
  2: '0.625rem', // 10px
  3: '1.25rem', // 20px
  4: '1.875rem', // 30px
  5: '3.125rem', // 50px
};

const fontSize: Record<Types.FontSizeTypes, string> = {
  xxs: '0.75rem',
  xs: '0.875rem',
  sm: '1rem',
  md: '1.125rem',
  lg: '1.25rem',
  xl: '1.5rem',
  xxl: '2rem',
};

const fontWeight: Record<Types.WeightTypes, string> = {
  normal: '400',
  bold: '600',
};

const font = {
  base: '"Poppins",-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif',
};

const lineHeight: Record<Types.LineHeightsTypes, string> = {
  base: '1.6',
  heading: '1.3',
  solid: '1',
};

const container: Record<Types.ContainerTypes, string> = {
  main: '1280px',
  inner: '860px',
};

export const theme = createGlobalTheme(':root', {
  color,
  container,
  font,
  fontSize,
  fontWeight,
  lineHeight,
  spacing,
});
