/* exported union */
// define a function named union
// that takes two arrays, named first and second, as arguments
// and returns a new array that is the union of the two input arrays
// containing unique elements from both input arrays in the order they appear
//   define a new array called newArray and assign an empty array to it
//   loop through the first array with a for loop, starting with index i = 0 to i = first.length
//     push the first array's element at index i to the newArray
//   loop through the second array with a for loop, starting with index j = 0 to j = second.length
//     check if the second array's element at index j is not in the newArray, using the indexOf method
//     if the second array's element at index j is not in the newArray,
//       then push the second array's element at index j to the newArray
//   return the newArray

function union(first, second) {
  var newArray = [];
  for (var i = 0; i < first.length; i++) {
    newArray.push(first[i]);
  }
  for (var j = 0; j < second.length; j++) {
    if (newArray.indexOf(second[j]) === -1) {
      newArray.push(second[j]);
    }
  }
  return newArray;
}
