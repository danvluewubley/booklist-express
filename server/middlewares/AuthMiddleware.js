const { verify } = require("jsonwebtoken");

const validateToken = (req, res, next) => {
  const accessToken = req.header("accessToken");

  if (!accessToken)
    return res.status(401).json({ error: "User not logged in" });

  try {
    const validToken = verify(accessToken, process.env.SECRET_STRING);
    if (validToken) {
      return next();
    } else {
      return res.status(401).json({ error: "Invalid Token" });
    }
  } catch (err) {
    console.log("Token verification error", err);
    return res.status(401).json({ error: "Invalid Token" });
  }
};

module.exports = { validateToken };
