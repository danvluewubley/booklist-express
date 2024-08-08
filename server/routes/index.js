const { Router } = require("express");
const authRoutes = require("./Users");
const bookRoutes = require("./Books");

const apiRouter = Router();

apiRouter.use("/auth", authRoutes);
apiRouter.use("/books", bookRoutes);

module.exports = { apiRouter };
