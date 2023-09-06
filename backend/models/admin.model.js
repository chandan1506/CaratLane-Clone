// mongoose
const mongoose=require("mongoose")

// Defining Schema
const adminSchema=mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
   
})

// Defining Model
const Adminmodel=mongoose.model("admin",adminSchema)


// exporting
module.exports={
    Adminmodel
}