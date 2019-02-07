const { httpGet } = require('../http/httpGet');

const getBooksWithoutRating = () => {
  console.log('Hi');
  const externalAPIForGettingBooksWithoutRating = 'https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/allBooks';
  return httpGet(externalAPIForGettingBooksWithoutRating);
};
module.exports = { getBooksWithoutRating };
