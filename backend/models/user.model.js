// mongoose
const mongoose=require("mongoose")

// Defining Schema
CreateSchema=mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
   
})

// Defining Model
Createusermodel=mongoose.model("user",CreateSchema)


// exporting
module.exports={
    Createusermodel
}