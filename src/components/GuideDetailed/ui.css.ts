import { style, globalStyle } from '@vanilla-extract/css';
import { theme } from '../../theme/theme.css';

export const post = style({
  maxWidth: theme.container.inner,
  margin: '0 auto',
});

export const postHeader = style({
  marginBottom: theme.spacing[4],
});

export const postContent = style({
  marginBottom: theme.spacing[5],
});

export const postList = style({});

globalStyle(`${postList} > li + li`, {
  marginTop: theme.spacing[1],
});

export const postListItem = style({
  paddingLeft: '0.8em',
  position: 'relative',
  selectors: {
    '&:after': {
      backgroundColor: theme.color.text,
      borderRadius: '50%',
      content: '',
      height: '0.25em',
      left: 0,
      position: 'absolute',
      top: '0.7em',
      width: '0.25em',
    },
  },
});
