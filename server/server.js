// server.js
const express = require("express");
const app = express();
const cors = require("cors");
const { apiRouter } = require("./routes/index");
const errorHandler = require("./middlewares/ErrorMiddleware");
const CustomError = require("./utils/CustomError");

app.use(express.json());

app.use(cors());

const db = require("./models");

app.use("/api", apiRouter);

app.all("*", (req, res, next) => {
  throw new CustomError(`Can't find ${req.originalUrl} on the server!`, 404, "Url")
});

app.use(errorHandler)

db.sequelize.sync().then(() => {
  app.listen(process.env.PORT, () => {
    console.log("Server Starting...");
  });
});
