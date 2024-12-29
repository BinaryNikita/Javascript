function printPascalsTriangle(rows) {
    for (let i = 0; i < rows; i++) {
        let k = 1, s = '' ;
        for (let j = 0; j < rows - i; j++) {
            s += ' ';
        }
        
        for (let j = 0; j <= i; j++) {
            s += k + ' ';
            k = k * (i - j) / (j + 1);
        }
        console.log(s);
    }
}

printPascalsTriangle(5);
