let str1 = 'HELLO';
let str2 = "WORLD";

for(let i = 0; i < str1.length; i++){
    let s = '';
    for(let j = 0; j <= i; j++){
        if(j < i){
        s += '  '; 
        }else{
            s += str1.charAt(i) + " ";
        }
    }
    
    console.log(s);
}

for(let i = 0; i < str2.length; i++){
    let s = '';
    for(let j = 0; j <= i; j++){
        if(j < i){
        s += '  '; 
        }else{
            s += str2.charAt(i) + " ";
        }
    }
    
    console.log(s);
}

