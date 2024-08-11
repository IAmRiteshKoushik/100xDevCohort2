import { createClient } from "redis";

const client = createClient();

async function main(){
    await client.connect();
    while(true){
        // Blocking pop is better than pop unless you will get a bunch 
        const res = await client.brPop("submissions", 0);
        // actually run the users code for verifying submission
        await new Promise((res) => setTimeout(res, 2000));
        // send it to be the pub-sub
        console.log("Processed users submission:", res);
    }
}

main();
