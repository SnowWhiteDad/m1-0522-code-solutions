/* exported dropRight */
// Define a function named dropRight
// that takes an array (named array) and a number variable (named count) as arguments
// and returns an array containing all elements of array before the last count elements
//   return array.slice(0, -count);

function dropRight(array, count) {
  return array.slice(0, -count);
}
