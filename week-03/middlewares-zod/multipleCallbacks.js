const express = require("express");

const app = express();
app.use(express.json()); // is a middleware function that is used to parse JSON
// data sent in the request body. If allows your Express app to handle JSON 
// encoded data.

// Chaining of functions 
app.get("/health-checkup", function(req, res, next){
    console.log("Hi from req1");
    next(); // routes  the request to the next one (express chaining)
}, function (req, res, next) {
    console.log("Hi from req2") ;
    next();
}, function(req, res){
        console.log("Hi from last");
});

// Say you are calling res.send() in one of these functions
// you cannot call it again because an HTTP request is not 
// prepared to handle 2 responses.

// next() can take in inputs as well as produce outputs 
// if you need to pass data from one middleware to 
// another middleware

app.listen(3000);
