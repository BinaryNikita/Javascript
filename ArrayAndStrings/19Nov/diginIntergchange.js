// WAP to interchange first and last digit of a number.

let a = 1234;
let b = a.toString().split('').map(Number); 
let temp = b[0];
b[0] = b[b.length - 1];
b[b.length - 1] = temp;
a = Number(b.join(''));
console.log(a);





