const { getBooksWithRating } = require('../utils/books/index.js');
const Model = require('./../../models');

module.exports = [{
  path: '/insertBooks',
  method: 'POST',
  handler: async (req, h) => {
    try {
      const groupedBooks = await getBooksWithRating();
      console.log(groupedBooks);
      groupedBooks.forEach(async (book) => {
        console.log(book.id, book.Name, book.Author);
        await Model.book.generate(book.id, book.Name, book.Author);
      });
      return h.response({ message: 'Inserted into the database successfully' }).code(201);
    } catch (error) {
      return h.response({ errorMessage: 'Error!' }).code(500);
    }
  },
}];
