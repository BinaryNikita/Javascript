let n = 4; count = 1;
for(let i = 1; i <= n; i++){
    let s = '';
    for(let j = 1; j <= i; j++){
        s += count + " ";
        count += 2;
    }
    console.log(s);
}