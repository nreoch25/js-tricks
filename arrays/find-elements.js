var people = ["John", "Mary", "Joe", "John"];

// find the first element that meets the condition
var result = people.find(person => person === "Mary");
// find the first index that meets the condition
var index = people.findIndex(person => person === "Joe");
console.log(result);
console.log(index);

function findIndexAll(arr, value) {
  let indices = [];
  // use logical AND to check and add to array
  arr.forEach((el, i) => el === value && indices.push(i));
  return indices;
}
console.log(findIndexAll(people, "John"));
