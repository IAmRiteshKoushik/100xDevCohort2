// A function that expects no arguments and returns a void
// That is what is written inside the function parameter 
// fn: () => void
// This is how you pass a function an arg
function delayedCall(fn: () => void){
    setTimeout(fn, 1000);
}

delayedCall(function() {
    console.log("Hi there!");
})
