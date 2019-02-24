// Measure time it takes

var getUserData = async user =>
  await fetch(`https://api.github.com/users/${user}`);

var time = (fn, ...args) => {
  console.time("time");
  let result = fn(...args);
  console.timeEnd("time");
  return result;
};

console.log(time(() => getUserData("nreoch25")));
