// Find shared values between arrays
var men = ["Jim", "Doug", "Fred", "Dave"];
var over50 = ["Angie", "Dave", "Jessica", "Jim"];

var shared = men.filter(man => over50.includes(man));
var shared2 = over50.filter(person => men.includes(person));
console.log(shared);
