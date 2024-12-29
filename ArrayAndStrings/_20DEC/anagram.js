let str1 = "AAAB";
let str2 = "BBBA";


if(str1.length == str2.length){
    let count = 0;
for(let i = 0; i < str1.length; i++){
    for(let j = 0; j < str2.length; j++){
        if(str1.charAt(i) == str2.charAt(j)){
            count++;
            break;
        }
    }
}
   if(str1.length == count){
       console.log("anagram");
   } else{
       console.log("not anagram");
   }
}else{
    console.log("not anagram...");
}