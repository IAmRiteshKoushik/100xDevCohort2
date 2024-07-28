import express from "express";
import { z } from "zod";
import { prismaClient } from "./db";

const sumInput = z.object({
    a: z.number(),
    b: z.number(),
});

export const app = express();
app.use(express.json());

app.post("/sum", (req, res) => {
    const a = req.body.a;
    const b = req.body.b;
    const answer = a + b;

    res.status(200).json({
        answer
    });
});

// We are not going to start the server at some PORT for testing 
// purposes. We want the library to figure out the routes and make calls
// app.listen(3000, () => console.log("Server starting at PORT: 3000"));
// Starting the server here causes errors for the testing library. This is why 
// all server logic stays inside "app.js"

app.post("/v1/sum", async (req, res) => {
    const parsedResponse = sumInput.safeParse(req.body);
    if(!parsedResponse.success){
        return res.status(411).json({
            message: "Incorrect inputs"
        });
    }
    const answer = parsedResponse.data.a + parsedResponse.data.b;

    // We do not actually want to run this test. This should get mocked out.
    // Mocks are empty function calls. The reason why this should get mocked 
    // out 
    await prismaClient.sum.create({
        data: {
            a: 1, b: 2, result: 3 
        }
    });

    res.status(200).json({
        answer
    });
});

app.get("/v1/sum", (req, res) => {
    const parsedResponse = sumInput.safeParse({
        a: Number(req.headers["a"]),
        b: Number(req.headers["b"]),
    });
    if(!parsedResponse.success){
        return res.status(411).json({
            message: "Incorrect inputs"
        });
    }
    const answer = parsedResponse.data.a + parsedResponse.data.b;

    res.status(200).json({
        answer
    });
});
