const Model = require('../../models');
// console.log(Model);
describe('generate', () => {
  beforeEach(async () => {
    await Model.book.truncate();
  });
  it('should insert name and the rating in the table', async () => {
    await Model.book.generate(10, 'Harry Potter and the Half-Blood Prince', 'J.K Rowling');
    expect(await Model.book.count()).toEqual(1);
  });
  it('should return zero when no value is inserted', async () => {
    expect(await Model.book.count()).toEqual(0);
  });
});

describe('bookLike', () => {
  it('should like the book with given id', async () => {
    const bookId = 10;
    const like = true;
    const bookLike = await Model.book.likeBook(bookId, like);
    console.log(bookLike);
    expect(Array.isArray(bookLike)).toEqual(true);
  });
});
afterAll(() => {
  Model.book.sequelize.close();
});
