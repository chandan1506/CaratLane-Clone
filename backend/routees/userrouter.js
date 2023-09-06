// creating router
const express = require("express");
const userrouter = express.Router();
// bcrypt
const bcrypt = require("bcrypt");
// jwt
var jwt = require('jsonwebtoken');
// dotenv
require('dotenv').config()
// importing model
const { Createusermodel } = require("../models/user.model");


// user signup
userrouter.post("/signup", async (req, res) => {
  const { name, password, email } = req.body;

  const user = await Createusermodel.find({ email });
  // console.log(user)
  if (user.length > 0) {
    res.send({"message":"Already an user please login"});
  } else {
    try {
      bcrypt.hash(password, 5, async(err, hash) => {
        // Store hash in your password DB.
        if(err){
            console.log(err)
          
        }
        else{
          const new_user = new Createusermodel({
            name,
            email,
            password: hash,
          });
         await new_user.save();
          res.send({"message":"User Registered"});
        }
       
      });
    } catch (error) {
      console.log(error.message);
      res.send({"message":"Something went wrong please try again"});
    }
  }
});

// user login
userrouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  // console.log(email)
  try {
    const user = await Createusermodel.find({ email });
    // console.log(user)
    if (user.length > 0) {
      bcrypt.compare(password, user[0].password, (err, result) => {
        if (result) {
          const token=jwt.sign({userID:user[0]._id}, process.env.key)
          res.send({ "message": "login sucessfull","token":token });
        } else {
          res.send({"message":"wrong Credentials"});
        }
      });
    } else {
      res.send({"message":"cannot login"});
    }
  } catch (error) {
    res.send(error);
  }
});


// exporting
module.exports = {
  userrouter
};
