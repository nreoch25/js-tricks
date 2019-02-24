// Get last item in array, get everything before last item
var names = ["Bill", "Fred", "John", "Doug", "Angie", "Jessica"];
var lastName = names[names.length - 1];
console.log(lastName);

const beforeLastName = names.slice(0, names.length - 1);
const beforeLastName2 = names.slice(0, -1);
console.log(beforeLastName);
console.log(beforeLastName2);
