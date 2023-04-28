const path = require('path');

const template = path.resolve('src/templates/guide.jsx');

module.exports = function createGuide({ createPage, posts }) {
  const pages = posts?.filter((post) => post.fields.type === 'guides');

  pages.forEach((page) => {
    const component = `${template}?__contentFilePath=${page.internal.contentFilePath}`;
    const path = page.fields.slug;

    createPage({
      component,
      path,
      context: {
        id: page.id,
      },
    });
  });
};
