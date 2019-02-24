var name = {
  first: "Nathan",
  middle: "Louis",
  last: "Reoch"
}

function filterObj(obj, prop) {
  var filteredObj = {};
  Object.keys(obj)
    .filter(k => k !== prop)
    .map(key => filteredObj[key] = obj[key])
  return filteredObj
}

console.log(filterObj(name, "last"))