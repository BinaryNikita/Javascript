let arr = [1, 2, 22, 3, 2, 3, 9];
let duplicate = [];

for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] == arr[j]) {
      duplicate.push(arr[i]);
    }
  }
}

console.log(duplicate);

let newdup  = [];
