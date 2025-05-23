const jwt = require("jsonwebtoken")

const verifyJwt = (req,res,next) => {
     const token = req.cookies.token;

   if (!token) return res.status(401).json({ message: "Unauthorized" });
 

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next() 
  } catch (error) {
    console.log(error)
    return res.status(403).json({ message: "Invalid or expired token" });
  }
}

module.exports = verifyJwt