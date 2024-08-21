const express = require("express");
const router = express.Router();
const { validateToken } = require("../middlewares/AuthMiddleware");
const { GetAllBooks, AddToBookList, RemoveAllBooks, GetBooksByUser } = require("../controllers/Books");

router.get("/", GetAllBooks);
router.post("/", validateToken, AddToBookList);
router.get("/booklist", validateToken, GetBooksByUser);
router.delete('/delete', RemoveAllBooks)

module.exports = router;
