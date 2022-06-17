/* exported difference */
// define a function named difference
// that takes two arrays, named first and second, as arguments
// and returns a new array that is a symmetric difference of the two input arrays
//  define a new array called newArray and assign an empty array to it
//  loop through the first array with a for loop, starting with index i = 0 to i = first.length
//    define a variable called isInSecondArray and assign false to it,
//      loop through the second array with a for loop, starting with index i = 0 to i = second.length
//        check if the first array's element at index i is in the second array,
//        assign true to isInSecondArray
//      if the first array's element at index i is not in the second array,
//         then push the first array's element at index i to the newArray
//  loop through the second array with a for loop, starting with index i = 0 to i = second.length
//    define a variable called isInFirstArray and assign false to it,
//        check if the second array's element at index i is in the first array,
//        assign true to isInFirstArray if the second array's element at index i is in the first array
//      if the second array's element at index i is not in the first array,
//        then push the second array's element at index i to the newArray
// return the newArray

function difference(first, second) {
  var newArray = [];
  for (var i = 0; i < first.length; i++) {
    var isInSecondArray = false;
    for (var j = 0; j < second.length; j++) {
      if (first[i] === second[j]) {
        isInSecondArray = true;
      }
    }
    if (!isInSecondArray) {

      newArray.push(first[i]);
    }
  }

  for (i = 0; i < second.length; i++) {
    var isInFirstArray = false;
    for (j = 0; j < first.length; j++) {
      if (second[i] === first[j]) {
        isInFirstArray = true;
      }
    }
    if (!isInFirstArray) {
      newArray.push(second[i]);
    }
  }
  return newArray;
}
