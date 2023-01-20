const mongoose=require("mongoose")



const adminSchema=mongoose.Schema({
    name:{type:String,required:true},
    contact :{type:Number,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
   
})


const Adminmodel=mongoose.model("admin",adminSchema)

module.exports={
    Adminmodel
}