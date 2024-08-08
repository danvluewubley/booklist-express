const express = require("express");
const app = express();
const cors = require("cors");
const { apiRouter } = require("./routes/index");

app.use(express.json())

app.use(cors())

const db = require("./models");

app.use("/api", apiRouter); 

db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log("Server Starting...");
  });
});