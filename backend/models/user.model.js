const mongoose=require("mongoose")



CreateSchema=mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
   
})


Createusermodel=mongoose.model("user",CreateSchema)

module.exports={
    Createusermodel
}