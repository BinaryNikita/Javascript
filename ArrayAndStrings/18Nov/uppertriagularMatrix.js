
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  const n = matrix.length;
  
  console.log("Upper triangular elements:");
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      console.log(matrix[i][j]);
    }
  }
  