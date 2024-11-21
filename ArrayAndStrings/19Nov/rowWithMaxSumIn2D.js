// find the row with maximum sum in 2-D array.
let a = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10, 11, 12]
];

let max = [];
for(let i = 0; i < a.length; i++){
    let sum = 0;
    for(let j = 0; j < a[i].length; j++){
        sum += a[i][j];
    }
    max.push(sum);
}

let row = Math.max(...max);
console.log(max.indexOf(row));
