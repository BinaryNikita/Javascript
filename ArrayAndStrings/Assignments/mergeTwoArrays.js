let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6, 7];

for(let i in arr2){
    arr1.push(arr2[i]);
}

console.log(arr1)