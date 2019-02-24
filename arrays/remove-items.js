var nums = [48, 29, 30];
var nums2 = [48, 29, 30];

// splice mutates to original array
nums.splice(1, 1, "another item", "even another item");
console.log(nums);

// slice does not mutate and returns a copynums2.slice(1, 2))
var newArray = nums.slice(0, 2);
console.log(newArray);

var str = "hello world".split("");
console.log(str);
str.splice(0, 1);
str.splice(str.length - 1, 1);
console.log(str.join());

var ints = [4, 5, 6];

function removeItems(arr, fn) {
  return arr.filter(fn).map(el => {
    arr.splice(arr.indexOf(el), 1);
    return el;
  });
}

const filteredResult = removeItems(ints, num => num > 5);
console.log(filteredResult);
console.log(ints);
