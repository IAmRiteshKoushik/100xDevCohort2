const express = require("express");

const app = express();

app.get("/health-checkup", function (req, res){

    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyId = req.query.kidneyId;

    // UGLY WAY 01
    // if(username === "ritesh" && password === "passwd"){
    //     if(kidneyId === 1 || kidneyId === 2){
    //         res.json({
    //             msg: "Your kidney is fine",
    //         });
    //     } else {
    //         res.json({
    //             msg: "Bad input",
    //         });
    //     }
    // }
    // res.status(400).json({
    //     msg: "Something is wrong with your inputs",
    // })
    //

    // UGLY WAY 02
    if(username != "ritesh" || password != "pass"){
        res.status(400).json({msg: "Someting is up with your inputs"});
        return;
    }
    if(kidneyId != 1 && kidneyId != 2){
        res.status(400).json({msg: "Somethings up with your inputs"});
        return;
    }
    
    // Do something with kidney here
    res.status(200).json({msg: "Your kidney is fine"});
});

app.listen(3000, () => console.log("Server started at PORT: 3000"));
