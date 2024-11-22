/* 

6. If the given input is a number, you should return the factorial of that number. The factorial of a natural number n is the product of the positive integers less than or equal to n. So, 2! = 2, 3! = 6, 4! = 24 and so on.

const input = 6;
output: 720

*/


let a = 6;

function factorial(a){

    if(a == 0 || a == 1){
        return 1;
    } 

    return a * factorial(a-1);
}

console.log(factorial(a));

