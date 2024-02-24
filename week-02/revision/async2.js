// Wrapping it inside another async function
function myOwnSetTimeout(fn, duration){
    setTimeout(fn, duration);
}

// Callback hell (begins)
myOwnSetTimeout(function() {
    console.log("log the first thing");
    myOwnSetTimeout(function() {
        console.log("log on the second thing");
    }, 4000);
}, 2000);
