
// Array Cloning
let a = [1, 2, 3, 4];
let b = [...a, 5, 6, 7];
console.log(a);
console.log(b);

// Object Cloning
let persons = [
    {
        id: 101,
        pname: "Nikita",
        contact: "9876543210"
    },
    {
        id: 102,
        pname: "Aarav",
        contact: "9876543211"
    }
];

let person2 = [...persons, {
    id: 103,
    pname: "Bhavna",
    contact: "9876543211"
}];

console.log(person2);



