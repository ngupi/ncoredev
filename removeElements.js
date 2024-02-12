// A function that takes a sorted array as input and returns a new array without elements

function removeElements (nums) {
  // Loop through the array from the second element
  for (let i = 1; i < nums.length; i++) {
    // If the current element is equal to the previous one, remove it
    if (nums [i] === nums [i-1]) {
      nums.splice (i, 1); // Remove one element at index i
      i--; // Decrement i to account for the removed element
    }
  }
  return nums;
}
 
// Test the function with the given input
let input = [10, 20, 20, 30];
let output = removeElements (input);
console.log (output);
