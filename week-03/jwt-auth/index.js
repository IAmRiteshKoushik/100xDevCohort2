const jwt = require("jsonwebtoken")
// const { secret }

// decode, verify and generate
const value = {
    name: "Harkirat",
    accountNumber: 123123123,
}

// jwt - A token is protected by it's "secret"
// Would be a good idea to dynamically generate it
const token = jwt.sign(value, "secret");
console.log(token);

// this is the token that has been generated using this secret =, and hence 
// this token can only be verified using this secret

const verifiedValue = jwt.verify(token, "secret")
console.log(verifiedValue);
