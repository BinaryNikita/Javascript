/* 
1. Square the value of every element in the array. Presume that you will only get numbers in the input array.
 const input = [1, 2, 3, 4, 5];
 output: - [1, 4, 9, 16, 25];
*/

let arr = [1, 2, 3, 4, 5];
arr = arr.map((a) => (a * a));

console.log(arr);
