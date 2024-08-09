// utils/CustomError.js
class CustomError extends Error {
  constructor(message, statusCode, property) {
    super(message);
    this.statusCode = statusCode;
    this.property = property;
    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = CustomError;
