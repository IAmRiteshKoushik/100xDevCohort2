function square(n) {
  return n * n; 
}

function cube(n){
  return n * n * n;
}

// function sumOfSquares(a, b){
//   let square1 = square(a);
//   let square2 = square(b);
//   return square1 + square2;
// }
//
// function sumOfCube(a, b){
//   let cube1 = cube(a);
//   let cube2 = cube(b);
//   return cube1 + cube2;
// }

function sumOfSomething(a, b, callback){
  let op1 = callback(a);
  let op2 = callback(b);
  return op1 + op2;
}

let ans = sumOfSomething(1, 2, square);
console.log(ans);
