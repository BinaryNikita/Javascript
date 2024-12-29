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

function wordWithVowels(arr) {
    for (let i = 0; i < arr.length; i++) {
        let word = arr[i];
        
        if (word[0] == 'a' || word[0] == 'e' || word[0] == 'i' || word[0] == 'o' || word[0] == 'u' || 
            word[0] == 'A' || word[0] == 'E' || word[0] == 'I' || word[0] == 'O' || word[0] == 'U') {
            return word.length;  
        }
    }

    return -1;  
}

let str = "apple banana orange cherry";
let split = splitString(str);
console.log( wordWithVowels(split));