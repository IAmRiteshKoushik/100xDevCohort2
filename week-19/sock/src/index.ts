import express from "express";
import { WebSocketServer } from "ws";

const app = express();
const server = app.listen(8080, () => console.log("Yo! I am listening on 8080"));

app.get("/", (req, res) => {
    res.send("Hello World");
});

// For express applications you need to allocate the listen component a 
// variable space and then send it back as a server is created only when we 
// listen inside the express() framework as opposed to creating it directly 
// using httpServer from the http package
const wss = new WebSocketServer({ server });

wss.on("connection", (socket) => {
    // Response on a successful connection
    socket.send("Hello! You have connected to Express-WebSocket Server");

    // All error handling is done here
    socket.on("error", console.error);

    // All communication is done here.
    socket.on("message", (data, isBinary) => {
        console.log("Received: %s", data);
    })
});

