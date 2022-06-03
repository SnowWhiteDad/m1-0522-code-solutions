function convertMinutesToSeconds(minutes) {
  var seconds = 60 * minutes;
  return seconds;
}

var convertMinutesResult = convertMinutesToSeconds(7);

console.log('convertMinutesResult: 7 minutes = ', convertMinutesResult + ' seconds');

function greet(name) {
  var greeting = 'Hey, ' + name;
  return greeting;
}

var greetingResult = greet('Iron Man');

console.log('greetingResult for Iron Man: "' + greetingResult + '"');

function getArea(width, height) {
  var area = width * height;
  return area;
}

var getAreaResult = getArea(17, 42);

console.log('getAreaResult for width of 17cm and height 42cm: ', getAreaResult + ' square cm');

function getFirstName(person) {
  var FirstName = person.firstName;
  return FirstName;
}

var FirstNameResult = getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' });

console.log('FirstNameResult for Lelouche Lamperouge is: "' + FirstNameResult + '"');

function getLastElement(array) {
  var LastElement = array[array.length - 1];
  return LastElement;
}

var LastElementResult = getLastElement(['propane', 'and', 'propane', 'accessories']);

console.log('LastElementResult for array [propane, and, propane, accessories] is: "', LastElementResult + '"');
