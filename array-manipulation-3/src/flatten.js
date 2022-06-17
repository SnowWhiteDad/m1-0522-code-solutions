/* exported flatten */
// define a function named flatten
// that takes an array as an argument
// and returns a new array that is a flattened version of the original array
//    define a new array called newArray and assign an empty array to it
// loop through the input array with a for loop, starting with index i = 0 to i = array.length
//    if the array element at index i is an array,
//    then loop through the array element at index i using a for loop, starting with index j = 0 to j = array[i].length
//       assuming the element at index i does not contain an array element,
//       push the array[i] element at index j to the newArray
//    else,
//        push the array element at index i to the newArray
// return the new array

function flatten(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (var j = 0; j < array[i].length; j++) {
        newArray.push(array[i][j]);
      }
    } else {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
