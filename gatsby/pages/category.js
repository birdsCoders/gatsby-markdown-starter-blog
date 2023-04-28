const path = require('path');

const template = path.resolve('src/templates/category.jsx');
const route = '/posts';

module.exports = function createCategory({ createPage, categories }) {
  categories.forEach((category) => {
    const categoryName = category.name;
    const path = `${route}/${categoryName.replace(/\s+/g, '-').toLowerCase()}`;

    createPage({
      path,
      component: template,
      context: {
        category: categoryName,
      },
    });
  });
};
