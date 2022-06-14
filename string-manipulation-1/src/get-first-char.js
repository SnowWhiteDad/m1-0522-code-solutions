/* exported getFirstChar */
// Define a function named getFirstChar
// that takes a string as an argument and
// returns the first character of that string.
// If the string is empty, return an empty string.
//     if the length of the string is 0, return an empty string.
// Otherwise, return the first character of the string.
//     return the string character at index 0.

function getFirstChar(string) {
  if (string.length === 0) {
    return '';
  }
  return string.charAt(0);
}
