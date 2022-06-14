/* exported truncate */
// Define a function truncate
// that takes a length and a string as arguments
// and returns the string truncated to the length concatenated with '...'
//    If the length is 0, return an empty string concatenated with '...'
//     else If the string is shorter than the length, return the string concatenated with '...'
//     else (If the string is longer than the length), return the string truncated to the length concatenated with '...'

function truncate(length, string) {
  if (length === 0) {
    return '' + '...';
  } else if (string.length <= length) {
    return string + '...';
  } else {
    return string.slice(0, length) + '...';
  }
}
