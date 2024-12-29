function splitString(str){
    str = str + ' ';
    let arr = [];
    
        let word = '';
    for(let i = 0; i < str.length; i++){
        if(str[i] !== ' '){
            word += str[i];
        } else{
            arr.push(word);
            word = '';
        }
    }
    
    return arr;
}

function countWord(arr){
    let max = arr[0];
    
    for(let i = 0; i < arr.length; i++){
        let current = arr[i];
        if(current.length > max.length){
            max = current;
        }
    }
    return max;
}

let str = "This is a string";
let split = splitString(str);
console.log(countWord(split));