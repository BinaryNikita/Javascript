/* 
WAP to print Fibonacci series.
find the row with maximum sum in 2-D array.
Print the diagonal element of 2-D array.
Reverse each row of 2-D array.

*/

function fibonacci(n) {
    if (n <= 0) {
        return 0; 
    } else if (n === 1) {
        return 1; 
    }


    return fibonacci(n - 1) + fibonacci(n - 2);
}

function printFibonacciSeries(n) {
    for (let i = 0; i <= n; i++) {
        console.log(fibonacci(i));
    }
}

console.log(printFibonacciSeries(5)); 
