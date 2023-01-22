const mongoose=require("mongoose")

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


const Createwishlistmodel=mongoose.model("wishlist",createwishlistSchema)


module.exports={
    Createwishlistmodel
}