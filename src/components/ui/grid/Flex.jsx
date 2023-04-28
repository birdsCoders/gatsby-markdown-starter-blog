import React from 'react';
import cn from 'classnames';

import * as styles from './ui.css.ts';

const Flex = ({
  alignItems,
  as: Component = 'div',
  children,
  className,
  gap = 3,
  gutter,
  responsive,
  variant,
  wrap,
  ...props
}) => {
  const classes = cn(
    styles.flex,
    {
      [styles.flexVariants[variant]]: variant,
      [styles.flexVariants.responsive]: responsive,
      [styles.flexVariants.wrap]: wrap,
      [styles.flexVariants[alignItems]]: alignItems,
    },
    gutter ? styles.flexGap[0] : styles.flexGap[gap],
    className,
  );

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
};

export default Flex;
