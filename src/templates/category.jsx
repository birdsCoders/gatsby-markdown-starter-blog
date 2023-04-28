import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../layouts/Layout';
import PageTitle from '../components/PageTitle';
import PostsList from '../components/PostsList';
import Seo from '../components/Seo';
import TwoColumnsLayout from '../layouts/TwoColumnsLayout';

const CategoryPage = ({ data, pageContext }) => {
  const { category } = pageContext;
  const { nodes, totalCount } = data.allMdx;

  return (
    <Layout>
      <PageTitle pageTitle={category} totalCount={totalCount} />
      <TwoColumnsLayout leftContent={<PostsList posts={nodes} />} />
    </Layout>
  );
};

export const Head = ({ pageContext: { category } }) => (
  <Seo
    title={`SiteName ${category}`}
    description={`SiteName ${category} description`}
  />
);

export const pageQuery = graphql`
  query ($category: String) {
    allMdx(
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { categories: { in: [$category] } } }
    ) {
      totalCount
      nodes {
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
          }
        }
      }
    }
  }
`;

export default CategoryPage;
