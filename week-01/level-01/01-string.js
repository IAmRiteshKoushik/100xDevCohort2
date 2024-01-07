// String handbook 

// String: length(), indexOf(0, lastIndexOf(), slice(), substring(), replace(),
// split(), trim(), toUpperCase(), toLowerCase(), etc.

// Run each function to see the output, and play around with them 

// Length (not a function, but a property)
function getLength(str) {
  console.log("Original String:", str);
  console.log("Length:", str.length);
}
getLength("Hello World");

// indexOf
function findIndexOf(str, target) {
  console.log("Original String", str);
  console.log("Index:", str.indexOf(target));
}
findIndexOf("Hello World", "World");

// lastIndexOf 
function findLastIndexOf(str, target) {
  console.log("Original String:", str);
  console.log("Index:", str.lastIndexOf(target));
}
findLastIndexOf("Hello World Hello", "World");

// slice
function getSlice(str, start, end){
  console.log("Original string: ", str);
  // the substr method is deprecated in javascript
  console.log("After substr: ", str.substr(start, end));
  console.log("After slice: ", str.slice(start, end));
}
getSlice("Hello World", 2, 7);

// substring
function getSubstring(str, start, end){
  console.log("Original String: ", str);
  console.log("After slice: ", str.substring(start, end));
}
getSubstring("Hello World", 0, 5);

function cutIt(str, startIndex, endIndex){
  let newStr = "";
  for(let i = 0; i < str.length; i++){
    if (i >= startIndex && i < endIndex) {
      newStr = newStr + str[i];
    }
  }
  return newStr;
}

const value = "Harkirat Singh"
console.log(cutIt(value, 2, 5)); // rki

// replace
function replaceString(str, target, repalcement){
  console.log("Original String:", str);
  console.log("After replace: ", str.replace(target, replacement));
  // There is a replaceAll() method which allows you to replace all instances
  // of a word in the string. This method replaces only the first occurance.
}

// split
function splitString(str, separator){
  console.log("Original String: ", str)
  console.log("After split: ", str.split(separator))
}
splitString("Hello World", " ");

// trim
function trimString(str){
  console.log("Original String:", str);
  console.log("After trim:", str.trim());
}
trimString("           Hello World ")

// topUpperCase
function toUpper(str){
  console.log("Original strig:", str);
  console.log("After toUpper:", str.toUpperCase());
}
toUpper("Hello World");

// toLowerCase
function toLower(str){
  console.log("Original strig:", str);
  console.log("After toLower:", str.toLowerCase());
}
toLower("Hello World");