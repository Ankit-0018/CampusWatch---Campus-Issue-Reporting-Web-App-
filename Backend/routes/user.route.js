const express = require("express");
const userRoute = express.Router();
const verifyJwt  = require("../middlewares/verifyJwt")


userRoute.route("/me").get(verifyJwt,(req,res) => {
  return  res.json({
        message : "Server Responded",
        user : req.user
    })
})

userRoute.route("/logout").get((req,res) => {
  res.clearCookie('token' , {
    httpOnly: true,
    sameSite: "lax",
    secure: false, 
  })
   res.json({ message: "Logged out successfully" });
})

module.exports = userRoute;