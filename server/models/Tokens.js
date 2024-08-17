module.exports = (sequelize, DataTypes) => {
  const Tokens = sequelize.define("Tokens", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    token: {
      type: DataTypes.STRING,
      unique: true,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Tokens;
};