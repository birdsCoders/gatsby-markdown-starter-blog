import React from 'react';
import LinkBase from '../ui/actions/Link';
import PostDate from '../ui/post/PostDate';
import PostImage from '../ui/post/PostImage';
import PostTags from '../ui/post/PostTags';

import * as styles from './ui.css.ts';

const Post = ({ post }) => {
  const { fields, frontmatter } = post;
  const slug = fields?.slug;

  return (
    <article className={styles.post}>
      <PostImage image={frontmatter?.image} href={slug} />
      <div className={styles.postContent}>
        <PostTags className={styles.postTags} tags={frontmatter?.categories} />
        <h2 className={styles.postTitle}>
          <LinkBase href={slug} variant="inherit">
            {frontmatter?.title}
          </LinkBase>
        </h2>
        <PostDate date={frontmatter?.date} />
      </div>
    </article>
  );
};

export default Post;
