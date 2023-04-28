import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../layouts/Layout';
import PostsList from '../components/PostsList';
import Seo from '../components/Seo';
import TwoColumnsLayout from '../layouts/TwoColumnsLayout';
import PageTitle from '../components/PageTitle';

const INITIAL_DATA = graphql`
  query {
    allMdx(
      sort: { frontmatter: { date: DESC } }
      limit: 1000
      filter: { fields: { type: { in: "posts" } } }
    ) {
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

const MainPage = () => {
  const graphqlData = useStaticQuery(INITIAL_DATA);
  const posts = graphqlData?.allMdx.nodes;

  return (
    <Layout>
      <PageTitle pageTitle="Welcome to our blog!" />
      <TwoColumnsLayout leftContent={<PostsList posts={posts} />} />
    </Layout>
  );
};

export const Head = () => <Seo />;

export default MainPage;
