const mongoose=require("mongoose")

const createproductSchema=mongoose.Schema({
    image:String,
    name:String,
    type:String,
    seller:String,
    price:Number,
    actualprice:Number,
    quantity:Number,
    arrival:String,
    image2:String,
    Book:String,
    livecall:String
})


const Createproductmodel=mongoose.model("products",createproductSchema)


module.exports={
    Createproductmodel
}