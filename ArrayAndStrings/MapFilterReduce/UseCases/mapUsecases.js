const numbers = [1, 2, 3];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // Output: [2, 4, 6]

const strings = numbers.map(num => `Number: ${num}`);
console.log(strings); // Output: ["Number: 1", "Number: 2", "Number: 3"]

const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
];
const names = users.map(user => user.name);
console.log(names); // Output: ["Alice", "Bob", "Charlie"]


const updatedUsers = users.map(user => ({ ...user, isActive: true }));
console.log(updatedUsers);
// Output:
// [
//   { name: "Alice", age: 25, isActive: true },
//   { name: "Bob", age: 30, isActive: true }
// ]

const temperaturesC = [0, 20, 30];
const temperaturesF = temperaturesC.map(temp => (temp * 9/5) + 32);
console.log(temperaturesF); // Output: [32, 68, 86]


const filteredAndMapped = numbers
    .filter(num => num % 2 === 0) // Keep even numbers
    .map(num => num * 10); // Multiply them by 10
console.log(filteredAndMapped); // Output: [20, 40]

