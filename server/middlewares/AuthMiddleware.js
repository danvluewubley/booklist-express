const { verify } = require("jsonwebtoken");
const ValidationError = require("../utils/CustomError");

const validateToken = (req, res, next) => {
  const accessToken = req.cookies.accessToken;

  if (!accessToken) {
    return res.status(401).json({ error: "User not logged in" });
  }

  try {
    const validToken = verify(accessToken, process.env.SECRET_ACCESS_TOKEN);
    if (validToken) {
      req.userId = validToken.id;
      return next();
    }
  } catch (error) {
    return next(new ValidationError("Invalid Token", 401, "Token"));
  }
};

module.exports = { validateToken };