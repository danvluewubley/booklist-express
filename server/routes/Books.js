const express = require("express");
const router = express.Router();
const { Books } = require("../models");
const { validateToken } = require("../middlewares/AuthMiddleware")

router.get("/", async (req, res) => {
  const listOfBooks = await Books.findAll();
  res.json(listOfBooks);
});

router.post("/", validateToken, async (req, res) => {
  const book = req.body;
  await Books.create(book)
  res.json(book)
});

module.exports = router;
