
let rows = 5;
for(let i = 1; i <= rows; i++){
    let s = '';
    for(let j = 1; j <= rows - i; j++){
        s += '_';
    }
    
    for(let j = 1; j <= i; j++){
        s += j + ' ';
    }
    
    console.log(s);
    
}


//-----------------------------------------------------

let start = 10;
let end = 20;

function reverseNumber(num){
    let copy = num;
    rev = 0;
    
    
    
    while(copy != 0){
        let rem = copy%10;
        rev = rev * 10 + rem;
        copy = Math.floor(copy/10);
    }
    
    
    
let lastdigit = copy%10;

    if(lastdigit == 0){
        
        let count = 0;
        while(num != 0){
            let rem = num%10;
            num = num/10;
            if(rem == 0){
                count++;
            }else{
                break;
            }
        }
        
        rev = rev.toString();
        while(count != 0){
        rev = 0 + rev;
        count--;
            
        }
    }
    
    return rev;
}

for(let i = start; i <= end; i++){
     num = reverseNumber(i);
    // console.log(num);
    
}

//--------------------------------------------------------

let str = 'hello';
for(let i = 0; i < str.length; i++){
    let count = 0;
    for(let j = 0; j < str.length; j++){
        if(str.charAt(i) == str.charAt(j)){
            count++;
        }
    }
    
    if(count == 1){
        console.log(str.charAt(i));
        break;
    }
}

//-----------------------------------------------------------





