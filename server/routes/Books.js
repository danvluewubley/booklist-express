const express = require("express");
const router = express.Router();
const { validateToken } = require("../middlewares/AuthMiddleware");
const { GetAllBooks, AddToBookList, RemoveAllBooks, GetBooksByUser, RemoveBookById, GetBookById, EditBookById } = require("../controllers/Books");

router.get("/", GetAllBooks);
router.post("/", validateToken, AddToBookList);
router.get("/booklist", validateToken, GetBooksByUser);
router.get("/:id", GetBookById);
router.put("/edit/:id", validateToken, EditBookById);
router.delete('/delete', RemoveAllBooks)
router.delete("/delete/:id", validateToken, RemoveBookById);

module.exports = router;
