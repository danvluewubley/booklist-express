const { Users } = require("../models");

const QueryUsedByUsername = (username) => {
  return Users.findOne({ where: { username } });
};

module.exports = { QueryUsedByUsername };
