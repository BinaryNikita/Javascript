// arr = Array.from(new Set(arr));
let arr = [1, 2, 22, 3, 2, 3, 9];
let newArray = [];

for (let i = 0; i < arr.length; i++) {
  let isPresent = false;
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] == arr[j]) {
      isPresent = true;
    }
  }

  if (!isPresent) {
    newArray.push(arr[i]);
  }
}

console.log(newArray);
