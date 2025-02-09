function closure(){
    let num = 3;
    let temp = 0;
        return function (){
            temp += num;
            return temp;
        }
    }
    
    
    let printTable = closure();
    for(let i = 1; i <= 10; i++){
        console.log(printTable());
    }
    