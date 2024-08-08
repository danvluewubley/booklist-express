const express = require("express");
const router = express.Router();
const { SignUp, Login } = require("../controllers/authController");


router.post("/signup", SignUp);
router.post("/login", Login)

module.exports = router;
