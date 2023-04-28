import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { getPathname } from '../../utils/getPathname';
import { route } from '../../routes';
import LinkBase from '../ui/actions/Link';

import * as styles from './ui.css.ts';

const INITIAL_DATA = graphql`
  query {
    allMdx(limit: 2000, filter: { fields: { type: { in: "posts" } } }) {
      group(field: { frontmatter: { categories: SELECT } }) {
        name: fieldValue
        totalCount
      }
    }
  }
`;

const Categories = () => {
  const graphqlData = useStaticQuery(INITIAL_DATA);
  const categories = graphqlData?.allMdx?.group;

  return (
    <ul>
      {categories?.map((category) => {
        const categoryName = category?.name;
        const categoryPathname = getPathname(categoryName);

        const href = `${route.posts}/${categoryPathname}`;

        return (
          <li className={styles.categoryItem}>
            <LinkBase href={href} variant="inherit">
              {categoryName}
            </LinkBase>
          </li>
        );
      })}
    </ul>
  );
};

export default Categories;
