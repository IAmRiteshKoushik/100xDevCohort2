"use strict";
;
function isActallyLegal(user) {
    if (user.age > 10) {
        return true;
    }
    else {
        return false;
    }
}
;
isActallyLegal({
    firstName: "Ritesh",
    lastName: "Koushik",
    age: 20,
});
