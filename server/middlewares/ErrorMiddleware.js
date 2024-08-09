// middlewares/ErrorMiddleware.js

const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  const property = err.property || null;

  console.error(err);

  res.status(statusCode).json({
    status: "error",
    statusCode,
    error: {
      message,
      property,
    },
  });
};

module.exports = errorHandler;
