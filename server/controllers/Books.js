const { Books } = require("../models");
const { getBooksWithUsers } = require("../services/BookTable");
const CustomError = require("../utils/CustomError");

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
    const validate = validateBookData(req.body)

    if (!validate) throw new CustomError("All fields must be filled out", 422, "Fields");      

    await Books.create(book);
    res.status(201).json(book);
  } catch (error) {
    next(error);
  }
};

module.exports = { GetAllBooks, AddToBookList };
