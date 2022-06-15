/* exported getKeys */
// Define a function named getKeys
// that takes an object as an argument
// and returns an array of all object's property keys
//    assign an empty array to a variable named keys
//    loop over the object's properties using for ... in loop
//      push the property's key to the keys array
//    return the keys array

function getKeys(object) {
  var keys = [];
  for (var key in object) {
    keys.push(key);
  }
  return keys;
}
