var user = {
  name: "Nigel",
  email: "nigel@test.com"
}

// Seal the object
Object.seal(user);
console.log(Object.getOwnPropertyDescriptors(user))
user.password = "abc";
delete user.name;
console.log(user);



