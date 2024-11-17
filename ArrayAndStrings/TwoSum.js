
/* 
Two Sum
Input: nums = , target = 9
Output: [0, 1]
Explanation: nums[0] + nums[1] = 2 + 7 = 9. */

let nums = [2, 7, 11, 15];
let el = [];
let target = 9;


for(let i =0; i < nums.length; i++){
    for(let j = i + 1; j < nums.length; j++){
        if(nums[i]+nums[j] == target){
            el.push(nums[i]);
            el.push(nums[j]);
            break;
        }
    }
}

if(el.length == 0){
    console.log("This sum does not exits")
} else{
    console.log(target + " is the sum of: " + el[0] +  " and " + el[1] );
}

