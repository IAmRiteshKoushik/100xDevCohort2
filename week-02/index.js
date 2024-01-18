function myOwnSetTimeout(duration){
    let p = new Promise(function (resolve){
        // after x second, call resolve
        setTimeout(resolve, duration);
    });
    return p;
}

// Truly asynchronous function
async function main(){
    await myOwnSetTimeout(5000);
    console.log("after");
}
main();
