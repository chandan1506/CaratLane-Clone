require('dotenv').config()
const passport = require("passport")
const { v4: uuidv4 } = require('uuid');
const { Createusermodel } = require("../models/user.model")

const GoogleStrategy = require('passport-google-oauth2').Strategy;

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "https://angry-turtleneck-lamb.cyclic.app/auth/google/callback"
  },
 async  function(accessToken, refreshToken, profile, cb) {
    //  console.log(profile)
    let email = profile._json.email
    let name = profile._json.name
   // checking user in database is available or not 
    let x = await Createusermodel.findOne({email});
    if(x){
      return cb(null, x);
    }
   const user = new Createusermodel({
    name,
    email,
    password: uuidv4()
   })
   await user.save();
    return cb(null, user);
  }
  
));

module.exports = passport;