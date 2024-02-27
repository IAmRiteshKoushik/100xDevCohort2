const { captureRejectionSymbol } = require('events');
const express = require('express');

// function calculateSum(n){
//     let ans = 0;
//     for (let i = 0; i < n; i++) {
//         ans = ans + i;        
//     }
//     return ans;
// }

const app = express();

app.get("/", function(req, res){

})

// app.get("/query", function(req, res){
//     const n = req.query.n; // if query parameter exist, then catch it
//     const ans = calculateSum(n);
//     res.send(ans.toString()); // Do not send numbers, statusCode clash
// });

app.listen(3000, () => console.log("Listening on PORT: 3000"));
