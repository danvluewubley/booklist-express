const { Users } = require("../models");
const bcrypt = require("bcrypt");
const { sign } = require("jsonwebtoken");
const { QueryUsedByUsername } = require("../services/UserTable");
require("dotenv").config();

const SignUp = async (req, res) => {
  const { username, password } = req.body;

  try {
    const userExists = await QueryUsedByUsername(username);
    if (userExists) {
      return res.status(400).json({ error: "Username already exists" });
    }

    const hash = await bcrypt.hash(password, 10);
    await Users.create({
      username: username,
      password: hash,
    });
    res.status(201).json({ message: "SUCCESS" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const Login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await QueryUsedByUsername(username);
    const match = await bcrypt.compare(password, user.password);

    if (!user || !match) {
      return res.status(401).json({ error: "Invalid Credentials" });
    }

    const accessToken = sign(
      { username: user.username, id: user.id },
      process.env.SECRET_STRING
    );
    res.json(accessToken);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred during login" });
  }
};

module.exports = { SignUp, Login };
