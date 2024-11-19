let matrix = [
  [3, 2, 1],
  [9, 8, 7],
  [6, 5, 4],
];

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}

for (let i = 0; i < matrix.length; i++) {
    bubbleSort(matrix[i]);
}


console.log(matrix);
