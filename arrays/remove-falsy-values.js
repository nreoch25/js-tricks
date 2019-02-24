var temps = [72, 68, 65, undefined, 80, 0, NaN, "", null];
// Five falsy values in Javascript = "", 0, null, undefined, NaN
if (undefined) {
  console.log("truthy");
} else {
  console.log("falsy");
}

var newTemps = temps.filter(temp => temp);
console.log(newTemps);
