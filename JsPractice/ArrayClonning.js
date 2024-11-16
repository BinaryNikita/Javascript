let a = [1, 2, 3, 4];
let b = [...a, 5, 6, 7];
console.log(a);
console.log(b);


let arr1 = [1, 2, 3, 4];
let arr2 = [];
for(let i = 0; i < arr1.length; i++){
arr2[i] = arr1[i];
console.log(arr2[i]);
}


let a1 = "[1, 2, 3, 4]"; // [1, 2, 3, 4]/"[1, 2, 3, 4]" works for both
let a2 = JSON.parse(JSON.stringify(a1));
console.log(a1);

