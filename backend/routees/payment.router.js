// creating router
const paymentRouter = require("express").Router()
// importing dotenv
require('dotenv').config()
// importing axios
const axios = require("axios")


// fetching token for further authorization
paymentRouter.post("/fetch-token",(req,res)=>{
    const options = {
        method: 'post',
        url: 'https://uat.setu.co/api/v2/auth/token',
        data: req.body
      };
      
      axios.request(options).then(function (response) {
          res.json(response.data);
      }).catch(function (error) {
          res.json(error.message)
      });
})

 
// creating paymment link
paymentRouter.post("/create-link",(req,res)=>{
    const token = req.headers.authorization
     //console.log(token)

    const options = {
    method: 'post',
    url: 'https://uat.setu.co/api/v2/payment-links',
    headers: {
        'X-Setu-Product-Instance-ID': "1119458838777431893",
        Authorization : `${token}`
    },
    data:req.body
    };

    axios.request(options).then(function (response) {
        res.json(response.data);
    }).catch(function (error) {
        res.json(error);
    });
})


// setu triggering webhook notification after payment
paymentRouter.post("/notification",(req,res)=>{
    const token = req.headers.authorization
    
    const options = {
    method: 'post',
    url: 'https://webhook-url.com/notifications',
    headers: {Authorization: `${token}`},
    data: req.body
    };

    axios.request(options).then(function (response) {
        res.json(response.data);
    }).catch(function (error) {
        res.json(error);
    });
})


// checking payment status
paymentRouter.get("/status/:platformBillID",(req,res)=>{
    const token = req.headers.authorization
    const platformBillID = req.params.platformBillID

const options = {
  method: 'get',
  url: `https://uat.setu.co/api/v2/payment-links/${platformBillID}`,
  headers: {
    'X-Setu-Product-Instance-ID': "1119458838777431893",
    Authorization: `${token}`
  }
};

axios.request(options).then(function (response) {
	res.json(response.data);
}).catch(function (error) {
	res.json(error);
});
})


// Expiring of bill
paymentRouter.post("/status/:platformBillID/expire",(req,res)=>{
    const token = req.headers.authorization
    const platformBillID = req.params.platformBillID

    const options = {
    method: 'post',
    url: `https://uat.setu.co/api/v2/utilities/bills/${platformBillID}/expire`,
    headers: {
        'X-Setu-Product-Instance-ID': '1119458838777431893',
        Authorization: `${token}`
    }
};

    axios.request(options).then(function (response) {
        res.json(response.data);
    }).catch(function (error) {
        res.json(error);
    });
})


// initializing batch refund
paymentRouter.post("/refund/batch",(req,res)=>{
    const token = req.headers.authorization
     //console.log(token)

     const options = {
       method: 'post',
       url: 'https://uat.setu.co/api/v2/refund/batch',
       headers: {
         'X-Setu-Product-Instance-ID': '1119458838777431893',
         Authorization: `${token}`
       },
       data: req.body
     };
    
    axios.request(options).then(function (response) {
        res.json(response.data);
    }).catch(function (error) {
        res.json(error);
    });
})


// getting status of refund batch
paymentRouter.get("/refund/batch/:batchID",(req,res)=>{
    const token = req.headers.authorization
    const batchID = req.params.batchID

     const options = {
       method: 'get',
       url: `https://uat.setu.co/api/v2/refund/batch/${batchID}`,
       headers: {
         'X-Setu-Product-Instance-ID': '1119458838777431893',
         Authorization: `${token}`
       }
     };
    
    axios.request(options).then(function (response) {
        res.json(response.data);
    }).catch(function (error) {
        res.json(error);
    });
})


// getting status of specific refund
paymentRouter.get("/refund/:refundID",(req,res)=>{
    const token = req.headers.authorization
    const refundID = req.params.refundID

     const options = {
       method: 'get',
       url: `https://uat.setu.co/api/v2/refund/${refundID}`,
       headers: {
         'X-Setu-Product-Instance-ID': '1119458838777431893',
         Authorization: `${token}`
       }
     };
    
    axios.request(options).then(function (response) {
        res.json(response.data);
    }).catch(function (error) {
        res.json(error);
    });
})


// exporting paymentRouter
module.exports = { paymentRouter }