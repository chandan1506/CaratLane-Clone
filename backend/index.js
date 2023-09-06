// express
const express=require("express")
const app=express()
app.use(express.json())
// connection
const {connection}=require("./config/db")
// dotenv
require("dotenv").config

// for user
const{userrouter}=require("./routees/userrouter")
app.use("/users",userrouter)
const {userrender}=require("./routees/userrenderrouter")
app.use("/usersrender", userrender)

// for admin
const {adminRouter}=require("./routees/admin.router")
app.use("/admin",adminRouter)
const{adminproduct}=require("./routees/adminproduct.router")
app.use("/adminproducts",adminproduct)
// for payment 
const { paymentRouter} = require("./routees/payment.router")
app.use("/payment",paymentRouter)

// authentication middleware
const{authentication}=require("./middlewares/authenticationmiddleware")

// cors
const cors = require('cors')
app.use(cors({
    origin:"*"
}))
// jwt
const jwt = require("jsonwebtoken")

// HomePage routes
app.get("/",(req,res)=>
{
    res.send({"message":"welcome to HOME PAGE"})
})

// google Oauth
const passport = require("./config/google-Oauth")
app.get('/auth/google',
    passport.authenticate('google', { scope: ['profile', 'email'] }));

app.get('/auth/google/callback',
    passport.authenticate('google', {
        failureRedirect: 'https://jewels-frontend-4s.vercel.app/html/login_signup.html',
        session: false
    }),
    function (req, res) {
        // Successful authentication, redirect home.

        const token = jwt.sign({ userID: req.user._id, name: req.user.name }, process.env.key)

        res.redirect(`https://jewels-frontend-4s.vercel.app?name=${req.user.name}&token=${token}`)
    });


// routes
const {userCartrouter}=require("./routees/usercartrouter")
const {userwishlistrouter}=require("./routees/userwishlistrouter")    
app.use(authentication)
app.use("/cart",userCartrouter)
app.use("/wishlist",userwishlistrouter)

// establishing server connection
app.listen(process.env.port, async()=>
{
    try {
        await connection
        console.log("connected to data base")
    } catch (error) {
        console.log(error)
    }
console.log(`server is running at port ${process.env.port}`)
})