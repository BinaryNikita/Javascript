//Write a js program to find common elements in three sorted ?

let a = [1, 2, 3, 4, 5, 6];
let b = [3, 5, 6, 7, 8];
let c = [3, 5, 6, 9, 10, 11, 12];

let common = [];

for (let i = 0; i < a.length; i++) {
  for (let j = 0; j < b.length || j < c.length; j++) {
    if (a[i] == b[j] && a[i] == c[j]) {
      common.push(a[i]);
    }
  }
}

console.log(common)