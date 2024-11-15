function uniqueId(){
    let i = 0;
    return function(){
        i++;
        return i;
    }
}

const unique = uniqueId();
console.log(unique());
console.log(unique());
console.log(unique());
console.log(unique());
console.log(unique());

