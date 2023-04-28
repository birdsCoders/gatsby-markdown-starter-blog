require('dotenv').config({
  path: '.env',
});

const { createFilePath } = require(`gatsby-source-filesystem`);

const query = require('./gatsby/query');

const createPost = require('./gatsby/pages/post');
const createCategory = require('./gatsby/pages/category');
const createGuide = require('./gatsby/pages/guide');

const header = require.resolve('./src/layouts/Header/index.jsx');
const footer = require.resolve('./src/layouts/Footer/index.jsx');

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage, createSlice } = actions;

  try {
    const result = await graphql(query);

    if (result.errors) {
      throw result.errors;
    }

    const { data } = result;
    const posts = data.allMdx.nodes;
    const categories = data.categories.group;

    createPost({ createPage, posts });
    createCategory({ createPage, categories });
    createGuide({ createPage, posts });

    createSlice({
      id: 'header',
      component: header,
    });
    createSlice({
      id: 'footer',
      component: footer,
    });
  } catch (e) {
    console.error('Error', e);
    reporter.panicOnBuild('Error while running GraphQL query');
  }
};

exports.onCreateNode = async ({ actions, getNode, node }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });

    const parent = getNode(node.parent);
    const parentName = parent.sourceInstanceName;
    createNodeField({
      name: 'type',
      node,
      value: parentName,
    });
  }
};
