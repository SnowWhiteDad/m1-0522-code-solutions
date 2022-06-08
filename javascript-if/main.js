/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro
 */
function isUnderFive(number) {
  if (number < 5) {
    return true;
  } else {
    return false;
  }
}

function isEven(number) {
  if (number - Math.floor(number / 2) * 2 === 0) {
    return true;
  } else {
    return false;
  }
}

function startsWithJ(string) {
  if (string[0] === 'J') {
    return true;
  } else {
    return false;
  }
}

function isOldEnoughToDrink(person) {
  if (person.age >= 21) {
    return true;
  } else {
    return false;
  }
}

function isOldEnoughToDrinkAndDrive(person) {
  return false;
}

function categorizeAcidity(pH) {
  if (pH >= 0) {
    if (pH <= 14) {
      if (pH === 7) {
        return 'neutral';
      } else if (pH < 7) {
        return 'acid';
      } else if (pH <= 14) {
        return 'base';
      } else {
        return 'invalid pH level';
      }

    } else {
      return 'invalid pH level';
    }
  } else {
    return 'invalid pH level';
  }
}
