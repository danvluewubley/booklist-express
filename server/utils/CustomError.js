// utils/CustomError.js
class CustomError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    Error.captureStackTrace(this, this.constructor);
  }
}

class ValidationError extends CustomError {
  constructor(message, statusCode=400) {
    super(message || "Validation Error", statusCode);
  }
}

class NotFoundError extends CustomError {
  constructor(message, statusCode = 404) {
    super(message || "Resource Not Found", statusCode);
  }
}
class DatabaseError extends CustomError {
  constructor(message, statusCode = 500) {
    super(message || "Database Error", statusCode);
  }
}

class ProgrammingError extends Error {
  constructor(message) {
    super(message || "Programming Error");
    this.statusCode = 500;
    this.status = "error";
    this.isOperational = false;
    Error.captureStackTrace(this, this.constructor);
  }
}

(module.exports = CustomError),
  ValidationError,
  NotFoundError,
  DatabaseError,
  ProgrammingError;
