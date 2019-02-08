const pingRoute = require('./ping');
const getBooksWithoutRating = require('./books');
const insertBooks = require('./insertBooks');

module.exports = [
  ...pingRoute,
  ...getBooksWithoutRating,
  ...insertBooks,
];
