import React from 'react';
import { getPathname } from '../../../utils/getPathname';
import { route } from '../../../routes';
import Flex from '../grid/Flex';
import LinkBase from '../actions/Link';

import * as styles from './ui.css.ts';

const PostTags = ({ className, tags }) => {
  if (!tags || !tags?.length) return null;

  return (
    <Flex wrap gap={2} className={className}>
      {tags.map((tag) => (
        <LinkBase
          className={styles.tag}
          href={`${route.posts}/${getPathname(tag)}`}
          key={tag}
          variant="inherit"
        >
          {tag}
        </LinkBase>
      ))}
    </Flex>
  );
};

export default PostTags;
