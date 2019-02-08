module.exports = (sequelize, DataTypes) => {
  const book = sequelize.define('book', {
    bookId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    author: DataTypes.STRING,
  }, {});
  book.generate = (bookId, name, author) => book.create({
    bookId, name, author,
  }).catch((err) => {
    console.log(err);
  });
  return book;
};
