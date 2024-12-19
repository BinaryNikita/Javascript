let str = "aaabbccddd";

let count = 1, compressed = '';

for(let i = 0; i < str.length; i++){
    for(let j = i + 1; j < str.length; j++){
        if(str.charAt(i) == str.charAt(j)){
            count++;
        }
    }
    
    let flag = false;
    for(let j = 0; j < compressed.length; j++){
        if(str.charAt(i) == compressed.charAt(j)){
            flag = true;
            break;
        }
    }
    
    if(!flag){
    compressed += str.charAt(i) + count;
    }
    
    count = 1;
}

console.log(compressed);


// let str = "aaabbccddd";
// let compressed = '';
// let count = 1;


// for (let i = 1; i <= str.length; i++) {
//     if (str[i] === str[i - 1]) {
//         count++;
//     } else {
//         compressed += str[i - 1] + count;
//         count = 1; 
//     }
// }

// console.log(compressed);
