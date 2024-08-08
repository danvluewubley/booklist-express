const { Books, Users } = require("../models");

const getBooksWithUsers = async () => {
  try {
    const listOfBooks = await Books.findAll({
      include: {
        model: Users,
        attributes: ["username"],
      },
    });
    return listOfBooks;
  } catch (error) {
    console.error("Error fetching books:", error);
    throw error;
  }
};



module.exports = { getBooksWithUsers };
