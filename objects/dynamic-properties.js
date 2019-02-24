var key = window.prompt("Set property name");

var obj = {
  [key]: 1
}

/* 
<input type="text" name="username" />
<input type="text" name="password" />
*/

// practical example. 2 input boxes
var username = document.querySelector('[name="username"]');
var password = document.querySelector('[name="password"]');

username.addEventListener("keyup", onKeyup);
password.addEventListener("keyup", onKeyup);

var state = {}

var onKeyup = (evt) => {
  var value = evt.target.value;
  var name = evt.target.name;
  state[name] = value;
}

