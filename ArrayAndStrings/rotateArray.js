


let arr = [1, 2, 3, 4, 5, 6];
let step = 4;

function rotate2(arr, step) {
    let n = arr.length;
    let newArray = [];
    let j = 0;

    for (let i = n - step; i < n; i++) {
        newArray[j] = arr[i];
        j++;
    }

    for (let i = 0; i < n - step; i++) {
        newArray[j] = arr[i];
        j++;
    }

    return newArray;
}

console.log(rotate2(arr, step));


//--------------------------------------------------
// function rotate(arr, step){
//     let r = [], j = 0;
    
//     for(let i = step; i < arr.length; i++){  
//         r[i] = arr[j];
//         j++;
//     }
    
//     for(let i = step - 1, k = 0; i >= 0; i--, k++){
//         r[k] = arr[j];
//         j++;
//     }
    
//     console.log(r);
// }

// rotate([1, 2, 3, 4, 5, 6, 7, 9, 10], 3);