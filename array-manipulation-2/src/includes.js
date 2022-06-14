/* exported includes */
// Define a function named includes
// that takes an array (named array) and a value as arguments
// and returns true if the value is in the array, false otherwise
// loop through the array using for loop
//      start at index i = 0, increment i by 1 until i is less than the length of the array
//     check if the value of array element at index i is strictly equal to value argument
//      if it is, return true, and exit the loop
//  otherwise, return false

function includes(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}
