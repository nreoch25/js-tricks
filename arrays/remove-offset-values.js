// Remove items from the left / right hand side of array
// Slice copies,  Splice mutates
var nums = [23, 987, 45, 89];
var removeFromLeft = nums.slice(0, 2);
console.log(removeFromLeft);

var removeFromRight = nums.slice(1);
console.log(removeFromRight);
console.log(nums);

var getNthItem = (arr, num) => arr.slice(num - 1, num)[0];
console.log(getNthItem(nums, 3));

function offsetArray(arr, offset) {
  return [...arr.slice(offset), ...arr.slice(0, offset)];
}
var result = offsetArray([1, 2, 3, 4], 1);
console.log(result);
