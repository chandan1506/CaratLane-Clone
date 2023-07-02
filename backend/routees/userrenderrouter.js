const express=require("express")
const { Createproductmodel } = require("../models/product.model")

const userrender=express.Router()



userrender.get("/products",async(req,res)=>
{
    let data=req.query
    // console.log(data)
    try {
        const products=await Createproductmodel.find(data)
        res.send(products)
    } catch (error) {
        res.send("CANNOT GET ALL PRODUCT DATA")
    }
  
})

userrender.get("/productbyid/:id",async(req,res)=>
{
    let id=req.params.id
    try {
        const product=await Createproductmodel.findOne({_id:id})
        res.send(product)
    } catch (error) {
        res.send("cannot get data")
    }
})

userrender.get("/filterbyprice",async(req,res)=>
{
    // let data=req.query
    let type=req.query.type
    let filter=+req.query.filter
    // console.log(filter)
    if(filter==20000)
    {
        try {
            // db.assignment.find({$and:[{age:{$lt:50}},{native:"United States"}]})
            const filterdproducts=await Createproductmodel.find({$and:[{$and:[{price:{$gt:0}},{price:{$lte:filter}}]},{type:type}]})
            res.send(filterdproducts)
        } catch (error) {
            res.send({message:"cannot filter data from 0-10000"})
        }

    }
    else if(filter===40000)
    {
        try {
            // db.assignment.find({$and:[{age:{$lt:50}},{native:"United States"}]})
            const filterdproducts=await Createproductmodel.find({$and:[{$and:[{price:{$gt:20000}},{price:{$lte:filter}}]},{type:type}]})
            res.send(filterdproducts)
        } catch (error) {
            res.send({message:"cannot filter data from 0-10000"})
        }
    }
    else if(filter===60000)
    {
        try {
            
            const filterdproducts=await Createproductmodel.find({$and:[{$and:[{price:{$gt:40000}},{price:{$lte:filter}}]},{type:type}]})
            res.send(filterdproducts)
        } catch (error) {
            res.send({message:"cannot filter data from 0-10000"})
        }
    }

    else if(filter===80000)
    {
        try {
            
            const filterdproducts=await Createproductmodel.find({$and:[{$and:[{price:{$gt:60000}},{price:{$lte:filter}}]},{type:type}]})
            res.send(filterdproducts)
        } catch (error) {
            res.send({message:"cannot filter data from 0-10000"})
        }
    }
   
    else if(filter===120000)
    {
        try {
            
            const filterdproducts=await Createproductmodel.find({$and:[{$and:[{price:{$gt:80000}},{price:{$lte:filter}}]},{type:type}]})
            res.send(filterdproducts)
        } catch (error) {
            res.send({message:"cannot filter data from 0-10000"})
        }
    }
    else if(filter===200000)
    {
        try {
            
            const filterdproducts=await Createproductmodel.find({$and:[{$and:[{price:{$gt:120000}},{price:{$lte:filter}}]},{type:type}]})
            res.send(filterdproducts)
        } catch (error) {
            res.send({message:"cannot filter data from 0-10000"})
        }
    }
    else if(filter===20)
    {
        try {
            
            const filterdproducts=await Createproductmodel.find({$and:[{price:{$gt:200000}},{type:type}]})
            res.send(filterdproducts)
        } catch (error) {
            res.send({message:"cannot filter data from 0-10000"})
        }
    }
    
    else if(filter===1)
    {
        try {
            
            const filterdproducts=await Createproductmodel.find({type:type})
            res.send(filterdproducts)
        } catch (error) {
            res.send({message:"cannot filter data from 0-10000"})
        }
    }
  
})



// Filtering by product type


userrender.get("/filterbytype",async(req,res)=>
{
    let type=req.query
    // console.log(type)

    if(type["type"]=="all")
    {
        try {
            const data= await Createproductmodel.find()
                res.send(data)
            } catch (error) {
                res.send({'message':"cannot display all data using filteryby data"})
            }
            
    }
    else{

        try {
            const data=    await Createproductmodel.find(type)
                res.send(data)
            } catch (error) {
                res.send({'message':"cannot display all data using filteryby data"})
            }
    }
    
    
       
    

   
})



// sorting data

userrender.get("/sorting",async(req,res)=>
{   const query=req.query

    console.log(query)
    let type=query.type
    sorting=query.sort

    if(sorting=="asc"){
        try {
            const data=await Createproductmodel.find({type:type}).sort({price:1})
            res.send(data)
        } catch (error) {
            
        }
    }
    else{
        try {
            const data=await Createproductmodel.find({type:type}).sort({price:-1})
            res.send(data)
        } catch (error) {
            
        }
    }
    
    
})

module.exports={
    userrender
}


