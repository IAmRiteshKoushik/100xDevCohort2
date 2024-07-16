// axios vs fetch
const axios = require("axios");

function main(){
    fetch("https://sum-server.100xdevs.com/todos")
        .then(async response => {
            const json = response.json();
            console.log(json);
        });
}

async function main2(){
    const response = await fetch("https://sum-server.100xdevs.com/todos");
    const json = await response.json();
    console.log(json);
}

async function main3(){
    // Smarter library, can handle the parsing of requests by itself without 
    // an additional await response.json() step
    const response = await axios.get("https://sum-server.100xdevs.com/todos");
    // response.data -> final JSON data
    console.log(response.data.todos.length);
}

async function postEnd(){
    const response = await fetch("https://www.postb.in/1721093546559-1311875216197", {
        method: "POST",
        headers: {
            "Authorization": "Bearer 123",
        },
        body: {
            username: "ritesh234",
            password: "my-secret-password",
        },
    });
    const text = await response.text();
    console.log(text)
}

// POST
// change request method
// send body
// send headers
async function postEnd2(){
    const response = await axios.post("https://httpdump.app/dumps/8ae5a51a-f164-487d-a9d4-7eb537bf4fd3",

        // the second arg is the body
        {
            username: "Ritesh",
            password: "secret",
        },

        // the third argument is the header
        {
            headers: {
                authorization: "Bearer 123",
            },
        },
    );
    // axios auto-parses the data (text/json/etc);
    console.log(response.data);
}

async function simplified(){

    // single object
    const response = await axios(
        {
            url: "https://httpdump.app/dumps/8ae5a51a-f164-487d-a9d4-7eb537bf4fd3",
            method: "post",
            headers: {
                authorization: "Bearer 123",
            },
            data: {
                firstName: "Ritesh",
                lastName: "Koushik",
            },
        } 
    );
    // axios auto-parses the data (text/json/etc);
    console.log(response.data);
}

simplified();

// in a POST request, first arg - URL, second arg - body, third arg - headers
// in a GET request, first arg - URL, second arg - headers (no body)

// If you want to send extra data, then you can do via query params
