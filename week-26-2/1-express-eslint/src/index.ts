import express from "express";

const app = express();

// Silencing ESlint errors
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const x = 1;

app.get("/", (req, res) => {
  res.json({
    message: "Hi there"
  });
});

app.listen(8080);
