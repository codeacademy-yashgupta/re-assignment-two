module.exports = (sequelize, DataTypes) => {
  const book = sequelize.define('book', {
    bookId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    author: DataTypes.STRING,
    like: DataTypes.BOOLEAN,
  }, {});
  book.generate = (bookId, name, author) => book.create({
    bookId, name, author,
  }).catch((err) => {
    console.log(err);
  });
  book.likeBook = (bookId, like) => book.update({
    like,
  }, {
    where: {
      bookId,
    },
  });
  return book;
};
