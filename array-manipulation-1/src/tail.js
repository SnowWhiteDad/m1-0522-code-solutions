/* exported tail */
// Define a function that accepts an array
// and returns a new array with all elements after the first removed.
// define a function named tail with
//    an array parameter named array
// define a new array named newArray
// loop through the array using a for loop
//    start at index i is greater than 0, i.e. 1
//    push the element at index i to the new array
// return the newArray

function tail(array) {
  var newArray = [];
  for (var i = 1; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
