import express, { Response, NextFunction, Request } from "express";
import client from "prom-client";
import { requestCountMiddleware } from "./metrics/requestCount";

const app = express();

// Shitty way to handle metrics
// function middleware(req: Request, res: Response, next: NextFunction) {
//   const startTime = Date.now();
//   next();
//   const endTime = Date.now();
//   console.log("It took", endTime - startTime, "ms");
// }

app.use(requestCountMiddleware);

app.get("/metrics", async (req, res) => {
  const metrics = await client.register.metrics();
  res.set("Content-Type", client.register.contentType);
  res.end(metrics);
});

app.get("/user", (req, res) => {
  res.json({
    name: "Ritesh"
  });
});

app.post("/user", (req, res) => {
  res.json({
    name: "Ritesh"
  });
});

app.listen(3000, () => console.log("Server listening at 3000"));
