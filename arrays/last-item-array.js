// Return last item of array
var arr1 = [5, 6, 7, 8];
// pop mutates
// arr1.pop()

function findLast(arr, fn) {
  return arr.filter(fn).pop();
}

//console.log(findLast(arr1, el => el > 7))

function findLastIndex(arr, fn) {
  return arr
    .map((el, i) => {
      return [el, i];
    })
    .filter(([el, i]) => {
      return fn(el, i);
    })
    .pop()[1];
}

var names = ["jim", "jeff", "bob'"];
var containsJ = name => name.includes("j");

console.log(findLastIndex(names, containsJ));
