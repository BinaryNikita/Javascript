for(let i = 1; i <= 5; i++){
    let s = '';
    for(let j = 1; j <= 5 - i; j++){
        s += ' ';
    }
    
    for(let j = 1; j <= 9; j++){
        if(i+j == 10 || i == 1 && j >= 5 || i == 5 && j <= 5 || i+ j == 6){
            s += "* ";
        }else{
            s += '  ';
        }
    }
    console.log(s);
}