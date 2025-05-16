const express = require("express");
const userRoute = express.Router();
const verifyJwt  = require("../middlewares/verifyJwt")
const userDetails = require("../controllers/userDetails")



userRoute.route("/me").get(verifyJwt,userDetails);



module.exports = userRoute;