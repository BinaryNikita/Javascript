//*3. Write a program to find total number of alphabets, digits or special character in a string.

let email = "nikita123@gmail.com";

let char = 0;
let nums = 0;
let specialSymbol = 0;

for(let i = 0; i < email.length; i++){
    if((email.charAt(i) >= 'a') && (email.charAt(i) <= 'z')){
        char++;
    }
    else if((email.charAt(i) >= 0) && (email.charAt(i) <= 9)){
        nums++;
    } else{
        specialSymbol++
    }
}

console.log(char + " " + nums + " " + specialSymbol);