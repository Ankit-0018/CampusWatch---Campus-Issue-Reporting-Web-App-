const {getDB} = require("../config/db");
const {comparePassword} = require("../utils/hashPassword")
const {generateJwt} = require("../utils/jwt")

const authLogin = async (req, res) => {

    const {email , password} = req.body;
    if(!email || !password){
        return res.status(400).json({
            message : "All fields are required",
            success : false
        })
    }

    const db = await getDB()
const [rows] = await db.execute('select * from users where email = ?' , [email]);

if(rows.length<1){
    return res.status(409).json({
        message : "User do not Exist",
        success : false
    })
}
  const user = rows[0];
  console.log(user)

 const isMatched = await comparePassword(password, user.password);


if(!isMatched){
    return res.status(401).json({
        message : "Incorrect Password",
        success : false
    })

}

const token = generateJwt(user)
  return res.cookie("token", token, {
  httpOnly: true,
  secure: false, 
  sameSite: "lax", 
  maxAge: 24 * 60 * 60 * 1000, 
})}

module.exports = authLogin;