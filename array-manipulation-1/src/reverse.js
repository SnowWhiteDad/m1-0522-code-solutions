/* exported reverse */
// Define a function that accepts an array
// and returns a new array with all elements reversed.
// define a function named reverse with
//    an array parameter named array
// define a new array named newArray
//    and assign empty array to newArray
// loop through the array backwards
//   starting at the last element, use for loop
//    and assign i to the length of the array
// push the elements to the new array
//    push the element at index i to the new array
// return the new array
//    return the new array with all elements reversed

function reverse(array) {
  var newArray = [];
  for (var i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i]);
  }
  return newArray;
}
