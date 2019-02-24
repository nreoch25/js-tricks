var user = {
  name: "Nigel",
  email: "nigel@test.com"
}

Object.preventExtensions(user);
console.log(Object.getOwnPropertyDescriptors(user));
user.password = "abc";
console.log(user)
console.log(Object.isExtensible(user))

