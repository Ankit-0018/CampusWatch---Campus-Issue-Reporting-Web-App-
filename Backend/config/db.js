require("dotenv").config();
const myDatabase = require("mysql2")

const connection = myDatabase.createConnection({
      host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
})

connection.connect((err) => {
if(err){
    console.log("Database Connection failed!" , err);
    return
}
console.log("Database Connected Successfully")
});



module.exports = connection;