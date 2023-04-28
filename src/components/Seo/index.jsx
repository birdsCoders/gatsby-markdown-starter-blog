import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const INITIAL_DATA = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        social {
          twitter
        }
      }
    }
  }
`;

const Seo = ({ children, description, title }) => {
  const graphqlData = useStaticQuery(INITIAL_DATA);
  const { site } = graphqlData;

  const metaDescription = description || site.siteMetadata.description;
  const metaTitle = title || site.siteMetadata?.title;

  return (
    <>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />

      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary" />
      <meta
        name="twitter:creator"
        content={site.siteMetadata?.social?.twitter}
      />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />

      {children}
    </>
  );
};

export default Seo;
