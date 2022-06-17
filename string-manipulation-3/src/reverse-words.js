/* exported reverseWords */
// define a function named reverseWords
// that takes a string as an argument
// and returns a string with the characters of each word in the string reversed
//    check if the string is empty
//    if it is empty, return empty string
//    if it is not empty,
//      split the string into an array of words, using the space as the separator
//        i.e. string.split(' ') and assign it to the wordsArray variable
//      define a variable named reversedString that is initialized to the empty string
//      loop through the wordsArray, with a for loop
//        starting at the first index and ending at the last index; ie. for (var i = 0; i < wordsArray.length; i++)
//          define a variable named word that is initialized to the wordsArray element at index i
//          define a variable named wordReversed that is initialized to the empty string
//          loop through the word string, with a for loop
//          starting at the last index and ending at the first index; ie. for (var j = word.length - 1; j >= 0; j--)
//            concatenate the word string character at index j with the wordReversed string
//          at the end of the word string loop,
//            concatenate the wordReversed string with the reversedString string seperated by a space
//            i.e. reversedString += wordReversed + ' '
//        at the end of the wordsArray loop,
//          return the reversedString string, without the last space
//          i.e. return reversedString.slice(0, -1)

function reverseWords(string) {
  if (string === '') {
    return '';
  } else {
    var wordsArray = string.split(' ');
    var reversedString = '';
    for (var i = 0; i < wordsArray.length; i++) {
      var word = wordsArray[i];
      var wordReversed = '';
      for (var j = word.length - 1; j >= 0; j--) {
        wordReversed += word[j];
      }
      reversedString += wordReversed + ' ';
    }
    return reversedString.slice(0, -1);
  }
}
