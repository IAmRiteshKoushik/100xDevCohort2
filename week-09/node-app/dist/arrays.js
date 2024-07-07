"use strict";
function maxValue(arr) {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
console.log(maxValue([1, 2, 3]));
function filterUsers(users) {
    for (let index = 0; index < users.length; index++) {
        const element = users[index];
        if (element.age < 18) {
            console.log("Illegal");
        }
    }
}
