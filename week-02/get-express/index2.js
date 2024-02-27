const express = require("express");

const app = express();
app.use(express.json());

const users = [{
    name: "Ritesh",
    kidneys: [{
        healthy: false
    }]
}];

// Simple get endpoint
app.get("/", function(req, res){
    const johnKidneys = users[0].kidneys;
    const numberOfKidneys = johnKidneys.length;
    let numberOfHealthyKidneys = 0;
    for (let i = 0; i < johnKidneys.length; i++) {
        if(johnKidneys[i].healthy){
            numberOfHealthyKidneys += 1;
        }
        
    }
    const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
    res.json({
        johnKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys,
    });
});

// Simple post endpoint
// Does not work without express.json() middleware
app.post("/transfer", function(req, res){
    const isHealthy = req.body.isHealthy; 
    users[0].kidneys.push({
        healthy: isHealthy,
    });
    res.json({
        msg: "Done!",
    });
});

// Edit data of kidney-health using POST
app.put("/clean", function(req, res){
    for(let i = 0; i < users[0].kidneys.length; i++){
        users[0].kidneys[i].healthy = true; // Making all kidneys healthy
    }
    res.json({
        msg: "Kidneys cleaned up"
    });
});

// Function to remove unHealthy Kidneys
// DELETE request
app.delete("/remove", function(req, res){
    // Store the good ones in separate and override existing array completely
    // You should return 411 in case there are no unhealthy kidneys
    let atleastOneUnhealthyKidney = false;
    for(let i = 0; i < users[0].kidneys.length; i++){
        if(users[0].kidneys[i].healthy == false){
            atleastOneUnhealthyKidney = true;
            break;
        }
    }
    if(!atleastOneUnhealthyKidney){
        res.json({
            msg: "No unhealthy kidneys",
        })
        return;
    }
    const newKidneys = [];
    for(let i = 0; i < users[0].kidneys.length; i++){
        if(users[0].kidneys[i].healthy){
            newKidneys.push({
                healthy: true,
            });
        }
    }
    users[0].kidneys = newKidneys;
    res.json({
        msg: "Unhealthy kidneys removed",
    });
});

// If you wish to simulate POST using GET then you can send a bunch of data 
// in the form of query parameters and then use them to trigger functions
app.listen(8000);
