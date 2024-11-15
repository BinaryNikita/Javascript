function rotateArray(arr) {
  // arr.push(arr.shift);

  // let temp = arr[0];
  // arr.shift();
  // arr[arr.length] = temp;
  // console.log(arr);

  let newArray = [];
  for (let i = 1, j = 0; i < arr.length; i++, j++) {
    newArray[j] = arr[i];
  }
  newArray[newArray.length] = arr[0];

  console.log(newArray);
}

let arr = [10, 20, 40, 50, 60];
rotateArray(arr);
