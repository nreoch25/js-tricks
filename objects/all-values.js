var name = {
  first: "Nathan",
  last: "Reoch",
  age: 2
}

var values = Object.keys(name).map(key => name[key]);
console.log(values)

// simpler
var values2 = Object.values(name);
console.log(values2);

