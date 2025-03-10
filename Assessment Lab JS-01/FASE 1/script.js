// Task 1
var name = "Taha";
console.log("Original name:", name);

name = "Joseph";
console.log("Changed name:", name);

// Task 2
let age = 22;
console.log("Original age:", age);

age = 26;
console.log("New age:", age);

// Task 3
const PI = 3.14159;
console.log("PI value:", PI);
// Trying to reassign const will cause error:
// PI = 3.14; // This will throw an error

// Task 4
const mixedArray = [
    "test",           // string
    42,                // number
    true,              // boolean
    [1, 2, 3],        // array
    { id: 1 },        // object
    null,              // null
    undefined          // undefined
];

console.log("\nPrinting mixed array elements:");
mixedArray.forEach((item, index) => {
    console.log(`Item ${index}:`, item, `(Type: ${typeof item})`);
});

// Task 5
const person = {
    name: "Taha Yunus",
    age: 50,
    isStudent: false,
    hobbies: ["kayaking", "hiking", "coding"],
    address: {
        street: "Example Street",
        city: "Lisbon"
    }
};

console.log("\nPrinting person object properties:");
for (const [key, value] of Object.entries(person)) {
    console.log(`${key}:`, value);
} 