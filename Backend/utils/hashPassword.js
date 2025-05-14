const bcrypt = require("bcrypt");

const hashPassword = async (pass) => {

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(pass , saltRounds)
    return hashedPassword

}

const comparePassword = async(pass, hashed) =>{
    
const comparisonResult = await bcrypt.compare(pass , hashed);

return comparisonResult

}


module.exports = {hashPassword, comparePassword}