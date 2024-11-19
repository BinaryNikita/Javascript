const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  const n = matrix.length;
  
  console.log("Lower triangular elements:");
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      console.log(matrix[i][j]);
    }
  }
  