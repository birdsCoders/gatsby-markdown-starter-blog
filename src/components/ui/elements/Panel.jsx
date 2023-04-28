import React from 'react';
import cn from 'classnames';

import * as styles from './ui.css.ts';

const Panel = ({ children, className, title }) => (
  <div className={cn(styles.panel, className)}>
    {title && <h2>{title}</h2>}
    {children}
  </div>
);

export default Panel;
