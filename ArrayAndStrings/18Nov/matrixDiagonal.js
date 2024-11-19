
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  const n = matrix.length;
  
  console.log("Primary:");
  for (let i = 0; i < n; i++) {
    console.log(matrix[i][i]);
  }
  
  console.log("Secondary:");
  for (let i = 0; i < n; i++) {
    // console.log(matrix[i][n - 1 - i]);
    for (let j = 0; j < n; j++) {
        if(i+j == 2)
    console.log(matrix[i][j]);

  }
}
  