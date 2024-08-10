const { Books, Users } = require("../models");
const DatabaseError = require('../utils/CustomError')

const getBooksWithUsers = async (next) => {
  try {
    const listOfBooks = await Books.findAll({
      include: {
        model: Users,
        attributes: ["username"],
      },
    });
    return listOfBooks;
  } catch (error) {
    throw next(new DatabaseError("Error fetching books", 500));
  }
};



module.exports = { getBooksWithUsers };
