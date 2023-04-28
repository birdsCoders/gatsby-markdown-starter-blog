import React from 'react';
import cn from 'classnames';

import * as styles from './ui.css.ts';

const RichTextBlock = ({ children, className }) => (
  <div className={cn(styles.richTextBlock, className)}>{children}</div>
);

export default RichTextBlock;
