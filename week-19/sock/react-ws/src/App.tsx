import { useEffect, useState } from 'react'
import './App.css'

function App() {

    // WebSocket is itself a type
    const [socket, setSocket] = useState<WebSocket | null>(null);
    const [msgs, setMsgs] = useState("");

    useEffect(() => {

        // Native - WebSocketAPI
        const socket = new WebSocket("ws://localhost:8080");
        socket.onopen = () => {
            console.log("Connected");
            setSocket(socket)
        }
        socket.onmessage = (message) => {
            console.log("Received message", message.data)
            setMsgs(message.data);
        }


        // Cleanup after the use-effect is done being used
        return () => socket.close();
    }, []);

    if (!socket){
        // User should see a loader until the socket connected
        return <div>Connecting to socket server ...</div>
    }
    return(
        <div>
            <button onClick={() => socket.send("Hello India")}>Click Me</button>
            {msgs}
        </div>
    );
}

export default App
