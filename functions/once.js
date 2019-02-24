// Function that can only be called once

var once = (fn, ...args) => {
  let called = false;
  return function() {
    if (!called) {
      called = true;
      return fn(...args);
    }
  };
};

var onClick = (text, time) => console.log(`${text} at ${time}`);

var button = document.querySelector("button");
button.addEventListener(
  "click",
  once(onClick, "form submitted", new Date(Date.now()))
);
