var username = {
  first: "John",
  last: "Doe",
  age: 42
};

for (let u in username) {
  if (username.hasOwnProperty(u)) {
    console.log(username[u])
  }
}

for (let u of Object.keys(username)) {
  if (username.hasOwnProperty(u)) {
    console.log(username[u]);
  }
}

// es7
Object.entries(username).forEach(([key, value]) => console.log(key, value));