import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../layouts/Layout';
import PostDetailed from '../components/PostDetailed';
import Seo from '../components/Seo';

const PostPage = ({ data: { mdx }, children }) => (
  <Layout>
    <PostDetailed post={mdx}>{children}</PostDetailed>
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
        date(formatString: "MMMM Do, YYYY")
        title
        categories
        image {
          childImageSharp {
            gatsbyImageData
          }
          publicURL
        }
      }
    }
  }
`;

export default PostPage;
