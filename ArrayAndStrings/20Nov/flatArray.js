let arr = [1, 2, 3, [0, 5], [6, 7]];

let newArray = [];

for(let i = 0; i < arr.length; i++){
    if(arr[i][0] || arr[i][0] == 0 ){
        for(let j = 0; j < arr[i].length; j++){
       newArray.push(arr[i][j]);
        }
    }else{
        newArray.push(arr[i]);
    }
}

console.log(newArray);