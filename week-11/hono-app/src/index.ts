import { Hono } from 'hono'
import { Client } from "@neondatabase/serverless";

const app = new Hono()

// Middleware deployment
// app.use(async (c, next) => {
//   if (c.req.header("Authorization")) {
//     await next()
//   } else {
//     return c.text("You do not have access")
//   }
// });

// Routes
app.get("/api/1", async (c) => {
  return c.json({
    message: "Route hit 1",
  });
});

app.get("/api/2", async (c) => {
  return c.json({
    message: "Route hit 2",
  });
});

app.get("/neon", async (c) => {
  const client = new Client(c.env.DATABASE_URL);
  await client.connect();
  const { rows } = await client.query("SELECT * FROM elements");
  await client.end();

  return c.json(rows);
});

export default app
