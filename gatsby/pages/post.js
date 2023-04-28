const path = require('path');

const template = path.resolve('src/templates/post.jsx');

module.exports = function createPost({ createPage, posts }) {
  posts.forEach((post) => {
    if (post.fields.type === 'pages') {
      return;
    }

    const component = `${template}?__contentFilePath=${post.internal.contentFilePath}`;
    const path = post.fields.slug;

    createPage({
      component,
      path,
      context: {
        id: post.id,
      },
    });
  });
};
