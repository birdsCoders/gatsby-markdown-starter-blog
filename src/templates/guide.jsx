import React from 'react';
import { graphql } from 'gatsby';
import ContainerInner from '../components/ui/elements/ContainerInner';
import Layout from '../layouts/Layout';
import Seo from '../components/Seo';
import GuideDetailed from '../components/GuideDetailed';

const GuidePage = ({ data: { mdx }, children }) => (
  <Layout>
    <ContainerInner>
      <GuideDetailed post={mdx}>{children}</GuideDetailed>
    </ContainerInner>
  </Layout>
);

export const Head = ({
  data: {
    mdx: {
      frontmatter: { title },
    },
  },
}) => <Seo title={title} description={title} />;

export const pageQuery = graphql`
  query ($id: String!) {
    mdx(id: { eq: $id }) {
      id
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "MMMM Do, YYYY")
      }
    }
  }
`;

export default GuidePage;
