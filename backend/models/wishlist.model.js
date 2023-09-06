// mongoose
const mongoose=require("mongoose")

// Defining Schema
const createwishlistSchema=mongoose.Schema({
   
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
const Createwishlistmodel=mongoose.model("wishlist",createwishlistSchema)

// exporting
module.exports={
    Createwishlistmodel
}