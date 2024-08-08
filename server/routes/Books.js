const express = require("express");
const router = express.Router();
const { Books } = require("../models");

router.get("/:userId", async (req, res) => {
  const listOfBooks = await Books.findAll({ where: { UserId: userId}});
  res.json(listOfBooks);
});

router.post("/", async (req, res) => {
  const book = req.body;
  await Books.create(book)
  res.json(book)
});

module.exports = router;
