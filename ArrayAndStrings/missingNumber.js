/* 

Missing Number
Input: nums = [3, 0, 1]
Output: 2
Explanation: The number 2 is missing from [0, 1, 2, 3].

*/

let nums = [3, 0, 1];
nums.sort((a, b) => a - b);
let missing = 0, j = 0;

for(let i = nums[0] ; i <= nums[nums.length - 1]; i++){
    if(nums[j] != i){
        missing = i;
        break;
    }
    j++;
}
console.log(missing);