import React from 'react';
import { Link } from 'gatsby';
import cn from 'classnames';

import * as styles from './ui.css.ts';

const LinkBase = ({
  children,
  className,
  href,
  variant = 'base',
  ...props
}) => {
  const classes = cn(
    {
      [styles.link[variant]]: variant,
    },
    className,
  );

  return (
    <Link to={href} className={classes} {...props}>
      {children}
    </Link>
  );
};

export default LinkBase;
