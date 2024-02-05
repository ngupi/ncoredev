// A function to find a subarray with a given sum in an array of non-negative integers
// Returns an array of two elements - the left and right index of the subarray, or [-1] if no such subarray exists

function subArraySum(arr, sum) {
  let left = 0;
  let right = 0;
  let currentSum = 0;
  while (right < arr.length) {

    currentSum += arr[right];
    right++;
    while (currentSum > sum && left < right) {
      currentSum -= arr[left];
      left++;
    }
    if (currentSum === sum) {
      return [left + 1, right]; // 1-based indexing
    }
  }
  return [-1];
}

// Test cases
console.log(subArraySum([1, 2, 3, 7, 5], 12));
console.log(subArraySum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 15));
