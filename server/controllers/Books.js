const { Books } = require("../models");
const { getBooksWithUsers } = require("../services/BookTable");
const ValidationError = require("../utils/CustomError");

const GetAllBooks = async (req, res, next) => {
  try {
    const books = await getBooksWithUsers();
    return res.status(200).json(books);
  } catch (error) {
    next(error);
  }
};

const AddToBookList = async (req, res, next) => {
  try {
    const book = req.body;

    if (!book.title || !book.author || !book.genre) {
      throw next(new ValidationError("All fields must be filled out", 400));
    }

    const userId = req.userId;

    const bookWithUserId = {
      ...book,
      UserId: userId,
    };

    const createdBook = await Books.create(bookWithUserId);

    res.status(201).json(createdBook);
  } catch (error) {
    console.error(error);
    next(error);
  }
};

module.exports = { GetAllBooks, AddToBookList };
