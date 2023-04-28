import * as React from 'react';
import { Slice } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import Container from '../../components/ui/elements/Container';
import LinkBase from '../../components/ui/actions/Link';

import '../../theme/styles.css.ts';
import * as styles from './ui.css.ts';

const shortcodes = {
  LinkBase,
};

const Layout = ({ children }) => (
  <div className={styles.layout}>
    <Slice alias="header" />
    <main className={styles.main}>
      <MDXProvider components={shortcodes}>
        <Container>{children}</Container>
      </MDXProvider>
    </main>
    <Slice alias="footer" />
  </div>
);

export default Layout;
