/* exported initial */
// Define a function that accepts an array
// and returns a new array with all elements except the last.
// define a function named initial
//    with an array argument named array
// define a new array named newArray
//    assign an empty array to newArray
// loop through the input array using a for loop
//    start at index i equal to 0
//   stop at index i less than to array.length - 1
//   push the element at index i to the new array
// return the newArray

function initial(array) {
  var newArray = [];
  for (var i = 0; i < array.length - 1; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
