/* exported isVowel */
// Define a function named isVowel
// that takes a character as an argument and
// returns true if the character is a vowel,
// and false otherwise.
//     if the length of the string is 0, return false.
// Otherwise, check if the character is a vowel
//      check if the input character is one of the vowels (a, e, i, o, u)
//      check by converting to lowercase and checking if the character is one of the vowels (a, e, i, o, u)
// return true if the character is one of the vowels and false otherwise.

function isVowel(character) {
  if (character.length === 0) {
    return false;
  }
  return character.toLowerCase() === 'a' || character.toLowerCase() === 'e' || character.toLowerCase() === 'i' || character.toLowerCase() === 'o' || character.toLowerCase() === 'u';
}
