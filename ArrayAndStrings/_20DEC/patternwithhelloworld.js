let str = 'HELLO_WOLR';
let range = 5;
for(let i = 0; i <= range - 1; i++){
    let word = '';
    for(let j = 0; j <= range + 1 ; j++){
            word += str.charAt( i + j);
    }
    console.log(word);
}


