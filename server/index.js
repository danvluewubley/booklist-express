const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json())

app.use(cors())

const db = require("./models");

const usersRouter = require("./routes/Users");
app.use("/auth", usersRouter);
const booksRouter = require("./routes/Books");
app.use("/book", booksRouter);

db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log("Server Starting...");
  });
});