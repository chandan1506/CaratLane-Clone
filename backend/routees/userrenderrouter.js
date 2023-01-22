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








// find({$and:[{price:{$gt:0}},{price:{$lt:100000}}]}) correct one

// {$and:[{price:{$gt:0}},{price:{$lt:100000}}]}

// {$and:[{$and:[{price:{$gt:0}},{price:{$lt:100000}}]},{type:"earing"}]}
// Want the data whose health is in between 40 and 60 ⇒ db.heroes.find({$and:
// [{health:{$gt:40}}, {health:{$lt:60}}]}).pretty()


// adminproduct.post("/create",async(req,res)=>
// {
//     payload=req.body
//     // console.log(payload)

//     try {
//         const newproduct=new Createproductmodel(payload)
//         await newproduct.save()
        
//         res.send(' new products added')
//     } catch (error) {
//         res.send("Cannot Create new Product")
//     }

   
// })


// adminproduct.patch("/update/:id", async(req,res)=>{
//     const ID=req.params.id
//     const payload=req.body
//     // console.log(ID)

//     try {
//         await Createproductmodel.findByIdAndUpdate({_id:ID},payload)
//         res.send({"message":`updated the data of ID:==>> ${ID}`})
//     } catch (error) {
//         res.send({"message":"cannot update the product"})
//     }
  
// })


// adminproduct.delete("/delete/:id", async(req,res)=>
// {
//     const ID=req.params.id
//     console.log(ID)

//     try {
//         await Createproductmodel.findByIdAndDelete({_id:ID})
//         res.send({"message":`deleted the item id ${ID}`})
//     } catch (error) {
//         res.send( {"message":"cannot delete "})
//     }
    
// })

module.exports={
    userrender
}


