import React from 'react';
import cn from 'classnames';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

import * as styles from './ui.css.ts';

const PostImage = ({ className, image, href }) => {
  if (!image) return null;

  return (
    <Link className={cn(styles.image, className)} to={href}>
      <GatsbyImage image={getImage(image)} />
    </Link>
  );
};

export default PostImage;
