var fruits = ["apple", "banana", "orange"];
// avoid methods like push which mutate the original array
var newFruits = fruits.slice(0);
var newFruits2 = [].concat(fruits);
// es6 spread
var newFruits3 = [...fruits, "lime"];
newFruits.push("cherry");
newFruits2.push("pear");
console.log(fruits);
console.log(newFruits);
console.log(newFruits2);
console.log(newFruits3);
