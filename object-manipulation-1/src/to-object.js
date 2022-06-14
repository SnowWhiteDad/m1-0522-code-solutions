/* exported toObject */
// Define a function named toObject that takes an array of two elements as an argument.
// The function should return an object with the first element as the key and the second element as the value.
//    define an empty object to a variable named newObject
//    assign the second element of the array to newObject[firstElement]
//    return the newObject
function toObject(array) {
  var newObject = {};
  newObject[array[0]] = array[1];
  return newObject;
}
