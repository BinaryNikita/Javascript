// Sorting Strings using Bubble Sort.

let str = 'nikita';
let arr = [];

for (let i in str) {
  arr[i] = str.charAt(i);
}

for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] > arr[j]) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
}

str = '';
for (let a of arr) {
  str += a;
}

console.log(str);
