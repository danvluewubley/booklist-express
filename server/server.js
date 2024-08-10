// server.js
const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { apiRouter } = require("./routes/index");
const errorHandler = require("./middlewares/ErrorMiddleware");
const NotFoundError = require("./utils/CustomError");

app.use(express.json());
app.use(cookieParser());

const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};
app.use(cors(corsOptions));

const db = require("./models");

app.use("/api", apiRouter);

app.all("*", (req, res, next) => {
  throw new NotFoundError(
    `Can't find ${req.originalUrl} on the server!`)
});

app.use(errorHandler)

db.sequelize.sync().then(() => {
  app.listen(process.env.PORT, () => {
    console.log("Server Starting...");
  });
});
