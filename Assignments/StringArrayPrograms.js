let arr = ["cat", "elephant", "dog", "lion"]

let max = 0, longest = '';
for(let i in arr){
    if(arr[i].length > max){
        max = arr[i].length;
        longest = arr[i];
    } 
}

let long = arr.sort((a, b) => b.length - a.length);
console.log(long[0]);

//----------------------------------------------

let remove = "apple";

let fruits = ["apple", "banana", "orange", "apple", "grape"];
let filtered = fruits.filter(a => a != remove);
console.log(filtered);

//---------------------------------------------------

let all = ["apple", "banana", "apple", "orange", "banana", "grape"];
// let unique = new Set(all);

let unique = [], j = 0;
for(let i in all){
    if(!unique.includes(all[i])){
        unique[j] = all[i];
        j++;
    }
}



console.log(unique);

//-------------------------------------------------------

let a = ["apple", "banana", "apple", "orange", "banana", "apple"];

// for(let fruit of a){
//     if(!frequency[fruit]){
//         frequency[fruit] = 1;
//     } else{
//         frequency[fruit]++;
//     }
// }
let frequency = {};

let f = a.reduce((acc, el) => {
    if(!frequency[el]){
    frequency[el] = 1
}else{
    frequency[el]++;
}
}, {});

// !frequency[el] ?  frequency[el] = 1 : frequency[el]++
console.log(frequency);
//------------------------------------------------------









