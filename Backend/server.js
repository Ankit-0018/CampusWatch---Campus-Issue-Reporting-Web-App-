const express = require("express");
const cors = require('cors');
const app = express();
const db = require("./config/db")
app.use(cors());

app.use(express.json());
app.post("/auth/register", (req, res) => {
  const { fullname, email, confirmPassword, gender, department, role, phone } = req.body;

  const query = `
    INSERT INTO users 
    (fullname, email, password, gender, department, role, phone) 
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;

  const values = [fullname, email, confirmPassword, gender, department, role, phone];

  db.query(query, values, (err, result) => {
    if (err) {
      console.error("Error Inserting Data:", err);
      return res.status(500).json({ message: "Database Error", error: err });
    }

    res.status(201).json({ message: "User registered successfully", userId: result.insertId });
  });
});

app.listen("3000" , () => {
    console.log("Server Started")
})
