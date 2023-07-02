const express=require("express")
const {Createproductmodel}=require("../models/product.model")
const {Createcartmodel}=require("../models/cart.model")
const { application } = require("express")
userCartrouter=express.Router()

userCartrouter.get("/", async(req,res)=>
{
    const ID = req.body.userID;
    console.log("below is the user id")
    console.log(ID)
    try {
         let cart=await Createcartmodel.find({userID:ID})

         res.send(cart)
    } catch (error) {
        res.send({message:"cannot get cart items"})
    }

    
})


userCartrouter.post("/createcart", async(req,res)=>
 {
    let payload=req.body
    console.log(payload)
    try {
        let cart=await Createcartmodel.findOne(payload)
           if(cart){
            return  res.send({message:"This product is already in Cart"})
           }
        let newcart=new Createcartmodel(payload)
        await newcart.save()
        res.send({message:"Added to cart"})
    } catch (error) {
        res.send({message:"something went wrong"})
    }
    
 })


 userCartrouter.delete("/delete/:id", async (req, res) => {
    const ID = req.params.id;
    const cartitem=await Createcartmodel.findOne({_id:ID})
   console.log(cartitem.userID)
   console.log(req.body.userID)
    const cart_userID=cartitem.userID;
    const userID_jwt=req.body.userID
    try {
      if(userID_jwt===cart_userID){
          await Createcartmodel.findByIdAndDelete({ _id: ID });
          res.send({message:"Cart Item is Deleted"});
      }
      else{
          res.send({"message":"you are not authorized to delete"})
      }
      
    } catch (error) {
      res.send("cannot delete the cartitem");
    }
  });



module.exports={
    userCartrouter
}