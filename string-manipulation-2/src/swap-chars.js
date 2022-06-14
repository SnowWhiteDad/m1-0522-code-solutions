/* exported swapChars */
// Define a function swapChars
// that takes a two integers and a string as argument
// and returns the string with the two characters at the two indexes swapped
//       split the string into an array of characters and store it in a variable called chars
//       use the split method to split the string into an array of characters
//       assign the character at the firstIndex to a temp variable called temp
//       assign the value of the character at the secondIndex to the character at firstIndex
//       assign the value of the temp variable to the character at the secondIndex
//       join the array of characters into a string
//       return the string

function swapChars(index1, index2, string) {
  var chars = string.split('');
  var temp = chars[index1];
  chars[index1] = chars[index2];
  chars[index2] = temp;
  return chars.join('');
}
