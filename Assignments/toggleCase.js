let str = "heLlO";
let upper = "";

for(let i = 0; i < str.length; i++){
     let char = str.charCodeAt(i);
    if(char >= 65 && char <= 90){
        upper += String.fromCharCode(str.charCodeAt(i) + 32);
    } else {
        upper += String.fromCharCode(str.charCodeAt(i) - 32);

    }
}

console.log(upper);





