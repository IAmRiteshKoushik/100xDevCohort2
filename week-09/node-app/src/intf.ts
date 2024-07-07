interface User {
    firstName: string,
    lastName: string,
    age: number,
    email? : string, // optional argument
};


function isActallyLegal(user: User){
    if(user.age > 10){
        return true;
    } else {
        return false;
    }
};

isActallyLegal({
    firstName: "Ritesh",
    lastName: "Koushik",
    age: 20,
});
