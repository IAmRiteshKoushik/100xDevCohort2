const express = require("express");
const zod = require("zod");


const app = express();
app.use(express.json());

const kidneyInput = zod.literal("1").or(z.literal("2"));

const schema = zod.object({
    email: zod.string(),
    password: z.string(),
    country: z.literal('IN').or(z.literal("US")),
    kidneys: z.array(z.number()),
});

app.post("/health-checkup", function(req, res){
    const kidneyId = req.body.kidneyId;
    const validation = kidneyInput.safeParse(kidneyInput);
    // parse throws a zodError
    // safeParse does not throw a zodError but returns a object
    if(!validation.success){
        res.send("Incorrect input");
        return;
    }
    res.send("Your kidney id is " + kidneyId);
});

app.listen(3000);
