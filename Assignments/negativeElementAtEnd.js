function moveNegative(arr) {
  let result = [];
  let index = 0;

  
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] >= 0) {
          result[index] = arr[i];
          index++;
      }
  }

  
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] < 0) {
          result[index] = arr[i];
          index++;
      }
  }

  return result;
}


let input = [0, 1, 2, -5, -4, 2, -6];
let output = moveNegative(input);
console.log(output);  
