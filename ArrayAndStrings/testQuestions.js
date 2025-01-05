function splitString(str){
    let arr = [], word = '';
    str = str + '.';
    
    for(let i = 0; i < str.length; i++){
        if(str.charAt(i) != ' ' || str.charAt(i) == '.'){
            word += str.charAt(i);
        }else{
            arr.push(word);
            word = '';
        }
    }
    return arr;
}


function wordWithMaxLength(arr){
    let max = arr[0];
    
    for(let i = 1; i < arr.length; i++){
        let word = arr[i];
        
        if(word.length > max.length){
            max = word;
        }
    }
    
    return max;
}

let str = "apple bananna anas";

let arr = splitString(str);

console.log(wordWithMaxLength(arr));

function MissingNumber(num){
    let index = 0;
    for(let i = num[0]; i <= num[num.length-1]; i++){
        if(num[index] !== i){
            return i;
            break;
        }
        index++;
    }
}

let a = [1, 2, 4, 5];
console.log(MissingNumber(a));


function countWord(arr){
    let slength = 0;
    
    for(let i = 0; i < arr.length; i++){
        let a = arr[i];
        if(a[0] == 'a' || a[0] == 'e' || a[0] == 'u' || a[0] == 'i' || a[0] == 'o' || a[0] == 'A' || a[0] == 'U' || a[0] == 'I' || a[0] == 'E' || a[0] == 'O'  ){
            slength = a.length;
            break;
        }
    }
    return slength;
}

console.log(countWord(arr));
