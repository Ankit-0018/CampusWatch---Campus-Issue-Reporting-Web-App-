const express = require("express");
const userRoute = express.Router();
const verifyJwt  = require("../middlewares/verifyJwt")


userRoute.route("/me").get(verifyJwt,(req,res) => {
  return  res.json({
        message : "Server Responded",
        user : req.user
    })
})



module.exports = userRoute;