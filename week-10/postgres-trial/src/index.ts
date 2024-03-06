// Write a function to cfreate a users table in your database
import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

// With NeonDB, prefer to use the connectionString as 
// there are parameters missing in the following code.
// ---------------------------------------------------
// let {
//     PGHOST, PGDATABASE, PGUSER, PGPASSWORD 
// } = process.env;
//
// const client = new pg.Client({
//     // connectionString: process.env.POSTGRES_CONN, // postgres-connection string
//     host: PGHOST,
//     database: PGDATABASE,
//     user: PGUSER,
//     password: PGPASSWORD,
//     port: 5334,
// });


// This method WORKS 
// -----------------
const client = new pg.Client({
    // connectionString: "postgresql://IAmRiteshKoushik:XOZzn1si8hAV@ep-restless-term-a133fvnf.ap-southeast-1.aws.neon.tech/postgres-test?sslmode=require"
    connectionString: process.env.POSTGRES_CONN, 
    // for using the .env file, it must be locatedin the ./rootDir of the 
    // project. As the ts-compiler is looking only at the root-directory
});

async function testPostgres(){
    await client.connect();

    const result = await client.query('SELECT NOW()');
    console.log(result);

    client.end();
}

async function createTable(){
    try {
        await client.connect();
        const createQuery = `
        CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
        `;
        const result = await client.query(createQuery);
        console.log(result);
    } catch (err) {
        console.log("Error during initalization: ", err);
    } finally {
        await client.end();
        console.log("Client has disconnected");
    }
}

// unsafe query - vulnerable to SQL injection attack
async function insertData(){
    try {
        await client.connect();
        const insertQuery = "INSERT INTO users (username, email, password) \
            VALUES ('dummyUsername', 'dummyEmail', 'Pass123')"
        const res = await client.query(insertQuery);
        console.log("Insertion successful", res); // Output insertion result
    } catch (err){
        console.log("Error during insertion: ", err)
    } finally {
        await client.end();
        console.log("Client has disconnected");
    }
}

// safer query - some level of handling
async function insertDataBetter(){
    try {
        await client.connect();
    } catch (err) {
        console.log("Error encountered: ", err);
    } finally {
        await client.end();
        console.log("Client has disconnected")
    }
}

async function readData(){
    try {
        await client.connect();
        const readQuery = "SELECT * FROM users;"
        const res = await client.query(readQuery);
        // console.log(res); // rows is not the only parameter
        console.log(res.rows);
    } catch (err){
        console.log("Error during reading data: ", err);
    } finally {
        await client.end();
        console.log("Client has disconnected");
    }
}

// testPostgres();
// createTable();
// insertData();
readData();
