/* exported intersection */
// define a function named intersection
// that takes two arrays, named first and second, as arguments
// and returns a new array that is the intersection of the two input arrays
//  define a new array called newArray and assign an empty array to it
//  loop through the first array with a for loop, starting with index i = 0 to i = first.length
//    loop through the second array with a for loop, starting with index j = 0 to j = second.length
//      check if the first array's element at index i is in the second array,
//      if the first array's element at index i is strictly equal to the second array's element at index j,
//        then push the first array's element at index i to the newArray
// return the newArray

function intersection(first, second) {
  var newArray = [];
  for (var i = 0; i < first.length; i++) {
    for (var j = 0; j < second.length; j++) {
      if (first[i] === second[j]) {
        newArray.push(first[i]);
      }
    }
  }
  return newArray;
}
