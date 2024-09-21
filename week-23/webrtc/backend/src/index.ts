import WebSocket, { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

let senderSocket: null | WebSocket = null;
let receiverSocket: null | WebSocket = null;

wss.on("connection", (ws) => {
  console.log("Client connected");
  ws.on("error", console.error);
  ws.on("message", (data: any) => {
    const message = JSON.parse(data);
    if (message.type === "sender") {
      senderSocket = ws;
    } else if (message.type === "receiver") {

    } else if (message.type == "createOffer") {
      if (ws !== senderSocket) return;
      receiverSocket!.send(JSON.stringify({
        type: "createOffer",
        sdp: message.sdp,
      }));
    } else if (message.type === "iceCandidate") {
      if (ws === senderSocket) {
        receiverSocket!.send(JSON.stringify({
          type: "iceCandidate",
          candidate: message.candidate
        }));
      } else if (ws === receiverSocket) {
        senderSocket!.send(JSON.stringify({
          type: "iceCandidate",
          candidate: message.candidate
        }));
      }
    }
  });
});
