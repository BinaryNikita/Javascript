let arr = [
    [4, 2, 3],
    [1, 5, 6],
    [9, 8, 7]
];

let sum = 0;
    for (let r of arr) {
        for (let num of r) {
            if (num % 2 === 0) {
                sum += num;
            }
        }
    }

    console.log(sum);