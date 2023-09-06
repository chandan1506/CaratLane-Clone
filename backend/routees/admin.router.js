// creating router
const express = require("express")
const adminRouter = express.Router()
// importing model
const {Adminmodel} = require("../models/admin.model")
// dotenv
require('dotenv').config()
// bcrypt
const bcrypt = require("bcrypt");
// jwt
var jwt = require('jsonwebtoken');


// admin signup
adminRouter.post("/signup", async (req, res) => {
    const { name, password, email } = req.body;
  
    const user = await Adminmodel.find({ email });
    // console.log(user)
    if (user.length > 0) {
      res.send({"message":"Already an admin please login"});
    } else {
      try {
        bcrypt.hash(password, 5, async(err, hash) => {
          // Store hash in your password DB.
          if(err){
              console.log(err)
            
          }
          else{
            const new_user = new Adminmodel({
              name,
              email,
              password: hash,
            });
           await new_user.save();
            res.send({"message":"Admin Registered"});
          }
         
        });
      } catch (error) {
        console.log(error.message);
        res.send({"message":"Something went wrong please try again"});
      }
    }
  });

  // admin login
adminRouter.post("/login", async (req, res) => {
    const { email, password } = req.body;
     //console.log(email)
    try {
      const user = await Adminmodel.find({ email });
       console.log(user)
      if (user.length > 0) {
        console.log(user[0].name)
        bcrypt.compare(password, user[0].password, (err, result) => {
          console.log(result)
          if (result) {
            
            const adminToken=jwt.sign({user:"ck"}, process.env.key)
            //console.log(adminToken)
            res.json({ "message": "login sucessfull","adminToken":adminToken });
          } else {
            res.json({"message":"wrong Credentials"});
          }
        });
      } else {
        res.json({"message":"cannot login"});
      }
    } catch (error) {
      res.json(error);
    }
  });


  // exporting
module.exports = {adminRouter} 