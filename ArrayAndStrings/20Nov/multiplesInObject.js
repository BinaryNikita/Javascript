let ob = {"multipleOf2": 0, "multipleOf3": 0,"commonMultiple": 0};

for(let i = 1; i < 10; i++){
    if(i%3 == 0){
ob.multipleOf3++;
    }
    if(i%2 == 0){
ob.multipleOf2++;

    }
    if(i%2 == 0 && i%3 == 0){
ob.commonMultiple++;

    }
}

console.log(ob);