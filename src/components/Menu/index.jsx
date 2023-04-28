import * as React from 'react';
import { Link } from 'gatsby';
import { route } from '../../routes';
import Flex from '../ui/grid/Flex';

import * as styles from './ui.css.ts';

const navItems = [
  {
    title: 'Guides',
    url: route.guides,
  },
  {
    title: 'About',
    url: route.about,
  },
  {
    title: 'Contacts',
    url: route.contacts,
  },
];

const Menu = () => (
  <nav>
    <Flex as="ul" gap={4}>
      {navItems.map((link) => (
        <li key={link.title}>
          <Link
            activeClassName={styles.navLinkActive}
            className={styles.navLink}
            to={link.url}
          >
            {link.title}
          </Link>
        </li>
      ))}
    </Flex>
  </nav>
);

export default Menu;
