let rows = 5;

for(let i = 1; i <= rows; i++){
    let s = '';
    for(let j = 1; j <= rows - i; j++){
        s += '-';
    }
    
    for(let j = 1; j <= i; j++){
        s += '#';
    }
    console.log(s);
}