// Decode a Run-Length Encoded String: Input: "a3b2c1"
// Output: "aaabbc"

let str = "a3b2c1", decode = "", num = [], char = [];

for(let i = 0; i < str.length; i++){
    let ch = str.charCodeAt(i) ;
    if(ch >= 48 && ch <= 58){
        num.push(str.charAt(i));
    } else{
        char.push(str.charAt(i));
    }
}
// console.log(num);
// console.log(char);

for(let i = 0; i < num.length; i++){
    
    for(let j = 1; j <= num[i]; j++){
        decode += char[i];
    }
    
}

console.log(decode);

