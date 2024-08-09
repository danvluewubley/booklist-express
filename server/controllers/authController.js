const { Users } = require("../models");
const bcrypt = require("bcrypt");
const { sign } = require("jsonwebtoken");
const { QueryUsedByUsername } = require("../services/UserTable");
const CustomError = require("../utils/CustomError");
require("dotenv").config();

const SignUp = async (req, res, next) => {
  const { username, password } = req.body;

  try {
    const userExists = await QueryUsedByUsername(username);
    if (userExists) {
      throw new CustomError("Username already exists", 400, 'Login');
    }

    const hash = await bcrypt.hash(password, 10);
    await Users.create({
      username: username,
      password: hash,
    });
    res.status(201).json({ message: "SUCCESS" });
  } catch (error) {
    next(error)
  }
};

const Login = async (req, res, next) => {
  const { username, password } = req.body;

  try {
    const user = await QueryUsedByUsername(username);
    const match = await bcrypt.compare(password, user.password);

    if (!user || !match) {
      throw new CustomError("Invalid Credentials", 404, "Credentials");
    }

    const accessToken = sign(
      { username: user.username, id: user.id },
      process.env.SECRET_STRING
    );
    res.json(accessToken);
  } catch (error) {
    next(error);
  }
};

module.exports = { SignUp, Login };
