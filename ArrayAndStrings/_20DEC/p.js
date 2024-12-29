for(let i = 1; i <= 5; i++){
    let k = 1;
let s = '';
    for(let j = 1; j < 2*i; j++){
        s = s + k;
        if(j >= i){
          k--;
        }else{
          k++;
        }
    }

    console.log(s);
}


for(let j = 2*i; j >= 1 ; j--){
for(let i = 1; i <= 5; i++){
    let k = 1;
let s = '';
        s = s + k;
        if(j >= i){
          k--;
        }else{
          k++;
        }
    }

    console.log(s);
}

