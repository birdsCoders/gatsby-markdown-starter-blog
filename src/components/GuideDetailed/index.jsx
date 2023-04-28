import React from 'react';
import LinkBase from '../ui/actions/Link';
import PostDate from '../ui/post/PostDate';
import RichTextBlock from '../ui/elements/RichTextBlock';

import * as styles from './ui.css.ts';

const GuideDetailed = ({ children, post }) => {
  const { frontmatter } = post;

  return (
    <article className={styles.post}>
      <header className={styles.postHeader}>
        <h1>{frontmatter?.title}</h1>
        <PostDate date={frontmatter?.date} />
      </header>
      <div className={styles.postContent}>
        <h2>Table of contents</h2>
        <ul className={styles.postList}>
          <li className={styles.postListItem}>
            <LinkBase href="#content1">Content 1</LinkBase>
          </li>
          <li className={styles.postListItem}>
            <LinkBase href="#content2">Content 2</LinkBase>
          </li>
        </ul>
      </div>
      <RichTextBlock>{children}</RichTextBlock>
    </article>
  );
};

export default GuideDetailed;
