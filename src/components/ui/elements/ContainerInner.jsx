import React from 'react';

import * as styles from './ui.css.ts';

const ContainerInner = ({ children }) => (
  <div className={styles.containerInner}>{children}</div>
);

export default ContainerInner;
