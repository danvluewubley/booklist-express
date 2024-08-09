const { verify } = require("jsonwebtoken");
const CustomError = require("../utils/CustomError");

const validateToken = (req, res, next) => {
  const accessToken = req.header("accessToken");

  if (!accessToken)
    return res.status(401).json({ error: "User not logged in" });

  try {
    const validToken = verify(accessToken, process.env.SECRET_STRING);
    if (validToken) return next();
  } catch (error) {
    next(new CustomError("Invalid Token", 401, "Token"));
  }
};

module.exports = { validateToken };
