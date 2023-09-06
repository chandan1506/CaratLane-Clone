// mongoose
const mongoose=require("mongoose")
// dotenv
require('dotenv').config()
mongoose.set('strictQuery', false)

// connection
const connection =mongoose.connect(process.env.mongourl)

// exporting
module.exports={
    connection
}