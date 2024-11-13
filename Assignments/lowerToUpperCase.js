let lower = "hello";
let upper = "";

for(let i = 0; i < lower.length; i++){
    upper += String.fromCharCode(lower.charCodeAt(i) - 32);
}

console.log(upper);





