const { groupBooksByAuthorName } = require('../utils/books/index.js');

module.exports = [{
  path: '/booksWithRating',
  method: 'GET',
  handler: async (req, h) => {
    const groupedBooks = await groupBooksByAuthorName();
    return h.response(groupedBooks).code(200);
  },
}];
