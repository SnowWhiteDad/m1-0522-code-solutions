/* exported capitalizeWords */
// Define a function capitalizeWords
// that takes a string named string as argument
//     check if the string is empty
//        if it is empty, return an empty string
//        else
//            split the string into an array of words and assing it to a new variable called words
//            assign an empty array to a new variable called capitalizedWords
//            loop through the words using for .. loop
//               call the capitalizeWord expression on each word and push the result to the capitalizedWords array
//               concatenate the capitalizedWord to the string using the join method with a space (' ') as separator
//            return the string

function capitalizeWords(string) {
  if (string === '') {
    return '';
  } else {
    var words = string.split(' ');
    var capitalizedWords = [];
    for (var i = 0; i < words.length; i += 1) {
      capitalizedWords.push(words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase());
    }
    return capitalizedWords.join(' ');
  }
}
