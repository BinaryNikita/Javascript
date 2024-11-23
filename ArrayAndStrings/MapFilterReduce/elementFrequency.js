/* 

7. Count the occurrences of distinct elements in the given 2D array. The given input is an array, the elements of which are arrays of strings. The result is an object whose property names are the values from the arrays and their value is the number of their occurrences.

const input = [
  ["a", "b", "c"],
  ["c", "d", "f"],
  ["d", "f", "g"],
];
output:   {
    a: 1,
    b: 1,
    c: 2,
    d: 2,
    f: 2,
    g: 1,

}
*/

let a = [
  ['a', 'b', 'c'],
  ['c', 'd', 'f'],
  ['d', 'f', 'g'],
];

let b = a.flat();
let obj = {};

for (let i = 0; i < b.length; i++) {
  let count = 1;
  for (let j = i + 1; j < b.length; j++) {
    if (b[i] == b[j]) {
      count++;
      b[j] = null;
    }
  }
  if (b[i] != null) {
    obj[b[i]] = count;
  }
}

console.log(obj);
