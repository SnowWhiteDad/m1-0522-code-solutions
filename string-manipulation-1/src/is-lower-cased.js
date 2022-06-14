/* exported isLowerCased */
// Define a function named isLowerCased
// that takes a string as an argument and
// returns true if the string is all lowercase,
// and false otherwise.
//     if the length of the string is 0, return false.
// Otherwise, check if the string is all lowercase
//      check if the input string is strictly equal to the string converted to lowercase
// return true if the strings are strictly equal and false otherwise.
function isLowerCased(string) {
  if (string.length === 0) {
    return false;
  }
  return string === string.toLowerCase();
}
