import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

interface UpdateParams{
    firstName: string;
    lastName: string;
}

async function getUser(username: string){
    const user = await prisma.user.findFirst({
        where: {
            username: username,
        }
    });
    console.log(user);
}

async function updateUser(username: string, {
    firstName, lastName
}: UpdateParams){
    const res = await prisma.user.update({
        where: { username },
        data: { 
            firstName,
            lastName
        }
    });
    console.log(res);
}

async function insertUser(
    username: string,
    password: string,
    firstName: string,
    lastName: string
){
    const res = await prisma.user.create({
        data: {
            username,
            password,
            firstName,
            lastName
        }
    });
    console.log(res);
}

// Insert User
insertUser("admin1", "12345", "Ritesh", "Koushik");

// Update user
updateUser("admin1", {
    firstName: "New FirstName",
    lastName : "New LastName"
});

// Get User
getUser("admin1");
