/* exported getWords */
// Define a function named getWords
// that takes a string as an argument and
// returns an array of all the words in that string.
//     if the length of the string is 0, return an empty array.
// Otherwise, split the string into an array of words
//      use the string.split method to split the string into an array of words, using ' ' as the delimiter (argument)
//      return the array of words.
function getWords(string) {
  if (string.length === 0) {
    return [];
  }
  return string.split(' ');
}
