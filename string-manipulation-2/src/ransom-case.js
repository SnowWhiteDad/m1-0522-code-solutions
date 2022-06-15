/* exported ransomCase */
// Define a function ransomCase
// that takes a string as argument
// and returns the string with the first character in upper case and the rest in lower case
//     check if the string is empty
//        if it is empty, return an empty string
//    else split the string into an array of characters and store it in a variable called chars
//        use the split method to split the string into an array of characters
//        loop through the array of characters using for .. loop
//            check if the index of the character is even
//                if it is, convert the character to lower case
//            else convert the character to upper case
//        join the array of characters into a string
//        return the string

function ransomCase(string) {
  if (string === '') {
    return '';
  } else {
    var chars = string.split('');
    for (var i = 0; i < chars.length; i += 1) {
      if (i % 2 === 0) {
        chars[i] = chars[i].toLowerCase();
      } else {
        chars[i] = chars[i].toUpperCase();
      }
    }
    return chars.join('');
  }
}
