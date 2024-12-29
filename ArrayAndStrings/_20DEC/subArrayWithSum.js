function findSubarrayWithSum(arr, target) {
  let start = 0;
  let currentSum = 0;

  for (let end = 0; end < arr.length; end++) {
    currentSum += arr[end];

    while (currentSum > target && start <= end) {
      currentSum -= arr[start];
      start++;
    }

    if (currentSum === target) {
      console.log(`Subarray found from index ${start} to ${end}:`);
      for (let i = start; i <= end; i++) {
        process.stdout.write(arr[i] + ' ');
      }
      console.log();
      return;
    }
  }

  console.log('No subarray found with the given sum.');
}

let arr = [1, 2, 3, 7, 5];
let target = 10;
findSubarrayWithSum(arr, target);
