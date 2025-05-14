const jwt = require("jsonwebtoken");

const generateJwt = (email) => {

const jwtToken = jwt.sign({email} , process.env.JWT_SECRET , {expiresIn : "7d"});
return jwtToken

}




module.exports = {generateJwt}