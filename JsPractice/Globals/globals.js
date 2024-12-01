console.log(__dirname);
console.log(__filename);

console.log("Hello");
console.error("This is a error");



const person = [
    {
        key: "name",
        value: "John Doe"
    },
    {
        key: "age",
        value: 28
    },
    {
        key: "occupation",
        value: "Software Engineer"
    },
    {
        key: "city",
        value: "New York"
    },
    {
        key: "country",
        value: "USA"
    },
    {
        key: "hobbies",
        value: "Reading, Hiking, Traveling"
    },
    {
        key: "married",
        value: false
    },
    {
        key: "phone",
        value: "123-456-7890"
    },
    {
        key: "email",
        value: "john.doe@example.com"
    },
    {
        key: "salary",
        value: "$80,000"
    }
];

console.table(person);


console.log(process.argv); // Array of command-line arguments
console.log(process.env.NODE_ENV); // Access environment variable
process.exit(1); // Exit with error code 1

global.myGlobalVar = "Hello, World!";

const fs = require('fs'); // Loads the built-in File System module
