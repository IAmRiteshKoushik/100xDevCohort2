const express = require("express");

const app = express();

// Middleware handling JSON inputs in the body of requests
app.use(express.json());

app.post("/health-checkup", function (req, res) {
  const kidneys = req.body.kidneys;
  if (!kidneys) {
    res.json({
      msg: "Wrong inputs",
    });
  } else {
    const kidneyLength = kidneys.length;
    res.send("You have " + kidneyLength + "kidneys");
  }
});

// global catches - A middleware that you put to the end
// Anytime there is an exception by other routes or middleware, this gets used 
app.use(function(err, req, res, next){
    res.json({
        msg: "Sorry something is up with our server",
    });
    // response to user with 403 error and details
});

app.listen(3000);
