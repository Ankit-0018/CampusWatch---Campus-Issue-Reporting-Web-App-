const {getDB} = require("../config/db")
const {hashPassword , comparePassword} = require("../utils/hashPassword")

const authRegister = async (req,res) => {

const { fullname, email, confirmPassword, gender, department, role, phone } = req.body;

if(!fullname || !email || !gender || !department || !confirmPassword || !role || !phone){
    return res.status(400).json({
        success : false,
        message : "All fields are required !"
    })
}
try {
      const db = await getDB();
const [rows] = await db.execute('select * from users where email = ? or phone= ?' , [email,phone]);

if(rows.length > 0){
    return res.json({
        message : "User Already Exists",
        success : false
    })
}

const hashedPassword = await hashPassword(confirmPassword);

await db.execute('insert into users (fullname, email, password, gender, department, role, phone ) values (?,?,?,?,?,?,?)' , [fullname , email , hashedPassword , gender, department , role , phone]);

return res.status(201).json({
    message : "User Registered Successfully",
    success : true
})

} catch (error) {
    console.log("Error During Inserting Data" ,error)
    return res.status(500).json({
        message : "Server Error : Please Try again Later",
        success : false
    })
}


}



module.exports = authRegister;  