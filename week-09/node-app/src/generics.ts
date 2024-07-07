// PROBLEM :
// type Input = number | string;

// function firstEl(arr: (number | string)[]){
//     return arr[0]
// }

// function firstEl(arr: Input[]): Input {
//     return arr[0];
// }
//
// const value = firstEl(["Ritesh", "Koushik"]);
// console.log(value.toUpperCase()); // does not exist on number so throws error

function identity<T>(arg: T): T{
    return arg;
}

let output1 = identity<string>("myString");
let output2 = identity<number>(100);

output1.toUpperCase();

// Solving the original problem
function getFirstElement<T>(arr: T[]){
    return arr[0];
}

const el = getFirstElement(["Ritesh", "Koushik"]);
const el2 = getFirstElement([1, 2]);
const el3 = getFirstElement([true, false]);
console.log(el.toLowerCase());
