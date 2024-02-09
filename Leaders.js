// function to print leaders in an array

function printLeaders(arr) {
  let stack = [];
  // get the size of the array
  let size = arr.length;
  // push the last element of the array to the stack
  stack.push(arr[size - 1]);
  // loop from the second last element to the first element
  for (let i = size - 2; i >= 0; i--) {
    // get the top element of the stack
    let temp = stack.pop();
    // push it back to the stack
    stack.push(temp);
    // if the current element is greater than or equal to the top element
    if (arr[i] >= temp) {
      // push the current element to the stack
      stack.push(arr[i]);
    }
  }
  // print stack elements
  // run loop till stack is not empty
  while (stack.length > 0) {
    console.log(stack.pop() + " ");
  }
}
// example 1
let arr1 = [16, 17, 4, 3, 5, 2];
printLeaders(arr1);
// example 2
let arr2 = [1, 2, 3, 4, 0];
printLeaders(arr2);
