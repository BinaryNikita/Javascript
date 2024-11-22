/* 
Find Two Elements whose Sum is Closest to Zero.
( Two elements in a given array of positive  and negative numbers such that their sum is close to zero.)
for example- taking array   {-2,-1,3,6,5}
output:  -2 and 3
*/

// let a = [-2, -1, 3, 6, 5];


// let minSum = a[0] + a[1];
// let pair = [];
// for (let i = 0; i < a.length; i++) {
//   let sum = 0;
//   for (let j = i + 1; j < a.length; j++) {
//     sum = a[i] + a[j];
//     if (sum < minSum) {
//       minSum = sum;
//       pair[0] = a[i];
//       pair[1] = a[j];
//     }
//   }
// }

// console.log(pair);

let a = [-2, -1, 3, 6, 5];

let minSum = a[0] + a[1]; 
let pair = [a[0], a[1]]; 

for (let i = 0; i < a.length; i++) {
  for (let j = i + 1; j < a.length; j++) {
    let sum = a[i] + a[j];

    if ((minSum < 0 && sum > 0 && sum + minSum > 0) || 
        (minSum > 0 && sum < 0 && sum + minSum < 0) || 
        (sum > 0 && sum < minSum) || 
        (sum < 0 && sum > minSum)) {
      minSum = sum;
      pair[0] = a[i];
      pair[1] = a[j];
    }
  }
}

console.log(pair);
