function isPrime(num){
    let count = 0;
for(let i = 2; i <= num; i++){
    if(num%i == 0){
        count++;
    }
}

if(count == 1){
    return true;
} else{
    return false;
}
}
let prime = [];
for(let i = 1; i <= 100; i++){
if(isPrime(i)){
    prime.push(i);
}
}

console.log(prime);