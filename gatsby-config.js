module.exports = {
  siteMetadata: {
    title: 'Gatsby Markdown Blog Starter',
    author: {
      name: 'CodeTipsHub',
    },
    description: 'Gatsby markdown blog starter with categories',
    social: {
      twitter: '@twitterUsername',
    },
  },
  plugins: [
    'gatsby-plugin-sharp',
    'gatsby-plugin-image',
    'gatsby-transformer-sharp',
    'gatsby-plugin-vanilla-extract',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md'],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'assets',
        path: `${__dirname}/src/assets/`,
      },
      __key: 'assets',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/blog/posts`,
      },
      __key: 'posts',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'guides',
        path: `${__dirname}/blog/guides`,
      },
      __key: 'guides',
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'CodeTips',
        short_name: 'Ct',
        icon: `${__dirname}/src/assets/favicon.png`,
      },
    },
  ],
};
