const {getDB} = require("../config/db")

const issueDetails =async (req,res) => {
try {
    
        const db = await getDB()
        const [rows] = await db.query('select * from issues')
    
        if(rows.length < 1){
            return res.status(200).json({
                message : "No Issue Found",
                success :true
            })
        }
    
        return res.status(200).json({
            message : "Issue fetched Successfully",
            success : true,
            issues : rows
        })
} catch (error) {
    if(error){
        return res.status(500).json({
            message : "Server Issue : Error fetching Issues",
            success : false
        })
    }

}


}

module.exports = issueDetails;