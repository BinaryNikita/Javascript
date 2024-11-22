/* 
Find the majority element in array.
(A majority element in an array is an element that appears more than n/2 times where n is the size of the array.)
*/

let a = [ 1, 2, 3, 2, 2, 3, 2];
function majorityElement(arr){
    let occ = Math.floor(arr.length/2),majority = 0;
    for(let i = 0; i < arr.length; i++){
        let count = 1;
         for(let j = i + 1; j < arr.length; j++){
            if(arr[i] == arr[j]){
                count++;
            }
         }
         if(count >= occ){
            majority = arr[i];
         } 
    }

    return majority;
}

console.log(majorityElement(a));