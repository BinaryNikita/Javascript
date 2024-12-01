let a = [1, 2, 3, [4, 5]];
let b = [...a];
b[5] = 6;
console.log("Original: " + a);
console.log("Copy: " + b);

console.log('-------------------');
let s1 = ["A", "B", "C"];
let s2 = [...s1];
s2[3] = "D";

console.log("Original: " + s1);
console.log("Copy: " + s2);

console.log('-------------------');
let obj1 = {name: "Nikita", marks: { Hindi: 20, English: 20 }, age:20};
let obj2 = {...obj1};
obj2.age = 30;
obj2.marks.Hindi = 99;
console.log("Original: ", obj1);
console.log("Copy: ", obj2);

/*

obj1
┌───────────────┐
│ name: "Nikita"│
│ age: 25       │
│ marks: ──────▶│ { Hindi: 20, English: 20 }
└───────────────┘

obj2
┌───────────────┐
│ name: "Nikita"│
│ age: 30       │
│ marks: ──────▶│ { Hindi: 99, English: 20 }
└───────────────┘


*/


const arr1 = [[1, 2], [3, 4]];
const arr2 = structuredClone(arr1);  
arr2[0][0] = 6;

console.log(arr1);  
console.log(arr2);
 