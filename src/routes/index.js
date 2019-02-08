const pingRoute = require('./ping');
const getBooksWithoutRating = require('./books');

module.exports = [
  ...pingRoute,
  ...getBooksWithoutRating,
];
