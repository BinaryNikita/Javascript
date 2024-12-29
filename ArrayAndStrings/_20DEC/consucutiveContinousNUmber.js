let arr = [1, 1, 1, 2, 2, 1, 1];
let nums = new Set(arr), c = {};

for(let num of nums){
    c[num] = 0, j = 0;
for(let i = j; i < arr.length; i++){
if((arr[i] == num ) && (arr[i] == arr[i+1])){
           c[num]++;
   } else {
       break;  }
   }
   j++;
} 
console.log(c);



























