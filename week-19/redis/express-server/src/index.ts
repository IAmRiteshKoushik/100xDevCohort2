import express from "express";
import { createClient } from "redis";

const app = express();
app.use(express.json());

// Redis client
const client = createClient();
client.on("error", (err) => console.log("Redis Client Error", err));

// Redis server
async function startServer() {
    try {
        await client.connect();
        console.log("Connected to Redis");
        app.listen(3000, () => {
            console.log("Server is running on port 3000");
        });
    } catch (err){
        console.error("Failed to connect to Redis", err);
    }
}

app.post("/submit", async(req, res) => {
    const { problemId, userId, code, language } = req.body;
    // push this to a database
    try {
        await client.lPush("submissions", JSON.stringify({problemId, userId, code, language}));
        res.json({
            message: "Submission Received",
        });
    } catch (err) {
        res.status(500).json({
            message: "Could not process your request"
        })
    }
});


// Start the actual server only if redis is connected successfully
startServer();
