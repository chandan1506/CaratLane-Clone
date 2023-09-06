// jwt
var jwt = require('jsonwebtoken');

// user authentication middleware
const authentication=(req,res,next)=>
{
    const token =req.headers.authorization
    console.log(token)
    if(token)
    {
        const verified_token=jwt.verify(token,"masai")
            console.log(verified_token)
        if(verified_token)
        {
            const userID=verified_token.userID
            console.log(userID)
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

// exporting

module.exports={
    authentication
}