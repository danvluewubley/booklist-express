const express = require("express");
const router = express.Router();
const { Books } = require("../models");
const { validateToken } = require("../middlewares/AuthMiddleware");

router.get("/", async (req, res) => {
  try {
    const listOfBooks = await Books.findAll();
    res.status(201).json(listOfBooks);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/", validateToken, async (req, res) => {
  try {
    const book = req.body;
    if (!book) return res.json({ error: "All fields must be filled out" });

    await Books.create(book);
    res.status(201).json(book);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
