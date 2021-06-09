// Frees the `[].slice` method to accept `this` as the first actual argument,
// rather than a special argument.
var toArray = Function.call.bind([].slice);

// To make searching efficient (O(1)), we switch the
// list of things to a HashMap, which allows we to
// retrieve an item by its name in constant time.
function indexBy(field, list) {
  return list.reduce(function (result, item) {
    result[item[field]] = item;
    return result;
  }, {});
}


// Finally, we want something that for every item in
// the input array, enriches the object with the information
// from the other array
function mergeOn(hashmap, field, list) {
  return list.reduce(function (result, item) {
    var key = item[field]
    return key in hashmap ? push(result, extend(hashmap[key], item))
      :      /* otherwise */  result;
  }, []);

  function push(xs, x) { xs.push(x); return xs; }
}


// This just merges a list of objects
function extend(/* ...objects */) {
  return toArray(arguments).reduce(function (result, source) {
    return Object.keys(source).reduce(function (result, key) {
      result[key] = source[key];
      return result;
    }, result);
  }, {});
};
