// #2. Write a program to accept a string and check if it is palindrome or not?

let str = "aba";
let revStr = "";

for(let i = str.length - 1; i >= 0; i--){
    revStr += str.charAt(i);
}

if(str === revStr){
    console.log("it is palindrome");
} else {
    console.log("it is not a palindrome")
}
