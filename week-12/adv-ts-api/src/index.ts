import z from "zod";

interface User {
    id: string,
    name: string,
    age: number
    email: string,
    passwd: string
}

// General rule thumb - don't have more than 4 to 5 arguments, function gets
// ugly in terms of a signature
// function updateUser(name:string, age: number, password: string){
    // Hit the database to update the user
// }


// -- PICK : This is a generic for picking particular properties from an 
// interface or type
type UpdateProps = Pick<User, 'name' | 'email'>
// -- PARTIAL : This makes all fields become optional
type UpdatePropsOptional = Partial<UpdateProps>

function updateUser(user: UpdatePropsOptional){
    console.log(`Name: ${user.name}, Email: ${user.email}`)
}

updateUser({ name: "Ritesh", email: "toy69@gmail.com"});

// -- READONLY 
type User2 = {
    readonly name: string;
    readonly age: number;
}

const user2: User2 = {
    name: "John",
    age: 40
}
// user2.name = "Hi" // Does not work

type User3 = {
    name: string,
    age: number
}

const user3: Readonly<User3> = {
    name: "John",
    age: 22
}

// How to assign types to objects
type UserLatest = {
    id: string;
    username: string;
}

// Creating types for an object
type Users = {
    [key: string]: UserLatest;
}

const users: Users = {
    "ras@qd1": {
        id: "ras@qd1",
        username: "Ritesh Koushik"
    },
    "ras1dr@": {
        id: "ras1dr@",
        username: "Raman"
    }
}

// -- RECORD
type UsersAsRecord = Record<string, User>

// -- MAP (with generics) -> more cosmetic way to write TS code
const usersMap = new Map<string, UserLatest>();
usersMap.set("abc123", { id: "abc123", username: "John Doe" });
usersMap.set("abc456", { id: "abc456", username: "Ada Lovelace" });
console.log(usersMap.get("abc123"));

// -- EXCLUDE
type EventType = 'click' | 'scroll' | 'mousemove';
type ExcludeEvent = Exclude<EventType, 'scroll'>

const handleEvent = (event: ExcludeEvent) => {
    console.log(`Handling event: ${event}`);
}

handleEvent("click");
handleEvent("mousemove");
// handleEvent("scroll");

// -- ZOD TYPE INFERENCE (creating types from zod runtime schema)
const userProfileSchema  = z.object({
    name: z.string().min(1),
    email: z.string().email(),
    age: z.number().min(18).optional(),
});
type FinalUserSchema = z.infer<typeof userProfileSchema>;
