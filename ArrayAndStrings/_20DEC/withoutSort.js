let arr = [1, 0, 2, 2, 0, 0, 1];

let countOne = 0,
  countZero = 0,
  countTwo = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] == 0) {
    countZero++;
  }
  if (arr[i] == 1) {
    countOne++;
  }
  if (arr[i] == 2) {
    countTwo++;
  }
}

for (let i = 0; i < arr.length; i++) {
  if (countZero != 0) {
    arr[i] = 0;
    countZero--;
  } else if (countOne != 0) {
    arr[i] = 1;
    countOne--;
  } else if (countTwo != 0) {
    arr[i] = 2;
    countTwo--;
  }
}

console.log(arr);


// for(let i = 0; i <= )