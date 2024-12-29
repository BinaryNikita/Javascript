let arr = [1, 4, 5, 20, 3, 7, 3];
let target = 10;

function subarray(arr, target) {
    let results = [];
    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        let elements = [];
        for (let j = i; j < arr.length; j++) {
            sum += arr[j];
            elements.push(arr[j]);
            if (sum === target) {
                results.push([...elements]); 
            } else if (sum > target) {
                break; 
            }
        }
    }
    return results; 
}

console.log(subarray(arr, target));

//other approach


// function subarray(arr, target){
//     for(let i = 0; i < arr.length; i++){
//         let sum = 0, elements = [];
//         for(let j = i; j < arr.length; j++){
//             if(sum !== target){
//                 sum += arr[j];
//                 elements.push(arr[j]);
//             } else if(sum > target) {
//                 break;
//                 }
//         }
        
//         if(sum === target){
//         console.log(elements);
//         }
//     }
// }

// subarray(arr, target);