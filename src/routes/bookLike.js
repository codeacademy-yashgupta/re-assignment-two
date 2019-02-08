const Model = require('./../../models');

module.exports = [{
  path: '/bookLike',
  method: 'PUT',
  handler: async (req, h) => {
    try {
      Model.book.likeBook(req.payload.bookId, req.payload.like);
      return h.response({ message: 'Action completed successfully!', likedBookId: `${req.payload.bookId}`, action: `${req.payload.like}` }).code(200);
    } catch (error) {
      return h.response({ message: 'Error while liking/disliking' }).code(500);
    }
  },
}];
