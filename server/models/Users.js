module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define("Users", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  // Establishes one to many relationship
  Users.associate = (models) => {
    Users.hasMany(models.Books, {
      // Deletes every book if the user is deleted
      onDelete: "cascade",
    });
  };
  return Users;
};