const { Users } = require("../models");
const DatabaseError = require("../utils/CustomError");

const QueryUsedByUsername = (username, next) => {
  try {
    return Users.findOne({ where: { username } });
  } catch (error) {
    throw next(new DatabaseError("Error while fetching user", 500));
  }
};

module.exports = { QueryUsedByUsername };
