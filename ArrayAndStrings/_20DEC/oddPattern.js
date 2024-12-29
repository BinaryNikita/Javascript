let odd = [], range = 7, n = 4, index = 0;
for(let i = 1; i <= range; i++){
    if(i%2 != 0){
        odd.push(i);
    }
}
console.log(odd);

for(let i = 1; i <= n; i++){
    let s = '';
    for(let j = 1; j <= odd[index]; j++){
        s += j + ' ';
    }
    index++;
    console.log(s);
}