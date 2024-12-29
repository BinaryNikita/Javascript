function isPallindrone(num){
    let rev = 0, copy = num;
    
    while(copy != 0){
        let rem = copy%10;
        rev = (rev * 10) + rem;
        copy = Math.floor(copy/10);
    }
    
    if(rev == num){
        return true;
    } else{
        return false;
    }
    
}

let start = 100, end = 200, pallindromes = [];
for(let i = start; i <= end; i++){
    if(isPallindrone(i)){
        pallindromes.push(i);
    }
}

console.log(pallindromes);