/* exported capitalize */
// Define a function named capitalize
// that takes a string as an argument and
// returns the same string with the first character capitalized.
// and the rest of the characters lowercased.
//     if the length of the string is 0, return an empty string.
// Otherwise, return the first character of the string capitalized
//   change the first character to uppercase
//       return the string character at index 0 to uppercase
//   concatenated with
//   ensure the rest of the characters are lowercased
//      slice the string from index 1 to the end, and convert to lowercase
function capitalize(string) {
  if (string.length === 0) {
    return '';
  }
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}
