/* array.reduce((accumulator, currentValue) => {
    // logic to process currentValue and update accumulator
    return updatedAccumulator;
}, initialValue); */

/* 
accumulator: Keeps the running total or result (like a bucket).
currentValue: The current element in the array.
initialValue: The starting value for the accumulator (optional but often helpful).
*/


const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // Output: 10

const max = numbers.reduce((acc, num) => (num > acc ? num : acc), -Infinity);
console.log(max); // Output: 9


const nestedArray = [[1, 2], [3, 4], [5]];
const flatArray = nestedArray.reduce((acc, arr) => acc.concat(arr), []);
console.log(flatArray); // Output: [1, 2, 3, 4, 5]

const items = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const frequency = items.reduce((acc, item) => {
acc[item] = (acc[item] || 0) + 1;
return acc;
}, {});

console.log(frequency);

let f = Object.values(frequency);
let avg = f.reduce((a, e) => a + e, 0)/f.length;
console.log(avg);