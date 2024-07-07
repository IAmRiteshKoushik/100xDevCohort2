type User1 = {
    firstName: string,
    lastName: string,
    age: number,
}

interface User2 {
    firstName: string,
    lastName: string,
    age: number,
}

// Types cannot be used to implement classes 
// Other than that they are usually very similar to interfaces
// Types let you aggregate data - Union, Intersection

type StringOrNumber = string | number;

function printId(id: StringOrNumber): void {
    console.log(`ID:${id}`);
}

printId(101);
printId('101');

type Employee = {
    name: string,
    startDate: Date,
};

type Manager = {
    name: string,
    department: string,
};

type TechLead = Employee & Manager;

const t: TechLead = {
    name: "Ritesh Koushik",
    startDate: new Date(),
    department: "Operations",
}
