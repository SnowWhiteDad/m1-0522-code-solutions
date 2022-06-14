/* exported getLastChar */
// Define a function named getLastChar
// that takes a string as an argument and
// returns the last character of that string.
// If the string is empty, return an empty string.
//     if the length of the string is 0, return an empty string.
// Otherwise, return the last character of the string.
//     return the string character at index (string.lenght - 1).
function getLastChar(string) {
  if (string.length === 0) {
    return '';
  }
  return string.charAt(string.length - 1);
}
