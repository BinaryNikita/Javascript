const numbers = [1, 2, 3, 4, 5, 6];
const oddNumbers = numbers.filter((num) => num % 2 !== 0); // Keep only odd numbers
console.log(oddNumbers); // Output: [1, 3, 5]

const words = ['cat', 'elephant', 'dog', 'rhinoceros'];
const shortWords = words.filter((word) => word.length <= 3); // Keep short words
console.log(shortWords); // Output: ["cat", "dog"]

const mixedArray = [0, 'hello', false, null, 42, undefined];
const truthyValues = mixedArray.filter(Boolean);
console.log(truthyValues); // Output: ["hello", 42]

const users = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 17 },
  { name: 'Charlie', age: 30 },
];
const adults = users.filter((user) => user.age >= 18);
console.log(adults);
// Output: [{ name: "Alice", age: 25 }, { name: "Charlie", age: 30 }]

const fruits = ['apple', 'banana', 'grape', 'kiwi'];
const apples = fruits.filter((fruit) => fruit === 'apple');
console.log(apples); // Output: ["apple"]


const doubledEvenNumbers = numbers.filter(num => num % 2 === 0).map(num => num * 2);
console.log(doubledEvenNumbers); // Output: [4, 8]
