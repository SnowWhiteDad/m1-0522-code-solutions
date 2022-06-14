/* exported compact */
// Define a function that accepts an array
// and returns a new array with all falsy values removed.
// define a function named compact
//    with an array parameter named array
// define a new array named newArray
//    assign an empty array to newArray
// loop through the array using a for loop
//    start at index i equal to 0
//    stop at index i less than to array.length
//    while the loop continues,
//       check if the element at index i is truthy
//       if the element is truthy, push the element at index i to the NewArray
// return the newArray

function compact(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i]) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
