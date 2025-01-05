function incrementNumber(arr){

    let num = 0;
    for(let i = 0; i < arr.length; i++){
    num = (num*10) + arr[i];
    }
    
    console.log(num);
    
    
    num = num + 1;
    
    
    for(let i = arr.length - 1; i>= 0; i--){
        let rem = num%10;
        arr[i] = rem;
        num = Math.floor(num/10);
    }
    
    console.log(arr);
}

let arr = [1, 2, 9];
incrementNumber(arr);


function increment(arr){
    let num =  arr[0];
    let i = 1;

    while(i < arr.length){
        num = (num * 10) + arr[i];
        i++;
    }
    num = num + 1;
    let rem = 0;

    for(let i = arr.length-1; i >= 0; i--){
        rem = num%10;
        arr[i] = rem;
        num = Math.floor(num/10);
    }
     return arr;

}

console.log(increment([1, 2, 9]));