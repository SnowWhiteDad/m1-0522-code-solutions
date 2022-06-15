/* exported unique */
// define a function named unique
// that takes an array as an argument
// and returns a new array that contains the unique elements of the original array
// in the order in which they first appear in the input array
//    define a new array called newArray and assign an empty array to it
//    loop through the input array with a for loop, starting with index i = 0 to i = array.length-1
//        check if the array element at index i is not in the newArray,
//        if the array element at index i is not in the newArray,
//        then push the array element at index i to the newArray
//    return the newArray

function unique(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {

    if (newArray.indexOf(array[i]) === -1) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
