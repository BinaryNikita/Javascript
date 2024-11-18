/* 
Subarray Sum Equals K
Input: nums = [1, 1, 1], k = 2
Output: 2
Explanation: Two subarrays [1, 1] sum to 2.
*/

let nums = [1, 1, 1], k = 2;

let found = false;

for (let i = 0; i < nums.length; i++) {
  for (let j = i + 1; j < nums.length; j++) {
    if (nums[i] + nums[j] === k) {
      found = true;
      break;
    }
  }
  if (found) {
    break;
  }
}

console.log(found); 