const express = require("express");
const router = express.Router();
const authRegister = require("../controllers/authRegister")
const authLogin = require("../controllers/authLogin")


router.route("/register").post(authRegister)
router.route("/login").post(authLogin)


module.exports = router