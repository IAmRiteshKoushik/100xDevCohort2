import { NextRequest } from "next/server";

export function GET() {
    // database logic
    return Response.json({
        email: "riteshkoushik39@gmail.com",
        name: "Ritesh"
    });
}

export async function POST(req: NextRequest){
    // extract the body
    const body = await req.json();
    // store the body in the DB
    console.log(body);

    return Response.json({
        message: "You are logged in"
    });
}
