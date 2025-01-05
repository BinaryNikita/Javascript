
let str = "Stiing", containsUnique = true;

for(let i = 0; i < str.length; i++){
    for(let j = i + 1; j < str.length; j++){
        if(str.charAt(i) == str.charAt(j)){
            containsUnique = false;
        }
    }
    
}
    if(!containsUnique){
        console.log("No it does not contains unique characters");
    } else{
        console.log("it contains only unique characters");
    }

