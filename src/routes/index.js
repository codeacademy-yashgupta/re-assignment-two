const pingRoute = require('./ping');
const getBooksWithoutRating = require('./books');
const insertBooks = require('./insertBooks');
const bookLike = require('./bookLike');

module.exports = [
  ...pingRoute,
  ...getBooksWithoutRating,
  ...insertBooks,
  ...bookLike,
];
