const { httpGet } = require('../http/httpGet');

const getBooksWithoutRating = () => {
  console.log('Hi');
  const externalAPIForGettingBooksWithoutRating = 'https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/allBooks';
  return httpGet(externalAPIForGettingBooksWithoutRating);
};
const getBookRatingById = (id) => {
  const externalAPITwoForGettingRating = `https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/findBookById/${id}`;
  return httpGet(externalAPITwoForGettingRating);
};


module.exports = { getBooksWithoutRating, getBookRatingById };
