const express = require("express");
const router = express.Router();
const {
  SignUp,
  Login,
  Logout,
  UserInfo,
} = require("../controllers/authController");

router.post("/signup", SignUp);
router.post("/login", Login);
router.post("/logout", Logout);
router.post("/user-info", UserInfo);

module.exports = router;
