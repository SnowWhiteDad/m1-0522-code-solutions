/* exported zip */
// define a function named zip
// that takes two arrays, named first and second, as arguments
// and returns a new array that is an array of arrays
// with each element of the new array being an array of the two input arrays' elements at the same index
// and the new array being the same length as the shorter of the two input arrays
// if the two input arrays are of different lengths, the new array should be the shorter of the two input arrays
//    define a new array called newArray and assign an empty array to it
//    start a loop through the arrays with a for loop, starting with index i = 0 to i = lentgh of the shorter array
//    use Math.min to determine the length of the shorter array
//        push an array with the first array's element at index i and the second array's element at index i to the newArray
//   return the new array

function zip(first, second) {
  var newArray = [];
  for (var i = 0; i < Math.min(first.length, second.length); i++) {
    newArray.push([first[i], second[i]]);
  }
  return newArray;
}
