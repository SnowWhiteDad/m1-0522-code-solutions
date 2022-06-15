/* exported chunk */
// Define a function named chunk
// that takes an array (named array) and a number variable (named size) as arguments
// and returns an array of arrays,
// each of which is an array of size elements
// remaining elements are gathered into a final subarray
//  define a variable named result and assign it an empty array
//  define a variable named index and assign it 0
//  while index is less than array.length
//    push array.slice(index, index += size) to result
//    increment index by size
//  return result

function chunk(array, size) {
  var result = [];
  var index = 0;
  while (index < array.length) {
    result.push(array.slice(index, index += size));
  }
  return result;
}
