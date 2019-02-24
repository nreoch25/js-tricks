var arr = [1, 2, 3, 4];
var phoneNumber = "555-525-5252";
var newNumber = phoneNumber.split("").filter(num => num !== "-");
console.log(newNumber);
console.log(newNumber.fill("*", 0, 3).join(""));
