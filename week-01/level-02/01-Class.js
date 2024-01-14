class Animal {
    constructor(name, legCount){
        this.name = name
        this.legCount = legCount
    }
    describe() {
        return `${this.name} has ${this.legCount} legs.`
    }
}

// Initializing a class
const dog1 = new Animal("Sherry", 4);
console.log(`Operating on ${dog1.name}:`, dog1.describe())