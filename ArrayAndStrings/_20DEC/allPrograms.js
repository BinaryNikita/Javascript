for(let i = 1; i <= 5; i++){
    let s = '',  k = 1;
    for(let j = 1; j <= 5 - i; j++){
        s +=  ' ';
    }
    
    for(let j = 0; j < i ; j++){
                s += k + " ";
       k = (k * (i - j - 1) /(j + 1));
    }
    
    console.log(s);
}

function armStrong(num){
    let copy1 = num, copy2 = num, count = 0;
    
    while(copy1 != 0){
        count++;
        copy1 = Math.floor(copy1/10);
    }
    
    let sum = 0;
    while (copy2 != 0){
        let rem = copy2%10;
        sum += Math.pow(rem, count);
        copy2 = Math.floor(copy2/10);
    }
    
    if(sum == num){
        console.log("armstrong")
    }else{
        console.log("not an armstrong");
    }
}

armStrong(153);

function primeNumbers(num){
    
    
    for(let i = 1; i <= num; i++){
        let count = 0;
        for(let j = 2; j <= i; j++){
            if(i%j == 0){
                count++;
            }
        }
        
       if(count == 1){
           console.log(i);
       }
    }
}

primeNumbers(10);

function squarePrinter(num){
    let arr = [];
    for(let i = 0; i < num * 2; i++){
        if(i%2 == 0){
        arr.push(i*i);
        }
    }
    console.log(arr);
}

squarePrinter(5);



function reverseNumber(num){
    let rev = 0, copy = num;
    while(copy != 0){
        let rem = copy%10;
        rev = (rev * 10) + rem;
        copy = Math.floor(copy/10);
    }
    
    console.log(rev);
}

reverseNumber(123);


function pallindrone(num){
    let rev = 0, copy = num;
    while(copy != 0){
        let rem = copy%10;
        rev = (rev * 10) + rem;
        copy = Math.floor(copy/10);
    }
    
    if(num == rev){
        console.log("Its a pallindrone number");
    }else{
        console.log("Not a pallindrone")
    }
}

pallindrone(121);