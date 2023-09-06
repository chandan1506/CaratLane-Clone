// mongoose
const mongoose=require("mongoose")

// Defining Schema
const createproductSchema=mongoose.Schema({
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
    livecall:String
})

// Defining Model
const Createproductmodel=mongoose.model("products",createproductSchema)

// exporting
module.exports={
    Createproductmodel
}