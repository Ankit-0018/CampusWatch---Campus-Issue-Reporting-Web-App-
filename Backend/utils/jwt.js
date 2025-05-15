const jwt = require("jsonwebtoken");

const generateJwt = (user) => {

const jwtToken = jwt.sign({user} , process.env.JWT_SECRET , {expiresIn : "7d"});
return jwtToken

}




module.exports = {generateJwt}