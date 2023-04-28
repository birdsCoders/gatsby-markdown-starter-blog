import React from 'react';
import { Link } from 'gatsby';
import Container from '../../components/ui/elements/Container';
import Flex from '../../components/ui/grid/Flex';
import Menu from '../../components/Menu';

import * as styles from './ui.css.ts';

const Header = () => (
  <header className={styles.header}>
    <Container>
      <Flex variant="spaceBetween">
        <Link to="/" className={styles.logo}>
          <span className={styles.logoText}>Site</span>Logo
        </Link>
        <Menu />
      </Flex>
    </Container>
  </header>
);

export default Header;
