var person = {
  name: "Nathan",
  age: 2
}

var arr = []
var result = Object.keys(person).forEach(key => arr.push([key, person[key]]));
console.log(arr);

var result2 = Object.keys(person).map(key => [key, person[key]]);
console.log(result2);

console.log(Object.entries(person));