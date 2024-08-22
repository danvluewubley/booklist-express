const { Users, Tokens } = require("../models");
const bcrypt = require("bcrypt");
const { sign } = require("jsonwebtoken");
const { QueryUsedByUsername } = require("../services/UserTable");
const ValidationError = require("../utils/CustomError");
require("dotenv").config();

const SignUp = async (req, res, next) => {
  const { username, password } = req.body;

  try {
    const userExists = await QueryUsedByUsername(username);
    if (userExists) {
      throw next(new ValidationError('User already exists', 400));
    }

    const hash = await bcrypt.hash(password, 10);
    await Users.create({
      username: username,
      password: hash,
    });
    res.status(201).json({ message: "SUCCESS" });
  } catch (error) {
    next(error);
  }
};

const Login = async (req, res, next) => {
  const { username, password } = req.body;

  try {
    const user = await QueryUsedByUsername(username);
    const match = await bcrypt.compare(password, user.password);

    if (!user || !match) {
      throw next(new ValidationError("Incorrect credentials", 400));
    }

    const accessToken = sign(
      { username: user.username, id: user.id },
      process.env.SECRET_ACCESS_TOKEN,
      {
        expiresIn: "15m",
      }
    );

    const refreshToken = sign(
      { id: user.id },
      process.env.SECRET_REFRESH_TOKEN,
      {
        expiresIn: "90d",
      }
    );

    res.cookie("accessToken", accessToken, {
      httpOnly: true,
      secure: true,
      maxAge: 15 * 60 * 1000,
      sameSite: "Strict",
    });

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: true,
      maxAge: 90 * 24 * 60 * 60 * 1000,
      sameSite: "Strict",
    });

    res.json("Token sent through cookie!");
  } catch (error) {
    next(error);
  }
};

const Logout = async (req, res, next) => {
  const refreshToken = req.cookies.refreshToken;
  if (!refreshToken) {
    return res.status(401).json({ error: "User not logged in" });
  }

  res.clearCookie("accessToken", {
    httpOnly: true,
    secure: true,
    path: "/",
  });

  res.clearCookie("refreshToken", {
    httpOnly: true,
    secure: true,
    path: "/",
  });

  await Tokens.create({
    token: refreshToken,
    type: "refresh",
  });


  res.json("Token cleared!");
};

const UserInfo = async (req, res, next) => {
  try {
    const { username } = req.body;
    const user = await QueryUsedByUsername(username);
    if (!user) {
      throw new Error("User not found");
    }
    return res.status(200).json(user.id);
  } catch (error) {
    next(error);
  }
}

module.exports = { SignUp, Login, Logout, UserInfo };
