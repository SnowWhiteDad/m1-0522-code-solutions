/* exported reverseWord */
// Define a function named reverseWord
// that takes a string as an argument and
// returns the string with all the characters in reverse order.
//     if the length of the string is 0, return an empty string.
// Otherwise, return the string with all the characters in reverse order.
//     define a variable named result and set it to an empty string i.e result = ''
//     loop through the string from the end to the beginning; start with index (string.length - 1) and end with index 0
//         concatenate the character at index i with the result variable
//     return the result variable

function reverseWord(string) {
  if (string.length === 0) {
    return '';
  }
  var result = '';
  for (var i = string.length - 1; i >= 0; i--) {
    result += string[i];
  }
  return result;
}
