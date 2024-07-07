type NumberArr = number[];

interface User {
    firstName: string,
    lastName: string,
    age: number,
}

function maxValue(arr: NumberArr){
    let max = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}

console.log(maxValue([1, 2, 3]));


function filterUsers(users: User[]){
    for (let index = 0; index < users.length; index++) {
        const element = users[index];
        if (element.age < 18){
            console.log("Illegal");
        }
        
    }
}
