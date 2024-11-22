// Write a function that accepts a list of numbers and returns another function that filters those numbers based on a condition (e.g., greater than a certain value).


function outer(arr){
    return function(condition){
    return arr.filter(condition);
    }
}

let nums = [6, 4, 38, 90, 23];
const createFilter = outer(nums);
const greaterThanTen = createFilter(num => num > 10);
console.log(greaterThanTen);
const evenNumbers = createFilter(num => num%2 == 0);
console.log((evenNumbers));
