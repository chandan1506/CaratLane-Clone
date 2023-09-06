// mongoose
const mongoose=require("mongoose")

// defining Schema
const createcartSchema=mongoose.Schema({
   
    image:String,
    name:String,
    type:String,
    seller:String,
    price:Number,
    actualprice:Number,
    quantity:Number,
    arrival:String,
    image1:String,
    Book:String,
    livecall:String,
    userID:String
})

// Defining Model
const Createcartmodel=mongoose.model("cart",createcartSchema)

// exporting
module.exports={
    Createcartmodel
}