/* exported isPalindromic */
// define a function named isPalindromic that takes a string as an argument
// and returns true if the string is a palindrome, false otherwise
//  check if the string is empty
//  if it is empty, return false
//  if it is not empty,
//    remove spaces from the string
//    define a variable named reversed that is initialized to the empty array
//    define a variable named stringArray that is initialized to the array of characters in the string, using split method with space as the separator
//    define a variable named i that is initialized to 0
//    define a variable named j that is initialized to the length of the stringArray - 1 i.e. stringArray.length - 1
//    using while loop, loop through the stringArray
//      while i is less than or equal to j
//        assign the stringArray element at index j to the reverse array element at index i
//        assign the stringArray element at index i to the reverse array element at index j
//        increment i; i++
//        decrement j; j--
//    compare the reversed array to the stringArray array index by index
//    using for loop, loop through the stringArray, starting at the last index and ending at the first index
//      if the stringArray element at index k is not equal to the reversed array element at index k, return false
//    at the end of the loop, return true

function isPalindromic(string) {

  if (string === '') {
    return false;
  } else {
    string = string.replace(/\s/g, '');
    var reversed = [];
    var stringArray = string.split('');
    var i = 0;
    var j = stringArray.length - 1;
    while (i <= j) {
      reversed[i] = stringArray[j];
      reversed[j] = stringArray[i];
      i++;
      j--;
    }
    for (var k = stringArray.length - 1; k >= 0; k--) {
      if (stringArray[k] !== reversed[k]) {
        return false;
      }
    }
    return true;
  }
}
