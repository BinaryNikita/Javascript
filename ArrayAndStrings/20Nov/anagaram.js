let a = "abcda";
let b = "bcad";
let len = 0;

for(let i = 0 ; i < a.length; i++){
    let count = 0;
    for(let j = 0 ; j < b.length; j++) {
        if(a.charAt(i) == b.charAt(j)){
            count++;
        }
    }

    if(count >= 1){
        len++;
    }
}

if(len == a.length && len == b.length){
    console.log("Its an anagram")
} else{
    console.log("Its not an anagram")
}