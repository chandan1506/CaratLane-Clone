var jwt = require('jsonwebtoken');
require('dotenv').config()

const authentication=(req,res,next)=>
{
    const token =req.headers.authorization
    if(token)
    {
        const verified_token=jwt.verify(token,process.env.key)

        if(verified_token)
        {
            const userID=verified_token.userID
            req.body.userID=userID
            next()
        }
        else{
            res.send("please login first")
        }
    }
    else{
        res.send("please login")
    }
}


module.exports={
    authentication
}