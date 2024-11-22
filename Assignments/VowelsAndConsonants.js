// #3. Write a program to count total number of vowels and consonants in a string.

let str = "Hello";
str = str.toLowerCase();

let vowels = 0;
let consonants = 0;

for(let i = 0; i < str.length; i++){
    let char = str.charAt(i);
    if(char == 'a' ||char == 'i' ||char == 'e' ||char == 'o' ||char == 'u'){
           vowels++;
    } else{
        consonants++;
    }
}

console.log(vowels + " " + consonants);


