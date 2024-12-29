let rows = 5;

for(let i = 1; i <= rows; i++){
    let s = '';
    for(let j = 1; j <= rows; j++){
        if(i == 3){
            s += j + ' ';
        }else if(j == 3){
            s += i + ' ';
        }else{
            s += '  ';
        }
    }
    console.log(s);
}