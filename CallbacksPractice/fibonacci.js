let first = 0;
let second = 1;
let next;
console.log(first);
console.log(second);
for(let i = 0; i < 10; i++){
    next = first + second;
    first = second;
    second = next;
    
    console.log(next);
}