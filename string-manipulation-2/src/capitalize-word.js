/* exported capitalizeWord */
/* exported capitalizeWords */
// Define a function capitalizeWords
// that takes a string named word as argument
//     check if the word is empty
//        if it is empty, return an empty string
//     else check if the uppercased word is strictly equal to uppercased JavaScript
//        if it is, return JavaScript
//     else return the string with the first character of the word upper-cased
//        concatenated with the rest of the word in lowercase using slice method.

function capitalizeWord(word) {
  if (word === '') {
    return '';
  } else if (word.toUpperCase() === 'JAVASCRIPT') {
    return 'JavaScript';
  } else {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }
}
