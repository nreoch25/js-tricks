var user = {
  name: "John",
  address: {
    street: "Main",
    city: "Toronto"
  }
}

var property = "name" in user;
var property2 = "address" in user;
var property3 = "street" in user.address;

var property4 = user.hasOwnProperty("address")

console.log(property4)

