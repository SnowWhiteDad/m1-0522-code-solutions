/* exported toObject */
// Define a function named toObject that takes an array of two elements as an argument.
// The function should return an object with the first element as the key and the second element as the value.
//    define an empty object to a variable named Object
//    assign the second element of the array to Object[firstElement]
//    return the Object
function toObject(array) {
  var Object = {};
  Object[array[0]] = array[1];
  return Object;
}
