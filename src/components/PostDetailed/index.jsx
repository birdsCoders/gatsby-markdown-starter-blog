import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import PostDate from '../ui/post/PostDate';
import PostTags from '../ui/post/PostTags';
import RichTextBlock from '../ui/elements/RichTextBlock';

import * as styles from './ui.css.ts';

const PostDetailed = ({ children, post }) => {
  const { frontmatter } = post;
  const image = frontmatter?.image;

  return (
    <article className={styles.post}>
      <header className={styles.postHeader}>
        <h1>{frontmatter?.title}</h1>
        <PostDate date={frontmatter?.date} />
      </header>
      {image && (
        <GatsbyImage className={styles.postImage} image={getImage(image)} />
      )}
      <RichTextBlock>{children}</RichTextBlock>
      <footer className={styles.postFooter}>
        <PostTags tags={frontmatter?.categories} />
      </footer>
    </article>
  );
};

export default PostDetailed;
