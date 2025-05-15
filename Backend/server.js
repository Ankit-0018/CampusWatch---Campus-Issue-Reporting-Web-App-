const express = require("express");
const cors = require('cors');
const app = express();
const db = require("./config/db")
const router = require("./routes/auth.route")
const userRoute = require("./routes/user.route")
app.use(cors());

app.use(express.json());

app.use("/auth/api" , router)
app.use("/api" , userRoute)


app.listen("3000" , () => {
    console.log("Server Started")
})
