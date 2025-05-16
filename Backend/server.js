const express = require("express");
const cors = require('cors');
const cookieParser = require('cookie-parser');
const app = express();
const db = require("./config/db")
const router = require("./routes/auth.route")
const userRoute = require("./routes/user.route")
const issueRoute = require("./routes/issue.route")
app.use(cors({
    origin : 'http://localhost:5173',
    credentials : true
}));
app.use(express.json());
app.use(cookieParser());

app.use("/auth/api" , router)
app.use("/api" , userRoute)
app.use("/api" , issueRoute)


app.listen("3000" , () => {
    console.log("Server Started")
})
