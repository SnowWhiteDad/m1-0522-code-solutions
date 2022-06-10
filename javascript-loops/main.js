/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */

function getNumbersToTen() {
  var numbers = [];
  var currentNumber = 1;
  while (currentNumber <= 10) {
    numbers.push(currentNumber);
    currentNumber++;
  }
  return numbers;
}

function getEvenNumbersToTwenty() {
  var numbers = [];
  var currentNumber = 2;
  while (currentNumber <= 20) {
    numbers.push(currentNumber);
    currentNumber += 2;
  }
  return numbers;
}

function repeatWord(word, times) {
  var repeated = '';
  var currentWord = word;
  var count = 1;
  while (count < times) {
    repeated += currentWord;
    count++;
  }
  return repeated;
}

function logEachCharacter(string) {
  for (let i = 0; i < string.length; i++) {
    console.log(string[i]);
  }
}

function doubleAll(numbers) {
  var doubled = [];
  for (let i = 0; i < numbers.length; i++) {
    doubled.push(numbers[i] * 2);
  }
  return doubled;
}

function getKeys(object) {
  var keys = [];
  for (const key in object) {
    keys.push(key);
  }
  return keys;
}

function getValues(object) {
  var values = [];
  for (const key in object) {
    values.push(object[key]);
  }
  return values;
}
