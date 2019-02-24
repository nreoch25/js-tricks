var defaultUser = {
  name: "",
  email: "",
  subscribed: true
}

var actualUser = {
  name: "Nigel",
  email: "nigel@test.com"
}

var user2 = {
  phone: '416-444-4444'
}

var userData = Object.assign(defaultUser, actualUser, user2);

var userData2 = { ...defaultUser, ...actualUser, ...user2 }

console.log(userData)
console.log(userData2)