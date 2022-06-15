/* exported equal */
// define a function named equal
// that takes two arrays, named first and second, as arguments
// and returns true if they are equal, index-for-index
// returns false otherwise
// check if the length of the first array is equal to the length of the second
// if the lengths of the two arrays are not equal, return false
//    loop through the first array
//        if the first array's element at index i is not equal to the second array's element at index i, return false
//    if all the elements are equal, at the end of the loop, return true

function equal(first, second) {

  if (first.length !== second.length) {
    return false;
  }
  // loop through the first array
  for (var i = 0; i < first.length; i++) {
    // if the first array's element at index i is not equal to the second array's element at index i, return false
    if (first[i] !== second[i]) {
      return false;
    }
  }
  // if all the elements are equal, return true
  return true;
}
