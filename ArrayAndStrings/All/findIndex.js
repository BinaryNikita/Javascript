/* 
Search in Rotated Sorted Array
Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
Explanation: The target 0 is at index 4.
*/
let nums = [4,5,6,7,0,1,2], target = 0, index = -1;

for(let i in nums){
    if(nums[i] === target){
        index = i;
    }
}

console.log(index);
