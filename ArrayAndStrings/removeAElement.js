// Given an array and a key, the task is to remove all occurrences of the specified key from the array in Java. Examples:
// Input: array = { 3, 9, 2, 3, 1, 7, 2, 3, 5 }, key = 3
// Output: [9, 2, 1, 7, 2, 5]

let arr = [ 3, 9, 2, 3, 1, 7, 2, 3, 5], remove = 3, j = 0;

for(let index in arr){
    if(arr[index] == remove){
        arr.splice(index, 1);
    }
}

console.log(arr);


let newArr = [];

for(let i = 0; i < arr.length; i++){
    if(arr[i] != remove){
        newArr[j] = arr[i];
        j++;
    }
}

console.log(newArr);
