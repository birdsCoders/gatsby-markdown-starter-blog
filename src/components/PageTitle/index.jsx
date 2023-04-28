import React from 'react';
import * as styles from './ui.css.ts';

const PageTitle = ({ pageTitle, totalCount }) => {
  if (!Boolean(totalCount)) {
    return <h1 className={styles.pageTitle}>{pageTitle}</h1>;
  }

  return (
    <div className={styles.pageTitle}>
      <h1 className={styles.pageTitleH1}>{pageTitle}</h1>
      <div className={styles.totalCount}>{`${totalCount} Posts`}</div>
    </div>
  );
};

export default PageTitle;
