import React from 'react';
import cn from 'classnames';
import Post from '../Post';

import * as styles from './ui.css.ts';

const PostsList = ({ className, posts }) => {
  if (!posts || !posts?.length) return null;

  return (
    <div className={cn(styles.postsList, className)}>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostsList;
