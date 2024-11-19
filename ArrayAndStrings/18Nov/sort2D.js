let matrix = [
  [3, 5, 1],
  [9, 10, 7],
  [6, 1, 4],
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

// bubbleSort(matrix);

for (let i = 0; i < matrix.length; i++) {
    bubbleSort(matrix[i]);
}


console.log(matrix);
