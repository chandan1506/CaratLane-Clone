const mongoose=require("mongoose")

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


const Createcartmodel=mongoose.model("cart",createcartSchema)


module.exports={
    Createcartmodel
}