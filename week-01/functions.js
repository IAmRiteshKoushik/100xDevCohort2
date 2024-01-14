function square(a){
    return a * a;
}

function cube(a){
    return a * a * a;
}

// Any function that has been passed as an argument to another function
// can be called as a callback function
function sumOfSomething(a, b, callback){
    const val1 = callback(a);
    const val2 = callback(b);

    return val1 + val2;
}

console.log(sumOfSomething(1, 2, square));
console.log(sumOfSomething(1, 2, cube));

// Anonymous functions (single time usage)
// You can give a name to an anonymous function but there is no point
// in doing so because that function cannot be called from anywhere 
// outside of the function due to scoping issues.
const ans = sumOfSomething(2, 2, (n) => {
    return n * n * n
})
console.log(ans);