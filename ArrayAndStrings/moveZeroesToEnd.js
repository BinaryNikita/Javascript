// Move Zeros to End of Array
// Given an array, move all zero elements to the end while maintaining the relative order of the non-zero elements.

// Example:

// [0, 1, 2, 0, 3, 0, 4] → [1, 2, 3, 4, 0, 0, 0]


let arr = [0, 1, 2, 0, 3, 0, 4], j = 0;

for(let i = 0; i < arr.length; i++){
        if(arr[i] != 0){
            arr[j] = arr[i];
            j++;
        }
    }
    
    for(let k = j; k < arr.length; k++){
        arr[k] = 0;
    }
console.log(arr);
