var user = {
  name: "Nigel",
  email: "nigel@test.com"
}

Object.freeze(user);
console.log(Object.getOwnPropertyDescriptors(user))
user.email = "hey@hey.com";
delete user.name;
console.log(Object.isFrozen(user));



