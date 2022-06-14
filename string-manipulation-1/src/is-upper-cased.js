/* exported isUpperCased */
// Define a function named isUpperCased
// that takes a string as an argument and
// returns true if the string is all uppercase,
// and false otherwise.
//     if the length of the string is 0, return false.
// Otherwise, check if the string is all uppercase
//      check if the input string is strictly equal to the string converted to uppercase
// return true if the strings are strictly equal and false otherwise.

function isUpperCased(string) {
  if (string.length === 0) {
    return false;
  }
  return string === string.toUpperCase();
}
