const express = require("express");
const mongoose = require("mongoose");

// JWT secret
const app = express();
app.use(express.json());

// connecting to database
mongoose.connect("mongodb://localhost:27017/test");

// describe the model (basically what should the table/collection look like)
const User = mongoose.model("User", {
  name: String,
  username: String,
  password: String,
});

app.post("/signup", async function (req, res) {
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;
    // CRUD - Create, Read, Update, Delete
    const existingUser = await User.findOne({ username: username });
    if(existingUser){
        return res.status(400).send("Username already exists");
    };
    
    const user = new User({
    name: name,
    username: username,
    password: password,
  });

    user.save();
    res.status(200).json({
        message: "User created successfully!"
    })

});

app.listen(3000);

// const app = express();
// app.use(express.json());
//
// function userExists(username, password){
//     // should check the database whether the function exists or not
// }
//
// app.post("/signin", async function(req, res){
//     const username = req.body.username;
//     const password = req.body.password;
//
//     if(!userExists(username, password)){
//         return res.status(403).json({});
//     }
//     // generate the token and send it back
//     const token = jwt.sign(username, jwtPassword);
//     res.status(200).json({
//         token,
//     });
// });
//
// app.listen(3000);
