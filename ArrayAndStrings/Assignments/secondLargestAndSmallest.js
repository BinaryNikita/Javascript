let arr = [10, 4, 9, 8, 2, 1, 3];

for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] > arr[j]) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
}

console.log("Second smallest: " + arr[1]);
console.log("Second largest: " + arr[arr.length - 2]);
