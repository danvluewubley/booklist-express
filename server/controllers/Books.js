const { Books, Users } = require("../models");
const { getBooksWithUsers } = require("../services/BookTable");

const GetAllBooks = async (req, res) => {
  try {
    const books = await getBooksWithUsers();
    return res.status(200).json(books);
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
};


const AddToBookList = async (req, res) => {
  try {
    const book = req.body;
    if (!book) return res.json({ error: "All fields must be filled out" });

    await Books.create(book);
    res.status(201).json(book);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

module.exports = { GetAllBooks, AddToBookList };
