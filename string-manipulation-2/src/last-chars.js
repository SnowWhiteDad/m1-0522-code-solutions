/* exported lastChars */
// Define a function lastChars
// that takes a length and a string as arguments
// and returns the last length characters of the string
//    If the length is 0, return an empty string
//     else If the string is shorter than the length, return the string
//     else (If the string is longer than the length), return the string truncated to the length using slice method
// return the string
function lastChars(length, string) {
  if (length === 0) {
    return '';
  } else if (string.length <= length) {
    return string;
  } else {
    return string.slice(-length);
  }
}
