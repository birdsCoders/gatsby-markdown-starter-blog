import * as React from 'react';
import { route } from '../../routes';
import Container from '../../components/ui/elements/Container';
import Flex from '../../components/ui/grid/Flex';
import LinkBase from '../../components/ui/actions/Link';

import * as styles from './ui.css.ts';

const Footer = () => (
  <footer className={styles.footer}>
    <Container>
      <Flex variant="spaceBetween" responsive>
        <p className={styles.copyright}>
          © {new Date().getFullYear()} SiteName. All Rights Reserved
        </p>
        <LinkBase
          className={styles.footerLink}
          href={route.privacy}
          variant="inherit"
        >
          Privacy Policy
        </LinkBase>
      </Flex>
    </Container>
  </footer>
);

export default Footer;
