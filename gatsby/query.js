module.exports = `
{
  allMdx(limit: 1000, sort: { frontmatter: { date: DESC } }) {
    nodes {
      id
      fields {
        slug
        type
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
      internal {
        contentFilePath
      }
    }
  }
  categories: allMdx(limit: 1000, filter: { fields: { type: { in: "posts" } } }) {
    group(field: { frontmatter: { categories: SELECT } }) {
      name: fieldValue
      totalCount
    }
  }
}
`;
