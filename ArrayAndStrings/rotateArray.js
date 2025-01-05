function rotate(arr, step){
    let r = [], j = 0;
    
    for(let i = step; i < arr.length; i++){  
        r[i] = arr[j];
        j++;
    }
    
    for(let i = step - 1, k = 0; i >= 0; i--, k++){
        r[k] = arr[j];
        j++;
    }
    
    console.log(r);
}

rotate([1, 2, 3, 4, 5, 6, 7, 9, 10], 3);