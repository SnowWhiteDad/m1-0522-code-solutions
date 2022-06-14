/* exported numVowels */
// Define a function numVowels
// that takes a string named string as argument
// and returns the number of vowels in the string
//    define a variable called vowels and assign it to the string 'aeiou'
//    define a variable called count and assign it to 0
//    If the string is empty, return 0
//    else loop through the string using for .. loop
//        check if the string character at index i is a vowel
//        if it is, increment the count variable
//    return the count variable
function numVowels(string) {
  var count = 0;
  if (string === '') {
    return 0;
  } else {
    for (var i = 0; i < string.length; i += 1) {
      if (string[i].toLowerCase() === 'a' || string[i].toLowerCase() === 'e' || string[i].toLowerCase() === 'i' || string[i].toLowerCase() === 'o' || string[i].toLowerCase() === 'u') {
        count += 1;
      }
    }
  }
  return count;
}
