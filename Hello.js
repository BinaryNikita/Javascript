const id = 101;
let name = "Nikita Vishnoi";
let email = "nikita@gmail.com";
 password = 98765;

console.table([id, name, email, password]);
console.log(typeof password);


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



console.table(persons);

// persons.forEach(person => {
//     console.log(`ID: ${person.id}, Name: ${person.pname}, Contact: ${person.contact}`);
// });



