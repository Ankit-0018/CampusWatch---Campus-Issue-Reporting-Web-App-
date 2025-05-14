require("dotenv").config();
const mysql = require("mysql2/promise");

let db;

(async () => {
  try {
    db = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD, 
      database: process.env.DB_NAME,
    });

    console.log("✅ Database connected successfully");
  } catch (err) {
    console.error("❌ Database connection failed:", err);
    process.exit(1); 
  }
})();

module.exports = {
  getDB: async () => {
    
    if (!db) {
      console.error("❌ Database not initialized yet!");
      return null;
    }
    return db;
  },
};
