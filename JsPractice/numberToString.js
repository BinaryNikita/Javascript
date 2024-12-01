//  WAP To  Convert a String to an Integer .
// for example-
// Input-"56789"
// Output-56789.


let str = "56789", num = 0, char = 0 ;

for(let i = 0; i < str.length; i++){
     char = str.charAt(i);
    num = (num * 10) + char*1;
}

console.log(num);


