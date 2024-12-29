let str = 'hello';
let frequency = {};

for(let i = 0; i < str.length; i++){
    if(!frequency[str.charAt(i)]){
        frequency[str.charAt(i)] = 1; 
    }else{
        frequency[str.charAt(i)]++;
    }
}

console.log(frequency);