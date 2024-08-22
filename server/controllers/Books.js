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

const RemoveAllBooks = async (req, res, next) => {
  try {
    await Books.destroy({where:{}})
    console.log('Destroyed!')
  } catch (error) {
    console.log(error)
  }
}

const GetBooksByUser = async (req, res, next) => {
  try {
    const books = await Books.findAll({ where: { UserId: req.userId } });
    return res.status(200).json(books);
  } catch (error) {
    console.log(error);
  }
}

const RemoveBookById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const book = await Books.findAll({ where: { id } });

    if (!book) {
      return res.status(404).json({ error: "Book not found" });
    }

    await Books.destroy({ where: { id } });
    return res.status(200).json({ message: "Book deleted successfully" });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ error: "An error occurred while trying to delete the book" });
  }
}

const GetBookById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const book = await Books.findOne({ where: { id } });

    if (!book) {
      return res.status(404).json({ error: "Book not found" });
    }

    return res.status(200).json(book);
  } catch (error) {
    console.error(error);
  }
};

module.exports = { GetAllBooks, AddToBookList, RemoveAllBooks, GetBooksByUser, RemoveBookById, GetBookById };
