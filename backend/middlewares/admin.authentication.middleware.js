// jwt
var jwt = require('jsonwebtoken');
// dotenv
require('dotenv').config()

// admin authentication middleware
const admin_authentication=(req,res,next)=>
{
    const adminToken =req.headers.authorization
    //console.log(adminToken)
    if(adminToken)
    {
        const verified_token=jwt.verify(adminToken,process.env.key)

        if(verified_token){
            next()
        }
        else{
            res.json("please login first")
        }
    }
    else{
        res.json("please login first")
    }
}

// exporting
module.exports={
    admin_authentication
}