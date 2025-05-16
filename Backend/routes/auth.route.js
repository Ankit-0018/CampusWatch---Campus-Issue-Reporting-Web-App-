const express = require("express");
const router = express.Router();
const authRegister = require("../controllers/authRegister")
const authLogin = require("../controllers/authLogin")
const authLogout = require("../controllers/authLogout")


router.route("/register").post(authRegister)
router.route("/login").post(authLogin)
router.route("/logout" ).get(authLogout)

module.exports = router