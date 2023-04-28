import * as React from 'react';
import Categories from '../../components/Categories';
import Panel from '../../components/ui/elements/Panel';

import * as styles from './ui.css.ts';

const TwoColumnsLayout = ({ leftContent, rightContent }) => {
  return (
    <div className={styles.grid}>
      <div className={styles.colLeft}>{leftContent}</div>
      <div className={styles.colRight}>
        <Panel title="Categories">
          <Categories />
        </Panel>
        {rightContent}
      </div>
    </div>
  );
};

export default TwoColumnsLayout;
