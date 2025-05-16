const userDetails = (req,res) => {
  return  res.json({
        message : "Server Responded",
        user : req.user
    })
}

module.exports = userDetails;