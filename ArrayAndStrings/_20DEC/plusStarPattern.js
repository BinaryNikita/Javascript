let rows = 5;

for(let i = 1; i <= rows; i++){
    let s = '';
    for(let j = 1; j <= rows; j++){
        if(i == 3 || j == 3 ){
          s += '* ';
        }else{
            s += '  ';
        }
    }

    console.log(s);
}