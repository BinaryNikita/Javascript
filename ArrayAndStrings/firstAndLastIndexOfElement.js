let arr = [2, 4, 4, 4, 6, 6, 8, 10], first = 0, last = 0;

for(let a in arr){
    if(arr[a] == 4){
        first = a;
        break;
    }
}
for(let a in arr){
    if(arr[a] == 4){
        last = a;
    }
}

console.log(first + " " + last);