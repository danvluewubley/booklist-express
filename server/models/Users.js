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
  // Users.associate = (models) => {
  //   Users.hasMany(models.Posts, {
  //     // Deletes every comment if the post is deleted
  //     onDelete: "cascade",
  //   });
  // };
  return Users;
};