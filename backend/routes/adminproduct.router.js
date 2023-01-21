const express=require("express")
const { Createproductmodel } = require("../models/product.model")
const adminproduct=express.Router()
//const {admin_authentication} = require("../middlewares/admin.authentication.middleware")


adminproduct.get("/products",async(req,res)=>
{
    try {
        const products=await Createproductmodel.find()
        res.send(products)
    } catch (error) {
        res.send("CANNOT GET ALL PRODUCT DATA")
    }
  
})

//  adminproduct.use(admin_authentication)

adminproduct.post("/create" ,async(req,res)=>
{
    payload=req.body
    // console.log(payload)

    try {
        const newproduct=new Createproductmodel(payload)
        await newproduct.save()
        
        res.send(' new products added')
    } catch (error) {
        res.send("Cannot Create new Product")
    }

   
})


adminproduct.patch("/update/:id", async(req,res)=>{
    const ID=req.params.id
    const payload=req.body
    // console.log(ID)

    try {
        await Createproductmodel.findByIdAndUpdate({_id:ID},payload)
        res.send({"message":`updated the data of ID:==>> ${ID}`})
    } catch (error) {
        res.send({"message":"cannot update the product"})
    }
  
})


adminproduct.delete("/delete/:id", async(req,res)=>
{
    const ID=req.params.id
    console.log(ID)

    try {
        await Createproductmodel.findByIdAndDelete({_id:ID})
        res.send({"message":`deleted the item id ${ID}`})
    } catch (error) {
        res.send( {"message":"cannot delete "})
    }
    
})

module.exports={
    adminproduct
}


