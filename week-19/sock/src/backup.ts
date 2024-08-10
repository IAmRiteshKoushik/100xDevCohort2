import WebSocket, { WebSocketServer } from "ws";
import http from "http";

// Under the hood you are creating an HTTP server which is responds to 
// protocol upgradation. If you have requested for web socket protocol then 
// an upgrade is made to change the protocol to websockets so that duplex 
// connection will be supported

// -- Any time an HTTP request comes, send back a response -> "Hi There"
const server = http.createServer(function(request: any, response: any){
    console.log((new Date()) + " Received request for " + request.url);
    response.end("Hi There");
});

// Create a websocket server (this remains same)
const wss = new WebSocketServer({ server });

wss.on("connection", function connection(socket){
    socket.on("error", console.error);

    socket.on("message", function message(data, isBinary){
        // Taking the message sent by on client and broadcasting
        // it to all other clients which are connected
        wss.clients.forEach(function each(client){
            if (client.readyState === WebSocket.OPEN){
                client.send(data, { binary: isBinary });
            }
        });
    });

    // As soon as the user connects, send them a "pong"
    socket.send("Hello! Message from WS Server");
});

server.listen(8080, function() {
    console.log((new Date()) + " Server is listening on port 8080");
});
