const express = require("express");
const issueRoute = express.Router();
const issueDetails = require("../controllers/issueDetails")


issueRoute.route("/issues" ).get(issueDetails);

module.exports = issueRoute