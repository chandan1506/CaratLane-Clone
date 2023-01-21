//----------expresss............//
const express=require("express")
const app=express()
app.use(express.json())

//-------connection----------//
const {connection}=require("./config/db")
require("dotenv").config

//----------router---------//
const{userrouter}=require("./routes/userrouter")
const{adminproduct}=require("./routes/adminproduct.router")
const {adminRouter} = require("./routes/admin.router")

//------------middleware-----//
 const{authentication}=require("./middlewares/authenticationmiddleware")

//-----------cors-----------//
const cors = require('cors')
app.use(cors({
    origin:"*"
}))


app.get("/",(req,res)=>
{
    res.send("welcome to home page")
})

app.use("/admin",adminRouter)
app.use("/adminproducts",adminproduct)
 
app.use("/users",userrouter)
 app.use(authentication)





app.listen(process.env.port, async()=>
{
    try {
        await connection
        console.log("connected to DB")
    } catch (error) {
        console.log(error)
    }
console.log(`server is running at port ${process.env.port}`)
})