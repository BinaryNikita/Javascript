/* 
Product of Array Except Self
Input: nums = [1, 2, 3, 4]
Output: [24, 12, 8, 6]
Explanation: Each element is the product of all other elements.
*/

function productOfArrya(nums){
    let product = [];
    for(let i = 0; i < nums.length; i++){
        let p = 1;
        for(let j = 0; j < nums.length; j++) {
            if(i != j){
             p *= nums[j];
            }
        }

        product.push(p);
    }

    console.log(product);
}

let  nums = [1, 2, 3, 4];
productOfArrya(nums);