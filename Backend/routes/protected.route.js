const express = require("express");
const protectedRoute = express.Router();
const verifyJwt  = require("../middlewares/verifyJwt")


protectedRoute.route("/").get(verifyJwt,(req,res) => {
  return  res.json({
        message : "Server Responded"
    })
})


module.exports = protectedRoute;