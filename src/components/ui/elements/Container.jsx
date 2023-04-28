import React from 'react';
import cn from 'classnames';

import * as styles from './ui.css.ts';

const Container = ({ children, className }) => (
  <div className={cn(styles.container, className)}>{children}</div>
);

export default Container;
