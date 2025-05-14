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

const token = generateJwt(email)
  return res.status(200).json({
      message: "Login successful",
      success: true,
      token,
      user: {
        id: user.id,
        fullname: user.fullname,
        email: user.email,
        role: user.role,
        gender : user.gender,
        department : user.department,
        phone : user.phone,
        created_at : user.created_at,
        updated_at : user.updated_at
      },
    });


}

module.exports = authLogin;