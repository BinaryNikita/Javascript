// Reverse each row of 2-D array.

let a = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

for(let i = 0; i < a.length; i++){
    let m = a.length - 1;
    let j = 0;

    while(j < m){
        let temp = a[i][m];
        a[i][m] = a[i][j];
        a[i][j] = temp;
        j++;
        m--;
    }
    
}

console.log(a);
