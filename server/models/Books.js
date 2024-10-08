module.exports = (sequelize, DataTypes) => {
  const Books = sequelize.define("Books", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    genre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Books.associate = (models) => {
    Books.belongsTo(models.Users);
  };

  return Books;
};