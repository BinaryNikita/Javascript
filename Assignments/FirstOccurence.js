// #4. Write a program to find first occurrence of a character in a given string.
let str = "Nikita";
str = str.toLowerCase();
let target = 'K';

let index = 0;
for(let i = 0; i < str.length; i++){
    if(str.charAt(i) == target.toLowerCase()){
      index = i;
    }
}

console.log(index);