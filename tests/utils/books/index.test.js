/**
 * @jest-environment node
 */

const { getBooksWithoutRating } = require('./../../../src/utils/books');

describe('getBooksWithoutRating', () => {
  it('should fetch all the books from external API', async () => {
    const books = await getBooksWithoutRating();
    expect(Array.isArray(books.data.books)).toEqual(true);
  });
});
