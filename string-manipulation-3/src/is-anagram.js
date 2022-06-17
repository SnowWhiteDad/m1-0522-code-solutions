/* exported isAnagram */
// define a function named isAnagram
// that takes two strings, firstString and secondString, as arguments
// return boolean indicating whether the secondString is an anagram of the firstString
//    check if the firstString is empty or the secondString is empty
//    if either of them is empty, return false
//    if neither of them is empty,
//      remove spaces from the firstString
//      remove spaces from the secondString
//      define a variable named firstStringArray that is initialized to the array of characters in the firstString,
//      using split method with space as the separator = firstString.split(' ')
//      define a variable named secondStringArray that is initialized to the array of characters in the secondString,
//      using split method with space as the separator = secondString.split(' ')
//      define a variable named firstStringArrayLength that is initialized to the length of the firstStringArray
//        firstStringArrayLength = firstStringArray.length
//      define a variable named secondStringArrayLength that is initialized to the length of the secondStringArray
//        secondStringArrayLength = secondStringArray.length
//      check if the firstStringArrayLength is equal to the secondStringArrayLength
//        firstStringArrayLength === secondStringArrayLength
//      if they are not equal, return false
//      else (they are equal),
//        sort the firstStringArray using the array sort method = firstStringArray.sort()
//          and assign the result to a new firstStringArraySorted variable
//        sort the secondStringArray using the sort method = secondStringArray.sort()
//          and assign the result to a new secondStringArraySorted variable
//        loop through the firstStringArraySorted array using a for loop
//          starting at index 0 and ending at the last index = firstStringArrayLength - 1
//          check if the firstStringArraySorted element at index i is not equal to the secondStringArraySorted element at index i
//              if they are not equal, ie. firstStringArraySorted[i] !== secondStringArraySorted[i], return false
//        at the end of the loop, return true

function isAnagram(firstString, secondString) {
  if (firstString === '' || secondString === '') {
    return false;
  } else {
    firstString = firstString.replace(/\s/g, '');
    secondString = secondString.replace(/\s/g, '');
    var firstStringArray = firstString.split('');
    var secondStringArray = secondString.split('');
    var firstStringArrayLength = firstStringArray.length;
    var secondStringArrayLength = secondStringArray.length;
    if (firstStringArrayLength !== secondStringArrayLength) {
      return false;
    } else {
      var firstStringArraySorted = firstStringArray.sort();
      var secondStringArraySorted = secondStringArray.sort();
      for (var i = 0; i < firstStringArrayLength; i++) {
        if (firstStringArraySorted[i] !== secondStringArraySorted[i]) {
          return false;
        }
      }
      return true;
    }
  }
}
