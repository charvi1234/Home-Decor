// var express = require("express");
// var app = express();
// var bodyParser = require("body-parser");

// app.use(bodyParser.json());
// var cartList =[{
//        productName:"none",
//       Quantity:0,
//        Price:0
//      },
//      {
//      productName:"none",
//      Quantity:0,
//       Price:0
//     }];


// app.get('/',(req,res) =>{
//     console.log("Root method called");
//     res.send("This is the dummy root method");
// })

// app.get('/getRecentCart',(req,res) => {
//     res.send(cartList);
// })

// app.post('/addNewProduct',(req,res) => {
//     //booksList.push(req);
//     var newCart = req.body;
//     console.log(req.body);
//     cartList.push(newCart);
//     console.log(cartList);
//     res.send(cartList);
// })

// app.listen(8000,() => {
//     console.log("I am listening at port 8000");
// });


// const express = require("express");
// const api = require('./routes/api');
// const app = express();

// const bodyParser = require("body-parser");


// app.use(express.static("./staticContent")); 

// app.get("/about", (req,res)=>{
//     res.sendFile(__dirname+"/about.component.html")
// })

// app.listen(3200, function() {
//     console.log("I am listening at port 3000");
// });


