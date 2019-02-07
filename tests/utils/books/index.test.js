/**
 * @jest-environment node
 */

const { getBooksWithoutRating, getBookRatingById } = require('./../../../src/utils/books');

describe('getBooksWithoutRating', () => {
  it('should fetch all the books from external API', async () => {
    const books = await getBooksWithoutRating();
    expect(Array.isArray(books.data.books)).toEqual(true);
  });
});

describe('getBookRatingById', () => {
  it('should fetch rating of the particular book id', async () => {
    const rating = await getBookRatingById(10);
    expect(typeof (rating.data)).toEqual('object');
  });
});
