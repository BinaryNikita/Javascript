function binarySearch(arr, target){
    let left = 0; 
    let right = arr.length-1;

    while(left <= right){
        let mid = Math.floor((left + right)/2);

        if(arr[mid] == target){
            return mid;
        } else if(arr[mid] < target){
            left = mid+1;
        } else{
            right = mid - 1;
        }
    }

    return -1;
}

let arr = [5, 7, 8, 2, 9, 1];
arr.sort((a, b) => a-b);
console.log(binarySearch(arr, 6));