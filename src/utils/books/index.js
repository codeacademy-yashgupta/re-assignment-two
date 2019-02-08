const { httpGet } = require('../http/httpGet');

const getBooksWithoutRating = () => {
  const externalAPIForGettingBooksWithoutRating = 'https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/allBooks';
  return httpGet(externalAPIForGettingBooksWithoutRating);
};
const getBookRatingById = (id) => {
  const externalAPITwoForGettingRating = `https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/findBookById/${id}`;
  return httpGet(externalAPITwoForGettingRating);
};
const getBooksWithRating = async () => {
  const books = await getBooksWithoutRating();
  const booksData = books.data.books;
  const ratingArrayPromise = [];
  booksData.forEach((element) => {
    ratingArrayPromise.push(getBookRatingById(element.id));
  });
  return Promise.all(ratingArrayPromise).then(allRating => allRating.map((Rating, index) => {
    booksData[index].rating = Rating.data.rating;
    // console.log(booksData);
    return booksData[index];
  }));
};


module.exports = {
  getBooksWithoutRating, getBookRatingById, getBooksWithRating,
};
