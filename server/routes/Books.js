const express = require("express");
const router = express.Router();
const { validateToken } = require("../middlewares/AuthMiddleware");
const { GetAllBooks, AddToBookList } = require("../controllers/Books");

router.get("/", GetAllBooks);
router.post("/", validateToken, AddToBookList);

module.exports = router;
