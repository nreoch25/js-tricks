var usernames = ["Jeff", "Doug", "John", "John"];

newUsernames = usernames.filter((name, index, array) =>
  array.indexOf(name) === index ? name : ""
);
console.log(newUsernames);

// Set - a way of only getting unique values
var set = [...new Set(usernames)];
console.log(set);
console.log(Array.isArray(set));
