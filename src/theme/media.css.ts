import { calc } from '@vanilla-extract/css-utils';

export const breakpoints = {
  xl: 1280,
  lg: 1024,
  md: 992,
  sm: 576,
  xs: 375,
};

export const media = {
  desktop: `(min-width: ${breakpoints.md}px)`,
  mobile: `(max-width: ${calc(breakpoints.md - 1)}px)`,
  large: `(min-width: ${breakpoints.xl}px)`,
  small: `(min-width: ${breakpoints.sm}px)`,
  xs: `(max-width: ${calc(breakpoints.sm - 1)}px)`,
};
